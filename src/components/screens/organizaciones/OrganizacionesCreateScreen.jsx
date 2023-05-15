import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// Actions
import { startAsyncCreateOrganization } from "../../../actions/crud/business";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
// Validations
import { validateRUC, validateText } from "../../../utils/validate";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import OrganizacionesSidenav from "../../ui/sidenavs/OrganizacionesSidenav";
import OrganizacionBreadcrum from "../../ui/breadcrums/OrganizacionBreadcrum";
import OrganizacionesForm from "../../ui/forms/OrganizacionesForm";

const OrganizacionesCreateScreen = () => {

    const { token } = useAuth();

    const { new:newOrganization } = useSelector( state => state.business );

    const dispatch = useDispatch();

    const history = useHistory();

    const [ saved, setSaved ] = useState(false);

    useEffect(() => {
        if(newOrganization && saved) {
            history.push({ pathname:  RouteConstants.business.view.replace(':id', btoa(newOrganization.id)), });
        }
    }, [newOrganization]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'nombre':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            case 'identificacion':
                switch (idTipoIdentificacion) {
                    case 1: //RUC
                        return validateRUC(value);
                    // TODO: Implementar validaciones de las otras opciones de tipo de identificación
                    default:
                        return false;
                }
            default:
                return false;
        }
    };

    const [ formValues, handleChange ] = useForm({ nombre: '', identificacion: '', idTipoIdentificacion: 1 }, validateInput);

    const { nombre, idTipoIdentificacion, identificacion } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        if(validateInput('nombre', nombre)) {
            dispatch( startAsyncCreateOrganization({
                nombre: nombre.toUpperCase().trim(),
                identificacion: identificacion.trim(),
                ...formValues
            }, token) );
            setSaved(true);
        }
    };

    return (
        <MasterLayout sidenavComponent={ OrganizacionesSidenav }>
            <section className="section has-sidebar">
                <OrganizacionBreadcrum action="Nuevo" url={ RouteConstants.business.create } />
                <h4 className="center-align">Nueva organización con vínculos con la ESPOL</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <OrganizacionesForm formValues={ formValues } handleInputChange={ handleChange } handleFormSubmit={ handleSubmit } />
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default OrganizacionesCreateScreen;
