document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.range-field__input').forEach((item) => {
        item.addEventListener('input', () => {
            const currentRangeElem = document.getElementById(item.getAttribute('data-range'));
            currentRangeElem.textContent = item.value + '%';
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLWZpZWxkX19pbnB1dCcpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSYW5nZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZScpKTtcbiAgICAgICAgICAgIGN1cnJlbnRSYW5nZUVsZW0udGV4dENvbnRlbnQgPSBpdGVtLnZhbHVlICsgJyUnO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyJdLCJmaWxlIjoiaW5kZXguanMifQ==