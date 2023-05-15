import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import { RouteConstants } from "../../../constants/RouteConstants";

const UserInfoLayout = ({ usuario }) => {
    const { nombre, correo } = usuario;
    return (
        <div className="user-info right hide-on-med-and-down">
            <NavLink to={ RouteConstants.auth.dashboard }>
                <img className="circle left" src={ `https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(nombre)}` } alt=""/>
                <span>{ nombre }</span>
            </NavLink>
            <span className="divider-y" />
            <NavLink to={ RouteConstants.auth.logout } title="Cerrar sesión">
                <Icon right>power_settings_new</Icon>
            </NavLink>
        </div>
    );
};

UserInfoLayout.propTypes = {
    usuario: PropTypes.object.isRequired
};

export default UserInfoLayout;
