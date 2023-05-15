import React from 'react';
import PropTypes from 'prop-types';
import PatenteListItem from "./PatenteListItem";

const PatentesList = ({ patentes, removeCallback }) => {
    if (!patentes.length)
        return <></>;
    return (
        <ul className="collection">
            {
                patentes.map((patente, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <PatenteListItem patente={patente} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

PatentesList.propTypes = {
    patentes: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default PatentesList;
