import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// Hooks
import useRadiografia from "../../../hooks/useRadiografia";
// Componentes
import RadiografiasSupervisorTable from "../../ui/tables/RadiografiasSupervisorTable";
import OrganizacionesSidenav from "../../ui/sidenavs/OrganizacionesSidenav";
//Actions
import { startAsyncGetRadiografiasSupervisor } from "../../../actions/crud/utils";

import MasterLayout from "../../ui/layouts/MasterLayout";
import useAuth from "../../../hooks/useAuth";

const RadiografiasSupervisorScreen = () => {

    const { userLogged } = useAuth();

    //GET radiografias para administrador
    const dispatch = useDispatch();

    const { token } = useAuth();

    const { radiografiasSupervisor } = useSelector(state => state.radiografiasSupervisor);

    useEffect(() => {
        dispatch(startAsyncGetRadiografiasSupervisor(userLogged.id, token));
    }, []);


    //const { radiografias } = useRadiografia();

    return (
        <MasterLayout sidenavComponent={OrganizacionesSidenav}>
            {/*<DashboardSidenav />*/}
            <section className="section has-sidebar">
                <div className="container">
                    <div className="row">
                        <h4>Radiografías a supervisar</h4>
                        <RadiografiasSupervisorTable radiografias={radiografiasSupervisor} />
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default RadiografiasSupervisorScreen;