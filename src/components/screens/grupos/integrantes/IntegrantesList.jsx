import React from 'react';
import PropTypes from 'prop-types';
import IntegranteListItem from "./IntegranteListItem";

const IntegrantesList = ({ integrantes, removeCallback }) => {
    if (!integrantes.length)
        return <></>;
    return (
        <ul className="collection">
            {
                integrantes.map((integrante, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <IntegranteListItem integrante={integrante} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

IntegrantesList.propTypes = {
    integrantes: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default IntegrantesList;
