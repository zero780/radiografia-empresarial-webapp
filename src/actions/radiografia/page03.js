// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncCreateRadiografiaPage3A = (radiografiaPage3A, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/03-competitividad/subsection/factores/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage3A),
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

export const startAsyncCreateRadiografiaPage3B = (radiografiaPage3B, jwtTicket) => {

    return async (dispatch) => {
        dispatch(toogleLoading(true));
        //dispatch(doEditBinding(null));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografia.create.endoint}/seccion/03-competitividad/subsection/foda/`, {
            method: ApiConstants.radiografia.create.method,
            body: JSON.stringify(radiografiaPage3B),
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
