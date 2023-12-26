import React from "react";

//este componente simplemente retorna el numero para visualizarlo.
//se le envia por el parametro el numero a mostrar
function Contador(props) {
  return <div className="contador">{props.numero}</div>;
}
export default Contador;
