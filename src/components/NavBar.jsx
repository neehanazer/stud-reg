import React from 'react'
import { Link } from 'react-router';

const NavBar = () => {
  return (
   
 
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <a class="navbar-brand" href="#">
                      Campus Placement App
                    </a>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="AddReg"
                          >
                            Add Registration
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/search">
                            Search Registration
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/delete">
                            Delete Registration
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" aria-disabled="true" href="/view">
                            ViewAll
                          </a>
                        </li>
                      </ul>
                  </div>
                </nav>

    </div>


  );
}



export default NavBar
