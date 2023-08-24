document.addEventListener('DOMContentLoaded', function () {
  const viewProjectsButton = document.getElementById('view-projects');
  const projectDetails = document.getElementById('project-details');

  async function fetchProjects() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const projects = await response.json();
      return projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  function getRandomProject(projects) {
    if (projects.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * projects.length);
    return projects[randomIndex];
  }

  async function displayRandomProject() {
    const projects = await fetchProjects();
    const randomProject = getRandomProject(projects);

    if (randomProject) {
      projectDetails.innerHTML = `
        <h3>${randomProject.title}</h3>
        <p>${randomProject.body}</p>
      `;
    } else {
      projectDetails.innerHTML = '<p>No projects available.</p>';
    }
  }

  viewProjectsButton.addEventListener('click', displayRandomProject);
});
