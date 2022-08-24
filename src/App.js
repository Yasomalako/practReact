
import './compnentes/App.css'
import Router from './Router.component';
import { Link, BrowserRouter } from 'react-router-dom'
export const pages = ["about", "desck", "user", "game"]
function App() {

  return (
    <div>
      <BrowserRouter>
      <Link to="/"><button>home</button></Link><br></br>
      <Link to="pageDonttfind"></Link><br></br>
        {
          pages.map(pagePath =>(
            <Link to={pagePath}><button>{pagePath}</button></Link>
          ))}
          <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
