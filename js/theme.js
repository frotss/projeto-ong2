/*======================================================================================theme.js*/

'use strict';

const STORAGE_KEY = 'reciclamais-theme';

function getPreferredTheme() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {
        // localStorage indisponível (ex.: modo privado); segue para o fallback abaixo.
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateToggleState(button, theme) {
    if (!button) return;

    const isDark = theme === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
}

export function inicializarTema() {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = getPreferredTheme();

    // O script inline no <head> já aplica o tema antes da primeira pintura;
    // esta chamada garante consistência caso ele não tenha rodado (ex.: JS
    // desabilitado no head por algum motivo) e também sincroniza o botão.
    applyTheme(currentTheme);
    updateToggleState(toggleButton, currentTheme);

    toggleButton?.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';

        applyTheme(nextTheme);
        updateToggleState(toggleButton, nextTheme);

        try {
            localStorage.setItem(STORAGE_KEY, nextTheme);
        } catch (e) {
            // Armazenamento indisponível; o tema ainda funciona nesta sessão.
        }
    });
}