/**
 * PROJETO: Portal Concurso Agrinho 2026
 * ARQUIVO: Lógica de Interatividade, Cronograma e Validação
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==========================================================================
    // 1. CONTADOR REGRESSIVO (COUNTDOWN) PARA AS INSCRIÇÕES
    // ==========================================================================
    // Define a data limite fictícia para o fim das inscrições (31 de Agosto de 2026)
    const dataLimite = new Date('August 31, 2026 23:59:59').getTime();

    // Cria o elemento do contador dinamicamente e o insere no topo da seção "Sobre"
    const sobreSection = document.getElementById('sobre');
    const contadorContainer = document.createElement('div');
    contadorContainer.style.margin = '1.5rem 0';
    contadorContainer.style.padding = '1rem';
    contadorContainer.style.backgroundColor = '#e8f5e9';
    contadorContainer.style.borderLeft = '4px solid #2e7d32';
    contadorContainer.style.borderRadius = '4px';
    contadorContainer.style.fontWeight = 'bold';
    
    if (sobreSection) {
        sobreSection.appendChild(contadorContainer);
    }

    const atualizarContador = () => {
        const agora = new Date().getTime();
        const diferenca = dataLimite - agora;

        // Cálculos de tempo para dias, horas, minutos e segundos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        if (diferenca > 0) {
            contadorContainer.innerHTML = `⏳ Tempo restante para enviar seu trabalho: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        } else {
            contadorContainer.innerHTML = `🛑 Inscrições para a edição 2026 encerradas!`;
            clearInterval(intervaloContador);
        }
    };

    // Atualiza o contador a cada 1 segundo
    const intervaloContador = setInterval(atual
