import React from 'react';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Page06AForm from "./subsecciones/Page06AForm";
import Page06BForm from "./subsecciones/Page06BForm";
import Page06CForm from "./subsecciones/Page06CForm";
import Page06DForm from "./subsecciones/Page06DForm";
import Page06EForm from "./subsecciones/Page06EForm";
import Page06FForm from "./subsecciones/Page06FForm";

const RadiografiaPage6Form = ({ idRadiografia, idOrganizacion, idGrupo, esAdmin, esSupervisor, buttonText = 'Guardar' }) => {

    return (
        <Tabs>
            <TabList>
                <Tab>A</Tab>
                <Tab>B</Tab>
                <Tab>C</Tab>
                <Tab>D</Tab>
                <Tab>E</Tab>
                <Tab>F</Tab>
            </TabList>
            <TabPanel>
                <Page06AForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page06BForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page06CForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page06DForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page06EForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
            <TabPanel>
                <Page06FForm idRadiografia={idRadiografia} idOrganizacion={idOrganizacion} idGrupo={idGrupo} esAdmin={esAdmin} esSupervisor={esSupervisor} />
            </TabPanel>
        </Tabs>
    );
};

export default RadiografiaPage6Form;