import printToDom from '../events/printToDom';

const showProjects = (projectsArray) => {
  let domString = '';
  projectsArray.forEach((project) => {
    if (project.available === true) {
      domString += `
      <div class="card my-2" style="width: 18rem;" id="">
                    <div><h5 class="card-title">${project.title}</h5></div>
                    <div class="img-container" style="background-image: url('${project.screenshot}');"></div>
                    <div class="card-body">
                      <p class="card-text">${project.description}</p>
                      <p class="card-text">${project.technologiesUsed}</p>
                      <a href="#" class="card-link">${project.githubUrl}</a>
                      <a href="#" class="card-link">${project.Url}</a>
                    </div>
                  </div>`;
    }
  });
  printToDom('#projects', domString);
};

export default showProjects;
