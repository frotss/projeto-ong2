'use strict';

export function inicializarNavegacao() {
    const menuButton = document.getElementById('menu-button');
    const mainMenu = document.getElementById('main-menu');
    const navDropdown = document.querySelector('.nav-dropdown');
    const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

    /* -------------------------
       MENU MOBILE
       ------------------------- */

    function setMenu(open) {
        if (!menuButton || !mainMenu) return;

        mainMenu.classList.toggle('is-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }

    menuButton?.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        setMenu(!isOpen);
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            setMenu(false);
            navDropdown?.classList.remove('is-open');
            navDropdownToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    /* -------------------------
       DROPDOWN DE PROJETOS
       ------------------------- */

    navDropdownToggle?.addEventListener('click', () => {
        const isOpen = navDropdown.classList.toggle('is-open');
        navDropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
        if (navDropdown && !navDropdown.contains(event.target)) {
            navDropdown.classList.remove('is-open');
            navDropdownToggle?.setAttribute('aria-expanded', 'false');
        }
    });

    /* -------------------------
       NAVEGAÇÃO / LINK ATIVO
       ------------------------- */

    const sections = [...document.querySelectorAll('main section[id]')];
    const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 120;
        let currentId = 'inicio';

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPosition) {
                currentId = section.id;
            }
        });

        navigationLinks.forEach((link) => {
            const targetId = link.getAttribute('href')?.slice(1);
            if (!targetId) return;

            if (targetId === currentId || (currentId === 'ecopontos' && targetId === 'projetos')) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);

    return {
        fecharMenu() {
            setMenu(false);
            navDropdown?.classList.remove('is-open');
            navDropdownToggle?.setAttribute('aria-expanded', 'false');
        },
        fecharDropdown() {
            navDropdown?.classList.remove('is-open');
            navDropdownToggle?.setAttribute('aria-expanded', 'false');
        }
    };
}
