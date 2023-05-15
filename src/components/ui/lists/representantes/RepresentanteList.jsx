import React from 'react';
import PropTypes from 'prop-types';
import RepresentanteListItem from "./RepresentanteListItem";

const RepresentanteList = ({ representantes, removeCallback }) => {
    if (!representantes.length)
        return <></>;
    return (
        <ul className="collection">
            {
                representantes.map((representante, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <RepresentanteListItem representante={ representante } removeCallback={ removeCallback } />
                        </li>
                    )
                })
            }
        </ul>
    );
};

RepresentanteList.propTypes = {
    representantes: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default RepresentanteList;
