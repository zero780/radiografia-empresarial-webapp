// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncCreateRadiografiaPage7A = (radiografiaPage7A, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/nomina/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7A),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7B = (radiografiaPage7B, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/estructura/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7B),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7C = (radiografiaPage7C, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/igualdad/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7C),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7D = (radiografiaPage7D, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/evolucion/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7D),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7E = (radiografiaPage7E, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/responsabilidad/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7E),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7F = (radiografiaPage7F, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/formacion/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7F),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};

export const startAsyncCreateRadiografiaPage7G = (radiografiaPage7G, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/07-rrhh/subsection/otros/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage7G),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.json())
            .then(data => {
                //dispatch(doEditBinding(data.data));
                dispatch(toogleLoading(false));
                dispatch(doSuccessMessage(MessageConstants.success.radiografia.create));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografia.create));
                dispatch(toogleLoading(false));
            });
    }

};