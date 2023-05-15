import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import ReportesIndexScreen from "../components/screens/reportes/ReportesIndexScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";
import ReportsViewScreen from "../components/screens/reportes/ReportsViewScreen";

const ReportesRouter = () => {
    return (
        <Switch>
            <PrivateRoute path={ RouteConstants.reports.index } exact component={ ReportesIndexScreen } />
            <PrivateRoute path={ RouteConstants.reports.view } exact component={ ReportsViewScreen } />
            <PrivateRoute path={ RouteConstants.reports.download } exact component={ ReportesIndexScreen } />
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default ReportesRouter;
