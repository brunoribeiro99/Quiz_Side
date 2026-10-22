const classes = {
    lid: {
        nome: "Líder Estratégico",
        sigla: "LID",
        icone: "img/icon/lider_icon.png"
    },
    emp: {
        nome: "Empreendedor Inovador",
        sigla: "EMP",
        icone: "img/icon/empreendedor_icon.png"
    },
    mkt: {
        nome: "Estrategista de Marketing",
        sigla: "MKT",
        icone: "img/icon/marketing_icon.png"
    },
    pes: {
        nome: "Gestor de Pessoas",
        sigla: "PES",
        icone: "img/icon/pessoas_icon.png"
    }
};


// ========================================
// 📊 PONTUAÇÃO DO GESTSIDE (1 a 5 por classe)
// ========================================

const TOTAL_PERGUNTAS = 8;
const XP_MAXIMO = TOTAL_PERGUNTAS * 5; // 40

const pontuacao = {
    // 01. Missão em uma empresa
    q1: {
        q1a: { lid: 5, emp: 2, mkt: 2, pes: 3 },
        q1b: { lid: 2, emp: 5, mkt: 3, pes: 1 },
        q1c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q1d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q1e: { lid: 4, emp: 2, mkt: 3, pes: 1 }
    },

    // 02. Empresa perdendo clientes
    q2: {
        q2a: { lid: 5, emp: 2, mkt: 1, pes: 3 },
        q2b: { lid: 2, emp: 5, mkt: 3, pes: 1 },
        q2c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q2d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q2e: { lid: 3, emp: 2, mkt: 4, pes: 2 }
    },

    // 03. Feira de empreendedorismo
    q3: {
        q3a: { lid: 5, emp: 2, mkt: 1, pes: 3 },
        q3b: { lid: 1, emp: 5, mkt: 3, pes: 2 },
        q3c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q3d: { lid: 2, emp: 3, mkt: 2, pes: 5 },
        q3e: { lid: 4, emp: 2, mkt: 3, pes: 1 }
    },

    // 04. R$ 10 mil para um projeto
    q4: {
        q4a: { lid: 5, emp: 2, mkt: 1, pes: 4 },
        q4b: { lid: 2, emp: 5, mkt: 2, pes: 1 },
        q4c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q4d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q4e: { lid: 4, emp: 3, mkt: 2, pes: 1 }
    },

    // 05. Superpoder profissional
    q5: {
        q5a: { lid: 5, emp: 2, mkt: 1, pes: 3 },
        q5b: { lid: 2, emp: 5, mkt: 3, pes: 1 },
        q5c: { lid: 2, emp: 3, mkt: 5, pes: 2 },
        q5d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q5e: { lid: 3, emp: 3, mkt: 4, pes: 1 }
    },

    // 06. Papel no trabalho em grupo
    q6: {
        q6a: { lid: 5, emp: 1, mkt: 2, pes: 3 },
        q6b: { lid: 1, emp: 5, mkt: 3, pes: 2 },
        q6c: { lid: 2, emp: 3, mkt: 5, pes: 2 },
        q6d: { lid: 3, emp: 1, mkt: 1, pes: 5 },
        q6e: { lid: 4, emp: 2, mkt: 3, pes: 1 }
    },

    // 07. Desafio empresarial
    q7: {
        q7a: { lid: 5, emp: 2, mkt: 1, pes: 3 },
        q7b: { lid: 2, emp: 5, mkt: 3, pes: 1 },
        q7c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q7d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q7e: { lid: 4, emp: 2, mkt: 3, pes: 1 }
    },

    // 08. Futuro profissional
    q8: {
        q8a: { lid: 5, emp: 3, mkt: 1, pes: 2 },
        q8b: { lid: 2, emp: 5, mkt: 2, pes: 1 },
        q8c: { lid: 1, emp: 3, mkt: 5, pes: 2 },
        q8d: { lid: 3, emp: 1, mkt: 2, pes: 5 },
        q8e: { lid: 4, emp: 2, mkt: 3, pes: 1 }
    }
};


// ========================================
// RESULTADO
// ========================================

const resultado = {
    lid: 0,
    emp: 0,
    mkt: 0,
    pes: 0
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
    resultado.lid += pontos.lid;
    resultado.emp += pontos.emp;
    resultado.mkt += pontos.mkt;
    resultado.pes += pontos.pes;
}


// ========================================
// CÁLCULO DAS QUESTÕES (1 a 8)
// ========================================

function calcularQuestao(numero) {
    const resposta = document.querySelector(`input[name="q${numero}"]:checked`);
    if (!resposta) return;
    const pontos = pontuacao[`q${numero}`][resposta.id];
    somarPontos(pontos);
}


// ========================================
// 📊 CALCULAR RESULTADO
// ========================================

function calcularResultado() {
    resultado.lid = 0;
    resultado.emp = 0;
    resultado.mkt = 0;
    resultado.pes = 0;

    for (let i = 1; i <= TOTAL_PERGUNTAS; i++) {
        calcularQuestao(i);
    }

    console.log("========== GESTSIDE ==========");
    console.log("Líder Estratégico (LID):", resultado.lid);
    console.log("Empreendedor Inovador (EMP):", resultado.emp);
    console.log("Estrategista de Marketing (MKT):", resultado.mkt);
    console.log("Gestor de Pessoas (PES):", resultado.pes);

    mostrarResultado();
}


// ========================================
// DESCOBRIR CLASSE
// ========================================

function descobrirVencedor() {
    let vencedor = "lid";
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

    if (classe === "lid") {
        if (xp >= 24) {
            descricaoPrincipal = "Você nasceu para conduzir. Define o rumo, organiza a equipe e toma decisões difíceis com clareza, sempre de olho nos grandes resultados.";
        } else {
            descricaoPrincipal = "Você tem facilidade para organizar pessoas e prazos e costuma assumir a frente quando é preciso decidir o próximo passo.";
        }
    } else if (classe === "emp") {
        if (xp >= 24) {
            descricaoPrincipal = "Você enxerga oportunidades onde outros veem problemas. Gosta de criar do zero, assumir riscos e transformar uma ideia em um negócio de verdade.";
        } else {
            descricaoPrincipal = "Você tem um lado criativo e inovador, sempre pensando em formas diferentes de resolver problemas e criar algo novo.";
        }
    } else if (classe === "mkt") {
        if (xp >= 24) {
            descricaoPrincipal = "Você entende o que as pessoas querem antes mesmo de elas dizerem. Sabe contar a história de uma marca e conquistar o mercado com estratégia.";
        } else {
            descricaoPrincipal = "Você presta atenção no comportamento do público e em como uma marca, um produto ou uma ideia chega até as pessoas.";
        }
    } else if (classe === "pes") {
        if (xp >= 24) {
            descricaoPrincipal = "Para você, uma empresa forte é feita de pessoas fortes. Motiva, escuta, media conflitos e desenvolve talentos que fazem o time crescer junto.";
        } else {
            descricaoPrincipal = "Você tem sensibilidade para perceber como as pessoas se sentem no trabalho e vontade de tornar o ambiente melhor para todos.";
        }
    }

    if (segundaClasse === "lid") {
        if (xpSegunda >= 24) {
            toqueSegunda = "E isso é reforçado por um lado de liderança bem marcado: você gosta de planejar, decidir e conduzir o grupo até a meta.";
        } else {
            toqueSegunda = "Também apareceu um perfil de organização e visão de gestão, que ajuda a colocar as ideias em prática.";
        }
    } else if (segundaClasse === "emp") {
        if (xpSegunda >= 24) {
            toqueSegunda = "E você ainda carrega um espírito empreendedor forte, sempre querendo inovar e criar algo que ainda não existe.";
        } else {
            toqueSegunda = "Também existe uma curiosidade por ideias novas e por oportunidades de negócio.";
        }
    } else if (segundaClasse === "mkt") {
        if (xpSegunda >= 24) {
            toqueSegunda = "E esse olhar de mercado aparece bastante: você pensa em público, divulgação e em como destacar uma marca.";
        } else {
            toqueSegunda = "Também existe interesse em entender o consumidor e a forma como uma marca se comunica.";
        }
    } else if (segundaClasse === "pes") {
        if (xpSegunda >= 24) {
            toqueSegunda = "E você tem um cuidado muito forte com as pessoas, o que faz diferença em qualquer equipe que participa.";
        } else {
            toqueSegunda = "Também aparece uma preocupação em manter um bom clima e apoiar quem está ao seu lado.";
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
// Leva pontuações do GestSide e parâmetros do avatar
// ========================================

function montarLinkDoQr(vencedor) {
    const urlBase = window.location.origin + window.location.pathname;

    let link = `${urlBase}?vencedor=${encodeURIComponent(vencedor)}`
        + `&lid=${resultado.lid}`
        + `&emp=${resultado.emp}`
        + `&mkt=${resultado.mkt}`
        + `&pes=${resultado.pes}`;

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

    // Suporta tanto o padrão do GestSide (pasta/arquivo) quanto dos outros (nome)
    const pastaArea = configArea.pasta || configArea.nome;
    const prefixoArquivo = configArea.arquivo || configArea.nome;

    const nomeArquivo = `${prefixoArquivo} (${numero}).png`;

    return {
        area: area,
        genero: genero,
        tomPele: tomPele,
        pastaPele: pastaPele,
        numero: numero,
        imagem: encodeURI(`${avatarConfig.caminhoBase}${pastaArea}/${genero}/sprites/${pastaPele}/${nomeArquivo}`)
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

    const classesRPG = ["lid", "emp", "mkt", "pes"];

    const linhasRPG = classesRPG.map(classe => {
        const xp = resultado[classe];
        const porcentagem = Math.min((xp / XP_MAXIMO) * 100, 100);

        return `
            <div class="rpg-linha">
                <div class="rpg-classe">
                    <span class="icone-classe">
                        <img src="${classes[classe].icone}" alt="${classes[classe].nome}">
                    </span>
                    <span class="nome-classe">
                        ${classes[classe].nome} (${classes[classe].sigla})
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
                        <span style="font-size: 0.72rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.8px;">✦ EU FUI NO SEJA FATEC • GESTÃO ✦</span>
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
                        SUA CLASSE GestSide
                    </div>

                    <h3>
                        ${classes[vencedor].nome} (${classes[vencedor].sigla})
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
                baixarCanvas(canvas, `Avatar_Gest_${vencedor}.png`);
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
                baixarCanvas(canvas, `Ficha_Gest_${vencedor}.png`);
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
        resultado.lid = parseInt(urlParams.get("lid")) || 0;
        resultado.emp = parseInt(urlParams.get("emp")) || 0;
        resultado.mkt = parseInt(urlParams.get("mkt")) || 0;
        resultado.pes = parseInt(urlParams.get("pes")) || 0;

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
        console.log("🎮 Abrindo resultado GestSide...");

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