import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// Constants
import RouteConstants from "../../../constants/RouteConstants";

const ReportesBreadcrum = ( { action, url } ) => {
    return (
        <div className="col s12 right-align">
            <Link to={ RouteConstants.reports.index } className="breadcrumb">Reportes</Link>
            <Link to={ url } className="breadcrumb">{ action }</Link>
        </div>
    );
};

ReportesBreadcrum.propTypes = {
    action: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default ReportesBreadcrum;
