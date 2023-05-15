import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const RepresentanteListItem = ( { representante, removeCallback } ) => {

    const { email, nombre } = representante;

    const doRemove = e => {
        e.preventDefault();
        removeCallback(email);
    };

    return (
        <>
            <img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${ encodeURI(nombre) }`} alt="" />
            <p className="title">{ nombre }</p>
            <a className="mail" href={ `mailto:${email}` }>{ email }</a>
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar Representante" onClick={ doRemove }><Icon>person_remove</Icon></a>
                ) : ''
            }
        </>
    );
};

RepresentanteListItem.propTypes = {
    representante: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default RepresentanteListItem;
