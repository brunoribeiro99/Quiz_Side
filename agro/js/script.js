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
    // Zera os pontos antes do novo cálculo
    resultado.agrotech = 0;
    resultado.agroprod = 0;
    resultado.agroeco = 0;
    resultado.agrolab = 0;

    // Calcula de Q1 a Q8
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

    // Renderiza cada linha com o ícone correspondente e a barra de XP
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

    // Injeta a tela completa de resultado no padrão visual do AgroSide
    areaResultado.innerHTML = `
    <div class="resultado-grid">
        <div class="resultado-coluna-esquerda">
            <div class="avatar-card" id="avatarCard"></div>

            <button type="button" class="btn-baixar-avatar" id="btnBaixarAvatar">
                ⬇ Baixar minha imagem
            </button>
        </div>

        <div class="resultado-coluna-direita">
            <div class="classe-principal">
                <div class="icone">
                    <img src="${classes[vencedor].icone}" alt="${classes[vencedor].nome}">
                </div>

                <div class="titulo">
                    SUA CLASSE NO AGRO
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

            <div class="tabela-rpg">
                <div class="tabela-rpg-titulo">
                    🌾 SEUS ATRIBUTOS NO CAMPO
                </div>
                ${linhasRPG}
            </div>
        </div>
        </div>
    `;
}


// ========================================
// 🏆 BOTÃO "VER MINHA PONTUAÇÃO"
// ========================================

document.addEventListener("DOMContentLoaded", function () {
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