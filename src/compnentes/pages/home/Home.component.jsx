import "./home.css";
import { useContext } from 'react'
import { textContet } from "../../../Router.component";

function Home() {
  const text = useContext(textContet)
  console.log(text)

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
