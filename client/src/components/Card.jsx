import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones

export default function Card({
  id,
  name,
  cedula,
  celular,
  ciudad,
  dirección,
  agente,
  image,
  type,
  inDb,
}) {
  console.log("el type es ", name);

  // let x = [];
  // x = type.map((t) => (inDb ? t.name : t));
  // console.log("ahora el tipo es :---", x);

  return (
    <div>
      {/* <img
        src={image}
        alt="imagen no encontrada"
        width="200px"
        height="250px"
      /> */}

      <div>
        <h2>Datos del cliente</h2>
        <h3>Nombre: {name}</h3>
        <p>Cedula:{cedula}</p>
        <p>Celular:{celular}</p>
        <p>Ciudad:{ciudad}</p>
      </div>
      <hr></hr>
      <h3>Se designo el Agente:</h3>
      <p>{agente}</p>
    </div>
  );
}
