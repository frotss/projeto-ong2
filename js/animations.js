'use strict';

/* -------------------------
   BIBLIOTECA EXTERNA: AOS
   ------------------------- */

export function inicializarAOS() {
    // AOS é carregado pelo CDN antes deste módulo.
    // A checagem evita que uma falha externa interrompa o JavaScript principal.
    if (window.AOS && typeof window.AOS.init === 'function') {
        window.AOS.init({
            duration: 700,
            easing: 'ease-out',
            once: true,
            offset: 80,
            disable: 'mobile'
        });
    } else {
        console.warn('AOS não foi carregado. O restante da aplicação continuará funcionando normalmente.');
    }
}

export function atualizarAOS() {
    window.AOS?.refresh();
}
