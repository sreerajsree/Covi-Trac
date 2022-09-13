import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MDBContainer, MDBIcon } from 'mdbreact'
import * as L from 'leaflet';
import icon1 from './Images/covid-19.svg';

const covidIcon = new L.Icon({
  iconUrl: icon1,
  iconSize: [25, 25]
})




// const redIcon = new L.Icon({
//   iconUrl:
//     'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

const World = (props) => {
  const center_position = [31.262218, 34.801472];
  const zoom = 1.5;
  console.log(props)
    return (
      <section className="map" style={{ width: '100%' }}>
        <div className="container">
            <h1 className="text-center mt-5 mb-4 h1-responsive">
                <MDBIcon icon="angle-double-left" />&nbsp;<span className="font-weight-bold">World</span> Latest Visualization&nbsp; 
                <MDBIcon icon="angle-double-right" />
            </h1>
          </div>
        <MDBContainer>
          <MapContainer
            className="map"
            center={center_position}
            zoom={zoom}
            scrollWheelZoom={true}
          >
          <TileLayer
            attribution=''
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {props.countries
            ? props.countries.features.map((place) => {
                const { coordinates } = place.geometry;
                const { flag, _id } = place.properties.countryInfo;
                const {
                  country,
                  cases,
                  deaths,
                  recovered,
                  todayCases,
                  todayDeaths,
                  todayRecovered,
                  updated,
                } = place.properties;

                let date = new Date(updated);

                return (
                  <Marker
                    icon={covidIcon}
                    position={coordinates}
                    key={place.properties.country}
                  >
                    <Popup>
                      
                      <p>
                        <strong><img src={flag} style={{ width: '50px', height: 'auto' }} /></strong>
                        <strong className="font-weight-bold" style={{fontSize: "22px", verticalAlign: "baseline"}}> {country}</strong>
                      </p>
                      <p className="font-weight-bold blue-text" style={{fontSize: "16px"}}>
                        <strong >Cases: </strong> {cases} |{' '}
                        <strong>Cases Today:</strong> {todayCases}
                      </p>
                      <p className="font-weight-bold red-text" style={{fontSize: "16px"}}>
                        <strong>Deaths:</strong> {deaths} |{' '}
                        <strong>Death Today:</strong> {todayDeaths}
                      </p>
                      <p className="font-weight-bold green-text" style={{fontSize: "16px"}}>
                        <strong>Recovered:</strong> {recovered} |{' '}
                        <strong>Recovered Today:</strong> {todayRecovered}
                      </p>
                      <p className="font-weight-bold" style={{fontSize: "16px"}}>
                        <strong>Last Update:</strong> {date.toLocaleDateString()}
                      </p>
                    </Popup>
                  </Marker>
                );
              })
            : ''}
        </MapContainer>
        <div className="mb-4"></div>
      </MDBContainer>
    </section>
      
      );
}

export default World;


