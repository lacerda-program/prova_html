document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let nome = document.getElementById("nome").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensagem = document.getElementById("mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos!");
            } else {
                alert("Mensagem enviada com sucesso!");
            }
        });
    }
});

