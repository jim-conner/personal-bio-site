console.log("connected");

const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (array) => {
  let domString = "";
  for (let i = 0; i < array.length; i++) {
    if (projects[i].available == true) {
      domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div><h5 class="card-title">${array[i].title}</h5></div>
                    <div class="img-container" style="background-image: url('${array[i].screenshot}');"></div>
                    <div class="card-body">
                      <p class="card-text">${array[i].description}</p>
                      <p class="card-text">${array[i].technologiesUsed}</p>
                      <a href="#" class="card-link">${array[i].githubUrl}</a>
                      <a href="#" class="card-link">${array[i].Url}</a>
                    </div>
                  </div>`;
    }
  }
  printToDom("#projectsPage", domString);
};

const init = () => {
  createProjectCards(projects);
};

init();
