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

const VinculosMenuOption = ( { idBase64 } ) => {

    const { canUserDo } = useAuth();

    useEffect(() => {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {});
    }, []);

    return  canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) && canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) && (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large">
                <Icon large>more_vert</Icon>
            </a>
            <ul>
                {
                    canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) && (
                        <li><Link to={ { pathname: RouteConstants.bindings.edit.replace(':id', idBase64) } }  className="btn-floating yellow darken-4"><Icon>edit</Icon></Link></li>
                    )
                }
                {
                    canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) && (
                        <li><Link to={ { pathname: RouteConstants.bindings.manager.replace(':id', idBase64) } }  className="btn-floating green"><Icon>assignment_ind</Icon></Link></li>
                    )
                }
            </ul>
        </div>
    );
};

VinculosMenuOption.propTypes = {
    idBase64: PropTypes.string.isRequired
};

export default VinculosMenuOption;
