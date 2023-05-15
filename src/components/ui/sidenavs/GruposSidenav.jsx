import React from 'react';
import PropTypes from 'prop-types';
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

const GruposSidenav = ({ pendientes = 0 }) => {

    const { canUserDo } = useAuth();

    return (
        <SidenavLayout>
            <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.workgroups.index } exact>
                <Icon>format_list_numbered</Icon>
                <span className="truncate">Mis grupos de trabajo</span>
            </NavLink>
            {
                canUserDo(ModelConstants.workgroups.modelname, ModelConstants.workgroups.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to="/grupos-de-trabajo/pendientes" exact>
                        <Icon>move_to_inbox</Icon>
                        <span className="hide-on-med-and-down">Pendientes</span>
                        {
                            pendientes ? <span className="badge new">{pendientes}</span> : ''
                        }
                    </NavLink>
                ) : ''
            }
            {
                canUserDo(ModelConstants.workgroups.modelname, ModelConstants.workgroups.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to="/grupos-de-trabajo/activos" exact>
                        <Icon>assignment</Icon>
                        <span className="hide-on-med-and-down">En ejecución</span>
                    </NavLink>
                ) : ''
            }
            {
                canUserDo(ModelConstants.workgroups.modelname, ModelConstants.workgroups.actions.list) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to="/grupos-de-trabajo/archivados" exact>
                        <Icon>inventory_2</Icon>
                        <span className="hide-on-med-and-down">Archivados</span>
                    </NavLink>
                ) : ''
            }
            {
                canUserDo(ModelConstants.workgroups.modelname, ModelConstants.workgroups.actions.create) ? (
                    <NavLink key={`sd_nav_item_${uuid()}`} to="/grupos-de-trabajo/nuevo" exact>
                        <Icon>add_circle_outline</Icon>
                        <span className="hide-on-med-and-down">Crear nuevo</span>
                    </NavLink>
                ) : ''
            }
        </SidenavLayout>
    );
};

GruposSidenav.propTypes = {
    pendientes: PropTypes.number
};

export default GruposSidenav;