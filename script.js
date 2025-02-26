function animateElement() {
    const box = document.querySelector('.animated-box');
    box.style.animation = 'none';
    void box.offsetWidth; // Trigger reflow
    box.style.animation = 'rotateScale 4s infinite alternate ease-in-out';
}
