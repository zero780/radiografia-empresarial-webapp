import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constantes
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import DashboardScreen from "../components/screens/auth/DashboardScreen";
import LoginScreen from "../components/screens/auth/LoginScreen";
import LogoutScreen from "../components/screens/auth/LogoutScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const AuthRouter = () => {
    return (
        <Switch>
            <PublicRoute path={ RouteConstants.auth.login } exact component={ LoginScreen } />
            <PrivateRoute path={ RouteConstants.auth.dashboard } exact component={ DashboardScreen } />
            <Route path={ RouteConstants.auth.logout } exact component={ LogoutScreen } />
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default AuthRouter;
