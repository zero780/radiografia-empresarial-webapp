import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import UsuariosIndexScreen from "../components/screens/usuarios/UsuariosIndexScreen";
import UsuariosCreateScreen from "../components/screens/usuarios/UsuariosCreateScreen";
import UsuariosViewScreen from "../components/screens/usuarios/UsuariosViewScreen";
import UsuariosEditRolesScreen from "../components/screens/usuarios/UsuariosEditRolesScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const UsuariosRouter = () => {
    return (
        <Switch>
            <PrivateRoute path={ RouteConstants.users.index } exact component={ UsuariosIndexScreen } />
            <PrivateRoute path={ RouteConstants.users.create } exact component={ UsuariosCreateScreen } />
            <PrivateRoute path={ RouteConstants.users.view } exact component={ UsuariosViewScreen } />
            <PrivateRoute path={ RouteConstants.users.roles } exact component={ UsuariosEditRolesScreen } />
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default UsuariosRouter;
