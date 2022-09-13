import React from "react";
import { MDBContainer, MDBIcon} from 'mdb-react-ui-kit'


class Footer extends React.Component{

    render(){
        return (
           
            <footer className="page-footer font-small aqua-gradient">
                 <MDBContainer>
                <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <a href="https://www.cowin.gov.in/" target="_blank">
                                <MDBIcon fas icon="external-link-alt"  size='xs' /> CoWIN</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <a href="https://covid19.who.int/" target='_blank'>
                                <MDBIcon fas icon="external-link-alt" size='xs' /> W H O</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <a href="https://news.google.com/covid19/map" target="_blank">
                                <MDBIcon fas icon="external-link-alt" size='xs' /> Covid-19 Google</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic" target="_blank">
                                <MDBIcon fas icon="external-link-alt" size='xs' /> Wikipedia</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="font-weight-bold">
                            <a href="https://mohfw.gov.in/" target="blank">
                                <MDBIcon fas icon="external-link-alt" size='xs' /> MoHFW</a>
                        </h6>
                    </div>
                </div>
    
                <hr className="aqua-gradient" style={{margin: "0 15%"}}/>

    
                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    <div className="col-md-8 col-12 mt-5">
                        <p><span className="font-weight-bold w-responsive" style={{ fontSize:"14px" }}>Covi-Trac</span> is a Covid-19 Tracking Web-App which is helpful for tracking the live Covid Cases Worldwide and in India.</p>
                    </div>
                </div>
   
                <hr className="aqua-gradient mt-4 mb-2" style={{margin: "0 25%"}}/>

                <div className="row pb-3">
                    <div className="col-md-12">
                        <div className="mb-5 flex-center">
                            <a className="gplus-ic">
                                <i className="fab fa-snapchat fa-lg white-text mr-4 ml-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-github fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="fb-ic">
                                <i className="fab fa-facebook fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                            </a>   
                        </div>
                    </div>
                </div>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">© Made with <MDBIcon fab icon="react" /> React & <MDBIcon fab icon="mdb" />   by
                    <a href="https://sreerajsree.netlify.app/"> Sreeraj S</a>
                </div>
            </footer>
            
        );
}
}
export default Footer;