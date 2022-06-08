import React from "react";
import { useState } from "react";
import Card from "./Card";

export default function Formulario() {
  const [state, setState] = useState([
    {
      nombre: "",
    },
  ]);
  const handleClick = () => {
    const inputname = document.getElementById("input-name");
    const inputlastname = document.getElementById("input-lastname");
    const inputphone = document.getElementById("input-phone");
    const inputemail = document.getElementById("input-email");
    setState([
      ...state,
      {
        nombre: inputname.value,
        apellido: inputlastname.value,
        telefono: inputphone.value,
        email: inputemail.value,
      },
    ]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input id="input-name" type="text" required></input>
        <label>Apellido</label>
        <input id="input-lastname" type="text" required></input>
        <label>Telefono</label>
        <input id="input-phone" type="number" required></input>
        <label>Email</label>
        <input id="input-email" type="email" required></input>
        <button type="submit" onClick={handleClick}>
          Enviar
        </button>
      </form>
      <ul>
        {state.map((states) => (
          <Card datos={states} />
        ))}
        {state.nombre}
      </ul>
    </>
  );
}
