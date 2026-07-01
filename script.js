/**
 * PROJETO: Portal Cidadania Digital 2026
 * ARQUIVO: Lógica de Interatividade, Quiz e Validação de Segurança
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. MINI-QUIZ INTERATIVO: SEGURANÇA DIGITAL
    // ==========================================================================
    // Injeta dinamicamente um desafio rápido na seção de "Conceito"
    const conceitoSection = document.getElementById('conceito');
    
    if (conceitoSection) {
        const quizContainer = document.createElement('div');
        quizContainer.style.marginTop = '1.5rem';
        quizContainer.style.padding = '1.25rem';
        quizContainer.style.backgroundColor = '#e0f2fe';
        quizContainer.style.borderLeft = '4px solid #0284c7';
        quizContainer.style.borderRadius = '6px';

        quizContainer.innerHTML = `
            <p style="margin-bottom: 0.75rem; font-weight: bold; color: #0369a1;">
                🧠 Desafio Rápido: Você recebeu um link de uma promoção imperdível enviado por um amigo no WhatsApp. O que você faz?
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button id="btn-opcao-errada" style="background-color: #fff; color: #1e293b; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 500;">
                    Clico na hora e compartilho
                </button>
                <button id="btn-opcao-correta" style="background-color: #fff; color: #1e293b; border: 1px solid #cbd5e1; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 500;">
                    Desconfio e checo em canais oficiais
                </button>
            </div>
            <div id="quiz-resposta" style="margin-top: 0.75rem; font-weight: 500; display: none;"></div>
        `;
        
        conceitoSection.appendChild(quizContainer);

        // Lógica dos botões do Quiz
        const btnErrado = document.getElementById('btn-opcao-errada');
        const btnCorreto = document.getElementById('btn-opcao-correta');
        const respostaDiv = document.getElementById('quiz-resposta');

        btnErrado?.addEventListener('click', () => {
            respostaDiv.style.display = 'block';
            respostaDiv.style.color = '#b91c1c';
            respostaDiv.innerHTML = '❌ Cuidado! Links maliciosos encaminhados por conhecidos são a maior causa de roubo de dados clonados. Pratique a Cidadania Digital investigando antes.';
        });

        btnCorreto?.addEventListener('click', () => {
            respostaDiv.style.display = 'block';
            respostaDiv.style.color = '#15803d';
            respostaDiv.innerHTML = '🎯 Perfeito! O cidadão digital consciente quebra a corrente da desinformação e do golpe ao verificar o domínio e as fontes oficiais.';
        });
    }


    // ==========================================================================
    // 2. COMP
