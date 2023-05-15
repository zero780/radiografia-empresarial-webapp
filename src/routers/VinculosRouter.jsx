import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Constants
import { RouteConstants } from "../constants/RouteConstants";
// Tipos de Rutas
import PrivateRoute from "../routes/PrivateRoute";
// Componentes
import VinculosIndexScreen from "../components/screens/vinculos/VinculosIndexScreen";
import VinculosCreateScreen from "../components/screens/vinculos/VinculosCreateScreen";
import VinculosViewScreen from "../components/screens/vinculos/VinculosViewScreen";
import VinculosEditScreen from "../components/screens/vinculos/VinculosEditScreen";
import VinculosEditRepresentanteScreen from "../components/screens/vinculos/VinculosEditRepresentanteScreen";
import Error404Screen from "../components/screens/errors/Error404Screen";

const VinculosRouter = () => {
    return (
        <Switch>
            <PrivateRoute path={ RouteConstants.bindings.index } exact component={ VinculosIndexScreen } />
            <PrivateRoute path={ RouteConstants.bindings.create } exact component={ VinculosCreateScreen } />
            <PrivateRoute path={ RouteConstants.bindings.view } exact component={ VinculosViewScreen } />
            <PrivateRoute path={ RouteConstants.bindings.edit } exact component={ VinculosEditScreen } />
            <PrivateRoute path={ RouteConstants.bindings.manager } exact component={ VinculosEditRepresentanteScreen } />
            <Route component={ Error404Screen } />
        </Switch>
    );
};

export default VinculosRouter;
