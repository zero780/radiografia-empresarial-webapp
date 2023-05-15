import React from 'react';
import PropTypes from 'prop-types';

const RolesForm = ({ roles, rolesAvailable, handleFormSubmit, handleInputChange, disabled=false, buttonText='Actualizar roles' }) => {
    return (
        <div>
            <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
                {
                    rolesAvailable?.length ? (
                        rolesAvailable.map(r => (
                            <p key={ `rol_ava__${r.id}` }>
                                <label>
                                    <input
                                        id={ r.id }
                                        value={ r.id }
                                        type="checkbox"
                                        checked={ roles.filter( r2 => r.nombre === r2.nombre ).length > 0 }
                                        onChange={ handleInputChange }
                                    />
                                    <span>{ r.nombre }</span>
                                </label>
                            </p>
                        ))
                    ) : (
                        roles.map(r => (
                            <p key={ `rol__${r.id}` }>
                                <label>
                                    <input
                                        id={ r.id }
                                        value={ r.id }
                                        type="checkbox"
                                        checked={ disabled }
                                        onChange={ handleInputChange }
                                        // disabled={ disabled }
                                    />
                                    <span>{ r.nombre }</span>
                                </label>
                            </p>
                        ))
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
        </div>
    );
};

RolesForm.propTypes = {
    roles: PropTypes.object.isRequired,
    rolesAvailable: PropTypes.object,
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    disabled: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default RolesForm;
