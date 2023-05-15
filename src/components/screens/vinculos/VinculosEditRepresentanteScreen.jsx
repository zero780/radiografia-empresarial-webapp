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
import useForm from "../../../hooks/useForm";
// Validations
import { validateEmail } from "../../../utils/validate";
// Components
import './style.css';
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import Error404Layout from "../../ui/layouts/Error404Layout";
import RepresentanteList from "../../ui/lists/representantes/RepresentanteList";
import AddUsuarioForm from "../../ui/forms/AddUsuarioForm";
import VinculosForm from "../../ui/forms/VinculosForm";

const VinculosEditRepresentanteScreen = ( { match: { params: { id } } } ) => {

    const { token } = useAuth();

    const { active:vinculo } = useSelector( state => state.bindings );

    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    const [ representantes, setRepresentantes ] = useState([]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'email':
                return validateEmail(value);
            default:
                return false;
        }
    };

    const [ formValues, handleChange, setValues ] = useForm({ email: '' }, validateInput);

    const { email } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        if(validateInput('email', email)) {
            setRepresentantes([{ email: email, nombre: email }, ...representantes]);
            setValues({ email: '' });
        }
    };

    const handleRemove = email => {
        setRepresentantes(representantes.filter(({ email:mailRepresentante }) => mailRepresentante !== email));
    };

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
                                <Link to={ RouteConstants.bindings.view } className="breadcrumb">Editar representantes</Link>
                            </div>
                            <h4 className="center-align">Modificar representantes del Vínculo</h4>
                            <div className="container">
                                <div className="white z-depth-1 section form-pseudo">
                                    <div className="container">
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Información del vínculo</h5>
                                        </div>
                                        <VinculosForm tempVinculo={ vinculo } disabled />
                                        {
                                            representantes.length ? (
                                                <div className="row">
                                                    <div className="row no-margin-bot">
                                                        <h5 className="more-text">Representantes asignados</h5>
                                                    </div>
                                                    <RepresentanteList representantes={ representantes } removeCallback={ handleRemove } />
                                                </div>
                                            ) : ''
                                        }
                                        <div className="row">
                                            <div className="row no-margin-bot">
                                                <h5 className="more-text">Asignar representantes</h5>
                                            </div>
                                            <AddUsuarioForm handleFormSubmit={ handleSubmit } handleInputChange={ handleChange } value={ email } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : !loading && <Error404Layout />
                }
            </section>
        </MasterLayout>
    );
};

export default VinculosEditRepresentanteScreen;
