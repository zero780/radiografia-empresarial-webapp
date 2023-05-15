import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage8B } from "../../../../../actions/radiografia/page08";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page08BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        equipo_pc_mesa: false,
        equipo_pc_portatil: false,
        equipo_navegador: false,
        equipo_agenda: false,
        equipo_terminal: false,
        equipo_tablet: false,
        equipo_smartphone: false,
        equipo_ninguno: false,
        equipo_nsnc: false,
        equipo_otros: false,
        equipo_cuales_otros: '',
        software_exclusivo: false,
        solucion_formacion: false,
        solucion_especifica: false,
        software_compras: false,
        gestion_conocimiento: false,
        bases_datos: false,
        software_gestion_clientes: false,
        software_gestion_empresas: false,
        software_ofimatico: false,
        software_ninguno: false,
        software_nsnc: false,
        software_otros: false,
        software_cuales_otros: '',
        tramites_bancarios: false,
        facturacion_telematica: false,
        tramites_registros: false,
        tramites_administracion: false,
        tramites_organismos: false,
        tramites_ninguno: false,
        tramites_nsnc: false,
        tramites_otros: false,
        tramites_cuales_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage8B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeCheckboxEquipPcMesa = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_pc_mesa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_pc_mesa: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipPcPortatil = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_pc_portatil: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_pc_portatil: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipNavegador = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_navegador: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_navegador: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipAgenda = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_agenda: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_agenda: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipTerminal= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_terminal: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_terminal: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipTablet= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_tablet: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_tablet: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipSmartp = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_smartphone: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_smartphone: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipNinguno = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_ninguno: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_ninguno: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipNsnc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_nsnc: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_nsnc: false,
            });
        }
    };

    const handleOnChangeCheckboxEquipOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                equipo_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                equipo_otros: false,
            });
        }
    };

    const handleOnChangeEquipCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            equipo_cuales_otros: e.target.value,
        });
    };

    const handleOnChangeCheckboxSoftExclus = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_exclusivo: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_exclusivo: false,
            });
        }
    };

    const handleOnChangeCheckboxSolucFormacion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                solucion_formacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                solucion_formacion:  false,
            });
        }
    };

    const handleOnChangeCheckboxSolucEspec = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                solucion_especifica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                solucion_especifica: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftCompras = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_compras: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_compras: false,
            });
        }
    };

    const handleOnChangeCheckboxGestionConoc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                gestion_conocimiento: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                gestion_conocimiento: false,
            });
        }
    };

    const handleOnChangeCheckboxBaseDatos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                bases_datos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                bases_datos: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftGestClientes = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_gestion_clientes: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_gestion_clientes: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftGestEmpr= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_gestion_empresas: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_gestion_empresas: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftOfim = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_ofimatico: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_ofimatico: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftNinguno = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_ninguno: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_ninguno: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftNsnc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_nsnc: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_nsnc: false,
            });
        }
    };

    const handleOnChangeCheckboxSoftOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                software_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                software_otros: false,
            });
        }
    };

    const handleOnChangeSoftCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            software_cuales_otros: e.target.value,
        });
    };

    const handleOnChangeCheckboxTramitBancarios = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_bancarios: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_bancarios: false,
            });
        }
    };

    const handleOnChangeCheckboxFactuTelem = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_telematica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_telematica: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitRegis = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_registros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_registros: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitAdm = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_administracion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_administracion: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitOrgan = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_organismos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_organismos: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitNing = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_ninguno: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_ninguno: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitNsnc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_nsnc: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_nsnc: false,
            });
        }
    };

    const handleOnChangeCheckboxTramitOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tramites_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tramites_otros: false,
            });
        }
    };

    const handleOnChangeTramitCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tramites_cuales_otros: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Tecnología empleada</h5>
                </div>
                <div className="row">
                    <p>¿Qué equipos informáticos dispone la empresa?</p>
                    <p>
                        <label>
                            <input
                                id="equipo_pc_mesa"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipPcMesa}
                            />
                            <span>PC´s de mesa</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_pc_portatil"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipPcPortatil}
                            />
                            <span>PC´s portátiles y notebooks</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_navegador"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipNavegador}
                            />
                            <span>Navegadores GPS</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_agenda"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipAgenda}
                            />
                            <span>Agendas electrónicas (PDA´s)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_terminal"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipTerminal}
                            />
                            <span>Terminal Punto de Venta (TPV)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_tablet"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipTablet}
                            />
                            <span>Tablets</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_smartphone"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipSmartp}
                            />
                            <span>Smarthphones</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_ninguno"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipNinguno}
                            />
                            <span>Ninguno</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_nsnc"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipNsnc}
                            />
                            <span>NSNC</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="equipo_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEquipOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="equipo_cuales_otros"
                    label="Indicar equipos..."
                    value={tempForm.equipo_cuales_otros}
                    onChange={handleOnChangeEquipCualesOtros}
                    data-length={200}
                    validate
                />
                <div className="row">
                    <p>Indicar cuáles de las siguientes soluciones informáticas (software) utiliza en su empresa</p>
                    <p>
                        <label>
                            <input
                                id="software_exclusivo"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftExclus}
                            />
                            <span>Software hecho exclusivamente para su empresa</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="solucion_formacion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSolucFormacion}
                            />
                            <span>Soluciones para la formación del personal</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="solucion_especifica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSolucEspec}
                            />
                            <span>Soluciones específicas para su sector</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_compras"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftCompras}
                            />
                            <span>Software gestión de compras y proveedores (SCM)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="gestion_conocimiento"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxGestionConoc}
                            />
                            <span>Gestión del conocimiento y documentos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="bases_datos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxBaseDatos}
                            />
                            <span>Bases de datos para la toma de decisiones (Datawarehouse)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_gestion_clientes"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftGestClientes}
                            />
                            <span>Software de gestión de clientes (CRM)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_gestion_empresas"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftGestEmpr}
                            />
                            <span>Software de gestión de empresas (ERP)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_ofimatico"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftOfim}
                            />
                            <span>Software ofimático (Hojas de cálculo, procesadores de textos, etc.)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_ninguno"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftNinguno}
                            />
                            <span>Ninguna</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_nsnc"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftNsnc}
                            />
                            <span>NSNC</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="software_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSoftOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="software_cuales_otros"
                    label="Indicar soluciones informáticas..."
                    value={tempForm.software_cuales_otros}
                    onChange={handleOnChangeSoftCualesOtros}
                    data-length={200}
                    validate
                />
                <div className="row">
                    <p>Indicar en qué tramites con los distintos organismos emplea su empresa las NTIC´s (Nuevas tecnologías de información y comunicación)</p>
                    <p>
                        <label>
                            <input
                                id="tramites_bancarios"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitBancarios}
                            />
                            <span>Trámites bancarios</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_telematica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFactuTelem}
                            />
                            <span>Facturación telemática</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_registros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitRegis}
                            />
                            <span>Trámites con los Registros (Mercantil, de la Propiedad, etc.)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_administracion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitAdm}
                            />
                            <span>Trámites con la Administración (gestión de impuestos, boletines de cotización, etc.)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_organismos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitOrgan}
                            />
                            <span>Trámites con distintos organismos para solicitar subvenciones</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_ninguno"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitNing}
                            />
                            <span>Ninguno</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_nsnc"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitNsnc}
                            />
                            <span>NSNC</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tramites_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTramitOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="tramites_cuales_otros"
                    label="Indicar trámites..."
                    value={tempForm.tramites_cuales_otros}
                    onChange={handleOnChangeTramitCualesOtros}
                    data-length={200}
                    validate
                />
            </div>
            {
                (!esAdmin && !esSupervisor) ? (
                    <div className="row center-align no-margin-bot">
                        <div className="input-field col s12">
                            <input type="submit" className="btn" value={buttonText} />
                        </div>
                    </div>
                ) : ''
            }
            {
                esSupervisor ? (
                    <div className="row center-align no-margin-bot">
                        <div className="input-field col s12">
                            <a style={{ marginRight: '10px' }} class="btn">{buttonSupervisorAcept}</a>
                            <a class="btn red">{buttonSupervisorDecline}</a>
                        </div>
                    </div>
                ) : ''
            }
        </form >
    );
};

export default Page08BForm;
