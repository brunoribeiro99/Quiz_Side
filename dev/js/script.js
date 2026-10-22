// ========================================
// 💻 PERFIS E CLASSES DEVSIDE
// ========================================

const classes = {
    programacao: {
        nome: "Programação",
        icone: "img/icon/dev_icon.png"
    },
    design: {
        nome: "Design",
        icone: "img/icon/designer_icon.png"
    },
    redes: {
        nome: "Redes e Internet",
        icone: "img/icon/redes_icon.png"
    },
    seguranca: {
        nome: "Cibersegurança",
        icone: "img/icon/ciber_icon.png"
    }
};


// ========================================
// 📊 PONTUAÇÃO DO PIXELU
// ========================================

const pontuacao = {
    // QUESTÃO 01
    q1: {
        q1a: { programacao: 1, design: 4, redes: 3, seguranca: 2 },
        q1b: { programacao: 5, design: 4, redes: 2, seguranca: 3 }
    },

    // QUESTÃO 02
    q2: {
        q2a: { programacao: 2, design: 5, redes: 3, seguranca: 1 },
        q2b: { programacao: 5, design: 3, redes: 4, seguranca: 5 },
        q2c: { programacao: 4, design: 2, redes: 5, seguranca: 3 },
        q2d: { programacao: 3, design: 2, redes: 4, seguranca: 4 }
    },

    // QUESTÃO 03
    q3: {
        q3a: { programacao: 5, design: 3, redes: 2, seguranca: 2 },
        q3b: { programacao: 3, design: 5, redes: 1, seguranca: 1 },
        q3c: { programacao: 2, design: 1, redes: 5, seguranca: 3 },
        q3d: { programacao: 2, design: 1, redes: 4, seguranca: 5 },
        q3e: { programacao: 2, design: 1, redes: 4, seguranca: 3 }
    },

    // QUESTÃO 04
    q4: {
        q4a: { programacao: 5, design: 1, redes: 3, seguranca: 2 },
        q4b: { programacao: 3, design: 5, redes: 2, seguranca: 1 },
        q4c: { programacao: 5, design: 1, redes: 2, seguranca: 2 }
    },

    // QUESTÃO 05
    q5: {
        q5a: { programacao: 2, design: 1, redes: 5, seguranca: 4 },
        q5b: { programacao: 3, design: 5, redes: 1, seguranca: 2 }
    },

    // QUESTÃO 06
    q6: {
        q6a: { programacao: 5, design: 5, redes: 2, seguranca: 2 },
        q6b: { programacao: 5, design: 3, redes: 1, seguranca: 1 },
        q6c: { programacao: 3, design: 2, redes: 3, seguranca: 4 },
        q6d: { programacao: 5, design: 3, redes: 4, seguranca: 3 }
    },

    // QUESTÃO 07
    q7: {
        q7a: { programacao: 5, design: 4, redes: 3, seguranca: 2 },
        q7b: { programacao: 3, design: 5, redes: 1, seguranca: 1 },
        q7c: { programacao: 3, design: 1, redes: 5, seguranca: 4 },
        q7d: { programacao: 1, design: 1, redes: 4, seguranca: 5 },
        q7e: { programacao: 4, design: 2, redes: 4, seguranca: 3 }
    },

    // QUESTÃO 08
    q8: {
        q8a: { programacao: 5, design: 1, redes: 1, seguranca: 4 },
        q8b: { programacao: 2, design: 4, redes: 5, seguranca: 3 },
        q8c: { programacao: 2, design: 4, redes: 4, seguranca: 4 }
    },

    // QUESTÃO 09
    q9: {
        q9a: { programacao: 5, design: 4, redes: 1, seguranca: 1 },
        q9b: { programacao: 4, design: 5, redes: 1, seguranca: 1 },
        q9c: { programacao: 2, design: 2, redes: 5, seguranca: 4 },
        q9d: { programacao: 3, design: 1, redes: 4, seguranca: 5 }
    },

    // QUESTÃO 10
    q10: {
        q10a: { programacao: 5, design: 5, redes: 1, seguranca: 1 },
        q10b: { programacao: 4, design: 4, redes: 2, seguranca: 2 },
        q10c: { programacao: 4, design: 4, redes: 1, seguranca: 1 },
        q10d: { programacao: 3, design: 1, redes: 4, seguranca: 2 },
        q10e: { programacao: 5, design: 4, redes: 3, seguranca: 2 },
        q10f: { programacao: 2, design: 3, redes: 5, seguranca: 2 }
    }
};


// ========================================
// RESULTADO
// ========================================

const resultado = {
    programacao: 0,
    design: 0,
    redes: 0,
    seguranca: 0
};


// ========================================
// 📱 CONTROLE DO MODO CELULAR
// ========================================

let modoCelular = false;


// ========================================
// SOMAR PONTOS
// ========================================

function somarPontos(pontos) {
    if (!pontos) return;
    resultado.programacao += pontos.programacao;
    resultado.design += pontos.design;
    resultado.redes += pontos.redes;
    resultado.seguranca += pontos.seguranca;
}


// ========================================
// QUESTÕES DE CÁLCULO
// ========================================

function calcularQ1() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q1[resposta.id];
    somarPontos(pontos);
}

function calcularQ2() {
    const respostas = document.querySelectorAll('input[name="q2"]:checked');
    respostas.forEach(resposta => {
        const pontos = pontuacao.q2[resposta.id];
        if (pontos) somarPontos(pontos);
    });
}

function calcularQ3() {
    const resposta = document.querySelector('input[name="q3"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q3[resposta.id];
    somarPontos(pontos);
}

function calcularQ4() {
    const resposta = document.querySelector('input[name="q4"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q4[resposta.id];
    somarPontos(pontos);
}

function calcularQ5() {
    const resposta = document.querySelector('input[name="q5"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q5[resposta.id];
    somarPontos(pontos);
}

function calcularQ6() {
    const resposta = document.querySelector('input[name="q6"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q6[resposta.id];
    somarPontos(pontos);
}

function calcularQ7() {
    const resposta = document.querySelector('input[name="q7"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q7[resposta.id];
    somarPontos(pontos);
}

function calcularQ8() {
    const resposta = document.querySelector('input[name="q8"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q8[resposta.id];
    somarPontos(pontos);
}

function calcularQ9() {
    const resposta = document.querySelector('input[name="q9"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q9[resposta.id];
    somarPontos(pontos);
}

function calcularQ10() {
    const resposta = document.querySelector('input[name="q10"]:checked');
    if (!resposta) return;
    const pontos = pontuacao.q10[resposta.id];
    somarPontos(pontos);
}


// ========================================
// 📊 CALCULAR RESULTADO
// ========================================

function calcularResultado() {
    resultado.programacao = 0;
    resultado.design = 0;
    resultado.redes = 0;
    resultado.seguranca = 0;

    calcularQ1();
    calcularQ2();
    calcularQ3();
    calcularQ4();
    calcularQ5();
    calcularQ6();
    calcularQ7();
    calcularQ8();
    calcularQ9();
    calcularQ10();

    console.log("========== PIXELU ==========");
    console.log("Programação:", resultado.programacao);
    console.log("Design:", resultado.design);
    console.log("Redes:", resultado.redes);
    console.log("Segurança:", resultado.seguranca);

    mostrarResultado();
}


// ========================================
// DESCOBRIR CLASSE
// ========================================

function descobrirVencedor() {
    let vencedor = "programacao";
    for (const classe in resultado) {
        if (resultado[classe] > resultado[vencedor]) {
            vencedor = classe;
        }
    }
    return vencedor;
}


// ========================================
// 🥈 DESCOBRIR SEGUNDA CLASSE
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

function gerarDescricao(classe, xp, segundaClasse, xpSegunda) {
    let descricaoPrincipal = "";
    let toqueSegunda = "";

    if (classe === "programacao") {
        if (xp >= 30) {
            descricaoPrincipal = "Você tende a transformar problemas em código: testa uma ideia, encontra o erro, ajusta e continua até fazer funcionar.";
        } else {
            descricaoPrincipal = "Você tem facilidade para pegar um problema confuso, quebrá-lo em partes menores e procurar uma solução que faça sentido.";
        }
    } else if (classe === "design") {
        if (xp >= 30) {
            descricaoPrincipal = "Você dificilmente aceita uma interface só porque ela funciona. Quer entender onde o usuário vai clicar, o que ele vai sentir e o que pode ser melhorado.";
        } else {
            descricaoPrincipal = "Você presta atenção em coisas que muita gente simplesmente ignora: organização, cores, posição dos elementos e facilidade de uso.";
        }
    } else if (classe === "redes") {
        if (xp >= 30) {
            descricaoPrincipal = "Seu perfil combina com quem gosta de descobrir onde uma conexão quebra, entender o caminho dos dados e fazer dispositivos, serviços e redes trabalharem juntos.";
        } else {
            descricaoPrincipal = "Você se interessa pelo caminho que existe entre os dispositivos: conexão, comunicação, servidores e tudo que faz a informação chegar ao destino.";
        }
    } else if (classe === "seguranca") {
        if (xp >= 30) {
            descricaoPrincipal = "Seu primeiro impulso é procurar a brecha: descobrir como um sistema poderia ser explorado, onde alguém poderia entrar e como impedir que isso aconteça.";
        } else {
            descricaoPrincipal = "Você tende a pensar no que pode dar errado antes de simplesmente confiar que está tudo certo.";
        }
    }

    if (segundaClasse === "programacao") {
        if (xpSegunda >= 30) {
            toqueSegunda = "E essa curiosidade vai além de usar a tecnologia: você quer entender como ela é construída e o que faz cada parte funcionar.";
        } else {
            toqueSegunda = "Também apareceu uma curiosidade por entender o que existe por trás de um aplicativo, site ou sistema.";
        }
    } else if (segundaClasse === "design") {
        if (xpSegunda >= 30) {
            toqueSegunda = "E esse olhar aparece bastante: você pensa no caminho do usuário, nos detalhes da interface e no que pode tornar uma experiência mais natural.";
        } else {
            toqueSegunda = "Também existe um lado seu que se preocupa com a forma como uma ideia aparece para quem está usando.";
        }
    } else if (segundaClasse === "redes") {
        if (xpSegunda >= 30) {
            toqueSegunda = "E você parece ter aquela tendência de investigar a conexão de ponta a ponta até descobrir exatamente onde está o problema.";
        } else {
            toqueSegunda = "Também existe curiosidade pelo que acontece por trás de uma conexão quando algo deixa de funcionar.";
        }
    } else if (segundaClasse === "seguranca") {
        if (xpSegunda >= 30) {
            toqueSegunda = "E essa preocupação é bem marcada: você não olha apenas para o funcionamento do sistema, mas para todas as formas como ele poderia ser comprometido.";
        } else {
            toqueSegunda = "Também aparece uma preocupação em descobrir riscos antes que eles se transformem em problemas.";
        }
    }

    return {
        principal: descricaoPrincipal,
        segunda: toqueSegunda
    };
}


// ========================================
// 💾 BAIXAR IMAGEM GERADA (PC E CELULAR)
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
// Leva pontuações e parâmetros do avatar decidido no PC
// (o e-mail NÃO vai no link)
// ========================================

function montarLinkDoQr(vencedor) {
    const urlBase = window.location.origin + window.location.pathname;

    let link = `${urlBase}?vencedor=${encodeURIComponent(vencedor)}`
        + `&prog=${resultado.programacao}`
        + `&des=${resultado.design}`
        + `&red=${resultado.redes}`
        + `&seg=${resultado.seguranca}`;

    try {
        const generoSelecionado = (typeof obterGeneroSelecionado === "function") ? obterGeneroSelecionado() : null;
        const peleSelecionada = (typeof obterTomPeleSelecionado === "function") ? obterTomPeleSelecionado() : null;
        const avatar = (typeof escolherAvatar === "function") ? escolherAvatar(vencedor, generoSelecionado, peleSelecionada) : null;

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
    if (typeof avatarConfig === "undefined") return null;

    const configArea = avatarConfig.areas[area];
    const pastaPele = (typeof obterPastaPele === "function") ? obterPastaPele(tomPele) : null;

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

    // Posiciona o botão Ficha Completa logo abaixo da tabela RPG
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

    const descricoes = gerarDescricao(
        vencedor,
        resultado[vencedor],
        segundaClasse,
        resultado[segundaClasse]
    );

    const classesRPG = [
        "programacao",
        "design",
        "redes",
        "seguranca"
    ];

    const linhasRPG = classesRPG.map(classe => {
        const xp = resultado[classe];
        const porcentagem = Math.min(xp * 2, 100);

        return `
            <div class="rpg-linha">
                <div class="rpg-classe">
                    <span class="icone-classe">
                        <img src="${classes[classe].icone}" alt="${classes[classe].nome}">
                    </span>
                    <span class="nome-classe">
                        ${classes[classe].nome}
                    </span>
                </div>

                <div class="rpg-xp">
                    <div class="barra-xp">
                        <div
                            class="barra-xp-preenchida"
                            style="width: ${porcentagem}%"
                        ></div>
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
                    
                    <!-- SELO TOPO: ESTRELA AMARELA + ÍCONE DA CLASSE + MEU TALENTO -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 6px 14px; background: rgba(0, 0, 0, 0.75); border: 1.5px solid #ffcc00; border-radius: 20px; box-shadow: 0 0 10px rgba(255, 204, 0, 0.3); width: fit-content;">
                        <span style="font-size: 0.95rem; line-height: 1;">⭐</span>
                        <img 
                            src="${classes[vencedor].icone}" 
                            alt="${classes[vencedor].nome}" 
                            style="width: 18px; height: 18px; object-fit: contain; filter: drop-shadow(0 0 3px rgba(255, 204, 0, 0.5));"
                        >
                        <span style="font-size: 0.74rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;">
                            MEU TALENTO: ${classes[vencedor].nome}
                        </span>
                    </div>

                    <div class="avatar-card" id="avatarCard"></div>
                    
                    <!-- SELO RODAPÉ: EVENTO -->
                    <div style="padding: 5px 14px; background: rgba(0, 0, 0, 0.65); border: 1.5px solid #ffcc00; border-radius: 20px; box-shadow: 0 0 10px rgba(255, 204, 0, 0.25);">
                        <span style="font-size: 0.72rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px;">✦ EU FUI NO SEJA FATEC • TI ✦</span>
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

                <!-- CONTAINER DO QR CODE DINÂMICO (PC) -->
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
                        <img
                            src="${classes[vencedor].icone}"
                            alt="${classes[vencedor].nome}"
                        >
                    </div>

                    <div class="titulo">
                        SUA CLASSE DevSide
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

                    <p class="rpg-descricao">
                        ${descricoes.segunda}
                    </p>
                </div>

                <div class="tabela-rpg" id="blocoAtributosRPG">
                    <div class="tabela-rpg-titulo">
                        ⚔️ ATRIBUTOS DO PERSONAGEM
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

    // --- AÇÕES DOS BOTÕES (PC vs CELULAR) ---

    // 1. Avatar com Selo
    const btnAvatarSelo = document.getElementById("btnBaixarAvatarSelo");
    if (btnAvatarSelo) {
        btnAvatarSelo.addEventListener("click", function () {
            if (!modoCelular) {
                exibirQrCodePC();
                return;
            }

            const alvo = document.getElementById("areaAvatarComSelo");
            if (!alvo || typeof html2canvas === "undefined") return;

            btnAvatarSelo.innerText = "⏳ Gerando...";
            html2canvas(alvo, { backgroundColor: "#0b0f19", scale: 2 }).then(canvas => {
                baixarCanvas(canvas, `Avatar_Dev_${vencedor}.png`);
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
                exibirQrCodePC();
                return;
            }

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
                baixarCanvas(canvas, `Ficha_Dev_${vencedor}.png`);
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
        resultado.programacao = parseInt(urlParams.get("prog")) || 0;
        resultado.design = parseInt(urlParams.get("des")) || 0;
        resultado.redes = parseInt(urlParams.get("red")) || 0;
        resultado.seguranca = parseInt(urlParams.get("seg")) || 0;

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

        // Recupera apelido
        const campoApelido = document.getElementById("nickname");
        const apelidoDoLink = (urlParams.get("a") || "").slice(0, 20);
        if (campoApelido) campoApelido.value = apelidoDoLink;

        // Reconstrói o avatar idêntico ao do PC
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

        // Aplica o layout mobile limpo
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
        console.log("🎮 Abrindo resultado PixelU...");

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