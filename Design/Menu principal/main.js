document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');

    button.addEventListener('click', function() {
        window.location.href = 'page.html';
    });
});