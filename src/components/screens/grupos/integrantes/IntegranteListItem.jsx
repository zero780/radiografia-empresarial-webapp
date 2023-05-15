import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const IntergranteListItem = ( { integrante, removeCallback } ) => {
    const { mail, tipo } = integrante;
    return (
        <>
            <img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(mail)}`} alt="" />
            <span className="title">{mail}</span>
            <p>{tipo}</p>
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar integrante" onClick={ e => { e.preventDefault(); removeCallback(mail)} }><Icon>person_remove</Icon></a>
                ) : ''
            }
        </>
    );
};

IntergranteListItem.propTypes = {
    integrante: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default IntergranteListItem;
