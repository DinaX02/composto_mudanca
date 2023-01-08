import React, {useState} from "react";
import './location.css';
//import Map, {Marker, NavigationControl} from "react-map-gl";
//import { useState } from "react";
import ReactMapGL from 'react-map-gl'; 

const Location  = () => {
 
//localização portugal
  const [viewport, setViewport]=useState({

     latitude:39.6621648,
     longitude:-8.1353519,
     width: window.innerWidth,
     height:window.innerHeight,
     zoom:8

    
  })
  
    return (  
<ReactMapGL
 mapStyle="mapbox://styles/mapbox/streets-v9"
mapboxAccessToken={"pk.eyJ1IjoiZGluaXMyNyIsImEiOiJjbGNtOWs4eWsyMDBqM3ZxdXI3ZHkzN3dyIn0.D_BcBthJi3bM0l6nHGPNRw"}

{...viewport}
onViewportChange={(newView) => setViewport(newView)}

>

</ReactMapGL>
  
    );
  };
  
  export default Location ; 
//<div>


//<div id='map' style='width: 400px; height: 300px;'></div>




//mapboxgl.accessToken = 'pk.eyJ1Ijoic2J2b2ciLCJhIjoiY2xieGhuZWdsMDBqMzNwcDg1ZGVlcDQ3aiJ9.3X9TFUOqCenOONb7AxySIQ';
//const map = new mapboxgl.Map({
//container: 'map', // container ID
//style: 'mapbox://styles/mapbox/streets-v12', // style URL
//center: [-74.5, 40], // starting position [lng, lat]
//zoom: 9, // starting zoom
//});



//</div>

//<h1>Location</h1>
//<Map mapboxAccessToken="pk.eyJ1Ijoic2J2b2ciLCJhIjoiY2xjNnN5Z2VvMHduODN2dzM3ZjQzejBvZyJ9.p41n5ixPmhFNht_ygizI1Q"
//style={{
    //width: "500px",
    //height:"500px",
    //borderRadius:"15px",
    //border: "2px solid red",
//}}
//initialViewState={{
    //longitude: lng,
    //latitude:  lat,
//}}

//mapStyle="mapbox://styles/mapbox/streets-v9"

//>

//<Marker

  //  Longitude = {lng}
  //  Latitude = {lat}
///>

//<NavigationControl/>

//</Map>