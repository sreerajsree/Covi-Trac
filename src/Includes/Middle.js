import React from "react";
import {Carousel} from '3d-react-carousal';
import axios from "axios";


class Middle extends React.Component{


      constructor(props) {
        super(props);
        this.state = {
          data : []
        }
      }
    
      componentDidMount(){
        axios.get('https://api.unsplash.com/search/photos?page=6&per_page=25&query=coronavirus&client_id=LjNI97wsMD4-SECsoAZL81NEjNWc-wglQPMZ1bRPIeQ').then(response=>{
          this.setState({ data : response.data.results  })
          console.log(this.state.data)
        })
      }
      
      render() {


        var slides = this.state.data.map(function(itm,k){
          return (
            <div>
              <img src={itm.urls.regular}  height="350" width="650" />
              <h6 className="text-center mt-4 font-weight-bold w-responsive">{itm.description}</h6>
            </div>
          )
        })
        
       
        return (
            <React.Fragment>
              <Carousel slides={slides}  />
              <h1 className="text-center mt-5">{slides.description}</h1>
            </React.Fragment>
         
        );
      }
    }

export default Middle;