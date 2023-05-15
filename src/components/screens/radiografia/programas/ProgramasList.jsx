import React from 'react';
import PropTypes from 'prop-types';
import ProgramaListItem from "./ProgramaListItem";

const ProgramasList = ({ programas, removeCallback }) => {
    if (!programas.length)
        return <></>;
    return (
        <ul className="collection">
            {
                programas.map((programa, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <ProgramaListItem programa={programa} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

ProgramasList.propTypes = {
    programas: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default ProgramasList;
