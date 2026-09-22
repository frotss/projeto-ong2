'use strict';

import { showToast } from './toast.js';

export function inicializarModal() {
    const modal = document.getElementById('meu-modal');
    const btnOpenModal = document.getElementById('btn-abrir-modal');
    const btnCloseModal = document.getElementById('btn-fechar-modal');
    const btnCancelModal = document.getElementById('btn-cancelar-modal');
    const btnConfirmModal = document.getElementById('btn-confirmar-modal');

    function openModal() {
        if (!modal) return;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        btnConfirmModal?.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;

        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        btnOpenModal?.focus();
    }

    btnOpenModal?.addEventListener('click', openModal);
    btnCloseModal?.addEventListener('click', closeModal);
    btnCancelModal?.addEventListener('click', closeModal);

    btnConfirmModal?.addEventListener('click', () => {
        closeModal();
        showToast('Ação confirmada com sucesso!');
    });

    modal?.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    return { openModal, closeModal };
}
