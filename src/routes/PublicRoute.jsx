import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Constantes
import { RouteConstants } from "../constants/RouteConstants";
// Hooks
import useAuth from "../hooks/useAuth";

/**
 * Rutas públicas de la app
 * @param Component
 * @param rest
 * @returns {*}
 * @constructor
 */
const PublicRoute = ({ component: Component, ...rest }) => {

    const { isLogged } = useAuth();

    if(isLogged) {
        return <Redirect to={ RouteConstants.auth.dashboard } />
    }

    return (
        <Route {...rest} component={ Component } />
    );
};

export default PublicRoute;
