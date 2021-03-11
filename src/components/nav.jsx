import React from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";

function Nav() {
  return(
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
    <div class="container">
        <Link className = 'navbar-brand"' to="/"><img src="./res/img/logo.png" alt="logo" className="logo"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item me-5">
            <Link className = 'nav-link active wod' to="/">HOME</Link>
            </li>
            <li class="nav-item me-5">
            <Link className = 'nav-link active wod' to="/wods">WODS</Link>
            </li>
            <li class="nav-item me-5">
              <Link className = 'nav-link active wod' to="/scores">SCORES</Link>
            </li>
          </ul> 
      </div>    
    </div>
  </nav>
  )
}
export default Nav