import React from "react";
import {MDBAnimation , MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';
import live from '../Images/live.gif';
import corona from '../Images/corona.png';

class Header extends React.Component{

    state = {
        isOpen: false
      };
      
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render(){
        return(
            <div>
                <MDBNavbar color="aqua-gradient" dark expand="md" fixed>
                    <MDBContainer>
                        <MDBAnimation type="pulse" infinite>
                        <Link to="/"><img src={corona} width="70" height="70" alt="" /></Link>
                        </MDBAnimation>
                        <MDBNavbarBrand><strong style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}></strong></MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <Link className="nav-link color" to="/world"><img src="https://img.icons8.com/color/35/000000/globe--v1.png" alt=""/> 
                                        &nbsp;<span style={{fontSize: "16px", fontWeight: "bold"}}>World</span></Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link className="nav-link color" to="/india"><img src="https://img.icons8.com/fluency/35/000000/india-circular.png" alt=""/> 
                                        &nbsp;<span style={{fontSize: "16px", fontWeight: "bold"}}>India</span></Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link className="nav-link color" to="/vaccine"><img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/35/000000/external-world-vaccine-development-wanicon-lineal-color-wanicon.png" alt=""/> 
                                        &nbsp;<span style={{fontSize: "16px", fontWeight: "bold"}}>Vaccination</span></Link>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <Link className="nav-link color" to="/news"><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-news-news-kiranshastry-lineal-color-kiranshastry.png" alt=""/>
                                        <span><img src={live} width="70" /></span></Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right className="navbar-nav ml-auto nav-flex-icons">
                                <MDBNavItem>
                                    <Link className="nav-link icon" to="snapchat">
                                        <MDBIcon fab icon="snapchat" />
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link className="nav-link icon" to="github">
                                        <MDBIcon fab icon="github" />
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link className="nav-link icon" to="facebook">
                                        <MDBIcon fab icon="facebook" />
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link className="nav-link icon" to="instagram">
                                        <MDBIcon fab icon="instagram" />
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <Link className="nav-link icon" to="twitter">
                                        <MDBIcon fab icon="twitter" />
                                    </Link>
                                </MDBNavItem>
                                    <MDBNavItem>
                                    {/* <form class="d-flex input-group w-auto">
                                            <div className="md-form my-0">
                                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                            </div>
                                       </form> */}
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                </MDBNavbar>
            </div>
        )
    }
}
export default Header;