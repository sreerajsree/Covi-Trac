import axios from 'axios'
import React from 'react'
import Section from './Includes/Section';
import India from './India';
import INTableSection from './TableIndia/INTableSection';


class IndiaData extends React.Component{

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api/countries/india/confirmed').then(response=>{
            this.setState({ data : response.data })
        })
    }

    render(props){
        // var data = this.state.data;
        // console.log(data)
        return(
            <div>
                <India data = {this.state.data} />
                <INTableSection data = {this.state.data} />
                <Section/>
            </div>
        )
    }
} 


export default IndiaData;