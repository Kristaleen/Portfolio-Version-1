document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const projectCards = document.querySelectorAll('.project-card');
    let currentIndex = 0;

    function showCard(index) {
        projectCards.forEach(card => card.classList.remove('active'));
        projectCards[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projectCards.length;
        showCard(currentIndex);
    });
});
