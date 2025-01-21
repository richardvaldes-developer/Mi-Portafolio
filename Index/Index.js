// Animaciones al hacer scroll
const sections = document.querySelectorAll('.content-section');
const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Funcionalidad del formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

// Mostrar proyectos desde la API de GitHub
document.addEventListener('DOMContentLoaded', async () => {
    const projectsContainer = document.querySelector('#proyectos .section-content');

    try {
        const response = await fetch('https://api.github.com/users/richardvaldes-developer/repos');
        if (!response.ok) throw new Error('Error al obtener los proyectos de GitHub');

        const repos = await response.json();

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sin descripción disponible'}</p>
                <a href="${repo.html_url}" target="_blank">Ver proyecto</a>
            `;

            projectsContainer.appendChild(card);
        });
    } catch (error) {
        projectsContainer.innerHTML = '<p>No se pudieron cargar los proyectos de GitHub.</p>';
        console.error(error);
    }
});

// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Aplica las clases 'visible' o 'hidden' según la posición en el viewport
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else {
            section.classList.remove('visible');
            section.classList.add('hidden');
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', handleScrollAnimation);

// Inicializa la animación en carga
document.addEventListener('DOMContentLoaded', handleScrollAnimation);


