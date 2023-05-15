import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Constantes
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PublicRoute from "../routes/PublicRoute";
// Routers por entidad
import AuthRouter from "./AuthRouter";
import AdministracionRouter from "./AdministracionRouter";
import SupervisorRouter from "./SupervisorRouter";

import GruposRouter from "./GruposRouter";
import OrganizacionesRouter from "./OrganizacionesRouter";
import ReportesRouter from "./ReportesRouter";
// Páginas
import HomeScreen from "../components/screens/HomeScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";
import GrupoCreateScreen from "../components/screens/grupos/GruposCreateScreen";


const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route path={ RouteConstants.auth.prefix } component={ AuthRouter } />
                <Route path={RouteConstants.admin.prefix} component={AdministracionRouter} />
                <Route path={RouteConstants.supervisor.prefix} component={SupervisorRouter} />
                <Route path={ RouteConstants.workgroups.prefix } component={ GruposRouter } />
                <Route path={ RouteConstants.business.prefix } component={ OrganizacionesRouter } />
                <Route path={ RouteConstants.reports.prefix } component={ ReportesRouter } />

                <PublicRoute path={ RouteConstants.home } exact component={ HomeScreen } />
                <Route component={ Error404Screen } />
            </Switch>
        </Router>
    );
};

export default AppRouter;
