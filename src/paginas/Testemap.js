import React from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import localizacaoteste from "./localizacaoteste.json";
import "./Tutorial.css";
import Navbar from "../components/Navbar/Navbar";
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
  state = {
    value: "",
  };

  getValueCidade = (event) => {
    //console.log(event.target.value);
    //console.log('cidade escolhida foi:',event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmitMapa = () => {
    const valuecidade = this.state.value;
    console.log(valuecidade);
  };

  render() {
    console.log("State:", this.state);

    return (
      <div className="fundoloc">
        <Navbar />

        <br></br>
        <div className="espacotoploc">
          <div className=" btnvoltarlocationMAPAAA">
            <a href="/tracker">
              <button className="voltartutorial">Voltar</button>
            </a>
          </div>
          <h1 className="corloc">Selecione a sua localização</h1>
        </div>

        <div
          className="enquadarcentromapa"
          ref={(el) => (this.mapContainer = el)}
          style={{ width: "60%", height: "80vh" }}
        ></div>
        <div className="espacotopmapa">
          <label className="escolahcidade">
            <strong>Escolha Cidade</strong>
          </label>
          <br></br>
          <select
            id="cidade"
            name="cidade"
            placeholder="Escolha cidade"
            onChange={this.getValueCidade}
          >
            <option value="Não Selecionda">Seleciona uma opção</option>
            <option value="Aveiro">Aveiro</option>
            <option value="Chaves">Chaves</option>
            <option value="Peniche">Peniche</option>
          </select>
        </div>

        <div className="fundoverdeeeeeeemapa">
          <button
            onClick={this.handleSubmitMapa}
            className="btnsubmterMAPAAA"
            type="button"
          >
            Confirmar dados
          </button>
          <a href="/tracker">
            <button className="btnsubmterMAPAAA">Submeter</button>
          </a>
        </div>
      </div>
    );
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
