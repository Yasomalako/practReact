
import './App.css';
import { useState } from 'react';
import Router from './Router.component';

export const pages = ["home","about","desck","user","game","adduser"]
function App() {
  const [page,setPage] = useState("home")
 
  return (
   <div>
    {
     pages.map(pageName=>
    <button onClick={()=>setPage(pageName)}>{pageName}</button>
  )}
    <Router number={0} page={page}/>
   </div>
  );
}

export default App;
