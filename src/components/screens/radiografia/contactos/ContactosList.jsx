import React from 'react';
import PropTypes from 'prop-types';
import ContactoListItem from "./ContactoListItem";

const ContactosList = ({ contactos, removeCallback }) => {
    if (!contactos.length)
        return <></>;
    return (
        <ul className="collection">
            {
                contactos.map((contacto, idx) => {
                    return (
                        <li key={`int_it_${idx}`} className="collection-item avatar">
                            <ContactoListItem contacto={contacto} removeCallback={removeCallback} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

ContactosList.propTypes = {
    contactos: PropTypes.array.isRequired,
    removeCallback: PropTypes.func,
};

export default ContactosList;
