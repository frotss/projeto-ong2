'use strict';

/* -------------------------
   MÁSCARAS
   ------------------------- */

function onlyDigits(value) {
    return value.replace(/\D/g, '');
}

function maskCPF(value) {
    const digits = onlyDigits(value).slice(0, 11);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return digits.replace(/(\d{3})(\d+)/, '$1.$2');
    if (digits.length <= 9) return digits.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
}

function maskPhone(value) {
    const digits = onlyDigits(value).slice(0, 11);

    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 6) return digits.replace(/(\d{2})(\d+)/, '($1) $2');
    if (digits.length <= 10) return digits.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    return digits.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
}

function maskCEP(value) {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length <= 5) return digits;
    return digits.replace(/(\d{5})(\d+)/, '$1-$2');
}

export function inicializarMascaras(fields) {
    fields.cpf?.addEventListener('input', (event) => {
        event.target.value = maskCPF(event.target.value);
    });

    fields.telefone?.addEventListener('input', (event) => {
        event.target.value = maskPhone(event.target.value);
    });

    fields.cep?.addEventListener('input', (event) => {
        event.target.value = maskCEP(event.target.value);
    });
}

export { onlyDigits, maskCPF, maskPhone, maskCEP };
