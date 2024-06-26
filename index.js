document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.floating-image');

    images.forEach(image => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let dx = (Math.random() - 0.10) * 2;
        let dy = (Math.random() - 0.10) * 2;

        function moveImage() {
            x += dx;
            y += dy;

            if (x <= 0 || x + image.width >= window.innerWidth) {
                dx *= -1;
            }
            if (y <= 0 || y + image.height >= window.innerHeight) {
                dy *= -1;
            }

            image.style.left = x + 'px';
            image.style.top = y + 'px';

            requestAnimationFrame(moveImage);
        }

        moveImage();
    });
});
