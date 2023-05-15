import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// Constants
import RouteConstants from "../../../constants/RouteConstants";

const OrganizacionBreadcrum = ( { action, url } ) => {
    return (
        <div className="col s12 right-align">
            <Link to={ RouteConstants.business.index } className="breadcrumb">Organizaciones</Link>
            <Link to={ url } className="breadcrumb">{ action }</Link>
        </div>
    );
};

OrganizacionBreadcrum.propTypes = {
    action: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default OrganizacionBreadcrum;
