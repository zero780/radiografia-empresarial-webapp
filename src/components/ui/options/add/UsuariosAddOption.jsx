import React from 'react';
import { Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
// Constants
import ModelConstants from "../../../../constants/ModelConstants"
import RouteConstants from "../../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../../hooks/useAuth";

const UsuariosAddOption = () => {

    const { canUserDo } = useAuth();

    return (
        canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.create) ?
            <div className="fixed-action-btn" style={ { 'bottom': '75px', 'right': '24px' } }>
                <NavLink className="btn-floating btn-large" title="Añadir nuevo usuario" to={ RouteConstants.users.create } exact>
                    <Icon large>person_add</Icon>
                </NavLink>
            </div>
            :
            <></>
    );
};

export default UsuariosAddOption;