import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetUsers } from "../../../actions/crud/users";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import UsuariosTable from "../../ui/tables/UsuariosTable";
import UsuariosAddOption from "../../ui/options/add/UsuariosAddOption";

const UsuariosIndexScreen = () => {

    const { users:usuarios } = useSelector( state => state.users );

    const dispatch = useDispatch();

    const { token } = useAuth();

    useEffect(() => {
        dispatch( startAsyncGetUsers(token) );
    }, []);

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                <div className="col s12 right-align">
                    <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                    <Link to={ RouteConstants.users.index } className="breadcrumb">Usuarios</Link>
                    <Link to={ RouteConstants.users.index } className="breadcrumb">Listar</Link>
                </div>
                <h4 className="center-align">Usuarios creados en el sistema</h4>
                <UsuariosTable usuarios={ usuarios } />
                <UsuariosAddOption />
            </section>
        </MasterLayout>
    );
};

export default UsuariosIndexScreen;
