// Gênero que começa aparecendo
let generoAtual = "Masculino";

// Avatar escolhido automaticamente
let avatarSelecionado = null;

// Áreas dos personagens
const areas = [
"Programacao",
"Designer",
"Redes",
"Ciberseguranca"
];

// ======================================================
// MOSTRAR OS AVATARES PARA TESTE
// ======================================================

function mostrarAvatares(genero, botao) {

generoAtual = genero;

// Troca o botão ativo
const botoes = document.querySelectorAll(".genero-btn");

botoes.forEach(function(btn) {
    btn.classList.remove("ativo");
});

botao.classList.add("ativo");


// Mostra os 10 avatares de cada área
areas.forEach(function(area) {

    const container = document.getElementById(area);

    container.innerHTML = "";


    for (let numero = 1; numero <= 10; numero++) {

        const caminho =
            "Personagens/" +
            area + "/" +
            genero + "/sprites/" +
            area + " (" +
            numero +
            ").png";


        const card = document.createElement("div");

        card.className = "avatar-card";


        card.innerHTML = `
            <img
                src="${caminho}"
                alt="${area} ${numero}"
            >

            <div class="avatar-nome">
                ${area} ${numero}
            </div>
        `;


        // Clique manual no avatar
        card.addEventListener("click", function() {

            document.querySelectorAll(".avatar-card").forEach(function(outroCard) {
                outroCard.classList.remove("selecionado");
            });


            card.classList.add("selecionado");


            avatarSelecionado = {
                genero: genero,
                area: area,
                numero: numero,
                imagem: caminho
            };


            console.log("Avatar selecionado manualmente:");
            console.log(avatarSelecionado);
        });


        container.appendChild(card);
    }

});

}

// ======================================================
// CALCULAR O RESULTADO DO QUIZ
// ======================================================

function mostrarResultado() {

// Pontos de cada área
let pontos = {
    Programacao: 0,
    Designer: 0,
    Redes: 0,
    Ciberseguranca: 0
};


// ==========================================
// PERGUNTA 1
// ==========================================

const q1 = document.querySelector('input[name="q1"]:checked');

if (q1) {

    pontos[q1.value.charAt(0).toUpperCase() + q1.value.slice(1)]++;

}


// ==========================================
// PERGUNTA 2
// ==========================================

const q2 = document.querySelector('input[name="q2"]:checked');

if (q2) {

    pontos[q2.value.charAt(0).toUpperCase() + q2.value.slice(1)]++;

}


// ==========================================
// PERGUNTA 3
// ==========================================

const q3 = document.querySelector('input[name="q3"]:checked');

if (q3) {

    pontos[q3.value.charAt(0).toUpperCase() + q3.value.slice(1)]++;

}


// ==========================================
// PERGUNTA 4
// ==========================================

const q4 = document.querySelector('input[name="q4"]:checked');

if (q4) {

    pontos[q4.value.charAt(0).toUpperCase() + q4.value.slice(1)]++;

}


// ==========================================
// DESCOBRIR A ÁREA VENCEDORA
// ==========================================

let areaVencedora = "Programacao";

let maiorPontuacao = pontos.Programacao;


if (pontos.Designer > maiorPontuacao) {

    areaVencedora = "Designer";
    maiorPontuacao = pontos.Designer;

}


if (pontos.Redes > maiorPontuacao) {

    areaVencedora = "Redes";
    maiorPontuacao = pontos.Redes;

}


if (pontos.Ciberseguranca > maiorPontuacao) {

    areaVencedora = "Ciberseguranca";
    maiorPontuacao = pontos.Ciberseguranca;

}


// ==========================================
// ESCOLHER 1 DOS 10 AVATARES
// ==========================================

const numeroAvatar = Math.floor(Math.random() * 10) + 1;


const caminhoAvatar =
    "Personagens/" +
    areaVencedora + "/" +
    generoAtual + "/sprites/" +
    areaVencedora + " (" +
    numeroAvatar +
    ").png";


// Guarda o avatar escolhido
avatarSelecionado = {

    genero: generoAtual,

    area: areaVencedora,

    numero: numeroAvatar,

    imagem: caminhoAvatar

};


console.log("Pontuação:", pontos);
console.log("Área vencedora:", areaVencedora);
console.log("Avatar escolhido:", avatarSelecionado);


// ==========================================
// MOSTRAR SOMENTE O AVATAR ESCOLHIDO
// ==========================================

const resultado = document.getElementById("resultado");


resultado.hidden = false;


resultado.innerHTML = `

    <h2>Seu resultado 🎮</h2>

    <p>
        Sua área combina mais com:
        <strong>${areaVencedora}</strong>
    </p>

    <div class="avatar-resultado">

        <img
            src="${caminhoAvatar}"
            alt="Seu avatar"
        >

    </div>

    <p>
        Avatar ${numeroAvatar}
    </p>

`;


// Desce a página até o resultado
resultado.scrollIntoView({
    behavior: "smooth"
});

}

// ======================================================
// CARREGAR MASCULINO AO ABRIR A PÁGINA
// ======================================================

mostrarAvatares(
"Masculino",
document.querySelector(".genero-btn")
);