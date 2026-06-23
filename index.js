// Espera o conteúdo do HTML carregar totalmente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // ======================================================
    // FUNCIONALIDADE 1: SAUDAÇÃO DINÂMICA
    // ======================================================
    const horaAtual = new Date().getHours();
    let saudacao;

    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    // Procura o elemento dedicado para a saudação conforme o CSS
    const elementoSaudacao = document.getElementById('saudacao');
    
    if (elementoSaudacao) {
        elementoSaudacao.innerText = saudacao;
    } else {
        // Fallback: Caso o elemento id="saudacao" não exista, injeta no primeiro parágrafo do sobre
        const paragrafoSobre = document.querySelector('#sobre .conteudo p');
        if (paragrafoSobre) {
            const textoOriginal = paragrafoSobre.innerHTML;
            paragrafoSobre.innerHTML = `<strong>${saudacao}</strong> ${textoOriginal}`;
        }
    }


    // ======================================================
    // FUNCIONALIDADE 2: ANIMAÇÃO AO ROLAR A PÁGINA (Intersection Observer)
    // ======================================================
    // Seleciona todos os elementos que possuem a classe .hidden no HTML
    const elementosEscondidos = document.querySelectorAll('.hidden');

    const observerOpcoes = {
        root: null,         // Usa a janela do navegador como referência
        threshold: 0.15,    // Dispara a animação quando 15% do elemento estiver visível
        rootMargin: "0px"
    };

    const secaoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela, adiciona a classe .show para animar
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: Remova o comentário da linha abaixo se quiser que a animação ocorra apenas uma vez
                // observer.unobserve(entry.target);
            }
        });
    }, observerOpcoes);

    // Vincula o observador a cada elemento escondido
    elementosEscondidos.forEach(elemento => secaoObserver.observe(elemento));


    // ======================================================
    // FUNCIONALIDADE 3: CONTROLE DE ENVIO DO FORMULÁRIO
    // ======================================================
    const formulario = document.querySelector('#contato form');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            // Impede a página de recarregar
            event.preventDefault();

            // Captura o campo de nome de forma segura
            const campoNome = document.getElementById('nome');
            const nomeUsuario = campoNome ? campoNome.value : 'visitante';

            // Exibe o feedback visual de sucesso
            alert(`Obrigado, ${nomeUsuario}! Esta é uma simulação de envio. Em breve esta funcionalidade estará ativa.`);

            // Limpa todos os campos do formulário
            formulario.reset();
        });
    }
});