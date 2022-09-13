import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MDBContainer, MDBIcon } from 'mdbreact'
import { Icon } from 'leaflet'
import icon1 from './Images/covid-19.svg'


const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [27, 27]
})



function India(props){

    const [ activeCovid, setActiveCovid ] = useState( null );
      
    
    return (
          <React.Fragment>
          <div className="container">
            <h1 className="text-center mt-5 mb-4 h1-responsive">
                <MDBIcon icon="angle-double-left" />&nbsp;<span className="font-weight-bold">India</span> Latest Visualization&nbsp; 
                <MDBIcon icon="angle-double-right" />
            </h1>
          </div>
            <MDBContainer>
            <MapContainer 
                center = { [ 20.593683, 78.962883 ] }
                zoom = { 5 }
                scrollWheelZoom = { false } 
            >
            {/* <TileLayer 
              attribution=''
              url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            /> */}
            <TileLayer 
                attribution = ''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { props.data.map(eachData => (
              <Marker 
                  key={eachData.uid} 
                  position= {[eachData.lat, eachData.long]}
                  eventHandlers={{
                    click: () => {
                      setActiveCovid(eachData)
                    }
                  }}
                  icon= {covidIcon}
                />
            ))}

            { activeCovid && (
              <Popup 
                position={ [ activeCovid.lat, activeCovid.long ] }
                onClose={()=>{
                  setActiveCovid(null)
                }}
              >
                <div className="mb-5 mt-2">
                  <h1 className="font-weight-bold h1-responsive">{ activeCovid.provinceState }</h1>
                  <h4 className="h4-responsive font-weight-bold">Total Confirmed:&nbsp;&nbsp;
                   <span className="blue-text">{ activeCovid.confirmed }</span></h4>
                  <h4 className="h4-responsive font-weight-bold">Total Deaths:&nbsp;&nbsp;
                   <span className="text-danger">{ activeCovid.deaths }</span></h4>
                   {/* <h4 className="h4-responsive font-weight-bold">Total Recovered:&nbsp;&nbsp;
                   <span className="green-text">{ activeCovid.uid }</span></h4> */}
                  <h4 className="h4-responsive font-weight-bold">Cases for last 28 Days:&nbsp;&nbsp;
                   <span className="blue-text">{ activeCovid.cases28Days }</span></h4>
                  <h4 className="h4-responsive font-weight-bold">Deaths for last 28 Days:&nbsp;&nbsp;
                   <span className="red-text">{ activeCovid.deaths28Days }</span></h4>
                </div>
              </Popup>
            )}

            </MapContainer>
            <div className="mb-4"></div>
            </MDBContainer>
            </React.Fragment>
      
      );
}

export default India;


