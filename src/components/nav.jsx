import React from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";

function Nav() {
  return(
  <>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><Link className = 'navbar-brand"' to="/"><img src="./res/img/logo.png" alt="logo" className="logo"/></Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse buttonmenu" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link className = 'nav-link active wod' to="/">HOME</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link className = 'nav-link active wod' to="/wods">WODS</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link className = 'nav-link active wod' to="/scores">SCORES</Link></a>
      </li>
    </ul>
  </div>
</nav>
  </>
  )
}
export default Nav