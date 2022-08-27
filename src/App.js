
import './compnentes/App.css'
import Router from './Router.component';
import {  BrowserRouter } from 'react-router-dom'
import {Header} from './compnentes/feuters/header/Header.component';
import  {Footer}  from './compnentes/feuters/footer/Footer.component';
import { Navbar } from './compnentes/feuters/nav-bar/Navbar.component';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
