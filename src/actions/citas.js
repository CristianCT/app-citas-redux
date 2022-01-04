import { citas as CitasTypes } from "../constants/actionsTypes";

export const listarCitas = async(dispatch, payload) => {
    dispatch({
        type: CitasTypes.LISTAR,
        payload
    })
}

export const mostrarUno = async(dispatch, payload) => {
    dispatch({
        type: CitasTypes.MOSTRARUNO,
        payload
    })
}

export const cambiarEstado = async(dispatch, payload) => {
    dispatch({
        type: CitasTypes.CAMBIARESTADO,
        payload
    })
}

export default {
    listarCitas,
    mostrarUno,
    cambiarEstado,
}