import axios from "axios";
import React from "react";


class Vaccine extends React.Component{


    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1').then(response=>{
            this.setState({ data: response.data })
            // console.log(this.state.data)
        })
    }
    render(){

        return(

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Country</td>
                            <td>Vaccinations</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((itm,ky)=>{
                                console.log(itm)
                                return(
                                    <tr>
                                        <td>{itm.country}</td>
                                        <td>{itm.timeline.string}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Vaccine;