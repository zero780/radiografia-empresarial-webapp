import jwt from 'jwt-decode';
// Constants
import { ActionTypeConstants } from '../constants/ActionTypeConstants';
import { StorageConstants } from "../constants/StorageConstants";

const encodedUser = localStorage.getItem(StorageConstants.auth.user);
const encodedToken = localStorage.getItem(StorageConstants.auth.token);

const userLogged = encodedUser ? JSON.parse(atob(encodedUser)) : { };
const token = encodedToken ? atob(encodedToken) : 'invalid';

const { correo } = userLogged;

const initialState = token && correo ? {
    isLogged: true,
    user: userLogged,
    token: token
} : {
    isLogged: false,
    user: { },
    token: ''
};

/*
    {
        "token": "",
        "user": {
            "nombre": "Frederick Farfán",
            "correo": "fafarfan@espol.edu.ec",
            "canDo": [
                { "model": "Usuario", "action": "create" },
            ],
        }
    }

 */

export const authReducer = (state = initialState, action ) => {

    switch (action.type) {
        case ActionTypeConstants.auth.login:
            return {
                isLogged: true,
                token: action.payload.token,
                user: action.payload.user
            };
        case ActionTypeConstants.auth.logout:
            return {
                isLogged: false,
                user: { },
                token: ''
            };
        case ActionTypeConstants.auth.error:
            return initialState;
        default:
            return state;
    }

};