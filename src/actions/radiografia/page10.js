// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncCreateRadiografiaPage10A = (radiografiaPage10A, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/10-cooperacion/subsection/cooperacion-1/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage10A),
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

export const startAsyncCreateRadiografiaPage10B = (radiografiaPage10B, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/10-cooperacion/subsection/cooperacion-2/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage10B),
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

export const startAsyncCreateRadiografiaPage10C = (radiografiaPage10C, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/10-cooperacion/subsection/cooperacion-3/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage10C),
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