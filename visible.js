let btnVisible  = document.querySelector('.catalog-nav__select_small');
let formToFilter = document.querySelector('.modal-window');


btnVisible.addEventListener('click', function() {
    formToFilter.classList.toggle('modal-window_unvisible')
    });