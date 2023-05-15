import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "react-materialize";
// Constants
import ModelConstants from "../../../../constants/ModelConstants"
import RouteConstants from "../../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../../hooks/useAuth";

const VinculosAddOption = () => {

    const { canUserDo } = useAuth();

    return (
        canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.create) &&
            <div className="fixed-action-btn" style={ { 'bottom': '75px', 'right': '24px' } }>
                <NavLink className="btn-floating btn-large" title="Añadir nuevo tipo de vínculo" to={ RouteConstants.bindings.create } exact>
                    <Icon large>add</Icon>
                </NavLink>
            </div>
    );
};

export default VinculosAddOption;