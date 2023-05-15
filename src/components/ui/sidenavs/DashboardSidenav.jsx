import React from 'react';
import {NavLink} from "react-router-dom";
import uuid from "react-uuid";
import SidenavLayout from "../layouts/SidenavLayout";

const DashboardSidenav = () => {
    return (
        <SidenavLayout children={[
            <NavLink key={`sd_nav_item_${uuid()}`} to="#">
                <span className="truncate">Mensaje de bienvenida</span>
            </NavLink>
        ]} />
    );
};

export default DashboardSidenav;