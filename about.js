const founderCards = document.querySelectorAll('.founder-card');

founderCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Toggle a class to display/hide additional details
        card.classList.toggle('active');
    });
});
