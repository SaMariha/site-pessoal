document.addEventListener("DOMContentLoaded", function() {
    const imagemCaida = document.getElementById("imagemCaida");

    // Aguarda 1 segundo antes de iniciar a animação
    setTimeout(() => {
        imagemCaida.style.top = "calc(50% - 150px)"; // Muda a posição para o centro da tela
    }, 1000);
});