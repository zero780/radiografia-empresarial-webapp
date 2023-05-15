import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// Actions
import { startAsyncEditBinding, startAsyncGetBindingById } from "../../../actions/crud/bindings";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
// Validations
import { validateText } from "../../../utils/validate";
// Utils
import { toSentenceCase } from "../../../utils/string";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import Error404Layout from "../../ui/layouts/Error404Layout";
import VinculosForm from "../../ui/forms/VinculosForm";

const VinculosEditScreen = ( { match: { params: { id } } } ) => {

    const { token } = useAuth();

    const { active:vinculo, new:editBinding } = useSelector( state => state.bindings );

    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    const history = useHistory();

    const [ saved, setSaved ] = useState(false);

    useEffect(() => {
        if(editBinding && saved) {
            history.push({ pathname:  RouteConstants.bindings.view.replace(':id', btoa(editBinding.id)), });
        }
    }, [editBinding]);

    useEffect(() => {
        try {
            dispatch( startAsyncGetBindingById(atob(id), token) );
        } catch (e) { }
    }, []);

    useEffect(() => {
        if(vinculo) {
            setValues(vinculo);
        }
    }, [vinculo]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'nombre':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            default:
                return false;
        }
    };

    const [ formValues, handleChange, setValues ] = useForm({ nombre: '', descripcion: '' }, validateInput);

    const { nombre, descripcion } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        if(validateInput('nombre', nombre)) {
            dispatch( startAsyncEditBinding({
                nombre: toSentenceCase(nombre).trim(),
                descripcion: descripcion.trim(),
                ...vinculo
            }, token) );
            setSaved(true);
        }
    };

    return (
        <MasterLayout sidenavComponent={ AdministracionSidenav }>
            <section className="section has-sidebar">
                {
                    vinculo ? (
                        <>
                            <div className="col s12 right-align">
                                <Link to={ RouteConstants.admin.prefix } className="breadcrumb">Administración</Link>
                                <Link to={ RouteConstants.bindings.index } className="breadcrumb">Vínculos</Link>
                                <Link to={ RouteConstants.bindings.create } className="breadcrumb">Editar</Link>
                            </div>
                            <h4 className="center-align">Editar tipo de vínculo</h4>
                            <div className="container">
                                <div className="white z-depth-1 section form-pseudo">
                                    <div className="container">
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Información del vínculo</h5>
                                        </div>
                                        <VinculosForm tempVinculo={ formValues } handleInputChange={ handleChange } handleFormSubmit={ handleSubmit } buttonText="Editar Tipo de Vínculo" />
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

export default VinculosEditScreen;
