import React from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import localizacaoteste from "./localizacaoteste.json";
import "./Tutorial.css";
import NavbarSignedIn from "../components/Navbar/NavbarSignedIn";
import { Link } from "react-router-dom";
const localizacaoEscolas = localizacaoteste;

console.log(localizacaoteste[0].coordinates);
console.log(localizacaoteste[1].coordinates);
console.log(localizacaoteste[2].coordinates);

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGluaXMyNyIsImEiOiJjbGNtOWs4eWsyMDBqM3ZxdXI3ZHkzN3dyIn0.D_BcBthJi3bM0l6nHGPNRw";

class Mapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -8.1353519,
      lat: 39.6621648,
      zoom: 5,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11", //default
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    var marker1 = new mapboxgl.Marker()
      .setLngLat([...localizacaoteste[0].coordinates])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h4> ${localizacaoteste[0].cidade}<br><br>${localizacaoteste[0].location}</h4>`
        )
      )
      .addTo(map);

    //console.log(marker1)

    var marker2 = new mapboxgl.Marker()
      .setLngLat([...localizacaoteste[1].coordinates])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h4> ${localizacaoteste[1].cidade}<br><br>${localizacaoteste[1].location}</h4>`
        )
      )
      .addTo(map);

    //console.log(marker2)

    var marker3 = new mapboxgl.Marker()
      .setLngLat([...localizacaoteste[2].coordinates])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h4> ${localizacaoteste[2].cidade}<br><br>${localizacaoteste[2].location}</h4>`
        )
      )
      .addTo(map);

    //console.log(marker3)

    //  console.log(marker);

    // ...localizacaoteste[0].coordinates - cordenadas aveiro
    //...localizacaoteste[1].coordinates  -cordenadas chaves
    // ...localizacaoteste[2].coordinates - cordenadas peniche
  }
  //state = {
  //  value: "",
 // };

 // getValueCidade = (event) => {
    //console.log(event.target.value);
    //console.log('cidade escolhida foi:',event.target.value);
 //   this.setState({ value: event.target.value });
 // };

 // handleSubmitMapa = () => {
   // const valuecidade = this.state.value;
  //  console.log(valuecidade);
  //};

  render() {
    console.log("State:", this.state);

    return (
      <div className="fundoloc">
        <NavbarSignedIn />

        <br></br>
        <div className="espacotoploc">
          <div className=" btnvoltarlocationMAPAAA">
            <Link to="/tracker">
              <button className="voltartutorial">Voltar</button>
            </Link>
          </div>
          <h1 className="corloc">Selecione a sua localização</h1>
        </div>

        <div
          className="enquadarcentromapa"
          ref={(el) => (this.mapContainer = el)}
          style={{ width: "70%", height: "80vh" }}
        ></div>
      </div>
    );
  }
}

export default Mapp;

