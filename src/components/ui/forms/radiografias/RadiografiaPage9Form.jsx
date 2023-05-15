import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Page09AForm from "./subsecciones/Page09AForm";
import Page09BForm from "./subsecciones/Page09BForm";

const RadiografiaPage9Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>A</Tab>
                <Tab>B</Tab>
            </TabList>
            <TabPanel>
                <Page09AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page09BForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
        </Tabs>
    );
};

export default RadiografiaPage9Form;