import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, TextInput } from "react-materialize";

const AddUsuarioForm = ({ value, handleFormSubmit, handleInputChange, buttonDescription }) => {
    return (
        <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
            <div className="col s10">
                <div className="row no-margin-bot">
                    <TextInput
                        s={ 12 }
                        id="email"
                        icon={<Icon>mail</Icon>}
                        value={ value }
                        email
                        label="Correo electrónico"
                        name="email"
                        onChange={ handleInputChange }
                        required
                    />
                </div>
            </div>
            <div className="input-field col s2">
                <Button
                    className="green right"
                    style={ {'marginTop': '25px'} }
                    floating
                    icon={<Icon>person_add</Icon>}
                    small
                    node="button"
                    waves="light"
                    disabled={!value.length}
                    tooltip={ buttonDescription && 'Agregar' }
                />
            </div>
        </form>
    );
};

AddUsuarioForm.propTypes = {
    value: PropTypes.string.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    buttonDescription: PropTypes.string,
};

export default AddUsuarioForm;
