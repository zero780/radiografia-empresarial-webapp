import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const ProductoListItem = ({ producto, removeCallback }) => {
    const nombre = producto.producto;
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

ProductoListItem.propTypes = {
    producto: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default ProductoListItem;
