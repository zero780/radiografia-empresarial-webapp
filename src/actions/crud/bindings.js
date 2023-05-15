// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncGetBindings = jwtTicket => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.bindings.list.endoint}`, {
            method: ApiConstants.bindings.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetBindings(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.bindings.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetBindings = bindings => {

    return {
        type: ActionTypeConstants.bindings.list,
        payload: {
            bindings: bindings,
        }
    }

};

export const startAsyncGetBindingById = ( id, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doGetBindingById(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.bindings.view.endoint}/${id}`, {
            method: ApiConstants.bindings.view.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetBindingById(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.bindings.view) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doGetBindingById = binding => {

    return {
        type: ActionTypeConstants.bindings.view,
        payload: {
            binding: binding,
        }
    }

};

export const startAsyncCreateBinding = ( binding, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doEditBinding(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.bindings.create.endoint}`, {
            method: ApiConstants.bindings.create.method,
            body: JSON.stringify(binding),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doCreateBinding(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.bindings.create) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.bindings.create) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doCreateBinding = binding => {

    return {
        type: ActionTypeConstants.bindings.create,
        payload: {
            binding: binding,
        }
    }

};

export const startAsyncEditBinding = ( binding, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doEditBinding(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.bindings.edit.endoint}/${binding.id}`, {
            method: ApiConstants.bindings.edit.method,
            body: JSON.stringify(binding),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doEditBinding(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.bindings.edit) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.bindings.edit) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doEditBinding = binding => {

    return {
        type: ActionTypeConstants.bindings.edit,
        payload: {
            binding: binding,
        }
    }

};