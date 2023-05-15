import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// Constants
import RouteConstants from "../../../constants/RouteConstants";

const GruposBreadcrum = ( { section, urlSection, action, urlAction } ) => {
    return (
        <div className="col s12 right-align">
            <Link to={ RouteConstants.workgroups.index } className="breadcrumb">Organizaciones</Link>
            <Link to={ urlSection } className="breadcrumb">{ section }</Link>
            <Link to={ urlAction } className="breadcrumb">{ action }</Link>
        </div>
    );
};

GruposBreadcrum.propTypes = {
    section: PropTypes.string.isRequired,
    urlSection: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    urlAction: PropTypes.string.isRequired,
};

export default GruposBreadcrum;
