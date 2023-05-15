import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Textarea, TextInput } from "react-materialize";

const VinculosForm = ({ tempVinculo, handleFormSubmit, handleInputChange, disabled=false, buttonText='Crear Tipo de Vínculo' }) => {
    return (
        <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
            <TextInput
                s={12}
                id="binding_nombre"
                icon={<Icon>link</Icon>}
                label="Nombre"
                name="nombre"
                value={ tempVinculo.nombre }
                onChange={ handleInputChange }
                required
                disabled={ disabled }
            />
            <Textarea
                icon={<Icon>description</Icon>}
                s={12}
                id="binding_descripcion"
                label="Descripción"
                name="descripcion"
                value={ disabled ? (tempVinculo.descripcion ?? '-') : tempVinculo.descripcion }
                onChange={ handleInputChange }
                data-length={200}
                validate
                disabled={ disabled }
            />
            {
                tempVinculo.createdAt && (
                    <TextInput
                        s={12}
                        id="user_createdAt"
                        icon={<Icon>event_available</Icon>}
                        label="Fecha de creación"
                        disabled
                        value={ tempVinculo.createdAt }
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

VinculosForm.propTypes = {
    tempVinculo: PropTypes.object.isRequired,
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default VinculosForm;
