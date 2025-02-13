export function initializeFooterIcons() {
    const socialIcons = document.querySelectorAll('footer .social-icons a');
    if (!socialIcons.length) return;

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
}
