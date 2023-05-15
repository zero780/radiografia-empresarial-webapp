import React from 'react';
import  {NavLink } from "react-router-dom";
import { Icon } from "react-materialize";
import uuid from "react-uuid";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
import ModelConstants from "../../../constants/ModelConstants";
// Components
import SidenavLayout from "../layouts/SidenavLayout";

const AdministracionSidenav = () => {

    const { canUserDo } = useAuth();

    return (
        <SidenavLayout>
            {
                (canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.list) || canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.create) )&& (
                    <li className="no-hover no-pad"><p className="more-text no-margin-bot">USUARIOS</p></li>
                )
            }
            {
                canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.users.index } exact>
                        <Icon>group</Icon>
                        <span className="truncate">Ver usuarios</span>
                    </NavLink>
                ): ''
            }
            {
                canUserDo(ModelConstants.user.modelname, ModelConstants.user.actions.create) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.users.create }>
                        <Icon>add_circle_outline</Icon>
                        <span className="truncate">Crear usuarios</span>
                    </NavLink>
                ): ''
            }
            {
                (canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.list) || canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.create) )&& (
                    <li className="no-hover no-pad"><p className="more-text no-margin-bot">TIPOS DE VÍNCULO</p></li>
                )
            }
            {
                canUserDo(ModelConstants.binding.modelname, ModelConstants.user.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.bindings.index } exact>
                        <Icon>link</Icon>
                        <span className="truncate">Ver vínculos</span>
                    </NavLink>
                ): ''
            }
            {
                canUserDo(ModelConstants.binding.modelname, ModelConstants.user.actions.create) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.bindings.create }>
                        <Icon>add_circle_outline</Icon>
                        <span className="truncate">Crear vínculo</span>
                    </NavLink>
                ): ''
            }
            <li className="no-hover no-pad"><p className="more-text no-margin-bot">RADIOGRAFÍAS ADMINISTRADOR</p></li>
            <NavLink key={`sd_nav_item_${uuid()}`} to={RouteConstants.admin.x_ray_admin} exact>
                <Icon>search</Icon>
                <span className="truncate">Ver radiografías</span>
            </NavLink>
        </SidenavLayout>
    );
};

export default AdministracionSidenav;
