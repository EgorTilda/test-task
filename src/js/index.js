document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.range-field__input').forEach((item) => {
        item.addEventListener('input', () => {
            const currentRangeElem = document.getElementById(item.getAttribute('data-range'));
            currentRangeElem.textContent = item.value + '%';
        });
    });
});