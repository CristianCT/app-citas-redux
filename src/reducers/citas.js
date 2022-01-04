import { citas as citasActions } from "../constants/actionsTypes";

const INITIAL_STATE = {
    citas: [{
        idPaciente: '',
        nombrePaciente: '',
        apellidosPaciente: '',
        nombreMedico: '',
        apellidosMedico: '',
        padecimiento: '',
        tratamiento: '',
        fechaReservaCita: '',
        horaReservaCita: '',
        estadoReservaCita: false
    }],
    citaActual: {
        idPaciente: '',
        nombrePaciente: '',
        apellidosPaciente: '',
        nombreMedico: '',
        apellidosMedico: '',
        padecimiento: '',
        tratamiento: '',
        fechaReservaCita: '',
        horaReservaCita: '',
        estadoReservaCita: false
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case citasActions.LISTAR:
            return { ...state, citas: action.payload }
        case citasActions.MOSTRARUNO:
            return { ...state, citaActual: action.payload }
        case citasActions.CAMBIARESTADO:
            return { ...state, citaActual: action.payload }
        default: 
            return state;
    }
}