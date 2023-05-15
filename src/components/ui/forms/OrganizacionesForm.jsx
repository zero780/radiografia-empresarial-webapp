import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Select, Textarea, TextInput } from "react-materialize";

const OrganizacionesForm = ({ formValues, handleFormSubmit, handleInputChange, disabled=false, buttonText='Crear nueva organización' }) => {

    return (
        <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
            <div className="container">
                <div className="row">
                    <div className="row no-margin-bot">
                        <h5 className="more-text">Información de la Organización</h5>
                    </div>
                    <Select
                        s={12}
                        icon={<Icon>cloud</Icon>}
                        id="business_tidentificacion"
                        name="idTipoIdentificacion"
                        onChange={ handleInputChange }
                        label="Tipo de identificación"
                        value={ formValues.idTipoIdentificacion }
                        disabled={ disabled }
                    >
                        <option value="1">RUC</option>
                    </Select>
                    <TextInput
                        icon={<Icon>fingerprint</Icon>}
                        s={12}
                        id="business_identificacion"
                        name="identificacion"
                        value={ formValues.identificacion }
                        onChange={ handleInputChange }
                        label="Identificación"
                        validate
                        disabled={ disabled }
                    />
                    <Textarea
                        icon={<Icon>business_center</Icon>}
                        s={12}
                        id="business_nombre"
                        name="nombre"
                        value={ formValues.nombre }
                        onChange={ handleInputChange }
                        label="Nombre de la organización"
                        validate
                        disabled={ disabled }
                    />
                    {
                        formValues.createdAt && (
                            <TextInput
                                s={12}
                                id="user_createdAt"
                                icon={<Icon>event_available</Icon>}
                                label="Fecha de creación"
                                disabled
                                value={ formValues.createdAt }
                            />
                        )
                    }
                    {
                        !disabled && (
                            <div className="row center-align no-margin-bot">
                                <div className="input-field col s12">
                                    <input type="submit" className="btn" value={ buttonText } />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </form>
    );
};

OrganizacionesForm.propTypes = {
    formValues: PropTypes.object.isRequired,
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default OrganizacionesForm;
