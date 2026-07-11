import React from 'react'
import NavBar from './NavBar'

const Deletereg = () => {
  return (
  


      <div>
        <NavBar/>
      <div>
        
      <div className="container" style={{paddingTop:10,marginTop:50}}>
        <h1 align="center" style={{marginBottom:50}}> Remove Student</h1>
        <div className="row justify-content-center ">
            <div className="card shadow-lg p-4 rounded">
            <div className="col-12 col-sm-12 col-md-12 com-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3 ">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Student ID</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label htmlFor="" className="form-label"></label>
                        <button className="btn btn-danger">Remove</button>

                    </div>
                </div>

            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Deletereg

 


