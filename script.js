document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // Lógica do Modo Escuro (Dark Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva anteriormente
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe no body
        document.body.classList.toggle('dark-mode');
        
        // Atualiza o texto do botão e salva a preferência
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌓 Modo Escuro';
            localStorage.setItem('theme', 'light');
        }
    });

    // ==========================================================================
    // Lógica do Quiz Interativo
    // ==========================================================================
    const quizForm = document.getElementById('quiz-form');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        // Evita que a página recarregue ao submeter o formulário
        event.preventDefault();

        // Captura a opção selecionada usando o atributo name
        const selectedOption = quizForm.querySelector('input[name="quiz-q1"]:checked');

        // Limpa classes anteriores de feedback
        quizFeedback.className = 'feedback-box hidden';

        // Validação: Verifica se o usuário escolheu alguma opção
        if (!selectedOption) {
            quizFeedback.textContent = '⚠️ Por favor, selecione uma alternativa antes de verificar!';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('wrong');
            return;
        }

        // Verifica o valor da opção selecionada (definidos no HTML)
        if (selectedOption.value === 'correto') {
            quizFeedback.textContent = '🎉 Correto! Verificar em fontes confiáveis e na imprensa profissional é a melhor maneira de combater a desinformação.';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('correct');
        } else {
            quizFeedback.textContent = '❌ Resposta incorreta. Compartilhar sem checar espalha boatos, e mídias hoje em dia podem ser facilmente manipuladas por IAs. Tente novamente!';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('wrong');
        }
    });
});
