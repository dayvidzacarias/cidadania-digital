/**
 * PROJETO: Portal de Conscientização sobre Cidadania Digital & IA
 * ARQUIVO: Lógica da Aplicação, Estado Visual e Validação Dinâmica de Dados
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- 1. GERENCIADOR DE ESTADO DE LEITURA (UX Premium) ---
    const progressBar = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
        }
    });

    // --- 2. GERENCIADOR DE TEMA VIS
