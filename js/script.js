document.addEventListener('DOMContentLoaded', () => {
    const appNavigation = document.getElementById('app-navigation');

    // In a real-world scenario, this would be fetched from a server-side API
    const projectStructure = {
        "categories": [
            {
                "name": "Productivity Apps",
                "apps": [
                    { "name": "Task Manager", "path": "app1/" },
                    { "name": "Notes App", "path": "app2/" }
                ]
            },
            {
                "name": "Creative Suite",
                "apps": [
                    { "name": "Photo Editor", "path": "creative/photo-editor/" },
                    { "name": "Video Studio", "path": "creative/video-studio/" }
                ]
            }
        ]
    };

    function renderNavigation() {
        let html = '<ul>';
        projectStructure.categories.forEach(category => {
            html += `<li class="app-category">`;
            html += `<div class="category-header">${category.name}</div>`;
            html += '<ul class="app-list">';
            category.apps.forEach(app => {
                // The check for index.html is implicit in the structure definition
                html += `<li class="app-item"><a href="${app.path}index.html">${app.name}</a></li>`;
            });
            html += '</ul></li>';
        });
        html += '</ul>';
        appNavigation.innerHTML = html;
    }

    function setupEventListeners() {
        const categories = document.querySelectorAll('.app-category .category-header');
        categories.forEach(header => {
            header.parentElement.classList.add('collapsed'); // Collapse by default
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('collapsed');
            });
        });

        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const apps = document.querySelectorAll('.app-item');
            apps.forEach(app => {
                const appName = app.textContent.toLowerCase();
                if (appName.includes(searchTerm)) {
                    app.style.display = 'block';
                } else {
                    app.style.display = 'none';
                }
            });
        });
    }

    renderNavigation();
    setupEventListeners();
});
