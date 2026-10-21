/* =========================================================
   CONTATOS.JS — ENVIO DE DADOS PARA A PLANILHA (GESTSIDE)
   ========================================================= */

const ENDPOINT_PLANILHA = "https://api.sheetmonkey.io/form/8cBBsYzaLpR54UuK9HKCRL";

// Trava para não enviar o mesmo participante duas vezes
let jaEnviou = false;

function enviarParaPlanilha(dados) {
    // Identificador fixo para saber de qual quiz vieram os dados
    dados.Curso = "GestSide";

    fetch(ENDPOINT_PLANILHA, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if (resposta.ok) {
            console.log("✅ [GestSide] Dados enviados para a planilha com sucesso!");
        } else {
            console.warn("⚠️ [GestSide] Falha ao enviar para a planilha.");
            jaEnviou = false; // permite tentar de novo
        }
    })
    .catch(erro => {
        console.error("❌ [GestSide] Erro na requisição:", erro);
        jaEnviou = false; // permite tentar de novo
    });
}


/* =========================================================
   RECOLHA E DISPARO DOS DADOS DO PARTICIPANTE
   ========================================================= */

function salvarDadosParticipante(areaVencedora, linkAvatar) {
    if (jaEnviou) return;
    jaEnviou = true;

    // 1. Captura o gênero real escolhido no dropdown
    const generoRealSel = document.getElementById("generoReal")?.value || "";

    // 2. Captura o gênero selecionado para o avatar
    const generoAvatarSel = document.querySelector('input[name="genero"]:checked')?.value || "";

    // 3. Captura o tom de pele do avatar
    const tomPeleSel = document.querySelector('input[name="tomPele"]:checked')?.value || "";

    // 4. Nome legível da classe (em vez da sigla lid/emp/mkt/pes)
    const nomeArea = (typeof classes !== "undefined" && classes[areaVencedora])
        ? classes[areaVencedora].nome
        : (areaVencedora || "");

    // 5. Link completo do avatar (o caminho relativo não abre fora do site)
    let linkCompleto = "";
    if (linkAvatar) {
        try {
            linkCompleto = new URL(linkAvatar, window.location.href).href;
        } catch (e) {
            linkCompleto = linkAvatar;
        }
    }

    const dadosParaSalvar = {
        Nome: document.getElementById("nome")?.value.trim() || "",
        Apelido: document.getElementById("nickname")?.value.trim() || "",
        Celular: document.getElementById("celular")?.value.trim() || "",
        Email: document.getElementById("email")?.value.trim() || "",
        Idade: document.getElementById("idade")?.value.trim() || "",
        Genero: generoRealSel,              // Preenche a coluna principal com o dropdown
        GeneroAvatar: generoAvatarSel,      // Identifica o modelo visual escolhido
        TomPele: tomPeleSel,
        Area: nomeArea,
        LinkAvatar: linkCompleto,
        Data: new Date().toLocaleString("pt-BR")
    };

    enviarParaPlanilha(dadosParaSalvar);
}