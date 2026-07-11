import React from 'react'

const NavBar = () => {
  return (
   
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <div class="container-fluid">
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
                            to="AddReg"
                          >
                            Add Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="Searchreg">
                            Search Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="DeleteReg">
                            Delete Registration
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link disabled" aria-disabled="true">
                            ViewAll
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default NavBar
