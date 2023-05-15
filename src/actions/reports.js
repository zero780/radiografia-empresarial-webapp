// Constants
import { ActionTypeConstants } from "../constants/ActionTypeConstants";
import { ApiConstants } from "../constants/ApiConstants";
import { MessageConstants } from '../constants/MessageConstants';
// Actions
import { doErrorMessage, toogleLoading } from "./ui";

export const startAsyncGetReports = jwtTicket => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.reports.list.endoint}`, {
            method: ApiConstants.reports.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetReports(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.reports.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetReports = reports => {
    console.log(reports);
    return {
        type: ActionTypeConstants.reports.list,
        payload: {
            reports: reports,
        }
    }
};