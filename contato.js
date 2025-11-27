document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    // Criar mensagem dinâmica
    const msgBox = document.createElement("div");
    msgBox.id = "msgBox";
    msgBox.style.display = "none";
    document.querySelector(".box").appendChild(msgBox);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            showMessage("Preencha todos os campos!", "error");
            return;
        }

        // Mostra mensagem de confirmação
        showMessage("Mensagem enviada com sucesso!", "success");

        // Limpa o formulário
        form.reset();
    });

    // Função de mensagem animada
    function showMessage(text, type) {
        msgBox.textContent = text;
        msgBox.className = type;  

        msgBox.style.display = "block";
        msgBox.style.opacity = "0";

        // Animação suave
        setTimeout(() => {
            msgBox.style.transition = "opacity .6s";
            msgBox.style.opacity = "1";
        }, 10);

        // Some após alguns segundos
        setTimeout(() => {
            msgBox.style.opacity = "0";
            setTimeout(() => {
                msgBox.style.display = "none";
            }, 600);
        }, 3000);
    }
});
