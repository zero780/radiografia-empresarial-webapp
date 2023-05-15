import React from 'react';
import PropTypes from 'prop-types';
import PeriodoListItem from "./PeriodoListItem";

const PeriodosList = ({ periodos, removeCallback }) => {
    if (!periodos.length)
        return <></>;
    return (
        <ul className="collection">
            {
                periodos.map((periodo, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <PeriodoListItem periodo={periodo} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

PeriodosList.propTypes = {
    periodos: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default PeriodosList;
