import React from 'react';
import PropTypes from 'prop-types';
import FactorListItem from "./FactorListItem";

const FactoresList = ({ factores, removeCallback }) => {
    if (!factores.length)
        return <></>;
    return (
        <ul className="collection">
            {
                factores.map((factor, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <FactorListItem factor={factor} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

FactoresList.propTypes = {
    factores: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default FactoresList;
