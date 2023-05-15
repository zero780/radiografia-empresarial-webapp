import React from 'react';
import Page01AForm from "./subsecciones/Page01AForm";

const RadiografiaPage1Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {

    return (
        <Page01AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor}/>
    );
};

export default RadiografiaPage1Form;