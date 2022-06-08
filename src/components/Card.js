import React from "react";
import Formulario from "./Formulario";

export default function Card(datos) {
  return (
    <div>
      <h2>{datos.nombre}</h2>
      <h2>{datos.apellido}</h2>
      <h2>{datos.telefono}</h2>
      <h2>{datos.email}</h2>
    </div>
  );
}
