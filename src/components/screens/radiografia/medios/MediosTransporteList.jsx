import React from 'react';
import PropTypes from 'prop-types';
import MedioTransporteListItem from "./MedioTransporteListItem";

const MediosTransporteList = ({ medios, removeCallback }) => {
    if (!medios.length)
        return <></>;
    return (
        <ul className="collection">
            {
                medios.map((medio, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <MedioTransporteListItem medio={medio} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

MediosTransporteList.propTypes = {
    medios: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default MediosTransporteList;
