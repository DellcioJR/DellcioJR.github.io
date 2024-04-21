// Espera que o conteúdo HTML seja carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    // Animação das letras se escrevendo no título do cabeçalho
    const headerTitle = document.querySelector('header h1');
    const titleText = headerTitle.textContent;
    headerTitle.textContent = '';

    for (let i = 0; i < titleText.length; i++) {
        const span = document.createElement('span');
        span.textContent = titleText[i];
        span.style.animationDelay = `${i * 0.1}s`;
        headerTitle.appendChild(span);
    }
});


