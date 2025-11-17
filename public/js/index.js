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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gUmFuZ2UgSW5wdXQgVmFsdWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UtZmllbGRfX2lucHV0JykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFJhbmdlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJykpO1xuICAgICAgICAgICAgY3VycmVudFJhbmdlRWxlbS50ZXh0Q29udGVudCA9IGl0ZW0udmFsdWUgKyAnJSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gVG9vZ2xlIE1vYmlsZSBNZW51XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpO1xuICAgICAgICBjb25zdCBpc09wZW4gPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG5cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBTdHJpbmcoIWlzT3BlbikpO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGlzT3BlbiA/ICfQntGC0LrRgNGL0YLRjCDQvNC10L3RjicgOiAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcblxuICAgICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcbiAgICB9KTtcblxuICAgIC8vIENoYW5nZSBIZWFkZXIgYmcgb24gc2Nyb2xsXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1oZWFkZXInKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAxMDApIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvbi1zY3JvbGwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvbi1zY3JvbGwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sImZpbGUiOiJpbmRleC5qcyJ9