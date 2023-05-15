import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import RadiografiasSupervisorScreen from "../components/screens/organizaciones/RadiografiasSupervisorScreen";
import RadiografiaSupervisorScreen from "../components/screens/organizaciones/RadiografiaSupervisorScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const SupervisorRouter = () => {
    return (
        <Switch>
            <Route path={RouteConstants.supervisor.x_ray_supervisor} exact component={RadiografiasSupervisorScreen} />
            <Route path={RouteConstants.supervisor.x_ray_supervisor_detail} exact component={RadiografiaSupervisorScreen} />
            <Route component={Error404Screen} />
        </Switch>
    );
};

export default SupervisorRouter;