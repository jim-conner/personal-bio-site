const navbar = () => {
  document.querySelector('#nav').innerHTML = `
    <nav id='navbar' class='navbar navbar-dark bg-dark'>
      <a class='navbar-brand' href='#'>Jim Conner</a>
      <ul class='nav nav-pills'>
        <li class='nav-item'>
          <a class='nav-link' href='#bio'>Meet Jim</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#projects'>Projects</a>  
        </li>
        <li>
          <a class='nav-link' href='#tech'>Technologies</a>
        </li>
      </ul>
    </nav>
    <div data-spy='scroll' data-target='navbar' data-offset='0'>
      <h4 id='bio'>Meet Jim</h4>
      <p>...</p>
      <h4 id='projects'>Projects</h4>
      <p>...</p>
      <h4 id='tech'>Technologies</h4>
      <p>...</p>
    </div>`;
};

export default navbar;
