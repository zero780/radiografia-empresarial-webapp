import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, TextInput } from "react-materialize";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// Actions
import { startAsyncCreateUser } from "../../../actions/crud/users";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useForm from "../../../hooks/useForm";
import useAuth from "../../../hooks/useAuth";
// Validations
import { validateEmail, validateText } from "../../../utils/validate";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import UsuariosForm from "../../ui/forms/UsuariosForm";

const UsuariosCreateScreen = () => {

    const dispatch = useDispatch();

    const { token } = useAuth();

    const { new:newUser } = useSelector( state => state.users );

    const [ saved, setSaved ] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if(newUser && saved) {
            history.push({ pathname:  RouteConstants.users.view.replace(':id', btoa(newUser.id)), });
        }
    }, [newUser]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'nombre':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            case 'email':
                return validateEmail(value);
            default:
                return false;
        }
    };

    const [ formValues, handleChange ] = useForm({ nombre: '', email: '' }, validateInput);

    const { nombre, email } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        if(/*validateInput('nombre', nombre) &&*/ validateInput('email', email)) {
            dispatch( startAsyncCreateUser({
                nombre: nombre.toUpperCase(),
                email: email.toLowerCase()
            }, token) );
            setSaved(true);
        }
    };

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                <div className="col s12 right-align">
                    <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                    <Link to={ RouteConstants.users.index } className="breadcrumb">Usuarios</Link>
                    <Link to={ RouteConstants.users.create } className="breadcrumb">Nuevo</Link>
                </div>
                <h4 className="center-align">Nuevo usuario</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <div className="container">
                            <UsuariosForm formValues={ formValues } handleFormSubmit={ handleSubmit } handleInputChange={ handleChange } />
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default UsuariosCreateScreen;
