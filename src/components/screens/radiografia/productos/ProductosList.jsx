import React from 'react';
import PropTypes from 'prop-types';
import ProductoListItem from "./ProductoListItem";

const ProductosList = ({ productos, removeCallback }) => {
    if (!productos.length)
        return <></>;
    return (
        <ul className="collection">
            {
                productos.map((producto, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <ProductoListItem producto={producto} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

ProductosList.propTypes = {
    productos: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default ProductosList;
