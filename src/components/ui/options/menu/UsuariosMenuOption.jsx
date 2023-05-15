import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
// Constants
import ModelConstants from "../../../../constants/ModelConstants"
import RouteConstants from "../../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../../hooks/useAuth";

const UsuariosMenuOption = ( { idBase64 } ) => {

    const { canUserDo } = useAuth();

    useEffect(() => {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {});
    }, []);

    return canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.edit) && (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large">
                <Icon large>more_vert</Icon>
            </a>
            <ul>
                {
                    canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.edit) && (
                        <li><Link to={ { pathname: RouteConstants.users.roles.replace(':id', idBase64) } }  className="btn-floating red"><Icon>security</Icon></Link></li>
                    )
                }
            </ul>
        </div>
    );
};

UsuariosMenuOption.propTypes = {
    idBase64: PropTypes.string.isRequired
};

export default UsuariosMenuOption;
