import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Page11AForm from "./subsecciones/Page11AForm";
import Page11BForm from "./subsecciones/Page11BForm";

const RadiografiaPage11Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>A</Tab>
                <Tab>B</Tab>
            </TabList>
            <TabPanel>
                <Page11AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page11BForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
        </Tabs>
    );
};

export default RadiografiaPage11Form;