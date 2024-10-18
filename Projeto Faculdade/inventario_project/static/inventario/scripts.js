document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            const nome = document.querySelector("input[name='nome']");
            const quantidade = document.querySelector("input[name='quantidade']");
            const preco = document.querySelector("input[name='preco']");

            if (!nome.value.trim() || !quantidade.value.trim() || !preco.value.trim()) {
                showErrorMessage("Todos os campos são obrigatórios!");
                event.preventDefault(); // Impede o envio do formulário
            } else if (quantidade.value <= 0 || preco.value <= 0) {
                showErrorMessage("Quantidade e preço devem ser maiores que zero!");
                event.preventDefault();
            }
        });
    }

    // Função para exibir uma mensagem de erro
    function showErrorMessage(message) {
        const errorMessage = document.createElement("div");
        errorMessage.textContent = message;
        errorMessage.className = "error-message";
        document.body.appendChild(errorMessage);

        setTimeout(function() {
            errorMessage.remove();
        }, 3000);
    }

    // Função para exibir uma mensagem de sucesso
    function showSuccessMessage(message) {
        const successMessage = document.createElement("div");
        successMessage.textContent = message;
        successMessage.className = "success-message";
        document.body.appendChild(successMessage);

        setTimeout(function() {
            successMessage.style.opacity = "0";
        }, 3000);

        setTimeout(function() {
            successMessage.remove();
        }, 4000);
    }

    // Exemplo de uso da função para exibir notificação de sucesso
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        showSuccessMessage("Item adicionado com sucesso!");
    }
});

/* Estilos de Mensagens */
const style = document.createElement('style');
style.innerHTML = `
.error-message, .success-message {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 8px;
    font-size: 1.1rem;
    color: white;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.error-message {
    background-color: #e74c3c;
}

.success-message {
    background-color: #28a745;
    transition: opacity 0.5s ease;
}
`;
document.head.appendChild(style);

