import React, { Fragment } from "react";
//hoooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones
import {
  orderByName,
  getTypes,
  restartDetalle,
  postAgente,
} from "../actions/index.js";
import getClientes from "../actions/index";
//componentes
import Card from "./Card";
import agente from "./Agente";
import Loader from "./Loader";
//-----------------------------------------
var señal;
var señal2;
export default function Home(params) {
  //----hook iniciales---------
  const dispatch = useDispatch(); //mapdispatchtoprops
  const allClientes = useSelector((state) => state.todosClientes); //mapstatetoprops
  const [order, setOrder] = useState("");
  const [signal, setSignal] = useState(true);
  //------------------cartastopage-----
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePage, setPokePage] = useState(12);
  const endPoke = currentPage * pokePage;
  const iniPoke = endPoke - pokePage;
  // const pokesToPage = allClientes.slice(iniPoke, endPoke);
  const pokesToPage = allClientes;
  const setPaginado = (nPage) => {
    setCurrentPage(nPage);
  };

  //------------------fin cartasToPage-----
  // let datox = agente();

  // console.log("--------------++++++++++++++", datox[0]);
  //cuando el componente se monta traer pokes
  useEffect(() => {
    // for (let i = 0; i < datox.length; i++) {
    //   dispatch(postAgente(datox[i]));
    // }
    setSignal(true);
    dispatch(getClientes());

    dispatch(getTypes());
    dispatch(restartDetalle());
    señal = true;

    setTimeout(function () {
      setSignal(false);
      if (allClientes.length < 1) {
        alert("si Aun no hay clientes, debe crearlos!");
      }
    }, 1000);
    console.log("señallllllllllllllllllllllllllll\n", señal);
  }, [dispatch]); //[] =1sola vez,[state]=cada state ejecuta

  //----fin hook iniciales---------
  //----funciones-----------------

  function handleOrder(params) {
    params.preventDefault();
    dispatch(orderByName(params.target.value));
    setCurrentPage(1);
    //setOrder(`actualiza estado local`);
    setOrder(`ordenado ${params.target.value}`);
    if (allClientes.length > 1) {
      señal = false;
    }
  }
  //----fin funciones--------------

  if (allClientes.length < 1 && signal) {
    return <Loader />;
  }

  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.title}>¡Creacion de Formato!</h1>
      <div className={estilos.selector}>
        <p className={estilos.selector2}>
          <Link to="/cliente" className={estilos.crear_poke}>
            Crea cliente
          </Link>
        </p>
        {/* lalmado componente search */}
      </div>

      {/* filtros------------------------- */}
      <div className={estilos.Contenedor_filtro}>
        {/* ascendentemente como descendentemente */}
        <select
          name=""
          id=""
          onChange={(e) => handleOrder(e)}
          className={estilos.select}
        >
          <option value="Asc">Ascendente</option>
          <option value="Desc">Descenden</option>
        </select>

        {/* llamando al componente Paginado */}

        {/* <CreateForm /> */}
        {/* llamando al componente card----- */}
        <div className={estilos.contenedor_pokes}>
          {pokesToPage?.map((el) => {
            console.log("++++++++++++", el);

            return (
              <Fragment key={el.id}>
                <Link to={"/home/" + el.id} className={estilos.contenedor_1pke}>
                  <Card
                    key={el.id}
                    id={el.id}
                    name={el.nombre}
                    cedula={el.cedula}
                    celular={el.celular}
                    ciudad={el.ciudad}
                    dirección={el.dirección}
                    agente={el.agente_nombre}
                  />
                </Link>
              </Fragment>
            );
          })}
        </div>
        {/* llamando al componente card----- */}
      </div>
    </div>
  );
}
