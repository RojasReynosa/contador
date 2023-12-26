import "./App.css";
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador.js";
//importamos el hook para manejar el estado del contado
import { useState } from "react";

function App() {
  //declaro una constante. Esta constante es un arreglo con dos elemntos. El primero es el valor que queremos usar como estado, osea numero. El segundo es una función que nos permitirá actualizar dicho numero. Le pasamos el valor 0 para que se cargue inicializarmente
  const [numero, setNumero] = useState(0);

  //Se define la función sumar
  const sumar = () => {
    //console.log("sumar");
    setNumero(numero + 1);
  };
  //Se define la función restar
  const restar = () => {
    //console.log("restar");
    setNumero(numero - 1);
  };
  //Se define la función reiniciar
  const reiniciar = () => {
    //console.log("reiniciar");
    setNumero(0);
  };
  return (
    <div className="App">
      <div className="contenedor">
        <Contador numero={numero} />
        <div className="contenedor-botones">
          <Boton texto="Sumar" manejar0peracion={sumar} />
          <Boton texto="Restar" manejar0peracion={restar} />
          <Boton texto="Reiniciar" manejar0peracion={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;
