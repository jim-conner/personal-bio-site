import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import footer from '../components/footer';
import showProjects from '../components/projects';
import getProjects from '../helpers/projectData';

const startApp = () => {
  domBuilder();
  navBar();
  footer();
  getProjects().then((projectsArray) => {
    if (projectsArray.length) {
      showProjects(projectsArray);
    }
  });
};

export default startApp;
