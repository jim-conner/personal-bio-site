const showProjects = (projectsArray) => {
  projectsArray.forEach((project) => {
    if (project) {
      document.querySelector('#projects-container').innerHTML += `<div class="card my-2 text-white bg-dark" style="width: 18rem;">
      <img class="card-img-top" alt="${project.title}" src="${project.image}">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <p class="card-text">${project.technologiesUsed}</p>
        <a href="${project.githubUrl}" class="card-link">GitHub Repo</a>
        <a href="${project.url}" class="card-link">Deployed App</a>
      </div>
    </div>`;
    }
  });
};

export default showProjects;
