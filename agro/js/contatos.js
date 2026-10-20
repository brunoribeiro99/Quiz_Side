/* =========================================================
   CONTATOS.JS — ENVIO DE DADOS PARA A PLANILHA (AGROSIDE)
   ========================================================= */

const ENDPOINT_PLANILHA = "https://api.sheetmonkey.io/form/8cBBsYzaLpR54UuK9HKCRL";

function enviarParaPlanilha(dados) {
    // Identificador fixo para a planilha saber que veio do AgroSide
    dados.Curso = "AgroSide";

    fetch(ENDPOINT_PLANILHA, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => {
        if (resposta.ok) {
            console.log("✅ [AgroSide] Dados enviados para a planilha com sucesso!");
        } else {
            console.warn("⚠️ [AgroSide] Falha ao enviar para a planilha.");
        }
    })
    .catch(erro => {
        console.error("❌ [AgroSide] Erro na requisição:", erro);
    });
}

/* =========================================================
   RECOLHA E DISPARO DOS DADOS DO PARTICIPANTE
   ========================================================= */

function salvarDadosParticipante(areaVencedora, linkAvatar) {
const generoSel = document.getElementById("generoReal")?.value || "";
    const tomPeleSel = document.querySelector('input[name="tomPele"]:checked')?.value || "";

    const dadosParaSalvar = {
        Nome: document.getElementById("nome")?.value.trim() || "",
        Apelido: document.getElementById("nickname")?.value.trim() || "",
        Celular: document.getElementById("celular")?.value.trim() || "",
        Email: document.getElementById("email")?.value.trim() || "",
        Idade: document.getElementById("idade")?.value.trim() || "",
        Genero: generoSel,
        TomPele: tomPeleSel,
        Area: areaVencedora || "",
        LinkAvatar: linkAvatar || "",
        Data: new Date().toLocaleString("pt-BR")
    };

    enviarParaPlanilha(dadosParaSalvar);
}