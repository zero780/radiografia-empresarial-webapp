import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Page08AForm from "./subsecciones/Page08AForm";
import Page08BForm from "./subsecciones/Page08BForm";
import Page08CForm from "./subsecciones/Page08CForm";

const RadiografiaPage8Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {

    return (
        <Tabs>
            <TabList>
                <Tab>A</Tab>
                <Tab>B</Tab>
                <Tab>C</Tab>
            </TabList>
            <TabPanel>
                <Page08AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page08BForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page08CForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
        </Tabs>
    );
};

export default RadiografiaPage8Form;