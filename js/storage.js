'use strict';

const STORAGE_KEY = 'reciclamais_cadastros';

export function getCadastros() {
    try {
        const dados = localStorage.getItem(STORAGE_KEY);
        return dados ? JSON.parse(dados) : [];
    } catch (e) {
        return [];
    }
}

export function salvarCadastro(novoCadastro) {
    const cadastros = getCadastros();
    cadastros.push(novoCadastro);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastros));
}

export { STORAGE_KEY };
