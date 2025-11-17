document.addEventListener('DOMContentLoaded', function() {
    // Range Input Value
    document.querySelectorAll('.range-field__input').forEach((item) => {
        item.addEventListener('input', () => {
            const currentRangeElem = document.getElementById(item.getAttribute('data-range'));
            currentRangeElem.textContent = item.value + '%';
        });
    });

    // Toogle Mobile Menu
    document.getElementById('toggle-menu').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', String(!isOpen));
        this.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');

        mobileMenu.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
    });

    // Change Header bg on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('page-header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            header.classList.add('on-scroll');
        } else {
            header.classList.remove('on-scroll');
        }
    });
});