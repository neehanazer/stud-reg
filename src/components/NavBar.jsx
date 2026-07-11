import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <Link class="navbar-brand" to="#">
                      Campus Placement App
                    </Link>
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
                          <Link
                            class="nav-link active"
                            aria-current="page"
                            to="/add"
                          >
                            Add Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/search">
                            Search Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/delete">
                            Delete Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" aria-disabled="true" to="/view">
                            ViewAll
                          </Link>
                        </li>
                      </ul>
                  </div>
                </nav>

    </div>
  );
}

export default NavBar;
