import os
import cv2
import numpy as np
from PIL import Image
from pathlib import Path

def extract_crops(img_path):
    img_path = Path(img_path)
    img = Image.open(img_path)
    arr = np.array(img)
    alpha = arr[:, :, 3]
    H, W = alpha.shape

    path_str = str(img_path)
    is_special = ('Masculino\\Branca\\cortar2.png' in path_str or 'Masculino\\Morena\\cortar1.png' in path_str) and 'Ciberseguran' in path_str

    crops = []

    if is_special:
        for row_name, y_s, y_e in [('TOP', 0, 533), ('BOT', 535, 1086)]:
            sub_arr = arr[y_s:y_e, :, :]
            sub_a = alpha[y_s:y_e, :].astype(np.float32)
            sub_rgb = arr[y_s:y_e, :, :3].astype(np.float32)
            H_sub = y_e - y_s
            
            lum = 0.299 * sub_rgb[:, :, 0] + 0.587 * sub_rgb[:, :, 1] + 0.114 * sub_rgb[:, :, 2]
            energy = (sub_a / 255.0) ** 3 * 1000.0 + lum * 0.5 + 1.0
            
            centers = [135, 380, 625, 860, 1110, 1345]
            seams = [np.zeros(H_sub, dtype=int)]
            for i in range(5):
                c1, c2 = centers[i], centers[i+1]
                x_min = c1 + 40
                x_max = c2 - 40
                W_sub = x_max - x_min
                cost = energy[:, x_min:x_max]
                
                dp = np.zeros((H_sub, W_sub), dtype=np.float32)
                dp[0] = cost[0]
                for y in range(1, H_sub):
                    prev = dp[y-1]
                    p_m2 = np.pad(prev[:-2], (2, 0), constant_values=1e9)
                    p_m1 = np.pad(prev[:-1], (1, 0), constant_values=1e9)
                    p_0  = prev
                    p_p1 = np.pad(prev[1:], (0, 1), constant_values=1e9)
                    p_p2 = np.pad(prev[2:], (0, 2), constant_values=1e9)
                    dp[y] = cost[y] + np.minimum(p_0, np.minimum(np.minimum(p_m1, p_p1), np.minimum(p_m2, p_p2)))

                best_xi = np.argmin(dp[-1])
                seam = np.zeros(H_sub, dtype=int)
                seam[-1] = best_xi
                for y in range(H_sub-2, -1, -1):
                    c = seam[y+1]
                    cands = [max(0, min(W_sub-1, c + step)) for step in [-2, -1, 0, 1, 2]]
                    seam[y] = cands[np.argmin([dp[y, cand] for cand in cands])]
                seams.append(seam + x_min)
            seams.append(np.full(H_sub, W, dtype=int))
            
            for i in range(6):
                left_s = seams[i]
                right_s = seams[i+1]
                c_img = sub_arr.copy()
                for y in range(H_sub):
                    c_img[y, :left_s[y], 3] = 0
                    c_img[y, right_s[y]:, 3] = 0
                fg_y, fg_x = np.where(c_img[:, :, 3] > 10)
                crop = c_img[fg_y.min():fg_y.max()+1, fg_x.min():fg_x.max()+1]
                crops.append(crop)
    else:
        best_t = None
        for t in [10, 15, 20, 25, 30, 35, 40, 50]:
            fg = (alpha > t).astype(np.uint8)
            n, labels, stats, centroids = cv2.connectedComponentsWithStats(fg)
            large = [i for i in range(1, n) if stats[i, cv2.CC_STAT_AREA] > 5000]
            if len(large) in [10, 12]:
                best_t = t
                break
        
        if best_t is None:
            raise ValueError(f"Could not find valid threshold for {img_path}")
            
        fg = (alpha > best_t).astype(np.uint8)
        n, labels, stats, centroids = cv2.connectedComponentsWithStats(fg)
        large_indices = [i for i in range(1, n) if stats[i, cv2.CC_STAT_AREA] > 5000]
        
        mid_y = H / 2
        top_comps = sorted([i for i in large_indices if centroids[i][1] < mid_y], key=lambda i: centroids[i][0])
        bot_comps = sorted([i for i in large_indices if centroids[i][1] >= mid_y], key=lambda i: centroids[i][0])
        ordered_comps = top_comps + bot_comps
        
        marker_map = np.zeros((H, W), dtype=np.int32)
        for rank, comp_idx in enumerate(ordered_comps, 1):
            marker_map[labels == comp_idx] = rank
            
        ws_markers = marker_map.copy()
        ws_markers[alpha <= 5] = len(ordered_comps) + 1
        bgr = cv2.cvtColor(arr[:, :, :3], cv2.COLOR_RGB2BGR)
        cv2.watershed(bgr, ws_markers)
        
        for rank in range(1, len(ordered_comps) + 1):
            char_mask = (ws_markers == rank) & (alpha > 5)
            c_img = arr.copy()
            c_img[~char_mask, 3] = 0
            fg_y, fg_x = np.where(c_img[:, :, 3] > 10)
            crop = c_img[fg_y.min():fg_y.max()+1, fg_x.min():fg_x.max()+1]
            crops.append(crop)

    return crops

def process_folder(folder_path):
    folder = Path(folder_path)
    cortar1 = folder / "cortar1.png"
    cortar2 = folder / "cortar2.png"
    
    crops1 = extract_crops(cortar1)
    crops2 = extract_crops(cortar2)
    
    pad = 2
    
    # Save cortar1 characters
    for idx, crop in enumerate(crops1, 1):
        padded = np.pad(crop, ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0)
        img = Image.fromarray(padded)
        img.save(folder / f"cortar1_personagem{idx}.png")
        img.save(folder / f"personagem{idx}.png")
        
    offset = len(crops1)
    # Save cortar2 characters
    for idx, crop in enumerate(crops2, 1):
        padded = np.pad(crop, ((pad, pad), (pad, pad), (0, 0)), mode='constant', constant_values=0)
        img = Image.fromarray(padded)
        img.save(folder / f"cortar2_personagem{idx}.png")
        img.save(folder / f"personagem{offset + idx}.png")
        
    # Remove any extra old stale personagem files beyond offset + len(crops2)
    total_valid = offset + len(crops2)
    for extra in folder.glob("personagem*.png"):
        try:
            num = int(extra.stem.replace("personagem", ""))
            if num > total_valid:
                extra.unlink()
        except ValueError:
            pass

    return len(crops1) + len(crops2)

def main():
    root = Path('.')
    # Find all directories that contain cortar1.png
    folders = sorted(list(set(f.parent for f in root.rglob('cortar1.png'))))
    print(f"Found {len(folders)} folders to process...")
    
    total_characters = 0
    for idx, folder in enumerate(folders, 1):
        count = process_folder(folder)
        total_characters += count
        print(f"[{idx}/{len(folders)}] Processed {folder}: {count} characters saved (both as cortarX_personagemY.png and personagemZ.png)")
        
    print(f"\nALL 100% COMPLETE! Total characters: {total_characters} across {len(folders)} folders.")

if __name__ == '__main__':
    main()

