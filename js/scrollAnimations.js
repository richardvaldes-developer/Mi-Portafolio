export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function handleScrollAnimations() {
    const sections = document.querySelectorAll('.section-content, section');
    const screenHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < screenHeight * 0.8) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else {
            section.classList.remove('visible');
            section.classList.add('hidden');
        }
    });
}

export function initializeScrollAnimations() {
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Ejecutar inicialmente
}
