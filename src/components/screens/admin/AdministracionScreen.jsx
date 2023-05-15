import React from 'react';
import { Redirect, Route } from "react-router-dom";
// Constants
import { RouteConstants } from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import Error404Screen from "../errors/Error404Screen";

const AdministracionScreen = () => {

    const { canUserDo } = useAuth();

    if(canUserDo('Usuario', 'list'))
        return <Redirect to={ RouteConstants.users.index } exact />;

    if(canUserDo('Vinculo', 'list'))
        return <Redirect to={ RouteConstants.bindings.index } exact />;

    return <Route component={ Error404Screen } />;
};

export default AdministracionScreen;
