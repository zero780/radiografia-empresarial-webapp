// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncCreateRadiografiaPage4A = (radiografiaPage4A, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/04-infraestructura/subsection/necesidades-logisticas/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage4A),
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

export const startAsyncCreateRadiografiaPage4B = (radiografiaPage4B, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/04-infraestructura/subsection/necesidades-energeticas/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage4B),
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

export const startAsyncCreateRadiografiaPage4C = (radiografiaPage4C, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/04-infraestructura/subsection/agua/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage4C),
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

export const startAsyncCreateRadiografiaPage4D = (radiografiaPage4D, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/04-infraestructura/subsection/alcantarillado/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage4D),
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

export const startAsyncCreateRadiografiaPage4E = (radiografiaPage4E, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/04-infraestructura/subsection/otros/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage4E),
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