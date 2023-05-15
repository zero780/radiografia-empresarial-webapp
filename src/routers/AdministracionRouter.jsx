import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Routers por entidad
import UsuariosRouter from "./UsuariosRouter";
import VinculosRouter from "./VinculosRouter";
// Components
import AdministracionScreen from "../components/screens/admin/AdministracionScreen";
import RadiografiasAdminScreen from "../components/screens/admin/RadiografiasAdminScreen";
import RadiografiaAdminScreen from "../components/screens/admin/RadiografiaAdminScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const AdministracionRouter = () => {
    return (
        <Switch>
            <Route path={RouteConstants.admin.prefix} exact component={AdministracionScreen} />
            <Route path={RouteConstants.admin.x_ray_admin} exact component={RadiografiasAdminScreen} />
            <Route path={RouteConstants.admin.x_ray_admin_detail} exact component={RadiografiaAdminScreen} />
            <Route path={ RouteConstants.users.prefix } component={ UsuariosRouter } />
            <Route path={RouteConstants.bindings.prefix} component={VinculosRouter} />
            <Route component={Error404Screen} />
        </Switch>
    );
};

export default AdministracionRouter;
