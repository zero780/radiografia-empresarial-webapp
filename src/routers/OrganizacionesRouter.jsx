import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import OrganizacionesIndexScreen from "../components/screens/organizaciones/OrganizacionesIndexScreen";
import OrganizacionesCreateScreen from "../components/screens/organizaciones/OrganizacionesCreateScreen";
import OrganizacionesViewScreen from "../components/screens/organizaciones/OrganizacionesViewScreen";
import RadiografiaScreen from "../components/screens/radiografia/RadiografiaScreen";
import RadiografiasSupervisorScreen from "../components/screens/organizaciones/RadiografiasSupervisorScreen";
import RadiografiaSupervisorScreen from "../components/screens/organizaciones/RadiografiaSupervisorScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const OrganizacionesRouter = () => {
    return (
        <Switch>
            <PrivateRoute path={ RouteConstants.business.index } exact component={ OrganizacionesIndexScreen } />
            <PrivateRoute path={ RouteConstants.business.create } exact component={ OrganizacionesCreateScreen } />
            <PrivateRoute path={ RouteConstants.business.view } exact component={ OrganizacionesViewScreen } />
            <PrivateRoute path={RouteConstants.business.x_ray} exact component={RadiografiaScreen} />
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default OrganizacionesRouter;
