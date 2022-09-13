import React from "react";
import { MDBContainer,  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Timeline } from 'react-twitter-widgets';



class Section extends React.Component{

    render(){


  return (

      <MDBContainer>
        <hr className="mt-5 mb-5" />
        <section className="mt-5">
        <MDBRow>
          <MDBCol md="8">
          <MDBRow className="mb-3">
              <MDBCol size="2" className="text-right"></MDBCol>
              <MDBCol size="10">
              <h4 className="font-weight-bold mb-3 text-uppercase mt-4 mb-4"><span style={{ textDecoration: "underline" }}>News</span>&nbsp;
                <MDBIcon icon="angle-double-right" />
                <MDBIcon icon="angle-double-right" />
              </h4>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2" className="text-right">
                <MDBIcon icon="syringe" size="2x" className="aqua" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"> Vaccination</h5>
                <p className="aqua-color justify">54.6%<span className="grey-color"> of the world population has received at least one dose of a COVID-19 vaccine.
                8.07 billion doses have been administered globally, and 32.74 million are now administered each day.
                Only 6% of people in low-income countries have received at least one dose.</span>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2" className="text-right">
                <MDBIcon icon="globe-asia" size="2x" className="aqua" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"> International</h5>
                <p className="grey-color justify">The 'at-risk' countries <span className="aqua-color">(updated on November 30, 2021)</span> are countries in <span className="font-weight-bold">Europe</span>, including the <span className="font-weight-bold">United Kingdom, South Africa, Brazil, 
                Botswana, China, Mauritius, New Zealand, Zimbabwe, Singapore, Hong Kong and Israel.</span>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2" className="text-right">
                <MDBIcon icon="map-marker-alt" size="2x" className="aqua" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"> India</h5>
                <p className="grey-color justify"><span className="font-weight-bold aqua-color">India</span> began its vaccination programme on 16 January 2021 with <span className="font-weight-bold"><a href="https://www.astrazeneca.com/covid-19.html">AstraZeneca vaccine (Covishield)</a> </span>
                 and the indigenous <span className="font-weight-bold"><a href="https://www.bharatbiotech.com/covaxin.html">Covaxin</a></span>. Later, <span className="font-weight-bold"><a href="https://sputnikvaccine.com/">Sputnik V</a></span> and the <span className="font-weight-bold"><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Moderna.html">Moderna vaccine</a></span> was approved for emergency use too.
                 As of 17 August 2021, the country had administered over 550 million vaccine doses. On 21 October 2021, at 9:47 AM 
                 according to the Co-WIN portal, India crossed 100 crore (1 billion) doses.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name mt-3">
            <Timeline dataSource={{ sourceType: 'profile', screenName: 'WHO' }} options={{ height: '550' }} />
          </MDBCol>
          
        </MDBRow>
      </section>
      </MDBContainer>
  );
}}

export default Section;