import axios from "axios";
import React from "react";
import { StyledSection, StyledNews } from '../Includes/TableSections';
import NewsArticle from './NewsArticle'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

// function News(props){

//     console.log(props.news)
    
//     return(
//         <StyledSection>
//       <h1>Top News</h1>
//       {!props.news ? "" : (
//         <StyledNews>
//           {props.news[0].articles.slice(0, 5).map((item) => {
//             return <NewsArticle {...item} />;
//           })}
//         </StyledNews>
//       )}
//     </StyledSection>
//     )
// }

// export default News;

class News extends React.Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get('https://gnews.io/api/v4/search?q=covid&lang=en&token=70449059f9dddf33b0a253a00e9bc094').then(response=>{
            this.setState({ data : response.data.articles  })
            console.log(this.state.data)
        })
    }
    render(){

        return(
            <MDBCard className="px-5 pb-4 container">
                 <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center mb-4 mt-3">
                        Recent News
                    </h2>
                    <h2 className="text-center w-responsive mx-auto mb-5 h2-responsive">
                    <MDBIcon icon="angle-double-left" /> Most Recent News about Covid-19 <MDBIcon icon="angle-double-right" />
                    </h2>
                {
                    this.state.data.map((itm,ky)=>{
                        return(
                            <React.Fragment>
                                <MDBRow>
                                    <MDBCol lg="5">
                                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                            <img className="img-fluid" src={itm.image} alt="Sample image" />
                                            <a>
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="7">
                                        <a href={itm.source.url} style={{color: "#26C6DA"}} target="_blank">
                                            <h6 className="font-weight-bold mb-3">
                                            <MDBIcon icon="bullhorn" className="pr-2" /> {itm.source.name} </h6>
                                        </a>
                                        <h4 className="font-weight-bold mb-3 p-0">
                                            <strong>{itm.title}</strong>
                                        </h4>
                                        <p className="dark-grey-text"> {itm.description} </p>
                                        <p>
                                            by
                                            <a href={itm.source.url} target="_blank">
                                            <strong> {itm.source.name} </strong>
                                            </a>
                                            , {itm.publishedAt}
                                        </p>
                                        <a class="btn btn-md aqua-gradient" href={itm.url} target="_blank">Read more</a>
                                    </MDBCol>
                                </MDBRow>
                            <hr className="my-5" />
                        </React.Fragment>
                        )
                    })
                }
   
        </MDBCardBody>
      </MDBCard>
           
        )
    }
}

export default News;