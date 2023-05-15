import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "react-materialize";
import uuid from "react-uuid";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
import ModelConstants from "../../../constants/ModelConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import SidenavLayout from "../layouts/SidenavLayout";

const OrganizacionesSidenav = () => {

    const { canUserDo } = useAuth();

    return (
        <SidenavLayout>
            {
                canUserDo(ModelConstants.business.modelname, ModelConstants.business.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={RouteConstants.business.index} exact>
                        <Icon>format_list_numbered</Icon>
                        <span className="truncate">Ver organizaciones</span>
                    </NavLink>
                ) : ''
            }
            {
                canUserDo(ModelConstants.business.modelname, ModelConstants.business.actions.create) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={RouteConstants.business.create} exact>
                        <Icon>add_circle_outline</Icon>
                        <span className="truncate">Crear nuevo</span>
                    </NavLink>
                ) : ''
            }
            <li className="no-hover no-pad"><p className="more-text no-margin-bot">RADIOGRAFÍAS SUPERVISOR</p></li>
            <NavLink key={`sd_nav_item_${uuid()}`} to={RouteConstants.supervisor.x_ray_supervisor} exact>
                <Icon>search</Icon>
                <span className="truncate">Ver radiografías</span>
            </NavLink>
        </SidenavLayout>
    );
};

export default OrganizacionesSidenav;
