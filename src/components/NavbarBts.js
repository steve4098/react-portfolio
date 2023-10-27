import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function navbar() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to = "/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link to = "/Projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link to = "/ContactMe">
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> );
}

export default navbar;