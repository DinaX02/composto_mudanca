import './App.css';
//import Navbar from './components/Navbar/Navbar';
//import Header from './components/Header/Header';
//import ConteudoHp from './components/ConteudoHp/ConteudoHp';
//import Footer from './components/Footer/Footer';
import SignUp from './paginas/SignUp';
import SignUpAluno from './paginas/SignUp_Aluno';
import SignInAluno from './paginas/SignIn_Aluno';
import SignUpProfessor from './paginas/SignUp_Professor';
import SignInProfessor from './paginas/SignIn_Professor';
import Tutorial from './paginas/Tutorial';
import Homepage from './paginas/Homepage';
//import { BrowserRouter , Routes , Route } from 'react-router-dom';
//import Tracker from './paginas/TrackerSofia';



function App() {
  return (
    <div className="App">

      <SignUpProfessor/>

    </div>
  );
}

export default App;