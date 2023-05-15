import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, Icon } from "react-materialize";
// Constants
import { RouteConstants } from "../../../constants/RouteConstants";
// Components
import LogoLayout from "./LogoLayout";
import UserInfoLayout from "./UserInfoLayout";

const HeaderLayout = ({ className, isUserLogged = false, usuario:userLogged, callbackUserCanDo:canUserDo }) => {

    if(isUserLogged) {
        return (
            <header className={`z-depth-1 custom-header fixed ${ className ?? '' }`}>
                <div className="logo-wrapper row no-margin">
                    <LogoLayout />
                    <UserInfoLayout usuario={ userLogged } />
                </div>
                <nav className="z-depth-0" role="navigation">
                    <div className="nav-wrapper center">
                        <div className="tabs-wrapper">
                            <div className="row white no-margin" style={ { 'top': '0px' } }>
                                <ul className="tabst">
                                    <li className="tab col s3">
                                        <NavLink to={ RouteConstants.workgroups.prefix }>
                                            <Icon left>group_work</Icon>
                                            <span className="hide-on-med-and-down">Grupos de trabajo</span>
                                        </NavLink>
                                    </li>
                                    {
                                        canUserDo('Organizacion', 'list') ? (
                                            <li className="tab col s3">
                                                <NavLink to={ RouteConstants.business.prefix }>
                                                    <Icon left>business</Icon>
                                                    <span className="hide-on-med-and-down">Organizaciones</span>
                                                </NavLink>
                                            </li>
                                        ) : ''
                                    }
                                    {
                                        canUserDo('Reporte', 'list') ? (
                                            <li className="tab col s3">
                                                <NavLink to={ RouteConstants.reports.prefix }>
                                                    <Icon left>leaderboard</Icon>
                                                    <span className="hide-on-med-and-down">Reportes</span>
                                                </NavLink>
                                            </li>
                                        ) : ''
                                    }
                                    {
                                        canUserDo('Usuario', 'list') || canUserDo('Vinculo', 'list') ? (
                                            <li className="tab col s3">
                                                <NavLink to={ RouteConstants.admin.prefix }>
                                                    <Icon left>build</Icon>
                                                    <span className="hide-on-med-and-down">Administración</span>
                                                </NavLink>
                                            </li>
                                        ) : ''
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    return (
        <header className={`z-depth-2 custom-header fixed ${className ?? ''}`}>

            <div className="logo-wrapper row no-margin">
                <LogoLayout />
                <div className="user-info right">
                    <NavLink to={RouteConstants.auth.login}>
                        <Icon left>login</Icon> Ingresar
                    </NavLink>
                </div>
            </div>
            <nav className="z-depth-0" role="navigation">
            </nav>
        </header>
    );

};

HeaderLayout.propTypes = {
    className: PropTypes.string,
    isUserLogged: PropTypes.bool,
    usuario: PropTypes.object.isRequired,
    callbackUserCanDo: PropTypes.func.isRequired
};

export default HeaderLayout;
