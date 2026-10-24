const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('.main-navigation');
const closeNavigation = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mainNavigation?.classList.remove('is-open');
};
menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNavigation?.classList.toggle('is-open', !isOpen);
});
mainNavigation?.addEventListener('click', event => {
    if (event.target.closest('a')) closeNavigation();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
        closeNavigation();
        menuToggle.focus();
    }
});
matchMedia('(min-width: 761px)').addEventListener('change', closeNavigation);
