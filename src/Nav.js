import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
<nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
  <div class="container">
    <div class="navbar-brand">My Website</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
      <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="/board" class="nav-link">board</a></li>

      </ul>
    </div>
  </div>
</nav>


    )
}
export default Navbar;