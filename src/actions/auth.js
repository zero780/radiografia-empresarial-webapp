import jwt from 'jwt-decode';
import uuid from "react-uuid";
// Constants
import { ActionTypeConstants } from "../constants/ActionTypeConstants";
import { StorageConstants } from "../constants/StorageConstants";
import RouteConstants from "../constants/RouteConstants";
import {doErrorMessage} from "./ui";
import {MessageConstants} from "../constants/MessageConstants";

export const doLogin = jwtTicket => {

    try {
        const ticket = jwt(jwtTicket);
        let canDo = JSON.parse(ticket.canDo);
        const usuario = {
            id: ticket.id,
            nombre: ticket.nombre,
            correo: ticket.correo,
            canDo: canDo ?? [],
        };
        // Persistiendo sesión
        localStorage.setItem(StorageConstants.auth.token, btoa(jwtTicket));
        localStorage.setItem(StorageConstants.auth.user, btoa(JSON.stringify(usuario)));
        localStorage.setItem(StorageConstants.auth.random, btoa(uuid()));
        return {
            type: ActionTypeConstants.auth.login,
            payload: {
                token: jwtTicket,
                user: usuario
            }
        }
    } catch (e) {
        return {
            type: ActionTypeConstants.auth.error,
            payload: { }
        };
    }

};

export const startAsyncLogout = jwtTicket => {
    /*const { REACT_APP_CAS_ENDPOINT, REACT_APP_CAS_PROTOCOL } = process.env;
    return async (dispatch) => {
        await fetch(`${REACT_APP_CAS_PROTOCOL}://${REACT_APP_CAS_ENDPOINT}/logout`, {
            'Authorization': 'your-token'
        })
        .then( () => dispatch( doLogout() ));
    }*/
    const { REACT_APP_API_BASE_URL, REACT_APP_API_LOGOUT } = process.env;
    return async (dispatch) => {
        await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_API_LOGOUT}`, {
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then( res => {
                if(res.status === 200 || res.status === 401) // Si la respuesta fue correcta o si token está expirado
                    dispatch( doLogout() );
                else
                    throw new Error(res.status)
            })
            .catch( error => {
                //console.error(error);
                dispatch( doErrorMessage(MessageConstants.error.auth.logout) );
                window.location.href = RouteConstants.auth.dashboard
            } );
    }
};

export const doLogout = () => {

    localStorage.removeItem(StorageConstants.auth.user);
    localStorage.removeItem(StorageConstants.auth.token);
    localStorage.removeItem(StorageConstants.auth.random);
    return {
        type: ActionTypeConstants.auth.logout,
    };

};