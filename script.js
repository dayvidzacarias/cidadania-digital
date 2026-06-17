// Aguarda o carregamento do DOM para evitar erros de execução no console
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: Alternador de Modo Escuro (Acessibilidade) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Verifica o tema atual no atributo do elemento raiz
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // --- FUNCIONALIDADE 2: Validador do Quiz Anti-Desinformação ---
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura a opção selecionada usando FormData
        const formData = new FormData(quizForm);
        const selectedAnswer = formData.get("quiz-q1");

        // Remove classes anteriores para revalidação limpa
        feedbackBox.classList.remove("hidden", "success", "error");

        // Validação se o usuário não escolheu nenhuma resposta antes de enviar
        if (!selectedAnswer) {
            feedbackBox.textContent = "Por favor, selecione uma das alternativas antes de verificar.";
            feedbackBox.classList.add("error");
            return;
        }

        // Processamento da resposta usando lógica condicional
        if (selectedAnswer === "correto") {
            feedbackBox.textContent = "Parabéns! Você acertou. Checar fontes confiáveis evita a propagação de deepfakes.";
            feedbackBox.classList.add("success");
        } else {
            feedbackBox.textContent = "Resposta incorreta. Lembre-se: agir pela emoção e espalhar boatos sem checar prejudica a sociedade.";
            feedbackBox.classList.add("error");
        }
    });
});
