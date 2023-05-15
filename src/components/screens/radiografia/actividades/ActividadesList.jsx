import React from 'react';
import PropTypes from 'prop-types';
import ActividadListItem from "./ActividadListItem";

const ActividadesList = ({ actividades, removeCallback }) => {
    if (!actividades.length)
        return <></>;
    return (
        <ul className="collection">
            {
                actividades.map((actividad, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <ActividadListItem actividad={actividad} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

ActividadesList.propTypes = {
    actividades: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default ActividadesList;
