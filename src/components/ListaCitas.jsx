import React, { useEffect } from 'react';
import Cita from './Cita';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const ListaCitas = (props) =>{
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/")
            .then(response => props.methodListarCitas(dispatch, response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID Paciente</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Medico</th>
                    <th scope="col">Estado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                { props.citas.map((cita, index) => {
                    return <Cita cita={cita} method={props.methodMostrarUno} key={index}/>
                }) }
            </tbody>
        </table>
    );
}

export default ListaCitas;