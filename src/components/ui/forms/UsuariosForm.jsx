import React from 'react';
import PropTypes from 'prop-types';
import { Icon, TextInput } from "react-materialize";

const UsuariosForm = ({ formValues, handleFormSubmit, handleInputChange, disabled=false, buttonText='Crear Nuevo Usuario' }) => {
    return (
        <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
            <div className="row no-margin-bot">
                <h5 className="more-text">Información del usuario</h5>
            </div>
            {
                formValues.nombre && (
                    <TextInput
                        s={12}
                        id="user_nombre"
                        icon={<Icon>face</Icon>}
                        label="Nombres completos"
                        name="nombre"
                        value={ formValues.nombre }
                        onChange={ handleInputChange }
                        required
                        disabled
                    />
                )
            }
            <TextInput
                s={12}
                id="user_email"
                icon={<Icon>mail_outline</Icon>}
                label="Correo electrónico"
                email
                name="email"
                value={ formValues.email }
                onChange={ handleInputChange }
                required
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
        </form>
    );
};

UsuariosForm.propTypes = {
    formValues: PropTypes.object.isRequired,
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default UsuariosForm;
