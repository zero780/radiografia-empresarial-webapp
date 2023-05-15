import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Constantes
import { RouteConstants } from "../constants/RouteConstants";
// Hooks
import useAuth from "../hooks/useAuth";

/**
 * Rutas privadas (que necesitan una sesión activa) de la app
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
const PrivateRoute = ({component: Component, ...rest}) => {

    const { isLogged } = useAuth();

    if(!isLogged) {
        return <Redirect to={ RouteConstants.auth.login } />
    }

    return (
        <Route {...rest} component={ Component } />
    );
};

export default PrivateRoute;