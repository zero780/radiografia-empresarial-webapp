import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const EmpresaListItem = ({ empresa, removeCallback }) => {
    const nombre = empresa.nombre_empresa;
    return (
        <>
            {/*<img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(mail)}`} alt="" />*/}
            <span className="title">{nombre}</span>
            {/*<p>{tipo}</p>*/}
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar empresa" onClick={e => { e.preventDefault(); removeCallback(nombre) }}><Icon>remove_circle</Icon></a>
                ) : ''
            }
        </>
    );
};

EmpresaListItem.propTypes = {
    empresa: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default EmpresaListItem;
