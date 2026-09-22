'use strict';

/* -------------------------
   VALIDAÇÃO VISUAL
   ------------------------- */

export function setFieldState(field, valid) {
    if (!field) return;

    const group = field.closest('.form-group');
    if (!group) return;

    group.classList.toggle('has-error', !valid);
    field.classList.toggle('input-invalid', !valid);
    field.classList.toggle('input-valid', valid);
}

export function validateField(field) {
    if (!field) return true;

    const valid = field.checkValidity();
    setFieldState(field, valid);
    return valid;
}

export function inicializarValidacao(fields) {
    Object.values(fields).forEach((field) => {
        field?.addEventListener('blur', () => validateField(field));
        field?.addEventListener('input', () => {
            if (field.value.trim() !== '') validateField(field);
        });
    });
}
