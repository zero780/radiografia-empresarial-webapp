// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
import RouteConstants from "../../constants/RouteConstants";
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

const InvalidTypeException = msg => {
    return {
        message: msg,
        name: 'InvalidTypeException',
    }
};

export const startAsyncGetWorkgroupByType = ( type, jwtTicket) => {

    let route = '', method = '';
    switch (type) {
        case RouteConstants.workgroups.list.mine:
            route = `${ApiConstants.baseUrl}${ApiConstants.workgroups.list.mine.endoint}`;
            method = ApiConstants.workgroups.list.mine.method;
            break;
        case RouteConstants.workgroups.list.pending:
            route = `${ApiConstants.baseUrl}${ApiConstants.workgroups.list.pending.endoint}`;
            method = ApiConstants.workgroups.list.pending.method;
            break;
        case RouteConstants.workgroups.list.active:
            route = `${ApiConstants.baseUrl}${ApiConstants.workgroups.list.active.endoint}`;
            method = ApiConstants.workgroups.list.active.method;
            break;
        case RouteConstants.workgroups.list.archived:
            route = `${ApiConstants.baseUrl}${ApiConstants.workgroups.list.archived.endoint}`;
            method = ApiConstants.workgroups.list.archived.method;
            break;
        default:
            throw InvalidTypeException('Estado de grupo de trabajo inválido');
    }

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        await fetch(route, {
            method: method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetWorkgroups(type, data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.workgroups.list) );
                dispatch ( toogleLoading(false) );
            } );
    }
};

export const doGetWorkgroups = ( type, workgroups) => {

    return {
        type: ActionTypeConstants.workgroups.list,
        payload: {
            type: type,
            workgroups: workgroups,
        }
    }

};

export const startAsyncGetWorkgroupById = ( id, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doGetWorkgroupById(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.workgroups.view.endoint}/${id}`, {
            method: ApiConstants.workgroups.view.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doGetWorkgroupById(data.data) );
                dispatch ( toogleLoading(false) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.workgroups.view) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doGetWorkgroupById = workgroup => {

    return {
        type: ActionTypeConstants.workgroups.view,
        payload: {
            workgroup: workgroup,
        }
    }

};

export const startAsyncCreateWorkgroup = ( workgroup, jwtTicket ) => {
    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch(doEditWorkgroup(null));
        console.log("antes de await fetch de crear grupo");
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.workgroups.create.endoint}`, {
            method: ApiConstants.workgroups.create.method,
            body: JSON.stringify(workgroup),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then(data => {
                console.log("then.data");
                //dispatch(doCreateWorkgroup(data.data)); //comentado porque hacia levantar la alerta de error en frontend
                console.log("se creó grupo");
                dispatch(toogleLoading(false));
                console.log("do success message");
                dispatch( doSuccessMessage(MessageConstants.success.workgroups.create) );
            } )
            .catch(error => {
                console.log("cath error");
                dispatch( doErrorMessage(MessageConstants.error.workgroups.create) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doCreateWorkgroup = workgroup => {
    console.log("estoy en doCreateWorkgroup antes de return");
    console.log(workgroup)
    return {
        type: ActionTypeConstants.workgroups.create,
        payload: {
            workgroup: workgroup,
        }
    }

};

export const startAsyncEditWorkgroup = ( workgroup, jwtTicket ) => {

    return async (dispatch) => {
        dispatch ( toogleLoading(true) );
        dispatch ( doEditWorkgroup(null) );
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.workgroups.edit.endoint}/${workgroup.id}`, {
            method: ApiConstants.workgroups.edit.method,
            body: JSON.stringify(workgroup),
            headers: {
                'Authorization': `Bearer ${jwtTicket}`,
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then( res => res.json() )
            .then( data => {
                dispatch( doEditWorkgroup(data.data) );
                dispatch ( toogleLoading(false) );
                dispatch( doSuccessMessage(MessageConstants.success.workgroups.edit) );
            } )
            .catch( error => {
                dispatch( doErrorMessage(MessageConstants.error.workgroups.edit) );
                dispatch ( toogleLoading(false) );
            } );
    }

};

export const doEditWorkgroup = workgroup => {

    return {
        type: ActionTypeConstants.workgroups.edit,
        payload: {
            workgroup: workgroup,
        }
    }

};