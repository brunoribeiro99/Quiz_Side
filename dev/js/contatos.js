/* =========================================================
   CONTATOS.JS — ENVIO DE DADOS PARA A PLANILHA (DEVSIDE)
   ========================================================= */

const ENDPOINT_PLANILHA = "https://api.sheetmonkey.io/form/8cBBsYzaLpR54UuK9HKCRL";

function enviarParaPlanilha(dados) {
    // Identificador fixo para saber de qual quiz vieram os dados
    dados.Curso = "DevSide";

    fetch(ENDPOINT_PLANILHA, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if (resposta.ok) {
            console.log("✅ [DevSide] Dados enviados para a planilha com sucesso!");
        } else {
            console.warn("⚠️ [DevSide] Falha ao enviar para a planilha.");
        }
    })
    .catch(erro => {
        console.error("❌ [DevSide] Erro na requisição:", erro);
    });
}


/* =========================================================
   RECOLHA E DISPARO DOS DADOS DO PARTICIPANTE
   ========================================================= */

function salvarDadosParticipante(areaVencedora, linkAvatar) {
    // 1. Captura o gênero real escolhido no dropdown
    const generoRealSel = document.getElementById("generoReal")?.value || "";

    // 2. Captura o gênero selecionado para o avatar
    const generoAvatarSel = document.querySelector('input[name="genero"]:checked')?.value || "";

    // 3. Captura o tom de pele do avatar
    const tomPeleSel = document.querySelector('input[name="tomPele"]:checked')?.value || "";

    const dadosParaSalvar = {
        Nome: document.getElementById("nome")?.value.trim() || "",
        Apelido: document.getElementById("nickname")?.value.trim() || "",
        Celular: document.getElementById("celular")?.value.trim() || "",
        Email: document.getElementById("email")?.value.trim() || "",
        Idade: document.getElementById("idade")?.value.trim() || "",
        Genero: generoRealSel,              // Preenche a coluna principal com o dropdown
        GeneroAvatar: generoAvatarSel,      // Identifica o modelo visual escolhido
        TomPele: tomPeleSel,
        Area: areaVencedora || "",
        LinkAvatar: linkAvatar || "",
        Data: new Date().toLocaleString("pt-BR")
    };

    enviarParaPlanilha(dadosParaSalvar);
}