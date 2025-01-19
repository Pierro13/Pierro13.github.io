document.addEventListener('DOMContentLoaded', () => {
    // Load projects from JSON file
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">View Project</a>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading projects:', error));

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('intro-text').textContent = data.intro;
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});
