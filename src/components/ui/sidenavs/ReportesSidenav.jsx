import React from 'react';
import { Icon } from "react-materialize";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Components
import SidenavLayout from "../layouts/SidenavLayout";

const ReportesSidenav = () => {

    const { reports } = useSelector( state => state.reports );

    return (
        <SidenavLayout>
            {
                reports.map( reporte => (
                    <NavLink key={`sd_nav_item_${uuid()}`} to={ RouteConstants.reports.view.replace(':reporte?', reporte.slug) } title={ reporte.nombre } exact>
                        <Icon>bar_chart</Icon>
                        <span className="truncate">{ reporte.nombre }</span>
                    </NavLink>
                ) )
            }
        </SidenavLayout>
    );
};

export default ReportesSidenav;
