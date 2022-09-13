import React from "react";
import './404.css'
import {Link} from 'react-router-dom'
import {MDBIcon} from 'mdbreact'

function Page(){
    return(
        <React.Fragment>
                <div className="container">
                  <div className="row"> 
                    <div className="col-sm-12">
                      <div className="col-sm-12 col-sm-offset-1 text-center">
                        <div className="four_zero_four_bg imagecenter">
                          <h1 className="text-center mt-5 font-weight-bold">404</h1>
                        </div>
                        <div className="contant_box_404">
                          <h3 className="h2 mb-3">Look like you're lost</h3>
                          <h5 className="mb-4">&#60; the page is on development &#47;&#62;</h5>
                          <Link to="/" className="btn btn-info mb-5">Go to Home <MDBIcon far icon="arrow-alt-circle-right" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </React.Fragment>
    )
}

export default Page;