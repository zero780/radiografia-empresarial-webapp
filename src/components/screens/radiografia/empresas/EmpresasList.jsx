import React from 'react';
import PropTypes from 'prop-types';
import EmpresaListItem from "./EmpresaListItem";

const EmpresasList = ({ empresas, removeCallback }) => {
    if (!empresas.length)
        return <></>;
    return (
        <ul className="collection">
            {
                empresas.map((empresa, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <EmpresaListItem empresa={empresa} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

EmpresasList.propTypes = {
    empresas: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default EmpresasList;
