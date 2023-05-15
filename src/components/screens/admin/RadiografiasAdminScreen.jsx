import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// Hooks
import useRadiografia from "../../../hooks/useRadiografia";
// Componentes
import RadiografiasAdminTable from "../../ui/tables/RadiografiasAdminTable";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
//Actions
import { startAsyncGetRadiografiasAdmin } from "../../../actions/crud/utils";

import MasterLayout from "../../ui/layouts/MasterLayout";
import useAuth from "../../../hooks/useAuth";

const RadiografiasAdminScreen = () => {

    //GET radiografias para administrador
    const dispatch = useDispatch();

    const { token } = useAuth();

    const { radiografiasAdmin } = useSelector(state => state.radiografiasAdmin);

    useEffect(() => {
        dispatch(startAsyncGetRadiografiasAdmin(token));
    }, []);

    //const { radiografias } = useRadiografia();

    return (
        <MasterLayout sidenavComponent={AdministracionSidenav}>
            {/*<DashboardSidenav />*/}
            <section className="section has-sidebar">
                <div className="container">
                    <div className="row">
                        <h4>Radiografías del sistema</h4>
                        <RadiografiasAdminTable radiografias={radiografiasAdmin }/>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default RadiografiasAdminScreen;