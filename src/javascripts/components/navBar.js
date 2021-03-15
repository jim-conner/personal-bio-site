const navbar = () => {
  document.querySelector('#nav').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Jim Conner</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
      <a class="nav-link active" href="#projects">Projects</a>
      <a class="nav-link active" href="#bio">Bio</a>
      <a class="nav-link active" href="#tech">Technologies</a>
      <a class="nav-link active" href="#contact">Contact</a>
    </div>
  </div>
</nav>`;
};

export default navbar;
