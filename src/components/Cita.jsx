import React from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Cita = (props) =>{
    const dispatch = useDispatch();

    const handleDetails = () => {
        axios.get(`/${props.cita.id}`)
            .then(response => {
                console.log(response.data)
                props.method(dispatch, response.data)})
            .catch(error => console.log(error))
    }
    return (
        <tr>
            <th scope="row">{ props.cita.idPaciente }</th>
            <td>{ props.cita.nombrePaciente }</td>
            <td>{ props.cita.nombreMedico }</td>
            <td>{ props.cita.estadoReservaCita?"Aciva":"Cancelada" }</td>
            <td><button onClick={handleDetails} type="button" className="btn btn-outline-secondary">Detalles</button></td>
        </tr>
    )
    
}


export default Cita;