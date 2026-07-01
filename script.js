/**
 * Portal Cidadania Digital - Script de Interatividade e Acessibilidade
 * Tema: IA, Deepfakes e Desinformação (2026)
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. GERENCIAMENTO DO MODO ESCURO (DARK MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    const themeText = themeToggleBtn.querySelector('.theme-text');

    // Função para aplicar o tema correto e atualizar os estados de acessibilidade
    const aplicarTema = (tema) => {
        if (tema === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.setAttribute('aria-pressed', 'true');
            if (themeIcon) themeIcon.textContent = '☀️';
            if (themeText) themeText.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.setAttribute('aria-pressed', 'false');
            if (themeIcon) themeIcon.textContent = '🌓';
            if (themeText) themeText.textContent = 'Modo Escuro';
        }
    };

    // Verifica a preferência salva no LocalStorage ou a preferência do sistema operacional
    const temaSalvo = localStorage.getItem('theme');
    const prefereEscuro Sistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let temaAtual = temaSalvo || (prefereEscuroSistema ? 'dark' : 'light');
    aplicarTema(temaAtual);

    // Ouvinte de clique para alternar o tema
    themeToggleBtn.addEventListener('click', () => {
        temaAtual = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        aplicarTema(temaAtual);
        localStorage.setItem('theme', temaAtual);
    });

    // ==========================================================================
    // 2. VALIDAÇÃO E FEEDBACK DO QUIZ INTERATIVO
    // ==========================================================================
    const quizForm = document.getElementById('quiz-form');
    const quizFeedback = document.getElementById('quiz-feedback');

    if (quizForm && quizFeedback) {
        quizForm.addEventListener('submit', (event) => {
            // Evita o comportamento padrão de recarregar a página
            event.preventDefault();

            // Captura as opções selecionadas pelo usuário
            const q1Selected = quizForm.querySelector('input[name="quiz-q1"]:checked');
            const q2Selected = quizForm.querySelector('input[name="quiz-q2"]:checked');

            // Reseta a caixa de feedback para o estado padrão oculto
            quizFeedback.className = 'feedback-box hidden';
            quizFeedback.textContent = '';

            // Validação de segurança: verifica se todas as perguntas foram respondidas
            if (!q1Selected || !q2Selected) {
                quizFeedback.textContent = '⚠️ Por favor, selecione uma resposta para cada uma das perguntas antes de verificar!';
                quizFeedback.classList.remove('hidden');
                quizFeedback.classList.add('wrong');
                return;
            }

            // Contagem da pontuação do usuário
            let pontuacao = 0;
            if (q1Selected.value === 'correto') pontuacao++;
            if (q2Selected.value === 'correto') pontuacao++;

            // Geração de mensagens personalizadas com base no desempenho
            let mensagem = '';
            let classeFeedback = '';

            switch (pontuacao) {
                case 2:
                    mensagem = '🎉 Excelente! Você acertou todas as questões (2/2). Você demonstra um ótimo entendimento sobre checagem de fatos, mídias sintéticas e os perigos da automação de notícias!';
                    classeFeedback = 'correct';
                    break;
                case 1:
                    mensagem = '⚠️ Você acertou 1 de 2 questões. Quase lá! Lembre-se: mídias geradas por IA podem parecer extremamente reais, e robôs propagam desinformação de forma automatizada e veloz. Revise o guia informativo e tente novamente!';
                    classeFeedback = 'wrong';
                    break;
                default:
                    mensagem = '❌ Você não acertou nenhuma questão (0/2). A desinformação impulsionada por IA é um assunto complexo e urgente. Recomendamos ler o nosso guia informativo com atenção antes de realizar uma nova tentativa!';
                    classeFeedback = 'wrong';
            }

            // Exibe o resultado de forma dinâmica e acessível
            quizFeedback.textContent = mensagem;
            quizFeedback.classList.remove('hidden');
            quizFeedback.classList.add(classeFeedback);

            // Rola a tela suavemente até a caixa de feedback para melhorar a experiência visual
            quizFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});
