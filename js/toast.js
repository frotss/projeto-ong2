'use strict';

let toastContainer = null;

export function inicializarToast() {
    toastContainer = document.getElementById('toast-container');

    const btnToast = document.getElementById('btn-toast');

    btnToast?.addEventListener('click', () => {
        showToast('Ação realizada com sucesso!');
    });
}

export function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast${type === 'error' ? ' toast-error' : ''}`;
    toast.setAttribute('role', 'status');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    window.setTimeout(() => {
        toast.remove();
    }, 4000);
}
