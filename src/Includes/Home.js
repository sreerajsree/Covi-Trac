import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';
import covid1 from '../Images/covid1.jpg';
import covid2 from '../Images/covid2.jpg';
import covid3 from '../Images/covid3.jpg';
import Section from './Section';
import Middle from "./Middle";
import heading from '../Images/heading.png'



class Home extends React.Component{

    render(){
        return(
            <section >
            <MDBContainer>
                <div className="text-center">
                    <img src={heading} className="mb-5 mt-5 img-responsive" width="250"/>
                </div>
                <h3 className="text-new mb-4 text-center h3-responsive">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</h3>
                <MDBCarousel  fade interval={2000} className="shadow-box-example z-depth-5">
                    <MDBCarouselInner>
                        <MDBCarouselItem className='active'>
                            <MDBCarouselElement src={covid1} alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={covid2} alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem>
                            <MDBCarouselElement src={covid3} alt='...' />
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <p className="lead grey-color  text-center mx-auto mt-5 mb-5">
                Most people infected with the virus will experience mild to moderate respiratory illness and recover
                without requiring special treatment. However, some will become seriously ill and require medical attention. 
                Older people and those with underlying medical conditions like cardiovascular disease, diabetes, 
                chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get 
                sick with COVID-19 and become seriously ill or die at any age. 
                </p>
                <p className="lead grey-color w-responsive text-center mx-auto mb-5">
                The best way to prevent and slow down transmission is to be well informed about the disease 
                and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre 
                apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based 
                rub frequently. Get vaccinated when it’s your turn and follow local guidance.
                </p>
            <hr/>
            <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img className="img-fluid" src="https://cdn.dribbble.com/users/3691882/screenshots/11018522/media/0047aad1a6fb3aa4362d6acd69059924.gif" alt="" />
                </MDBCol>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            {/* <MDBIcon icon="share" size="lg" className="aqua" /> */}
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h4 className="font-weight-bold mb-3 text-uppercase mt-5 mb-4"><span style={{ textDecoration: "underline" }}>Prevention</span>&nbsp;
                            <MDBIcon icon="angle-double-right" />
                            <MDBIcon icon="angle-double-right" />
                            </h4>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">Get vaccinated when a vaccine is available to you.</h6>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">Stay at least 1 metre apart from others, even if they don’t appear to be sick.</h6>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</h6>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</h6>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">Cover your mouth and nose when coughing or sneezing.</h6>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="aqua" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h6 className="font-weight-bold mb-3">If you feel unwell, stay home and self-isolate until you recover.</h6>
                        </MDBCol>
                    </MDBRow>
            </MDBCol>
        </MDBRow>
        <hr className="mb-5"/>
        </MDBContainer>
        <Middle/>
        <Section/> 
      </section>
      
      

        )
    }
}

export default Home;