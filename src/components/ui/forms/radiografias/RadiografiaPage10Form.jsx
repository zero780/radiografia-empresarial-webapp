import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Page10AForm from "./subsecciones/Page10AForm";
import Page10BForm from "./subsecciones/Page10BForm";
import Page10CForm from "./subsecciones/Page10CForm";

const RadiografiaPage10Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {

    return (
        <Tabs>
            <TabList>
                <Tab>A</Tab>
                <Tab>B</Tab>
                <Tab>C</Tab>
            </TabList>
            <TabPanel>
                <Page10AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page10BForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page10CForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
        </Tabs>
    );
};

export default RadiografiaPage10Form;