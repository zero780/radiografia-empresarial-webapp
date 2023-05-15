import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";

import Page05AForm from "./subsecciones/Page05AForm";

const RadiografiaPage5Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {

    return (
        <Page05AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
    );
};

export default RadiografiaPage5Form;