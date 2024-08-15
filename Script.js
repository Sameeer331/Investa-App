let currentIndex = 0;

const images = document.querySelectorAll('.hero-image');
const totalImages = images.length;

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateImagePosition();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateImagePosition();
});

function updateImagePosition() {
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.hero-images').style.transform = newTransformValue;
}
