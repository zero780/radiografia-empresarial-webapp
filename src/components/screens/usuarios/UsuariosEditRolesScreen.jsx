import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, TextInput } from "react-materialize";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetUserById } from "../../../actions/crud/users";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import Error404Layout from "../../ui/layouts/Error404Layout";
import UsuariosMenuOption from "../../ui/options/menu/UsuariosMenuOption";
import {startAsyncGetRoles} from "../../../actions/crud/roles";
import RolesForm from "../../ui/forms/RolesForm";

const UsuariosEditRolesScreen = ( { match: { params: { id } } } ) => {

    const [ rolesAsignados, setRolesAsignados ] = useState([]);

    const dispatch = useDispatch();

    const { active:usuario } = useSelector( state => state.users );

    const { loading } = useSelector( state => state.ui );

    const { roles } = useSelector( state => state.roles );

    const { token } = useAuth();

    useEffect(() => {
        try {
            dispatch( startAsyncGetUserById(atob(id), token) );
        } catch (e) { }
    }, []);

    useEffect(() => {
        try {
            dispatch( startAsyncGetRoles() );
        } catch (e) { }
    }, [usuario]);

    useEffect(() => {
        try {
            //console.log(rolesAsignados);
        } catch (e) { }
    }, [rolesAsignados]);

    const handleOnChange = e => {
        if(e.target.checked) {
            setRolesAsignados([e.target.value.toLowerCase(), ...rolesAsignados]);
        } else {
            setRolesAsignados(rolesAsignados.filter( r => r !== e.target.value.toLowerCase()));
        }
    };

    const handleOnSubmit = e => {
        if(e.target.checked) {
            setRolesAsignados([e.target.value.toLowerCase(), ...rolesAsignados]);
        } else {
            setRolesAsignados(rolesAsignados.filter( r => r !== e.target.value.toLowerCase()));
        }
    };

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                {
                    usuario ? (
                        <>
                            <div className="col s12 right-align">
                                <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                                <Link to={ RouteConstants.users.index } className="breadcrumb">Usuarios</Link>
                                <Link to={ RouteConstants.users.view } className="breadcrumb">Asignar roles</Link>
                            </div>
                            <h4 className="center-align">Editar roles del usuario</h4>
                            <div className="container">
                                <div className="white z-depth-1 section form-pseudo">
                                    <div className="container">
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Información del usuario</h5>
                                        </div>
                                        <div className="row">
                                            <TextInput
                                                s={12}
                                                id="user_name"
                                                icon={<Icon>face</Icon>}
                                                label="Nombres completos"
                                                disabled
                                                value={ usuario.nombre }
                                            />
                                            <TextInput
                                                s={12}
                                                id="user_email"
                                                icon={<Icon>mail_outline</Icon>}
                                                label="Correo electrónico"
                                                disabled
                                                value={ usuario.email }
                                            />
                                            <TextInput
                                                s={12}
                                                id="user_createdAt"
                                                icon={<Icon>event_available</Icon>}
                                                label="Fecha de creación"
                                                disabled
                                                value={ usuario.createdAt }
                                            />
                                        </div>
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Asigna los roles</h5>
                                        </div>
                                        {
                                            roles?.length ? (
                                                <RolesForm roles={ usuario.roles } rolesAvailable={ roles } handleFormSubmit={ handleOnSubmit } handleInputChange={ handleOnChange } />
                                            ) :
                                            <p className="center-align">Cargando roles. . .</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <UsuariosMenuOption idBase64={ id }/>
                        </>
                    ) : !loading && <Error404Layout />
                }
            </section>
        </MasterLayout>
    );
};

export default UsuariosEditRolesScreen;
