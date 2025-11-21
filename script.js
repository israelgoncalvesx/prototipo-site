const DADOS_ESCOLA = {
    materias: {
        1: {
            titulo: "Matemática Básica",
            professor: "Prof. Carlos Silva",
            email: "carlos.silva@futureschool.edu",
            conteudos: [
                { tipo: "pdf", titulo: "Aula 01: Conjuntos Numéricos", desc: "PDF - 2.4MB" },
                { tipo: "video", titulo: "Vídeo: Operações com Frações", desc: "15 min" },
                { tipo: "pdf", titulo: "Lista de Exercícios 1", desc: "PDF - 1.1MB" }
            ],
            forum: [
                { autor: "Maria", texto: "Alguém conseguiu fazer a questão 4 da lista?" },
                { autor: "Prof. Carlos", texto: "Lembrem-se da regra dos sinais, pessoal!" }
            ],
            atividades: [
                { titulo: "Lista Avaliativa 1", entrega: "25/11/2025", status: "Pendente" },
                { titulo: "Prova Mensal", entrega: "10/12/2025", status: "Agendada" }
            ]
        },
        2: {
            titulo: "História do Brasil",
            professor: "Prof. Ana Souza",
            email: "ana.souza@futureschool.edu",
            conteudos: [
                { tipo: "video", titulo: "Documentário: Ouro Preto", desc: "45 min" },
                { tipo: "pdf", titulo: "Resumo: Ciclo do Ouro", desc: "PDF - 5MB" }
            ],
            forum: [
                { autor: "João", texto: "Onde encontro o texto de apoio sobre Minas?" }
            ],
            atividades: [
                { titulo: "Redação Inconfidência", entrega: "30/11/2025", status: "Entregue" }
            ]
        },
        3: {
            titulo: "Química Geral",
            professor: "Prof. Roberto Mendes",
            email: "roberto.mendes@futureschool.edu",
            conteudos: [
                { tipo: "pdf", titulo: "Tabela Periódica Atualizada", desc: "Imagem PNG" }
            ],
            forum: [],
            atividades: []
        }
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function toggleMenuAcessibilidade() {
    const menu = document.getElementById('menu-acessibilidade');
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.display = 'block'; 
    } else {
        menu.classList.add('hidden');
        setTimeout(() => { menu.style.display = 'none'; }, 300);
    }
}

function toggleTema(modo) {
    const body = document.body;
    
    if (modo === 'dark') {
        body.classList.remove('daltonic-mode');
        body.classList.toggle('dark-mode');
    } else if (modo === 'daltonico') {
        body.classList.remove('dark-mode');
        body.classList.toggle('daltonic-mode');
    }
}

function toggleDislexia() {
    document.body.classList.toggle('dyslexic-font');
}

let synthesis = window.speechSynthesis;
let utterance = null;

function lerTextoTela() {
    pararLeitura();
    const conteudo = document.getElementById('conteudo-principal').innerText;
    utterance = new SpeechSynthesisUtterance(conteudo);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0; 
    synthesis.speak(utterance);
}

function pararLeitura() {
    if (synthesis.speaking) {
        synthesis.cancel();
    }
}

function iniciarDitado(inputId) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Seu navegador não suporta ditado por voz. Tente usar o Google Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const btnMic = document.querySelector(`button[onclick="iniciarDitado('${inputId}')"]`);
    const inputField = document.getElementById(inputId);

    recognition.start();

    recognition.onstart = function() {
        btnMic.classList.add('ouvindo');
        inputField.placeholder = "Ouvindo... pode falar...";
    };

    recognition.onend = function() {
        btnMic.classList.remove('ouvindo');
        inputField.placeholder = "Qual sua dúvida hoje?";
    };

    recognition.onresult = function(event) {
        const textoFalado = event.results[0][0].transcript;
        inputField.value += (inputField.value ? ' ' : '') + textoFalado;
    };

    recognition.onerror = function(event) {
        console.error("Erro no reconhecimento de voz", event.error);
        btnMic.classList.remove('ouvindo');
        alert("Não consegui te ouvir. Tente novamente.");
    };
}

function mostrarLoader(callback) {
    const loader = document.getElementById('loader-overlay');
    loader.classList.remove('hidden');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        if (callback) callback();
    }, 600);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader-overlay').classList.add('hidden');
    }, 1000);
});

function navegarPara(secaoId) {
    mostrarLoader(() => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open');
        document.getElementById('mobile-overlay').classList.remove('active');

        document.querySelectorAll('.secao').forEach(el => el.classList.remove('ativo'));
        document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('ativo'));

        if(secaoId === 'materias') {
            document.getElementById('materias').classList.add('ativo');
            document.getElementById('detalhe-materia').classList.remove('ativo');
        } else {
            document.getElementById(secaoId).classList.add('ativo');
        }

        const btnId = 'btn-' + (secaoId === 'materias' ? 'materias' : secaoId);
        const btn = document.getElementById(btnId);
        if(btn) btn.classList.add('ativo');

        const titulos = {
            'materias': 'Painel do Estudante',
            'notas': 'Desempenho Acadêmico',
            'forum-geral': 'Comunidade Escolar'
        };
        document.getElementById('titulo-pagina').innerText = titulos[secaoId] || 'Future School';
    });
}

function abrirMateria(id) {
    mostrarLoader(() => {
        const dados = DADOS_ESCOLA.materias[id];
        if (!dados) return;

        document.getElementById('materia-titulo').innerText = dados.titulo;
        document.getElementById('materia-prof').innerText = dados.professor;
        document.getElementById('email-prof-display').innerText = dados.email || "email@escola.com";

        const divConteudo = document.getElementById('conteudo');
        divConteudo.innerHTML = '';
        divConteudo.className = 'conteudo-aba ativo anime-up';

        if (id === 2) {
             divConteudo.classList.add('historia-conteiner');
        } else {
             divConteudo.classList.remove('historia-conteiner');
        }
        
        if(dados.conteudos.length === 0) {
            divConteudo.innerHTML = '<div class="empty-state">Nenhum material disponível.</div>';
        } else {
            dados.conteudos.forEach(item => {
                const iconClass = item.tipo === 'video' ? 'fa-play' : 'fa-file-alt';
                divConteudo.innerHTML += `
                    <div class="material-item anime-up">
                        <div class="material-icon"><i class="fas ${iconClass}"></i></div>
                        <div class="material-info">
                            <h4 style="margin-bottom:4px">${item.titulo}</h4>
                            <p style="color:var(--text-light); font-size:0.9rem">${item.desc}</p>
                        </div>
                        <a href="#" class="btn-download">Abrir</a>
                    </div>
                `;
            });
        }

        const divForum = document.getElementById('lista-forum-materia');
        divForum.innerHTML = '';
        if(dados.forum.length > 0) {
            dados.forum.forEach(post => {
                divForum.innerHTML += `
                    <div class="material-item" style="background:var(--secondary); border:none;">
                        <div class="material-icon" style="width:40px; height:40px; font-size:1rem"><i class="fas fa-user"></i></div>
                        <div>
                            <strong style="display:block; color:var(--primary)">${post.autor}</strong>
                            <span style="color:var(--text-light)">${post.texto}</span>
                        </div>
                    </div>`;
            });
        } else {
            divForum.innerHTML = '<p style="padding:20px; color:var(--text-light); text-align:center">Seja o primeiro a perguntar!</p>';
        }

        const listaAtividades = document.getElementById('lista-atividades');
        listaAtividades.innerHTML = '';
        if(dados.atividades.length > 0) {
            dados.atividades.forEach(ativ => {
                const statusClass = ativ.status === 'Pendente' ? 'cursando' : 'aprovado';
                listaAtividades.innerHTML += `
                    <li class="material-item">
                        <div style="flex:1">
                            <h4>${ativ.titulo}</h4>
                            <small style="color:var(--text-light)">Entrega: ${ativ.entrega}</small>
                        </div>
                        <span class="badge ${statusClass}">${ativ.status}</span>
                    </li>`;
            });
        } else {
            listaAtividades.innerHTML = '<p style="padding:20px; color:var(--text-light)">Nenhuma atividade pendente.</p>';
        }

        document.getElementById('materias').classList.remove('ativo');
        document.getElementById('detalhe-materia').classList.add('ativo');
        mudarAbaMateria('conteudo');
    });
}

function enviarEmailProfessor() {
    const assunto = document.getElementById('email-assunto').value;
    const mensagem = document.getElementById('email-mensagem').value;

    if(!assunto || !mensagem) {
        alert("Por favor, preencha o assunto e a mensagem.");
        return;
    }

    mostrarLoader(() => {
        alert("E-mail enviado com sucesso para o professor!");
        document.getElementById('email-assunto').value = "";
        document.getElementById('email-mensagem').value = "";
    });
}

function fecharMateria() {
    mostrarLoader(() => {
        document.getElementById('detalhe-materia').classList.remove('ativo');
        document.getElementById('materias').classList.add('ativo');
        document.getElementById('titulo-pagina').innerText = 'Painel do Estudante';
    });
}

function mudarAbaMateria(abaId) {
    document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativo'));
    document.querySelectorAll('.conteudo-aba').forEach(c => c.classList.remove('ativo'));

    const divAlvo = document.getElementById(abaId);
    if(divAlvo) {
        divAlvo.classList.add('ativo');
    }
    
    const botoes = document.querySelectorAll('.aba');
    botoes.forEach(btn => {
        if(btn.getAttribute('onclick').includes(abaId)) btn.classList.add('ativo');
    });
}