const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <nav>
    <nav id="nav"></nav></nav>
  <header>
    <div id="header"></div>
  </header>
<main>
  <div id="projects">
    <div class="container" id="projects-container"></div>
  </div>
  <div id="bio"></div>
  <div id="tech"></div>
  <div id="contact"></div>
</main>
<footer class="footer text-center" id="footer">
</footer>`;
};

export default domBuilder;
