import React, {useState} from 'react';
import { Route } from "react-router-dom";
import { Icon, RadioGroup, Textarea, TextInput } from "react-materialize";
import useAuth from "../../../hooks/useAuth";
import useGrupos from "../../../hooks/useGrupos";
import GruposSidenav from "../../ui/sidenavs/GruposSidenav";
import IntegrantesList from "./integrantes/IntegrantesList";
import Error404Screen from "../errors/Error404Screen";
import MasterLayout from "../../ui/layouts/MasterLayout";

const GruposViewIndex = ({ match:{params: {id}} }) => {

    const { pendientes:g_pendientes, show, edit } = useGrupos();

    const { userLogged, canUserDo } = useAuth();

    const [ tempMotivoAceptacion, setMotivoAceptacion ] = useState('');
    const [ tempValidacion, setTempValidacion ] = useState('aprobado');

    const modelname = 'Grupo';
    const grupo = show(id);

    if(!grupo)
        return <Route component={Error404Screen} />;

    const { organizacion, vinculo, integrantes, motivoCreacion, estado, motivoAceptacion, supervisor, representante, created_at, authorized_at } = grupo;

    const handleMotivoChange = e => {
        e.preventDefault();
        setMotivoAceptacion(e.target.value);
    };
    const handleEstadoChange = e => {
        e.preventDefault();
        setTempValidacion(e.target.value);
    };
    const handleValidacionSubmit = e => {
        e.preventDefault();
        if(!tempMotivoAceptacion.length) {
            alert('Por favor, escriba un motivo si aprobar o rechazar el nuevo grupo de trabajo.');
            return;
        }
        if(!tempValidacion.length) {
            alert('Por favor, escoja si aprueba o rechaza el nuevo grupo de trabajo.');
            return;
        }
        const fecha = new Date();
        const newGrupo = {
            ...grupo,
            estado: tempValidacion === 'aprobado' ? 'En ejecución' : 'Rechazado',
            representante: userLogged.correo,
            authorized_at: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };
        edit(id, newGrupo);
    };
    const handleFinalizarGrupo = e => {
        e.preventDefault();
        const fecha = new Date();
        const newGrupo = {
            ...grupo,
            estado: 'Archivado',
            archived_at: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };
        edit(id, newGrupo);
    };

    const sidenav = () => (<GruposSidenav pendientes={g_pendientes.length} />);

    return (
        <MasterLayout sidenavComponent={ sidenav }>
            <section className="section has-sidebar">
                <h4 className="center-align">Detalles de grupo de trabajo</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <div className="container">
                            <div className="row no-margin-bot">
                                <h5 className="more-text">Información de la Organización</h5>
                            </div>
                            <TextInput
                                s={12}
                                icon={<Icon>business</Icon>}
                                label="Organización"
                                disabled
                                value={organizacion}
                            />
                            <TextInput
                                s={12}
                                icon={<Icon>share</Icon>}
                                label="Vínculo con la ESPOL"
                                disabled
                                value={vinculo}
                            />
                            <div className="row no-margin-bot">
                                <h5 className="more-text">Integrantes</h5>
                            </div>
                            <IntegrantesList integrantes={integrantes} />
                            <div className="row no-margin-bot">
                                <h5 className="more-text">Solicitud de creación</h5>
                            </div>
                            <TextInput
                                s={12}
                                icon={<Icon>face</Icon>}
                                label="Creado por"
                                disabled
                                value={supervisor}
                            />
                            <Textarea
                                icon={<Icon>mode_edit</Icon>}
                                s={12}
                                label="Motivo para creación"
                                value={motivoCreacion}
                                disabled
                            />
                            <TextInput
                                s={12}
                                icon={<Icon>event</Icon>}
                                label="Fecha de creación"
                                disabled
                                value={created_at}
                            />
                            {
                                motivoAceptacion ? (
                                    <>
                                        <TextInput
                                            s={12}
                                            m={6}
                                            icon={<Icon>admin_panel_settings</Icon>}
                                            label="Validado por"
                                            disabled
                                            value={representante}
                                        />
                                        <TextInput
                                            s={12}
                                            m={6}
                                            icon={<Icon>event_available</Icon>}
                                            label="Fecha de validación"
                                            disabled
                                            value={authorized_at}
                                        />
                                        <Textarea
                                            icon={<Icon>feedback</Icon>}
                                            s={12}
                                            label="Motivo para la aceptación/rechazo"
                                            value={motivoAceptacion}
                                            disabled
                                        />
                                    </>
                                ) : ''
                            }
                            <TextInput
                                s={12}
                                icon={<Icon>work_outline</Icon>}
                                label="Estado"
                                disabled
                                value={estado}
                            />
                            {
                                !motivoAceptacion && estado.toLowerCase() === 'pendiente' && canUserDo(modelname, 'check') ? (
                                    <form onSubmit={handleValidacionSubmit}>
                                        <div className="row no-margin-bot">
                                            <h5 className="more-text">Atender solicitud</h5>
                                        </div>
                                        <Textarea
                                            icon={<Icon>feedback</Icon>}
                                            s={12}
                                            id="motivoAceptacion"
                                            label="Motivo para aceptar/rechazar"
                                            value={tempMotivoAceptacion}
                                            onChange={handleMotivoChange}
                                            data-length={200}
                                            validate
                                        />
                                        <div className="row center-align">
                                            <RadioGroup
                                                onChange={handleEstadoChange}
                                                options={[
                                                    {
                                                        label: 'Aprobado',
                                                        value: 'aprobado'
                                                    },
                                                    {
                                                        label: 'Rechazado',
                                                        value: 'rechazado'
                                                    }
                                                ]}
                                                withGap
                                                radioClassNames='col s6'
                                                value={tempValidacion}
                                            />
                                        </div>
                                        <div className="row center-align">
                                            <div className="input-field col s12">
                                                <input type="submit" className="btn" value="Atender solicitud" />
                                            </div>
                                        </div>
                                    </form>
                                ) : ''
                            }
                            {
                                estado.toLowerCase() === 'en ejecución' && canUserDo(modelname, 'delete') ? (
                                    <div className="row center-align">
                                        <div className="input-field col s12">
                                            <button type="button" className="btn red darken-3" onClick={handleFinalizarGrupo}>Finalizar grupo de trabajo</button>
                                        </div>
                                    </div>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default GruposViewIndex;
