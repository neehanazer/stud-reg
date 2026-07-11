import React from 'react'

const Searchreg = () => {
  return (
    <div>
        
      <div>
      <div>
      <div>
        
      <div className="container" style={{paddingTop:10,marginTop:50}}>
        <h1 align="center" style={{marginBottom:50}}> Search Student</h1>
        <div className="row justify-content-center ">
            <div className="card shadow-lg p-4 rounded">
            <div className="col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3 ">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Registration Number</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label htmlFor="" className="form-label"></label>
                        <button className="btn btn-primary">Search</button>

                    </div>
                </div>



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

export default Searchreg
