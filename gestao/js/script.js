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
// A = Líder | B = Empreendedor | C = Marketing | D = Pessoas | E = Dados/Finanças
// ========================================

const TOTAL_PERGUNTAS = 8;
const XP_MAXIMO = TOTAL_PERGUNTAS * 5; // 40

const pontuacao = {

    // 01. Missão em uma empresa
    q1: {
        q1a: { lid: 5, emp: 2, mkt: 2, pes: 3 }, // Liderar equipe rumo a grandes resultados
        q1b: { lid: 2, emp: 5, mkt: 3, pes: 1 }, // Criar um negócio que não existe
        q1c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Lançar uma marca
        q1d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Ambiente de trabalho melhor
        q1e: { lid: 4, emp: 2, mkt: 3, pes: 1 }  // Aumentar os lucros
    },

    // 02. Empresa perdendo clientes
    q2: {
        q2a: { lid: 5, emp: 2, mkt: 1, pes: 3 }, // Reunir equipe e plano de ação
        q2b: { lid: 2, emp: 5, mkt: 3, pes: 1 }, // Solução diferente da concorrência
        q2c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Investigar comportamento do consumidor
        q2d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Ouvir funcionários e melhorar atendimento
        q2e: { lid: 3, emp: 2, mkt: 4, pes: 2 }  // Analisar dados de vendas e satisfação
    },

    // 03. Feira de empreendedorismo
    q3: {
        q3a: { lid: 5, emp: 2, mkt: 1, pes: 3 }, // Como os negócios são administrados
        q3b: { lid: 1, emp: 5, mkt: 3, pes: 2 }, // Startups e ideias inovadoras
        q3c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Campanhas e divulgação
        q3d: { lid: 2, emp: 3, mkt: 2, pes: 5 }, // Histórias dos empreendedores
        q3e: { lid: 4, emp: 2, mkt: 3, pes: 1 }  // Números e resultados financeiros
    },

    // 04. R$ 10 mil para um projeto
    q4: {
        q4a: { lid: 5, emp: 2, mkt: 1, pes: 4 }, // Organizar equipe e planejamento
        q4b: { lid: 2, emp: 5, mkt: 2, pes: 1 }, // Investir em ideia de negócio
        q4c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Campanha para vender produto
        q4d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Projeto para capacitar pessoas
        q4e: { lid: 4, emp: 3, mkt: 2, pes: 1 }  // Custos, riscos e retorno
    },

    // 05. Superpoder profissional
    q5: {
        q5a: { lid: 5, emp: 2, mkt: 1, pes: 3 }, // Decisões difíceis com confiança
        q5b: { lid: 2, emp: 5, mkt: 3, pes: 1 }, // Transformar ideia em inovação
        q5c: { lid: 2, emp: 3, mkt: 5, pes: 2 }, // Entender o que os clientes desejam
        q5d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Motivar e unir qualquer equipe
        q5e: { lid: 3, emp: 3, mkt: 4, pes: 1 }  // Prever tendências com dados
    },

    // 06. Papel no trabalho em grupo
    q6: {
        q6a: { lid: 5, emp: 1, mkt: 2, pes: 3 }, // Coordenar atividades e prazos
        q6b: { lid: 1, emp: 5, mkt: 3, pes: 2 }, // Propor ideias criativas
        q6c: { lid: 2, emp: 3, mkt: 5, pes: 2 }, // Apresentar e divulgar o projeto
        q6d: { lid: 3, emp: 1, mkt: 1, pes: 5 }, // Mediar conflitos e apoiar colegas
        q6e: { lid: 4, emp: 2, mkt: 3, pes: 1 }  // Organizar informações e avaliar resultados
    },

    // 07. Desafio empresarial
    q7: {
        q7a: { lid: 5, emp: 2, mkt: 1, pes: 3 }, // Crescer de forma organizada
        q7b: { lid: 2, emp: 5, mkt: 3, pes: 1 }, // Produto que revolucione o mercado
        q7c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Marca conhecida nacionalmente
        q7d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Diminuir rotatividade
        q7e: { lid: 4, emp: 2, mkt: 3, pes: 1 }  // Reduzir desperdícios e melhorar rentabilidade
    },

    // 08. Futuro profissional
    q8: {
        q8a: { lid: 5, emp: 3, mkt: 1, pes: 2 }, // Dirigindo uma grande organização
        q8b: { lid: 2, emp: 5, mkt: 2, pes: 1 }, // Dono do próprio negócio
        q8c: { lid: 1, emp: 3, mkt: 5, pes: 2 }, // Marcas e estratégias digitais
        q8d: { lid: 3, emp: 1, mkt: 2, pes: 5 }, // Desenvolvimento de talentos
        q8e: { lid: 4, emp: 2, mkt: 3, pes: 1 }  // Decisões com dados e indicadores
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

    // Injeta a estrutura encapsulada em duas colunas (resultado-grid)
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

                <!-- BOTÕES DE DOWNLOAD LADO A LADO (_ _) -->
                <div style="display: flex; gap: 8px; width: 100%; max-width: 250px; margin-top: 14px;">
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

                <!-- BOTÃO REFAZER / VOLTAR AO MENU PRINCIPAL -->
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

                <!-- CONTAINER DO QR CODE DINÂMICO (INICIA OCULTO) -->
                <div id="blocoQrCodeDinamico" style="display: none; margin-top: 14px; flex-direction: column; align-items: center; gap: 6px;">
                    <span id="qrLegenda" style="font-size: 0.72rem; color: #ffcc00; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                        📱 ESCANEIE PARA BAIXAR
                    </span>
                    <div id="qrcode" style="background: #ffffff; padding: 6px; border: 2px solid #ffcc00; box-shadow: 0 0 10px rgba(255, 204, 0, 0.35); border-radius: 8px; line-height: 0; display: inline-block;"></div>
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
    // 🚀 LÓGICA DE GERAÇÃO DO QR CODE COMPATÍVEL COM NETLIFY
    // =========================================================
    function atualizarQrCode(tipo) {
        const bloco = document.getElementById("blocoQrCodeDinamico");
        const containerQr = document.getElementById("qrcode");
        const legenda = document.getElementById("qrLegenda");

        if (!bloco || !containerQr || typeof QRCode === "undefined") return;

        // Monta a URL pública limpa na Netlify com as variáveis necessárias
        const urlBase = window.location.origin + window.location.pathname;
        const linkNetlify = `${urlBase}?vencedor=${encodeURIComponent(vencedor)}&lid=${resultado.lid}&emp=${resultado.emp}&mkt=${resultado.mkt}&pes=${resultado.pes}&tipo=${tipo}`;

        containerQr.innerHTML = "";
        new QRCode(containerQr, {
            text: linkNetlify,
            width: 105,
            height: 105,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });

        if (legenda) {
            legenda.innerText = (tipo === "avatar") 
                ? "📱 ESCANEIE: AVATAR NO CELULAR" 
                : "📱 ESCANEIE: FICHA NO CELULAR";
        }

        bloco.style.display = "flex";
    }

    // --- LÓGICA DE DOWNLOAD DOS BOTÕES ---

    // 1. Download do Avatar com Selo + Ativação do QR Code
    const btnAvatarSelo = document.getElementById("btnBaixarAvatarSelo");
    if (btnAvatarSelo) {
        btnAvatarSelo.addEventListener("click", function () {
            const alvo = document.getElementById("areaAvatarComSelo");
            if (!alvo || typeof html2canvas === "undefined") return;

            btnAvatarSelo.innerText = "⏳ Gerando...";
            html2canvas(alvo, { backgroundColor: "#0b0f19", scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL("image/png");

                // Download direto no computador
                const link = document.createElement("a");
                link.download = `Avatar_SejaFatec_${vencedor}.png`;
                link.href = imgData;
                link.click();

                // Gera QR Code apontando para a página na Netlify
                atualizarQrCode("avatar");

                btnAvatarSelo.innerText = "⬇ Avatar + Selo";
            }).catch(() => {
                btnAvatarSelo.innerText = "⬇ Avatar + Selo";
            });
        });
    }

    // 2. Download da Ficha RPG Completa + Ativação do QR Code
    const btnFichaResumo = document.getElementById("btnBaixarFichaResumo");
    if (btnFichaResumo) {
        btnFichaResumo.addEventListener("click", function () {
            const avatarSelo = document.getElementById("areaAvatarComSelo");
            const atributos = document.getElementById("blocoAtributosRPG");
            if (!avatarSelo || !atributos || typeof html2canvas === "undefined") return;

            btnFichaResumo.innerText = "⏳ Gerando...";

            // Cria um container temporário para a ficha completa
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
                const imgData = canvas.toDataURL("image/png");

                // Download direto no computador
                const link = document.createElement("a");
                link.download = `Ficha_RPG_${vencedor}.png`;
                link.href = imgData;
                link.click();

                document.body.removeChild(cardExport);

                // Gera QR Code apontando para a página na Netlify
                atualizarQrCode("ficha");

                btnFichaResumo.innerText = "📜 Ficha Completa";
            }).catch(() => {
                if (document.body.contains(cardExport)) document.body.removeChild(cardExport);
                btnFichaResumo.innerText = "📜 Ficha Completa";
            });
        });
    }
} // <--- FECHA A FUNÇÃO mostrarResultado()


// ========================================
// 🏆 BOTÃO "VER MINHA PONTUAÇÃO" & LEITURA DE URL
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. VERIFICA SE A PÁGINA FOI ABERTA VIA QR CODE NO CELULAR COM PARÂMETROS
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("vencedor")) {
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
        return; // Pula o resto pois a tela já é de resultado
    }

    // 2. BOTÃO DO QUIZ NORMAL
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