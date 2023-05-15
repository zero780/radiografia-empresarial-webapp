import React from 'react';
import PropTypes from 'prop-types';
import TecnologiaListItem from "./TecnologiaListItem";

const TecnologiasList = ({ tecnologias, removeCallback }) => {
    if (!tecnologias.length)
        return <></>;
    return (
        <ul className="collection">
            {
                tecnologias.map((tecnologia, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <TecnologiaListItem tecnologia={tecnologia} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

TecnologiasList.propTypes = {
    tecnologias: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default TecnologiasList;
