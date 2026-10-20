from PIL import Image
from pathlib import Path


# ============================================================
# CONFIGURAÇÕES
# ============================================================

# As duas spritesheets que serão processadas
IMAGENS = [
    Path("sprites/seguranca (1).png"),
    Path("sprites/seguranca (2).png")
]

# Cada imagem possui 5 colunas x 2 linhas = 10 personagens
COLUNAS = 5
LINHAS = 2

# Tamanho final de cada sprite
TAMANHO = 128

# Pasta onde os 20 sprites serão salvos
PASTA_SAIDA = Path("sprites_cortados")

# Mantém o pixel art sem suavização
RESAMPLE = Image.Resampling.NEAREST


# ============================================================
# CORTAR UMA SPRITESHEET
# ============================================================

def processar_imagem(caminho_imagem, contador_inicial):
    """
    Corta uma spritesheet 2x5 e salva os personagens
    começando pelo número informado.
    """

    if not caminho_imagem.exists():
        raise FileNotFoundError(
            f"Arquivo não encontrado: {caminho_imagem}"
        )

    imagem = Image.open(caminho_imagem).convert("RGBA")

    largura, altura = imagem.size

    largura_sprite = largura // COLUNAS
    altura_sprite = altura // LINHAS

    contador = contador_inicial

    for linha in range(LINHAS):

        for coluna in range(COLUNAS):

            # Coordenadas do personagem
            x0 = coluna * largura_sprite
            y0 = linha * altura_sprite

            x1 = x0 + largura_sprite
            y1 = y0 + altura_sprite

            # Recorta
            crop = imagem.crop(
                (x0, y0, x1, y1)
            )

            # Redimensiona mantendo pixel art
            crop.thumbnail(
                (TAMANHO, TAMANHO),
                RESAMPLE
            )

            # Cria canvas transparente
            sprite = Image.new(
                "RGBA",
                (TAMANHO, TAMANHO),
                (0, 0, 0, 0)
            )

            # Centraliza personagem
            x = (TAMANHO - crop.width) // 2
            y = (TAMANHO - crop.height) // 2

            sprite.alpha_composite(
                crop,
                (x, y)
            )

            # Nome final
            arquivo = PASTA_SAIDA / f"feminino_{contador:02d}.png"

            # Salva
            sprite.save(arquivo)

            print(f"Criado: {arquivo}")

            contador += 1

    return contador


# ============================================================
# PROGRAMA PRINCIPAL
# ============================================================

def main():

    # Cria a pasta de saída
    PASTA_SAIDA.mkdir(
        exist_ok=True
    )

    contador = 1

    print()
    print("==========================================")
    print("   CORTANDO SPRITES FEMININOS")
    print("==========================================")
    print()

    # Processa as duas imagens na ordem
    for imagem in IMAGENS:

        print(f"Processando: {imagem}")
        print()

        contador = processar_imagem(
            imagem,
            contador
        )

        print()

    total = contador - 1

    print("==========================================")
    print(f"   {total} SPRITES CRIADOS")
    print("==========================================")
    print()
    print(f"Pasta de saída:")
    print(PASTA_SAIDA.resolve())
    print()


if __name__ == "__main__":
    main()