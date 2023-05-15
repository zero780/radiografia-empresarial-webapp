import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";
import ActividadesList from './ActividadesList';

const ActividadListItem = ({ actividad, removeCallback }) => {
    const { nombre } = actividad;
    return (
        <>
            {/*<img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(mail)}`} alt="" />*/}
            <span className="title">{nombre}</span>
            {/*<p>{tipo}</p>*/}
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar integrante" onClick={e => { e.preventDefault(); removeCallback(nombre) }}><Icon>remove_circle</Icon></a>
                ) : ''
            }
        </>
    );
};

ActividadListItem.propTypes = {
    actividad: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default ActividadListItem;
