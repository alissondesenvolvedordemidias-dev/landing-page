// Espera o conteúdo do HTML carregar totalmente antes de rodar o script
// Isso é uma camada extra de segurança, mesmo colocando o script no final do body.
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // FUNCIONALIDADE 1: SAUDAÇÃO DINÂMICA (Bom dia/Tarde/Noite)
    // ======================================================
    
    // 1. Pegamos a hora atual do sistema
    const horaAtual = new Date().getHours();
    let saudacao;

    // 2. Definimos a mensagem baseada na hora usando if/else
    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde!";
    } else {
        // Cobre a noite e a madrugada
        saudacao = "Boa noite!";
    }

    // 3. Selecionamos o parágrafo onde queremos inserir a mensagem.
    // Usamos o seletor CSS: dentro da section #sobre, a div .conteudo, o parágrafo p.
    const paragrafoSobre = document.querySelector('#sobre .conteudo p');

    // 4. Se o parágrafo existir, adicionamos a saudação no início do texto dele.
    if (paragrafoSobre) {
        // Pegamos o texto atual e colocamos a saudação na frente.
        const textoOriginal = paragrafoSobre.innerText;
        paragrafoSobre.innerText = `${saudacao} ${textoOriginal}`;
    }


    // ======================================================
    // FUNCIONALIDADE 2: NAVEGAÇÃO SUAVE (SMOOTH SCROLL)
    // ======================================================

    // 1. Selecionamos todos os links que estão dentro da navegação (nav ul li a)
    // querySelectorAll retorna uma lista de elementos (como se fosse um array)
    const linksNavegacao = document.querySelectorAll('nav ul li a');

    // 2. Para cada link encontrado na lista...
    linksNavegacao.forEach(link => {
        // ...adicionamos um "ouvinte" para o evento de clique.
        link.addEventListener('click', (event) => {
            // Impede o comportamento padrão do link (que é pular seco para a seção)
            event.preventDefault();

            // Pega o valor do href do link clicado (ex: "#projetos")
            const idAlvo = link.getAttribute('href');
            
            // Seleciona a seção correspondente a esse ID na página
            const secaoAlvo = document.querySelector(idAlvo);

            // Se a seção existir, faz a rolagem suave até ela
            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth', // Define o comportamento como suave
                    block: 'start'      // Alinha o topo da seção com o topo da janela
                });
            }
        });
    });


    // ======================================================
    // FUNCIONALIDADE 3: CONTROLE DE ENVIO DO FORMULÁRIO
    // ======================================================

    // 1. Selecionamos o formulário dentro da seção de contato
    const formulario = document.querySelector('#contato form');

    // 2. Se o formulário existir na página...
    if (formulario) {
        // ...adicionamos um ouvinte para o evento 'submit' (quando clica no botão enviar)
        formulario.addEventListener('submit', (event) => {
            // O MAIS IMPORTANTE: Impede a página de recarregar!
            event.preventDefault();

            // Captura o valor que o usuário digitou no campo nome, só para usar na mensagem.
            const nomeUsuario = document.getElementById('nome').value;

            // Mostra um alerta na tela (simulando um envio com sucesso)
            alert(`Obrigado, ${nomeUsuario}! Esta é uma simulação de envio. Em breve esta funcionalidade estará ativa.`);

            // Limpa os campos do formulário após o "envio"
            formulario.reset();
        });
    }
});