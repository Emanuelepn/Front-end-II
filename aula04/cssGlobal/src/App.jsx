import React from "react";
import Home from "./components/home";
import Campanha from "./components/campanha";
import FormularioDeContato from "./components/formularioDeContato";

function App() {
    return(
      <div>
       <Home/>
       <Campanha mes='setembro'/>
       <FormularioDeContato/>
       </div>
    )
}
export default App