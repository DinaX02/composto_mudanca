import './App.css';
import Navbar from './components/Navbar/Navbar';
//import Header from './components/Header/Header';
//import ConteudoHp from './components/ConteudoHp/ConteudoHp';
//import Footer from './components/Footer/Footer';
import About from './paginas/About';
import SignUp from './paginas/SignUp';
import SignUpAluno from './paginas/SignUp_Aluno';
import SignInAluno from './paginas/SignIn_Aluno';
import SignUpProfessor from './paginas/SignUp_Professor';
import SignInProfessor from './paginas/SignIn_Professor';
import Tutorial from './paginas/Tutorial';
import Homepage from './paginas/Homepage';
import Location from './components/teste/location'
import Service from './paginas/Service';
import Feed from './paginas/Feed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tracker from './paginas/Tracker';
import Mapp from './paginas/Testemap';
import localizacao from "./paginas/localizacao.json";
import ReactMapGL from 'react-map-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';
const localizacaoEscolas = localizacao;
console.log(localizacaoEscolas.Aveiro);


function App() {
  return (
    <div className="App">

      <Router>

        <Routes>

          <Route path='/' element={ <Homepage/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/service' element={ <Service/>}/>
          <Route path='/signup' element={ <SignUp/>}/>
          <Route path='/signupprofessor' element={<SignUpProfessor/>}/>
          <Route path='/signupaluno' element={<SignUpAluno/>}/>
          <Route path='/signinaluno' element={<SignInAluno/>}/>
          <Route path='/signinprofessor' element={<SignInProfessor/>}/>
          <Route path='/tracker' element={<Tracker/>}/>
          <Route path='/tutorial' element={<Tutorial/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/location' element = {<Mapp/>}/>
        </Routes>

      </Router>
     

    </div>
  );
}

export default App;