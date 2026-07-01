document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Controle do Modo Escuro (Dark Mode) com Persistência
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Recupera configurações salvas pelo usuário na sessão anterior
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Modo Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌓 Modo Escuro';
            localStorage.setItem('theme', 'light');
        }
    });

    // ==========================================================================
    // 2. Validação Síncrona do Quiz Multiperguntas
    // ==========================================================================
    const quizForm = document.getElementById('quiz-form');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        // Bloqueia o reload automático nativo do HTML
        event.preventDefault();

        // Coleta os nós selecionados
        const q1Selected = quizForm.querySelector('input[name="quiz-q1"]:checked');
        const q2Selected = quizForm.querySelector('input[name="quiz-q2"]:checked');

        // Limpa estados e estilos do feedback anterior
        quizFeedback.className = 'feedback-box hidden';

        // Validação primária: Garante que todas as perguntas foram respondidas
        if (!q1Selected || !q2Selected) {
            quizFeedback.textContent = '⚠️ Por favor, responda a todas as perguntas antes de enviar!';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('wrong');
            return;
        }

        // Processamento lógico dos acertos
        let pontuacao = 0;
        let mensagemFeedback = '';

        if (q1Selected.value === 'correto') pontuacao++;
        if (q2Selected.value === 'correto') pontuacao++;

        // Renderização do feedback com base na pontuação total obtida
        if (pontuacao === 2) {
            mensagemFeedback = '🎉 Excelente! Você acertou todas as questões (2/2). Você demonstra um ótimo entendimento sobre checagem de fatos e os riscos da automação de notícias.';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('correct');
        } else if (pontuacao === 1) {
            mensagemFeedback = '⚠️ Você acertou 1 de 2 questões. Lembre-se: mídias geradas por IA podem ser muito realistas, e robôs propagam desinformação em massa com rapidez estruturada. Revise o guia acima e tente novamente!';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('wrong');
        } else {
            mensagemFeedback = '❌ Você errou todas as questões (0/2). A desinformação gerada por Inteligência Artificial é perigosa. Recomendamos ler o nosso guia informativo com atenção antes de tentar uma nova resposta!';
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add('wrong');
        }

        quizFeedback.textContent = mensajeFeedback;
    });
});
