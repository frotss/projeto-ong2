'use strict';

import { inicializarAOS } from './animations.js';
import { inicializarNavegacao } from './navigation.js';
import { inicializarFormulario } from './form.js';
import { inicializarToast } from './toast.js';
import { inicializarModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
    inicializarAOS();
    inicializarNavegacao();
    inicializarToast();
    inicializarFormulario();
    inicializarModal();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelector('.nav-dropdown')?.classList.remove('is-open');
            document
                .querySelector('.nav-dropdown-toggle')
                ?.setAttribute('aria-expanded', 'false');
        }
    });
});
