// import printToDom from './printToDom';

const showProjects = (projectsArray) => {
  // document.querySelector('#projects').innerHTML = `
  // <h2>Projects</h2>`;
  projectsArray.forEach((project) => {
    if (project.available === true) {
      document.querySelector('#projects-container').innerHTML += `
      <div class="card my-2" style="width: 18rem;">
                    <div><h5 class="card-title">${project.title}</h5></div>
                    <img class="card-img-top" alt="${project.title}
                      "style="background-image: url('${project.screenshot}');"></img>
                    <div class="card-body">
                      <p class="card-text">${project.description}</p>
                      <p class="card-text">${project.technologiesUsed}</p>
                      <a href="#" class="card-link">${project.githubUrl}</a>
                      <a href="#" class="card-link">${project.Url}</a>
                    </div>
                  </div>`;
    }
  });
};

export default showProjects;
