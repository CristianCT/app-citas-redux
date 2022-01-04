import React from 'react'

import ListaCitas from "../components/ListaCitas";
import DetallesCita from "../components/DetallesCita";

const PrincipalPage = ({ citas, listarCitas, mostrarUno, cambiarEstado }) => {
    
    return (
        <div>
            <h1 className="navbar navbar-expand-lg navbar-light header">APP-CITAS</h1>
            <div className="ventana-principal">
                { console.log(citas.citass) }
                <ListaCitas citas={citas.citas} methodMostrarUno={mostrarUno} methodListarCitas={ listarCitas } />
                <DetallesCita citaActual={citas.citaActual} method={cambiarEstado} />
            </div>
        </div>
    )
}

export default PrincipalPage;
