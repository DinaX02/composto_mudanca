import React from "react"
import ReactDOM from "react-dom"
import mapboxgl, { Marker } from 'mapbox-gl'
import localizacaoteste from './localizacaoteste.json'

const localizacaoEscolas = localizacaoteste;

console.log(localizacaoteste[0].coordinates);

mapboxgl.accessToken='pk.eyJ1IjoiZGluaXMyNyIsImEiOiJjbGNtOWs4eWsyMDBqM3ZxdXI3ZHkzN3dyIn0.D_BcBthJi3bM0l6nHGPNRw'

const data = [{
    "location":"Escola Secundária José Estêvão, Avenida 25 de Abril, 3811-901 Aveiro, Portugal",
    "cidade":"Aveiro",
    "nomeEscola":"escola secundária José Estêvão",
    "coordinates":[40.6381253900000,-8.6478564530000]
   },
   {
    "location":"Escola Secundária Doutor António Granjo, Rua de Fernão Lopes, 5400-244 Chaves, Portugal",
    "cidade":"Chaves",
    "nomeEscola":"escola secundária Doutor António Granjo",
    "coordinates":[41.744749657864155,-7.483052613762696]
   },
   {
"location":"Escola Secundária de Peniche, Avenida 25 de Abril, 2520-324 Peniche, Portugal",
    "cidade":"Peniche",
    "nomeEscola":"escola secundária Peniche",
    "coordinates":[39.36375,-9.378778]
   }

]

class Mapp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lng:-8.1353519,
            lat:39.6621648,
            zoom:6
        }
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11', //default
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        data.forEach((location)=>{
            console.log(location);
            var marker = new mapboxgl.Marker()
                .setLngLat([40.6381253900000,-8.6478564530000])
                .addTo(map);
            console.log(marker);
            
        })
 
    }


    render(){
        return(
            <div>
                <div ref={el => this.mapContainer= el} style={{width:'100%',height:'100vh'}}>

                </div>
            </div>
        )
    }
}

export default Mapp;

//var marker = new mapboxgl.Marker().setLngLat(localizacao[0].coordinates)

//var marker = new mapboxgl.Marker()
//.setLngLat(location.coordinates)
//.setPopup( new mapboxgl.Popup({offset:30}))
//.setHTML('<h4>'+ location.cidade +'</h4>'+ location.location)

//.addTo(map);
//console.log(marker);