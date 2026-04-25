const track = document.getElementById('track');
const images = document.querySelectorAll('.carousel-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;
const totalImages = images.length;
const intervalTime = 10000; // 10 segundos

function updateCarousel() {
    // Move a trilha horizontalmente com base no índice
    track.style.transform = `translateX(${-index * 100}%)`;
}

function showNext() {
    index++;
    if (index >= totalImages) {
        index = 0; // Volta para a primeira
    }
    updateCarousel();
    resetTimer(); // Reinicia o contador se o usuário clicar
}

function showPrev() {
    index--;
    if (index < 0) {
        index = totalImages - 1; // Vai para a última
    }
    updateCarousel();
    resetTimer();
}

// Configuração do Temporizador
let autoSlide = setInterval(showNext, intervalTime);

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(showNext, intervalTime);
}

// Eventos de Clique
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);