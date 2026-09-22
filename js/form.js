'use strict';

import { salvarCadastro } from './storage.js';
import { atualizarAOS } from './animations.js';
import { setFieldState, validateField, inicializarValidacao } from './validation.js';
import { inicializarMascaras } from './masks.js';
import { showToast } from './toast.js';

export function inicializarFormulario() {
    const form = document.getElementById('form-cadastro');
    const formSuccess = document.getElementById('form-success');
    const newRegistrationButton = document.getElementById('novo-cadastro');

    const fields = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        cpf: document.getElementById('cpf'),
        telefone: document.getElementById('telefone'),
        cep: document.getElementById('cep')
    };

    inicializarMascaras(fields);
    inicializarValidacao(fields);

    /* -------------------------
       FORMULÁRIO
       ------------------------- */

    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const valid = Object.values(fields).every(validateField);

        if (!valid) {
            form.reportValidity();
            showToast('Verifique os campos destacados antes de enviar.', 'error');
            return;
        }

        salvarCadastro({
            nome: fields.nome.value,
            email: fields.email.value,
            cpf: fields.cpf.value,
            telefone: fields.telefone.value,
            cep: fields.cep.value,
            data: new Date().toISOString()
        });

        form.hidden = true;
        formSuccess.hidden = false;

        showToast('Cadastro realizado com sucesso!');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    newRegistrationButton?.addEventListener('click', () => {
        form.reset();
        form.hidden = false;
        formSuccess.hidden = true;

        Object.values(fields).forEach((field) => {
            if (!field) return;
            setFieldState(field, false);
            field.classList.remove('input-invalid');
            field.classList.remove('input-valid');
        });

        form.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Atualiza o AOS caso elementos tenham mudado de estado/posição.
        atualizarAOS();
    });
}
