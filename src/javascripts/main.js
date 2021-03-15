import domBuilder from './components/domBuilder';
import navbar from './components/navbar';
import footer from './components/footer';
import showProjects from './components/projects';
import projects from './helpers/projectData';
import 'bootstrap';
import '../main.scss';

const init = () => {
  domBuilder();
  navbar();
  footer();
  showProjects(projects);
};

init();
