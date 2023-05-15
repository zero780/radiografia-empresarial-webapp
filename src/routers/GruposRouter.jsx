import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import GruposViewIndex from "../components/screens/grupos/GruposViewIndex";
import GruposIndexScreen from "../components/screens/grupos/GruposIndexScreen";
import GrupoCreateScreen from "../components/screens/grupos/GruposCreateScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const GruposRouter = () => {
    return (
        <Switch>
            <PrivateRoute path={ RouteConstants.workgroups.index } exact component={ GruposIndexScreen } />
            <PrivateRoute path={ RouteConstants.workgroups.list.pending } exact render={ () => <GruposIndexScreen action={ RouteConstants.workgroups.list.pending } /> } />
            <PrivateRoute path={ RouteConstants.workgroups.list.active } exact render={ () => <GruposIndexScreen action={ RouteConstants.workgroups.list.active } /> } />
            <PrivateRoute path={ RouteConstants.workgroups.list.archived } exact render={ () => <GruposIndexScreen action={ RouteConstants.workgroups.list.archived } /> } />
            <PrivateRoute path={ RouteConstants.workgroups.create } exact component={ GrupoCreateScreen } />
            <PrivateRoute path={ RouteConstants.workgroups.view } exact component={ GruposViewIndex } />
            {/*<PrivateRoute path={ RouteConstants.workgroups.generic } component={ GruposIndexScreen } />*/}
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default GruposRouter;
