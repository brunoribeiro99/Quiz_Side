const avatarConfig = {
    caminhoBase: "avatar/Personagens/",
    areas: {
        // chave = mesma sigla usada em classes/resultado no script.js
        lid: {
            pasta: "Lider",          // nome da pasta em avatar/Personagens/
            arquivo: "Lider",        // prefixo do arquivo: "Lider (1).png"
            masculino: 20,
            feminino: 20
        },
        emp: {
            pasta: "Empreendedor",
            arquivo: "Empreendedor",
            masculino: 20,
            feminino: 20
        },
        mkt: {
            pasta: "Marketing",
            arquivo: "Marketing",
            masculino: 20,
            feminino: 20
        },
        pes: {
            pasta: "Pessoas",
            arquivo: "Pessoas",
            masculino: 20,
            feminino: 20
        }
    }
};

// ========================================
// FÓRMULA MATEMÁTICA (Hash do E-mail)
// Garante o mesmo avatar para a mesma pessoa
// ========================================
function gerarNumeroPeloTexto(texto, limite) {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) {
        hash = texto.charCodeAt(i) + ((hash << 5) - hash);
    }
    return (Math.abs(hash) % limite) + 1;
}

// ========================================
// DESCOBRIR GÊNERO
// ========================================
function obterGeneroSelecionado() {
    const genero = document.querySelector('input[name="genero"]:checked');

    if (!genero) {
        console.warn("⚠️ Nenhum gênero selecionado.");
        return null;
    }

    if (genero.value === "masculino") {
        return "Masculino";
    }

    if (genero.value === "feminino") {
        return "Feminino";
    }

    // "Não quero informar": o e-mail decide de forma fixa (mesma pessoa, mesmo resultado)
    if (genero.value === "trans") {
        const email = document.getElementById("email")?.value.trim() || "padrao";
        return (gerarNumeroPeloTexto(email, 2) === 1) ? "Masculino" : "Feminino";
    }

    return null;
}

// ========================================
// DESCOBRIR TOM DE PELE
// ========================================
function obterTomPeleSelecionado() {
    const tomPele = document.querySelector('input[name="tomPele"]:checked');

    if (!tomPele) {
        console.warn("⚠️ Nenhum tom de pele selecionado.");
        return null;
    }

    return tomPele.value;
}

// ========================================
// CONVERTER TOM DE PELE PARA PASTA
// ========================================
function obterPastaPele(tomPele) {
    if (tomPele === "clara") {
        return "skin_1";
    }

    if (tomPele === "escura") {
        return "skin_2";
    }

    return null;
}

// ========================================
// ESCOLHER UM AVATAR (COM HASH DO E-MAIL)
// ========================================
function escolherAvatar(area, genero, tomPele) {
    const configArea = avatarConfig.areas[area];

    if (!configArea) {
        console.error("❌ Área de avatar não encontrada:", area);
        return null;
    }

    if (!genero || !tomPele) {
        console.warn("⚠️ Gênero ou tom de pele ausente.");
        return null;
    }

    const pastaPele = obterPastaPele(tomPele);
    if (!pastaPele) {
        console.error("❌ Tom de pele inválido:", tomPele);
        return null;
    }

    const quantidade = configArea[genero.toLowerCase()] || 40;

    // 1. Pega o e-mail preenchido
    const emailInput = document.getElementById("email");
    const emailAluno = (emailInput && emailInput.value.trim().toLowerCase()) || "aluno_padrao";

    // 2. Calcula o número fixo baseado no e-mail + combinação
    const semente = emailAluno + area + genero + tomPele;
    const numero = gerarNumeroPeloTexto(semente, quantidade);

    // 3. Monta o nome do arquivo
    const nomeArquivo = `${configArea.arquivo} (${numero}).png`;

    // 4. Caminho relativo da imagem
    const caminho = encodeURI(
        `${avatarConfig.caminhoBase}${configArea.pasta}/${genero}/sprites/${pastaPele}/${nomeArquivo}`
    );

    return {
        area: area,
        genero: genero,
        tomPele: tomPele,
        pastaPele: pastaPele,
        numero: numero,
        imagem: caminho
    };
}

// ========================================
// MOSTRAR AVATAR NO RESULTADO
// ========================================
function mostrarAvatarNoResultado(avatar) {
    if (!avatar) return;

    const avatarCard = document.getElementById("avatarCard");
    if (!avatarCard) {
        console.error("❌ #avatarCard não encontrado.");
        return;
    }

    avatarCard.innerHTML = "";

    const container = document.createElement("div");
    container.className = "avatar-resultado";

    const imagem = document.createElement("img");
    imagem.src = avatar.imagem;
    imagem.alt = "Avatar GestSide - " + avatar.area;

    imagem.addEventListener("error", function () {
        console.error("❌ Não foi possível carregar o avatar:", avatar.imagem);
        container.remove();
    });

    container.appendChild(imagem);
    avatarCard.appendChild(container);

    const nicknameInput = document.getElementById("nickname");
    const nomeUsuario = (nicknameInput && nicknameInput.value.trim()) || "Jogador";

    const nomeElemento = document.createElement("p");
    nomeElemento.className = "avatar-nome";
    nomeElemento.textContent = nomeUsuario;

    avatarCard.appendChild(nomeElemento);
}

// ========================================
// PRINCIPAL (Retorna o avatar gerado)
// ========================================
function criarAvatar(areaVencedora) {
    const genero = obterGeneroSelecionado();
    const tomPele = obterTomPeleSelecionado();

    if (!genero || !tomPele) return null;

    const avatar = escolherAvatar(areaVencedora, genero, tomPele);
    if (!avatar) return null;

    mostrarAvatarNoResultado(avatar);
    return avatar; // Retorna o avatar para o animacao.js enviar o link para o Sheets
}