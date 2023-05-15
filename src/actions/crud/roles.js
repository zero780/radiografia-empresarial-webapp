// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, toogleLoading } from "../ui";

export const startAsyncGetRoles = jwtTicket => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.roles.list.endoint}`, {
            method: ApiConstants.roles.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetRoles(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.roles.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetRoles = roles => {
    return {
        type: ActionTypeConstants.roles.list,
        payload: {
            roles: roles,
        }
    }
};