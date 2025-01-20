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

    fetch('formations.json')
        .then(response => response.json())
        .then(data => {
            const formationsContainer = document.querySelector('.formations');
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardHeader = document.createElement('div');
                cardHeader.className = 'card-header';

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.title;

                const title = document.createElement('h2');
                title.textContent = item.title;

                cardHeader.appendChild(img);
                cardHeader.appendChild(title);

                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';

                const description = document.createElement('p');
                description.textContent = item.description;

                cardContent.appendChild(description);

                card.appendChild(cardHeader);
                card.appendChild(cardContent);

                formationsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading formations.json:', error));

    fetch('experiences.json')
        .then(response => response.json())
        .then(data => {
            const experiencesContainer = document.querySelector('.experiences');
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                const cardHeader = document.createElement('div');
                cardHeader.className = 'card-header';

                const img = document.createElement('img');
                img.src = item.image;
                img.alt = item.title;

                const title = document.createElement('h2');
                title.textContent = item.title;

                cardHeader.appendChild(img);
                cardHeader.appendChild(title);

                const cardContent = document.createElement('div');
                cardContent.className = 'card-content';

                const description = document.createElement('p');
                description.textContent = item.description;

                cardContent.appendChild(description);

                card.appendChild(cardHeader);
                card.appendChild(cardContent);

                experiencesContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading experiences.json:', error));
});
