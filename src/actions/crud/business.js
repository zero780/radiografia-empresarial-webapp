// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

export const startAsyncGetBusiness = jwtTicket => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.business.list.endoint}`, {
            method: ApiConstants.business.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetBusiness(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.business.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetBusiness = business => {

    return {
        type: ActionTypeConstants.business.list,
        payload: {
            business: business,
        }
    }

};

export const startAsyncGetOrganizationById = ( id, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        //dispatch ( doGetOrganizationById(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.business.view.endoint}/${id}`, {
            method: ApiConstants.business.view.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetOrganizationById(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.business.view) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doGetOrganizationById = organization => {

    return {
        type: ActionTypeConstants.business.view,
        payload: {
            organization: organization,
        }
    }

};

export const startAsyncCreateOrganization = (organization, jwtTicket) => {
    console.log("startCreateOrganization");
    console.log(organization);
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doEditOrganization(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.business.create.endoint}`, {
            method: ApiConstants.business.create.method,
            body: JSON.stringify(organization),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doCreateOrganization(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.business.create) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.business.create) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doCreateOrganization = organization => {

    return {
        type: ActionTypeConstants.business.create,
        payload: {
            organization: organization,
        }
    }

};

export const startAsyncEditOrganization = ( organization, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doEditOrganization(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.business.edit.endoint}/${organization.id}`, {
            method: ApiConstants.business.edit.method,
            body: JSON.stringify(organization),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doEditOrganization(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.business.edit) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.business.edit) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doEditOrganization = organization => {

    return {
        type: ActionTypeConstants.business.edit,
        payload: {
            organization: organization,
        }
    }

};