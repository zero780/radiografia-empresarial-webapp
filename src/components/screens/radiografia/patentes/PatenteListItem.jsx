import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const PatenteListItem = ({ patente, removeCallback }) => {
    const tipo = patente.tipo;
    return (
        <>
            {/*<img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(mail)}`} alt="" />*/}
            <span className="title">{tipo}</span>
            {/*<p>{tipo}</p>*/}
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar integrante" onClick={e => { e.preventDefault(); removeCallback(tipo) }}><Icon>remove_circle</Icon></a>
                ) : ''
            }
        </>
    );
};

PatenteListItem.propTypes = {
    patente: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default PatenteListItem;
