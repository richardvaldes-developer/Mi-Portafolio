export async function initializeGitHubProjects() {
    const projectsContainer = document.querySelector('#proyectos .section-content');
    if (!projectsContainer) return;

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
}