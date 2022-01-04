import React from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';

const DetallesCita = (props) => {
    const dispatch = useDispatch();
    const handleCancel = ()=>{
        console.log(props)
        axios.put(`/cancelarcita/${props.citaActual.id}`)
            .then(response => props.method(dispatch, response.data))
            .catch(error => console.log(error))
    }

    const handleReactivar = ()=>{
        axios.put(`/reactivarcita/${props.citaActual.id}`)
            .then(response => props.method(dispatch, response.data))
            .catch(error => console.log(error))
    }
    
    return (
        <div className="card">
            <div className={ `card-header ${props.citaActual.estadoReservaCita?"card-header-active":"card-header-cancel"}` }></div>
            <div className="card-body">
                <h5 className="card-title">DETALLES DE LA CITA</h5>
                <ul>
                    <li>Nombre completo: { props.citaActual.nombrePaciente + " " + props.citaActual.apellidosPaciente }</li>
                    <li>Medico que lo atendera: { props.citaActual.nombreMedico + " " + props.citaActual.apellidosMedico }</li>
                    <li>Padecimiento: { props.citaActual.padecimiento }</li>
                    <li>Tratamiento: { props.citaActual.tratamiento }</li>
                    <li>Fecha y hora: { props.citaActual.fechaReservaCita + " " + props.citaActual.horaReservaCita }</li>
                    <li>Estado: { props.citaActual.estadoReservaCita?"Activa": "Cancelada" }</li>
                </ul>
                <div className="d-grid">
                    { props.citaActual.estadoReservaCita
                        ?<button onClick={handleCancel} className="btn btn-secondary btn-morado" type="button">Cancelar cita</button>
                        :<button onClick={handleReactivar} className="btn btn-secondary btn-morado" type="button">Reactivar cita</button> }
                </div>
            </div>
        </div>
    )
}

export default DetallesCita;