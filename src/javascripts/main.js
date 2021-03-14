import navbar from './components/navbar';
import showProjects from './components/projects';
import projects from './helpers/projectData';
import 'bootstrap';
import '../main.scss';

const init = () => {
  navbar();
  showProjects(projects);
};

init();
