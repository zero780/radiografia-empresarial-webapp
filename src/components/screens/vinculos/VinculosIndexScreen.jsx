import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetBindings } from "../../../actions/crud/bindings";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import VinculosTable from "../../ui/tables/VinculosTable";
import VinculosAddOption from "../../ui/options/add/VinculosAddOption";

const VinculosIndexScreen = () => {

    const { token } = useAuth();

    const { bindings:vinculos } = useSelector( state => state.bindings );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startAsyncGetBindings(token) );
    }, []);

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                <div className="col s12 right-align">
                    <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                    <Link to={ RouteConstants.bindings.index } className="breadcrumb">Vínculos</Link>
                    <Link to={ RouteConstants.bindings.index } className="breadcrumb">Listar</Link>
                </div>
                <h4 className="center-align">Tipos de vínculos creados en el sistema</h4>
                <VinculosTable vinculos={ vinculos } />
                <VinculosAddOption />
            </section>
        </MasterLayout>
    );
};

export default VinculosIndexScreen;
