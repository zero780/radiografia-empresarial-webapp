import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "react-materialize";

const ContactoListItem = ({ contacto, removeCallback }) => {
    const area = contacto.area_empresa;
    return (
        <>
            {/*<img className='circle' src={`https://ui-avatars.com/api/?background=fff8e1&color=8d6e63&name=${encodeURI(mail)}`} alt="" />*/}
            <span className="title">{area}</span>
            {/*<p>{tipo}</p>*/}
            {
                removeCallback ? (
                    <a href="#?" className="secondary-content red-text" title="Eliminar integrante" onClick={e => { e.preventDefault(); removeCallback(area) }}><Icon>remove_circle</Icon></a>
                ) : ''
            }
        </>
    );
};

ContactoListItem.propTypes = {
    contacto: PropTypes.object.isRequired,
    removeCallback: PropTypes.func,
};

export default ContactoListItem;
