import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <>
        <img src="/img1.jpg" alt="Paisagem" />
      </>
      {/*Imagem em assets*/}
      <>
        <img src={City} alt="Paisagem noturna urbana" />
      </>
      <ManageData />
    </>
  );
}

export default App;
