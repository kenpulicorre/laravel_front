import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDetalleCliente } from "../actions/index.js";
import estilos from "./DetailPoke.module.css";

export default function DetailPoke(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams(); //foma 2 con el hook useparams
  useEffect(() => {
    //dispatch(getDetalleCliente(props.match.params.id)); //forma 1 con match
    dispatch(getDetalleCliente(id)); //foma 2 con el hook useparams
  }, [id, dispatch]);
  // }, [id,dispatch]);///foma 2 con el hook useparams

  //-----
  const clienteDetalle = useSelector((state) => state.detalle);
  let x = [];
  //
  // if (clienteDetalle.length) {
  //   console.log("ahora el tipo en detalle es:---", clienteDetalle[0].types);
  //   // x = clienteDetalle[0].types.map((t) =>
  //   //   clienteDetalle[0].inDb ? t.name : t
  //   // );
  // }
  console.log(x);
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeekenn", clienteDetalle);

  // return (
  //   <div>
  //     <h1 className={estilos.container0}>hola</h1>
  //   </div>
  // );
  return (
    <div>
      <h1 className={estilos.container0}></h1>
      <div>
        <Link to="/home">
          <button className={estilos.boton}>VOLVER</button>
        </Link>
        {clienteDetalle.id > 0 ? (
          <div className={estilos.container}>
            <h1 className={estilos.name}>{clienteDetalle.nombre}</h1>
            {/* <img
              className={estilos.img}
              src={clienteDetalle[0].img}
              alt={clienteDetalle.name}
            /> */}
            {/* debo arregalr el types */}

            <div className={estilos.infoContainer}>
              <h3>Id: {clienteDetalle.id}</h3>
              <h3>Cedula: {clienteDetalle.cedula}</h3>
              <h3>Celular: {clienteDetalle.celular}</h3>
              <h3>Ciudad: {clienteDetalle.ciudad}</h3>
              <h3>Dirección:{clienteDetalle.dirección}</h3>

              {/* <h3>
                Tipos:
                <p>
                  {x.map((t) => (
                    <span key={t}>
                      {t} {"    "}
                    </span>
                  ))}
                </p>
              </h3> */}
              <p></p>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
        <p></p>
        <Link to="/home">
          <button className={estilos.boton}>VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
