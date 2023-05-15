// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncGetUsers = jwtTicket => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.users.list.endoint}`, {
            method: ApiConstants.users.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetUsers(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.users.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetUsers = users => {
    return {
        type: ActionTypeConstants.users.list,
        payload: {
            users: users,
        }
    }
};

export const startAsyncGetUserById = ( id, jwtTicket ) => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doGetUserById(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.users.view.endoint}/${id}`, {
            method: ApiConstants.users.view.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetUserById(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.users.view) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetUserById = user => {
    return {
        type: ActionTypeConstants.users.view,
        payload: {
            user: user,
        }
    }
};

export const startAsyncCreateUser = ( user, jwtTicket ) => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.users.create.endoint}`, {
            method: ApiConstants.users.create.method,
            body: JSON.stringify(user),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doCreateUser(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.users.create) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.users.create) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doCreateUser = user => {
    return {
        type: ActionTypeConstants.users.create,
        payload: {
            user: user,
        }
    }
};