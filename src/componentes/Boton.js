import React from "react";

//se crea el componente
//tecto es el texto que colocará en el botón, puede ser sumar, restar o reiniciar. manejar0peracion es una funcion que pasaremos por parametro, puede ser cualquier de las tres:sumar, restar o reiniciar
function Boton({ texto, manejar0peracion }) {
  return <button onClick={manejar0peracion}>{texto}</button>;
}

export default Boton;
