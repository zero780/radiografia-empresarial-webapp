import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, Textarea, TextInput } from "react-materialize";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetOrganizationById } from "../../../actions/crud/business";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import OrganizacionesSidenav from "../../ui/sidenavs/OrganizacionesSidenav";
import Error404Layout from "../../ui/layouts/Error404Layout";
import OrganizacionBreadcrum from "../../ui/breadcrums/OrganizacionBreadcrum";
import OrganizacionesForm from "../../ui/forms/OrganizacionesForm";

const OrganizacionesViewScreen = ({ match:{params: {id}} }) => {

    const { token } = useAuth();

    const { active:organizacion } = useSelector( state => state.business );

    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch( startAsyncGetOrganizationById(atob(id), token) );
        } catch (e) { }
    }, []);

    return (
        <MasterLayout sidenavComponent={ OrganizacionesSidenav }>
            <section className="section has-sidebar">
                {
                    organizacion ? (
                        <>
                            <OrganizacionBreadcrum url={ RouteConstants.business.view } action="Detalles" />
                            <h4 className="center-align">Detalles de organización</h4>
                            <div className="container">
                                <div className="white z-depth-1 section form-pseudo">
                                    <OrganizacionesForm formValues={ organizacion } disabled />
                                </div>
                            </div>
                        </>
                    ) : !loading && <Error404Layout />
                }
            </section>
        </MasterLayout>
    );
};

export default OrganizacionesViewScreen;
