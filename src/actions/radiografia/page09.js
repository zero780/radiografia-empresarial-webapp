// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncCreateRadiografiaPage9A = (radiografiaPage9A, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/09-calidad/subsection/certificaciones/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage9A),
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

export const startAsyncCreateRadiografiaPage9B = (radiografiaPage9B, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/09-calidad/subsection/sostenibilidad/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage9B),
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