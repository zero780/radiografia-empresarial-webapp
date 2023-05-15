import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, Textarea, TextInput } from "react-materialize";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetBindingById } from "../../../actions/crud/bindings";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import './style.css';
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import Error404Layout from "../../ui/layouts/Error404Layout";
import VinculosMenuOption from "../../ui/options/menu/VinculosMenuOption";
import RepresentanteListItem from "../../ui/lists/representantes/RepresentanteListItem";
import VinculosForm from "../../ui/forms/VinculosForm";

const VinculosViewScreen = ( { match: { params: { id } } } ) => {

    const { token } = useAuth();

    const { active:vinculo } = useSelector( state => state.bindings );

    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch( startAsyncGetBindingById(atob(id), token) );
        } catch (e) { }
    }, []);

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                {
                    vinculo ? (
                        <>
                            <div className="col s12 right-align">
                                <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                                <Link to={ RouteConstants.bindings.index } className="breadcrumb">Vínculos</Link>
                                <Link to={ RouteConstants.bindings.view } className="breadcrumb">Detalles</Link>
                            </div>
                            <h4 className="center-align">Detalles del Vínculo</h4>
                            <div className="container">
                                <div className="white z-depth-1 section form-pseudo">
                                    <div className="container">
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Información del vínculo</h5>
                                        </div>
                                        <VinculosForm tempVinculo={ vinculo } disabled />
                                        {
                                            vinculo.representantes?.lenght &&  (
                                                <div className="row">
                                                    <div className="row no-margin-bot">
                                                        <h5 className="more-text">Representantes asignados</h5>
                                                    </div>
                                                    {
                                                        vinculo.representantes.map( representante => (<RepresentanteListItem representante={ representante } />) )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <VinculosMenuOption idBase64={ id } />
                        </>
                    ) : !loading && <Error404Layout />
                }
            </section>
        </MasterLayout>
    );
};

export default VinculosViewScreen;
