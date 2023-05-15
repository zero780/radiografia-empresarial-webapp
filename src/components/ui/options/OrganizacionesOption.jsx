import React from 'react';
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const OrganizacionesOption = () => {

    const { canUserDo } = useAuth();

    const modelname = 'Organizacion';

    return canUserDo(modelname, 'create') ? (
        <div className="fixed-action-btn" style={ { 'bottom': '75px', 'right': '24px' } }>
            <NavLink className="btn-floating btn-large" title="Añadir nueva organización" to="/organizaciones/nuevo" exact>
                <i className="large material-icons">add</i>
            </NavLink>
        </div>
        ) : <></>;
};

export default OrganizacionesOption;
