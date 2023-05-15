import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
// Actions
import { startAsyncGetBusiness } from "../../../actions/crud/business";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import OrganizacionesOption from "../../ui/options/OrganizacionesOption";
import OrganizacionesSidenav from "../../ui/sidenavs/OrganizacionesSidenav";
import OrganizacionBreadcrum from "../../ui/breadcrums/OrganizacionBreadcrum";
import OrganizacionesTable from "../../ui/tables/OrganizacionesTable";

const OrganizacionesIndexScreen = () => {

    const { token } = useAuth();

    const { business } = useSelector( state => state.business );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startAsyncGetBusiness(token) );
    }, []);

    return (
        <MasterLayout sidenavComponent={ OrganizacionesSidenav }>
            <section className="section has-sidebar">
                <OrganizacionBreadcrum action="Listar" url={ RouteConstants.business.index } />
                <h4 className="center-align">Organizaciones con vínculos con la ESPOL</h4>
                <OrganizacionesTable organizaciones={ business }/>
                <OrganizacionesOption />
            </section>
        </MasterLayout>
    );
};

export default OrganizacionesIndexScreen;
