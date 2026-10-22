// ========================================
// 🌾 PERFIS E CLASSES AGROSIDE
// ========================================

const classes = {
    agrotech: {
        id: "AgroTech",
        nome: "AgroTech — O Inovador",
        icone: "img/icon/AgroTech.png",
        afinidade: "Tecnologia, agricultura digital, sensores, automação e drones.",
        texto: "Você gosta de transformar ideias em soluções para o campo. Na Engenharia Agronômica, inovação e tecnologia caminham juntas!"
    },
    agroprod: {
        id: "AgroProd",
        nome: "AgroProd — O Especialista em Produção",
        icone: "img/icon/AgroProd.png",
        afinidade: "Plantas, cultivos, produção de alimentos e atividades práticas.",
        texto: "Você gosta de ver as coisas crescerem e acontecerem. Seu lado Agro combina com a produção de alimentos e o trabalho no campo!"
    },
    agroeco: {
        id: "AgroEco",
        nome: "AgroEco — O Guardião Ambiental",
        icone: "img/icon/AgroEco.png",
        afinidade: "Sustentabilidade, conservação do solo, água e recursos naturais.",
        texto: "Você pensa no futuro do planeta. A Engenharia Agronômica também cuida do solo, da água e da produção sustentável!"
    },
    agrolab: {
        id: "AgroLab",
        nome: "AgroLab — O Investigador",
        icone: "img/icon/AgroLab.png",
        afinidade: "Pesquisa, experimentos, análises e descobertas científicas.",
        texto: "Sua curiosidade pode virar descoberta. Experimentos e ciência ajudam a encontrar soluções para os desafios do agro!"
    }
};


// ========================================
// 📊 MATRIZ DE PONTUAÇÃO (8 QUESTÕES)
// 6 XP por alternativa (Máximo 48 XP / Base 50)
// ========================================

const pontuacao = {
    // QUESTÃO 01: A=Tech, B=Prod, C=Eco, D=Lab
    q1: {
        q1a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q1b: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q1c: { agrotech: 0, agroprod: 0, agroeco: 6, agrolab: 0 },
        q1d: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 }
    },

    // QUESTÃO 02: A=Tech, B=Prod, C=Eco, D=Lab
    q2: {
        q2a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q2b: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q2c: { agrotech: 0, agroprod: 0, agroeco: 6, agrolab: 0 },
        q2d: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 }
    },

    // QUESTÃO 03: A=Lab, B=Tech, C=Prod, D=Lab
    q3: {
        q3a: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 },
        q3b: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q3c: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q3d: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 }
    },

    // QUESTÃO 04: A=Tech, B=Prod, C=Lab, D=Eco
    q4: {
        q4a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q4b: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q4c: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 },
        q4d: { agrotech: 0, agroprod: 0, agroeco: 6, agrolab: 0 }
    },

    // QUESTÃO 05: A=Tech, B=Lab, C=Eco, D=Tech
    q5: {
        q5a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q5b: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 },
        q5c: { agrotech: 0, agroprod: 0, agroeco: 6, agrolab: 0 },
        q5d: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 }
    },

    // QUESTÃO 06: A=Tech, B=Prod, C=Prod, D=Lab
    q6: {
        q6a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q6b: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q6c: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q6d: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 }
    },

    // QUESTÃO 07: A=Prod, B=Eco, C=Tech, D=Lab
    q7: {
        q7a: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q7b: { agrotech: 0, agroprod: 0, agroeco: 6, agrolab: 0 },
        q7c: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q7d: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 }
    },

    // QUESTÃO 08: A=Tech, B=Lab, C=Prod, D=Prod
    q8: {
        q8a: { agrotech: 6, agroprod: 0, agroeco: 0, agrolab: 0 },
        q8b: { agrotech: 0, agroprod: 0, agroeco: 0, agrolab: 6 },
        q8c: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 },
        q8d: { agrotech: 0, agroprod: 6, agroeco: 0, agrolab: 0 }
    }
};


// ========================================
// RESULTADO ACUMULADO
// ========================================

const resultado = {
    agrotech: 0,
    agroprod: 0,
    agroeco: 0,
    agrolab: 0
};


// ========================================
// 📱 CONTROLE DO MODO CELULAR (ABERTO PELO QR CODE)
// ========================================

let modoCelular = false;


// ========================================
// SOMAR PONTOS
// ========================================

function somarPontos(pontos) {
    if (!pontos) return;
    resultado.agrotech += pontos.agrotech;
    resultado.agroprod += pontos.agroprod;
    resultado.agroeco += pontos.agroeco;
    resultado.agrolab += pontos.agrolab;
}


// ========================================
// FUNÇÕES DE CÁLCULO INDIVIDUAL (Q1 A Q8)
// ========================================

function calcularQ1() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    if (resposta && pontuacao.q1[resposta.id]) somarPontos(pontuacao.q1[resposta.id]);
}

function calcularQ2() {
    const resposta = document.querySelector('input[name="q2"]:checked');
    if (resposta && pontuacao.q2[resposta.id]) somarPontos(pontuacao.q2[resposta.id]);
}

function calcularQ3() {
    const resposta = document.querySelector('input[name="q3"]:checked');
    if (resposta && pontuacao.q3[resposta.id]) somarPontos(pontuacao.q3[resposta.id]);
}

function calcularQ4() {
    const resposta = document.querySelector('input[name="q4"]:checked');
    if (resposta && pontuacao.q4[resposta.id]) somarPontos(pontuacao.q4[resposta.id]);
}

function calcularQ5() {
    const resposta = document.querySelector('input[name="q5"]:checked');
    if (resposta && pontuacao.q5[resposta.id]) somarPontos(pontuacao.q5[resposta.id]);
}

function calcularQ6() {
    const resposta = document.querySelector('input[name="q6"]:checked');
    if (resposta && pontuacao.q6[resposta.id]) somarPontos(pontuacao.q6[resposta.id]);
}

function calcularQ7() {
    const resposta = document.querySelector('input[name="q7"]:checked');
    if (resposta && pontuacao.q7[resposta.id]) somarPontos(pontuacao.q7[resposta.id]);
}

function calcularQ8() {
    const resposta = document.querySelector('input[name="q8"]:checked');
    if (resposta && pontuacao.q8[resposta.id]) somarPontos(pontuacao.q8[resposta.id]);
}


// ========================================
// 📊 CALCULAR RESULTADO GERAL
// ========================================

function calcularResultado() {
    resultado.agrotech = 0;
    resultado.agroprod = 0;
    resultado.agroeco = 0;
    resultado.agrolab = 0;

    calcularQ1();
    calcularQ2();
    calcularQ3();
    calcularQ4();
    calcularQ5();
    calcularQ6();
    calcularQ7();
    calcularQ8();

    console.log("========== AGROSIDE ==========");
    console.log("AgroTech:", resultado.agrotech);
    console.log("AgroProd:", resultado.agroprod);
    console.log("AgroEco:", resultado.agroeco);
    console.log("AgroLab:", resultado.agrolab);

    mostrarResultado();
}


// ========================================
// DESCOBRIR CLASSE PRINCIPAL
// ========================================

function descobrirVencedor() {
    let vencedor = "agrotech";

    for (const classe in resultado) {
        if (resultado[classe] > resultado[vencedor]) {
            vencedor = classe;
        }
    }

    return vencedor;
}


// ========================================
// 🥈 DESCOBRIR SEGUNDA CLASSE (AFINIDADE)
// ========================================

function descobrirSegundaClasse(vencedor) {
    let segunda = null;

    for (const classe in resultado) {
        if (classe === vencedor) continue;

        if (segunda === null || resultado[classe] > resultado[segunda]) {
            segunda = classe;
        }
    }

    return segunda;
}


// ========================================
// 📝 DESCRIÇÕES DO RESULTADO
// ========================================

function gerarDescricao(classe, segundaClasse) {
    const principal = classes[classe].texto;
    let toqueSegunda = "";

    if (segundaClasse && resultado[segundaClasse] > 0) {
        toqueSegunda = `Além disso, você demonstra forte ligação com a área de <strong>${classes[segundaClasse].nome}</strong> (${classes[segundaClasse].afinidade.toLowerCase()}).`;
    }

    return {
        principal: principal,
        segunda: toqueSegunda
    };
}


// ========================================
// 💾 BAIXAR IMAGEM GERADA (FUNCIONA NO PC E NO CELULAR)
// ========================================

function baixarCanvas(canvas, nomeArquivo) {
    canvas.toBlob(function (blob) {
        if (!blob) return;

        const urlBlob = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = nomeArquivo;
        link.href = urlBlob;
        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(function () {
            URL.revokeObjectURL(urlBlob);
        }, 4000);
    }, "image/png");
}


// ========================================
// 🔗 MONTAR O LINK DO QR CODE
// Leva pontuação e dados do avatar montado no PC:
// g = gênero, p = tom de pele, n = número, a = apelido
// (o e-mail NÃO vai no link)
// ========================================

function montarLinkDoQr(vencedor) {
    const urlBase = window.location.origin + window.location.pathname;

    let link = `${urlBase}?vencedor=${encodeURIComponent(vencedor)}`
        + `&tech=${resultado.agrotech}`
        + `&prod=${resultado.agroprod}`
        + `&eco=${resultado.agroeco}`
        + `&lab=${resultado.agrolab}`;

    try {
        const generoSelecionado = obterGeneroSelecionado();
        const peleSelecionada = obterTomPeleSelecionado();
        const avatar = escolherAvatar(vencedor, generoSelecionado, peleSelecionada);

        const campoApelido = document.getElementById("nickname");
        const apelido = ((campoApelido && campoApelido.value.trim()) || "").slice(0, 20);

        if (avatar) {
            link += `&g=${encodeURIComponent(avatar.genero.toLowerCase())}`
                + `&p=${encodeURIComponent(avatar.tomPele)}`
                + `&n=${avatar.numero}`
                + `&a=${encodeURIComponent(apelido)}`;
        }
    } catch (erro) {
        console.warn("⚠️ Não foi possível incluir o avatar no link do QR:", erro);
    }

    return link;
}


// ========================================
// 🧍 MONTAR O AVATAR NO CELULAR A PARTIR DO LINK
// ========================================

function montarAvatarDoLink(area, genero, tomPele, numero) {
    const configArea = avatarConfig.areas[area];
    const pastaPele = obterPastaPele(tomPele);

    if (!configArea || !pastaPele || !genero) return null;

    const limite = configArea[genero.toLowerCase()] || 20;
    if (!numero || numero < 1 || numero > limite) return null;

    return {
        area: area,
        genero: genero,
        tomPele: tomPele,
        pastaPele: pastaPele,
        numero: numero,
        imagem: `${avatarConfig.caminhoBase}${configArea.nome}/${genero}/sprites/${pastaPele}/${configArea.nome} (${numero}).png`
    };
}


// ========================================
// 📱 AJUSTAR A TELA PARA O CELULAR
// ========================================

function aplicarModoCelular() {
    modoCelular = true;

    const btnRefazer = document.getElementById("btnVoltarInicio");
    const blocoQr = document.getElementById("blocoQrCodeDinamico");
    const classePrincipal = document.querySelector(".classe-principal");
    const containerBotoesPc = document.getElementById("containerBotoesAcao");
    const btnFichaOriginal = document.getElementById("btnBaixarFichaResumo");
    const colunaDireita = document.querySelector(".resultado-coluna-direita");

    if (btnRefazer) btnRefazer.style.display = "none";
    if (blocoQr) blocoQr.style.display = "none";
    if (classePrincipal) classePrincipal.style.display = "none";

    // Reorganiza layout: no celular o botão Ficha Completa fica abaixo da tabela RPG
    if (containerBotoesPc && btnFichaOriginal && colunaDireita) {
        containerBotoesPc.style.maxWidth = "100%";
        btnFichaOriginal.style.width = "100%";
        btnFichaOriginal.style.marginTop = "14px";
        colunaDireita.appendChild(btnFichaOriginal);
    }
}


// ========================================
// 🎮 MONTAGEM VISUAL DO RESULTADO
// ========================================

function mostrarResultado() {
    const areaResultado = document.getElementById("resultado");

    if (!areaResultado) {
        console.error("Elemento #resultado não encontrado no HTML.");
        return;
    }

    const vencedor = descobrirVencedor();
    const segundaClasse = descobrirSegundaClasse(vencedor);
    const descricoes = gerarDescricao(vencedor, segundaClasse);

    const classesRPG = ["agrotech", "agroprod", "agroeco", "agrolab"];

    const linhasRPG = classesRPG.map(classe => {
        const xp = resultado[classe];
        const porcentagem = Math.min(Math.round((xp / 48) * 100), 100);

        return `
            <div class="rpg-linha">
                <div class="rpg-classe">
                    <span class="icone-classe">
                        <img src="${classes[classe].icone}" alt="${classes[classe].nome}">
                    </span>
                    <span class="nome-classe">
                        ${classes[classe].nome.split("—")[0].trim()}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div class="barra-xp-preenchida" style="width: ${porcentagem}%"></div>
                    </div>
                    <span class="rpg-pontos">
                        ${xp} XP
                    </span>
                </div>
            </div>
        `;
    }).join("");

    areaResultado.innerHTML = `
        <div class="resultado-grid" id="fichaCompletaRPG">

            <div class="resultado-coluna-esquerda" style="display: flex; flex-direction: column; align-items: center;">
                
                <!-- ÁREA DE CAPTURA: AVATAR COM SELOS (TOPO E RODAPÉ) -->
                <div id="areaAvatarComSelo" style="display: flex; flex-direction: column; align-items: center; background: #0b0f19; padding: 14px; border-radius: 12px; border: 1.5px solid rgba(255, 204, 0, 0.35); gap: 10px; width: 100%; box-sizing: border-box;">
                    
                    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 6px 14px; background: rgba(0, 0, 0, 0.75); border: 1.5px solid #ffcc00; border-radius: 20px; box-shadow: 0 0 10px rgba(255, 204, 0, 0.3); width: fit-content;">
                        <span style="font-size: 0.95rem; line-height: 1;">⭐</span>
                        <img 
                            src="${classes[vencedor].icone}" 
                            alt="${classes[vencedor].nome}" 
                            style="width: 18px; height: 18px; object-fit: contain; filter: drop-shadow(0 0 3px rgba(255, 204, 0, 0.5));"
                        >
                        <span style="font-size: 0.74rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;">
                            MEU TALENTO: ${classes[vencedor].nome.split("—")[0].trim()}
                        </span>
                    </div>

                    <div class="avatar-card" id="avatarCard"></div>
                    
                    <div style="padding: 5px 14px; background: rgba(0, 0, 0, 0.65); border: 1.5px solid #ffcc00; border-radius: 20px; box-shadow: 0 0 10px rgba(255, 204, 0, 0.25);">
                        <span style="font-size: 0.72rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px;">✦ EU FUI NO SEJA FATEC • ENGENHARIA AGRONÔMICA ✦</span>
                    </div>
                </div>

                <!-- CONTAINER DE BOTÕES -->
                <div id="containerBotoesAcao" style="display: flex; gap: 8px; width: 100%; max-width: 250px; margin-top: 14px;">
                    <button
                        type="button"
                        class="btn-baixar-avatar"
                        id="btnBaixarAvatarSelo"
                        style="flex: 1; padding: 8px 6px; font-size: 0.78rem; cursor: pointer; text-align: center; border-radius: 6px; white-space: nowrap;"
                    >
                        ⬇ Avatar + Selo
                    </button>

                    <button
                        type="button"
                        class="btn-baixar-avatar"
                        id="btnBaixarFichaResumo"
                        style="flex: 1; padding: 8px 6px; font-size: 0.78rem; cursor: pointer; text-align: center; border-radius: 6px; background: transparent; border: 1.5px solid #ffcc00; color: #ffcc00; white-space: nowrap;"
                    >
                        📜 Ficha Completa
                    </button>
                </div>

                <!-- BOTÃO REFAZER -->
                <button
                    type="button"
                    id="btnVoltarInicio"
                    style="margin-top: 8px; width: 100%; max-width: 250px; padding: 7px 10px; font-size: 0.75rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.2); color: #cccccc; border-radius: 6px; cursor: pointer; text-align: center; transition: all 0.2s ease;"
                    onmouseover="this.style.borderColor='#ffcc00'; this.style.color='#ffcc00';"
                    onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.2)'; this.style.color='#cccccc';"
                    onclick="window.location.href='../index.html';"
                >
                    🔄 Refazer Quiz
                </button>

                <!-- CARD DO QR CODE (PC) -->
                <div id="blocoQrCodeDinamico" style="display: none; margin-top: 14px; width: 100%; max-width: 250px; box-sizing: border-box; flex-direction: column; align-items: center; gap: 10px; padding: 14px 12px; background: #0b0f19; border: 1.5px solid #ffcc00; border-radius: 12px; box-shadow: 0 0 12px rgba(255, 204, 0, 0.25);">
                    <span id="qrLegenda" style="font-size: 0.72rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; text-align: center;">
                        📱 ESCANEIE PARA BAIXAR
                    </span>
                    <div id="qrcode" style="background: #ffffff; padding: 8px; border: 2px solid #ffcc00; box-shadow: 0 0 10px rgba(255, 204, 0, 0.35); border-radius: 8px; line-height: 0; display: inline-block;"></div>
                    <span style="font-size: 0.66rem; color: #cccccc; text-align: center; line-height: 1.3;">
                        Aponte a câmera do celular para escolher e salvar sua imagem
                    </span>
                </div>
            </div>

            <div class="resultado-coluna-direita">
                <div class="classe-principal">
                    <div class="icone">
                        <img src="${classes[vencedor].icone}" alt="${classes[vencedor].nome}">
                    </div>

                    <div class="titulo">
                        SUA CLASSE EM ENGENHARIA AGRONÔMICA É 
                    </div>

                    <h3>
                        ${classes[vencedor].nome}
                    </h3>

                    <div class="pontos">
                        ${resultado[vencedor]} XP
                    </div>

                    <p class="rpg-descricao">
                        ${descricoes.principal}
                    </p>

                    ${descricoes.segunda ? `<p class="rpg-descricao">${descricoes.segunda}</p>` : ""}
                </div>

                <div class="tabela-rpg" id="blocoAtributosRPG">
                    <div class="tabela-rpg-titulo">
                        🌾 SEUS ATRIBUTOS NO CAMPO
                    </div>
                    ${linhasRPG}
                </div>
            </div>

        </div>
    `;

    // =========================================================
    // 🚀 GERADOR DO QR CODE NO PC
    // =========================================================
    function exibirQrCodePC() {
        if (modoCelular) return;

        const bloco = document.getElementById("blocoQrCodeDinamico");
        const containerQr = document.getElementById("qrcode");

        if (!bloco || !containerQr || typeof QRCode === "undefined") return;

        const linkDestino = montarLinkDoQr(vencedor);

        containerQr.innerHTML = "";
        new QRCode(containerQr, {
            text: linkDestino,
            width: 160,
            height: 160,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });

        bloco.style.display = "flex";
        bloco.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // --- AÇÕES DOS BOTÕES (DIFERENCIADAS POR DISPOSITIVO) ---

    // 1. Avatar com Selo
    const btnAvatarSelo = document.getElementById("btnBaixarAvatarSelo");
    if (btnAvatarSelo) {
        btnAvatarSelo.addEventListener("click", function () {
            if (!modoCelular) {
                // No PC: gera o QR Code
                exibirQrCodePC();
                return;
            }

            // No Celular: renderiza e baixa
            const alvo = document.getElementById("areaAvatarComSelo");
            if (!alvo || typeof html2canvas === "undefined") return;

            btnAvatarSelo.innerText = "⏳ Gerando...";
            html2canvas(alvo, { backgroundColor: "#0b0f19", scale: 2 }).then(canvas => {
                baixarCanvas(canvas, `Avatar_Agro_${vencedor}.png`);
                btnAvatarSelo.innerText = "⬇ Avatar + Selo";
            }).catch(() => {
                btnAvatarSelo.innerText = "⬇ Avatar + Selo";
            });
        });
    }

    // 2. Ficha Completa
    const btnFichaResumo = document.getElementById("btnBaixarFichaResumo");
    if (btnFichaResumo) {
        btnFichaResumo.addEventListener("click", function () {
            if (!modoCelular) {
                // No PC: gera o mesmo QR Code
                exibirQrCodePC();
                return;
            }

            // No Celular: renderiza avatar + tabela e baixa
            const avatarSelo = document.getElementById("areaAvatarComSelo");
            const atributos = document.getElementById("blocoAtributosRPG");
            if (!avatarSelo || !atributos || typeof html2canvas === "undefined") return;

            btnFichaResumo.innerText = "⏳ Gerando...";

            const cardExport = document.createElement("div");
            cardExport.style.cssText = `
                position: fixed;
                left: -9999px;
                top: 0;
                width: 420px;
                background: #0b0f19;
                padding: 20px;
                border-radius: 16px;
                border: 2px solid #ffcc00;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;
                box-sizing: border-box;
            `;

            cardExport.appendChild(avatarSelo.cloneNode(true));
            cardExport.appendChild(atributos.cloneNode(true));
            document.body.appendChild(cardExport);

            html2canvas(cardExport, { backgroundColor: "#0b0f19", scale: 2 }).then(canvas => {
                baixarCanvas(canvas, `Ficha_Agro_${vencedor}.png`);
                document.body.removeChild(cardExport);
                btnFichaResumo.innerText = "📜 Ficha Completa";
            }).catch(() => {
                if (document.body.contains(cardExport)) document.body.removeChild(cardExport);
                btnFichaResumo.innerText = "📜 Ficha Completa";
            });
        });
    }
}


// ========================================
// 🏆 CONTROLE DE INICIALIZAÇÃO E URL
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);

    // 1. CARREGAMENTO VIA QR CODE NO CELULAR
    if (urlParams.has("vencedor")) {
        const v = urlParams.get("vencedor");
        resultado.agrotech = parseInt(urlParams.get("tech")) || 0;
        resultado.agroprod = parseInt(urlParams.get("prod")) || 0;
        resultado.agroeco = parseInt(urlParams.get("eco")) || 0;
        resultado.agrolab = parseInt(urlParams.get("lab")) || 0;

        const quiz = document.getElementById("quiz");
        const perguntaDados = document.getElementById("perguntaDados");
        const resultadoArea = document.getElementById("resultado");

        if (quiz) quiz.style.display = "none";
        if (perguntaDados) perguntaDados.style.display = "none";

        if (resultadoArea) {
            resultadoArea.removeAttribute("hidden");
            resultadoArea.style.display = "block";
        }

        mostrarResultado();

        // Recupera o apelido
        const campoApelido = document.getElementById("nickname");
        const apelidoDoLink = (urlParams.get("a") || "").slice(0, 20);
        if (campoApelido) campoApelido.value = apelidoDoLink;

        // Reconstrói o avatar original
        const area = classes[v] ? v : descobrirVencedor();
        const generoLink = (urlParams.get("g") || "").toLowerCase();
        const peleLink = urlParams.get("p") || "";
        const numeroLink = parseInt(urlParams.get("n"));

        if (generoLink === "masculino" || generoLink === "feminino") {
            const generoFormatado = generoLink.charAt(0).toUpperCase() + generoLink.slice(1);
            const avatarCelular = montarAvatarDoLink(area, generoFormatado, peleLink, numeroLink);

            if (avatarCelular && typeof mostrarAvatarNoResultado === "function") {
                mostrarAvatarNoResultado(avatarCelular);
            }
        }

        // Aplica o layout do celular com os dois botões disponíveis
        aplicarModoCelular();

        return;
    }

    // 2. FLUXO NORMAL DO QUIZ NO PC
    const btnVerPontuacao = document.getElementById("btnVerPontuacao");
    const quiz = document.getElementById("quiz");
    const resultadoArea = document.getElementById("resultado");

    if (!btnVerPontuacao) {
        console.error("Botão #btnVerPontuacao não encontrado.");
        return;
    }

    btnVerPontuacao.addEventListener("click", function () {
        calcularResultado();

        if (quiz) {
            quiz.hidden = true;
        }

        if (resultadoArea) {
            resultadoArea.hidden = false;
            resultadoArea.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});