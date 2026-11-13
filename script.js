// =====================================
// INVISÍVEL - JAVASCRIPT
// =====================================

// LOGIN

function abrirLogin() {
    const modal = document.getElementById("modal-login");
    if (modal) modal.style.display = "flex";
}

function fecharLogin() {
    const modal = document.getElementById("modal-login");
    if (modal) modal.style.display = "none";
}

// CADASTRO

function abrirCadastro() {
    fecharLogin();
    const modal = document.getElementById("modal-cadastro");
    if (modal) modal.style.display = "flex";
}

function fecharCadastro() {
    const modal = document.getElementById("modal-cadastro");
    if (modal) modal.style.display = "none";
}

// ENTRAR

function entrar(event) {
    event.preventDefault();

    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Demonstração: login recebido com sucesso!");
    fecharLogin();
}

// CADASTRAR

function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome-cadastro").value;
    const email = document.getElementById("email-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Cadastro demonstrativo realizado com sucesso!");
    fecharCadastro();
}

// PESQUISAR CONTEÚDOS

function pesquisar() {
    const campo = document.getElementById("busca");
    const resultado = document.getElementById("resultado-busca");

    if (!campo || !resultado) return;

    const busca = campo.value.trim().toLowerCase();

    if (!busca) {
        resultado.innerHTML = "Digite uma matéria para pesquisar.";
        return;
    }

    const materias = {
        matematica: "Matemática: números, álgebra, geometria e funções.",
        biologia: "Biologia: células, genética, ecologia e evolução.",
        portugues: "Português: gramática, interpretação e literatura.",
        geografia: "Geografia: clima, população e globalização.",
        quimica: "Química: átomos, ligações e reações químicas.",
        fisica: "Física: movimento, energia e eletricidade."
    };

    resultado.innerHTML = "";

    let encontrado = false;

    for (let materia in materias) {
        if (materia.includes(busca)) {
            resultado.innerHTML += '<p>${materias[materia]}</p>';
            encontrado = true;
        }
    }

    if (!encontrado) {
        resultado.innerHTML = "Nenhum conteúdo encontrado.";
    }
}

// CONTEÚDOS DAS MATÉRIAS

function mostrarConteudo(materia) {
    const resultado = document.getElementById("resultado-busca");

    if (!resultado) return;

    const conteudos = {
        matematica: "Estude álgebra, geometria, porcentagem e funções.",
        biologia: "Estude células, genética, ecologia e corpo humano.",
        portugues: "Estude interpretação textual, gramática e literatura.",
        geografia: "Estude cartografia, clima, relevo e globalização.",
        quimica: "Estude tabela periódica, ligações e reações.",
        fisica: "Estude cinemática, dinâmica, energia e eletricidade."
    };

    resultado.innerHTML = `
        <h3>${materia}</h3>
        <p>${conteudos[materia] || "Conteúdo em desenvolvimento."}</p>
    `;
}

// BIBLIOTECA

function mostrarBiblioteca(tipo) {
    const resultado = document.getElementById("resultado-biblioteca");

    if (!resultado) return;

    const materiais = {
        pdf: "Biblioteca de PDFs: resumos, apostilas e materiais de estudo.",
        videos: "Biblioteca de vídeos: aulas e explicações de conteúdos.",
        resumos: "Biblioteca de resumos: revisões rápidas para estudar."
    };

    resultado.innerHTML = materiais[tipo] || "Material em desenvolvimento.";
}

// EXERCÍCIOS E SIMULADOS

function responder(resposta) {
    const resultado = document.getElementById("resultado-questao");

    if (!resultado) return;

    if (resposta === 2) {
        resultado.innerHTML = "Parabéns! Resposta correta!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Não foi dessa vez! Tente novamente.";
        resultado.style.color = "red";
    }
}

// FECHAR MODAIS AO CLICAR FORA

window.addEventListener("click", function(event) {
    const login = document.getElementById("modal-login");
    const cadastro = document.getElementById("modal-cadastro");

    if (event.target === login) {
        fecharLogin();
    }

    if (event.target === cadastro) {
        fecharCadastro();
    }
});

console.log("INVISÍVEL carregado com sucesso!");