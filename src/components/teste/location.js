import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, {Marker, NavigationControl} from "react-map-gl";
import { useState } from "react";



const Location = ()=> {

    const [lng, setLng] = useState(54.37585762735543);
    const [lat, setLat] = useState(24.45677614934833);

    return(

        <div>
        <h1>Location</h1>
        <Map mapboxAccessToken="pk.eyJ1Ijoic2J2b2ciLCJhIjoiY2xjNnN5Z2VvMHduODN2dzM3ZjQzejBvZyJ9.p41n5ixPmhFNht_ygizI1Q"
        style={{
            width: "500px",
            height:"500px",
            borderRadius:"15px",
            border: "2px solid red",
        }}
        initialViewState={{
            longitude: lng,
            latitude:  lat,
        }}

        mapStyle="mapbox://styles/mapbox/streets-v9"

        >

        <Marker

            Longitude = {lng}
            Latitude = {lat}
        />

        <NavigationControl/>

        </Map>

        </div>

    )
}

export default Location
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