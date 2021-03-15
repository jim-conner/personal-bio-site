const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <nav>
    <nav id="nav"></nav></nav>
  <header>
    <div id="header"></div>
  </header>
<main>
  <div id="projects">
    <h4>Projects</h4> 
    <div class="container" id="projects-container"></div>
  </div>
  <div id="bio">
    <h4>Bio</h4>
  </div>
  <div id="tech">
    <h4>Technologies</h4>
  </div>
  <div id="contact">
    <h4>Contact</h4>
  </div>
</main>
<footer class="footer text-center" id="footer">
</footer>`;
};

export default domBuilder;
