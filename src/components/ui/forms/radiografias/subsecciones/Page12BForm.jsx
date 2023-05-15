import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage12B } from "../../../../../actions/radiografia/page12";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ActividadesList from "../../../../screens/radiografia/actividades/ActividadesList";

const Page12BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    let areas = [{ 'id': '1', 'nombre': 'Informática y SI (TIC)' }, { 'id': '2', 'nombre': 'Producción y Desarrollo (PYD)' }, { 'id': '3', 'nombre': 'Recursos Humanos (RRHH)' }, { 'id': '4', 'nombre': 'Administración (AD)' }, { 'id': '5', 'nombre': 'Dirección y Estrategia (DYE)' }, { 'id': '6', 'nombre': 'I+D+i (IDI)' }, { 'id': '7', 'nombre': 'Compras (CMP)' }, { 'id': '8', 'nombre': 'Marketing, Comunicación y Promoción (MKT)' }, { 'id': '9', 'nombre': 'Logística (L)' }, { 'id': '10', 'nombre': 'Comercialización y Mercado (CM)' }, { 'id': '11', 'nombre': 'Calidad, prevención y medioambiente (CPM)' }, { 'id': '12', 'nombre': 'Otros(O)' }]

    const initialStateActividad = {
        nombre: '',
        id_area_actividad: '',
        mide_resultados: '',
    };

    const [tempActividad, setTempActividad] = useState(initialStateActividad);

    const initialState = {
        ha_desarrollado_diagnostico: '',
        lleva_tareas: '',
        ha_desarrollado_innovacion: '',
        actividades: [],
        interesado_vigilancia: '',
        tipo_sectorial: false,
        tipo_estudios: false,
        tipo_mercado: false,
        tipo_clientes: false,
        tipo_competencia: false,
        tipo_tecnologia: false,
        tipo_ayudas: false,
        tipo_normativas: false,
        tipo_otras: false,
        interesado_gestion: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage12B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioHaDesaDiagn = e => {
        setTempForm({
            ...tempForm,
            ha_desarrollado_diagnostico: e.target.value,
        });
    };

    const handleOnChangeRadioLlevaTareas = e => {
        setTempForm({
            ...tempForm,
            lleva_tareas: e.target.value,
        });
    };

    const handleOnChangeRadioHaDesaInnov = e => {
        setTempForm({
            ...tempForm,
            ha_desarrollado_innovacion: e.target.value,
        });
    };

    const handleOnChangeDescrAct = e => {
        e.preventDefault();
        setTempActividad({
            ...tempActividad,
            nombre: e.target.value,
        });
    };

    const handleOnChangeSelectAreaAct = e => {
        e.preventDefault();
        setTempActividad({
            ...tempActividad,
            id_area_actividad: e.target.value,
        });
    };

    const handleOnChangeRadioMideResult = e => {
        setTempActividad({
            ...tempActividad,
            mide_resultados: e.target.value,
        });
    };

    const handleAddActividad = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            actividades: [
                ...tempForm.actividades,
                {
                    ...tempActividad,
                },
            ],
        });

        setTempActividad({
            nombre: '',
            id_area_actividad: '',
            mide_resultados: '',
        });

        cleanRadiosCheckbox('mide_resultados');
    }

    const handleRemoveActividad = nombre => {
        setTempForm({
            ...tempForm,
            actividades: tempForm.actividades?.filter(function (actividad) {
                return actividad.nombre !== nombre;
            })
        });
    };

    const cleanRadiosCheckbox = nombre => {
        let inputs = document.getElementsByName(nombre);
        inputs.forEach((input) => {
            if (input.checked) {
                input.checked = false;
            }
        })
    };

    //otros
    const handleOnChangeRadioInteresVigil = e => {
        setTempForm({
            ...tempForm,
            interesado_vigilancia: e.target.value,
        });
    };

    const handleOnChangeCheckboxTipoSect = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_sectorial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_sectorial: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoEst = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_estudios: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_estudios: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoMerc= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_mercado: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_mercado: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoClient = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_clientes: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_clientes: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoCompet = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_competencia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_competencia: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoTecn = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_tecnologia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_tecnologia: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoAyudas = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_ayudas: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_ayudas: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoNormat = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_normativas: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_normativas: false,
            });
        }
    };

    const handleOnChangeCheckboxTipoOtras = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tipo_otras: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tipo_otras: false,
            });
        }
    };

    const handleOnChangeRadioInteresaGest = e => {
        setTempForm({
            ...tempForm,
            interesado_gestion: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <p>¿Ha desarrollado un diagnóstico de innovación y mejora competitiva  anteriormente?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="ha_desarrollado_diagnostico" type="radio" onChange={handleOnChangeRadioHaDesaDiagn}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="ha_desarrollado_diagnostico" type="radio" onChange={handleOnChangeRadioHaDesaDiagn}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="ha_desarrollado_diagnostico" type="radio" onChange={handleOnChangeRadioHaDesaDiagn}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Llevan a cabo tareas de I+D de forma sistemática o continuada?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="lleva_tareas" type="radio" onChange={handleOnChangeRadioLlevaTareas}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="lleva_tareas" type="radio" onChange={handleOnChangeRadioLlevaTareas}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="lleva_tareas" type="radio" onChange={handleOnChangeRadioLlevaTareas}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Ha desarrollado su empresa algún tipo de innovación durante los últimos años?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="ha_desarrollado_innovacion" type="radio" onChange={handleOnChangeRadioHaDesaInnov}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="ha_desarrollado_innovacion" type="radio" onChange={handleOnChangeRadioHaDesaInnov}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="ha_desarrollado_innovacion" type="radio" onChange={handleOnChangeRadioHaDesaInnov}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <p>Si la respuesta anterior es afirmativa…</p>
                {
                    tempForm.actividades?.length ? (
                        <div className="row">
                            <ActividadesList actividades={tempForm.actividades} removeCallback={handleRemoveActividad} />
                        </div>
                    ) : ''
                }
                <Textarea
                    s={12}
                    id="descripcion_actividad"
                    label="Descripción"
                    value={tempActividad.nombre}
                    onChange={handleOnChangeDescrAct}
                    data-length={200}
                    validate
                />
                <Select
                    id="area_actividad"
                    name="area_actividad"
                    s={12}
                    label="Área de la compañía"
                    onChange={handleOnChangeSelectAreaAct}
                >
                    <option value="" key={`area_vacioDefault_0`} disabled selected>
                        Escoja el área
                    </option>
                    {
                        areas.map(({ id, nombre }) => <option key={`area_{nombre}`} value={id}>{nombre}</option>)
                    }
                </Select>
                <div className="col s10 no-margin-bot">
                    <p>¿Se miden los resultados?</p>
                    <label className="col s3">
                        <input className="with-gap" value={true} name="mide_resultados" type="radio" onChange={handleOnChangeRadioMideResult}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s3">
                        <input className="with-gap" value={false} name="mide_resultados" type="radio" onChange={handleOnChangeRadioMideResult}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="mide_resultados" type="radio" onChange={handleOnChangeRadioMideResult}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="input-field col s2">
                    <Button
                        className="green right"
                        style={{ 'marginTop': '25px' }}
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        //waves="light"
                        disabled={!tempActividad.nombre.length}
                        onClick={handleAddActividad}
                        tooltip="Agregar innovacion"
                    />
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estarían interesados en implantar un sistema de vigilancia competitiva/tecnológica?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true}  name="interesado_vigilancia" type="radio" onChange={handleOnChangeRadioInteresVigil}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesado_vigilancia" type="radio" onChange={handleOnChangeRadioInteresVigil}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesado_vigilancia" type="radio" onChange={handleOnChangeRadioInteresVigil}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>¿Qué tipo de información podría ayudarle a mejorar su actividad?</p>
                    <p>
                        <label>
                            <input
                                id="tipo_sectorial"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoSect}
                            />
                            <span>Información sectorial</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_estudios"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoEst}
                            />
                            <span>Estudios de coyuntura económica</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_mercado"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoMerc}
                            />
                            <span>Información acerca del mercado laboral</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_clientes"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoClient}
                            />
                            <span>Información de clientes y proveedores</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_competencia"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoCompet}
                            />
                            <span>Información sobre la competencia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_tecnologia"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoTecn}
                            />
                            <span>Información sobre tecnología y patentes</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_ayudas"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoAyudas}
                            />
                            <span>Información sobre Ayudas y subvenciones existentes</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_normativas"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoNormat}
                            />
                            <span>Normativas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tipo_otras"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTipoOtras}
                            />
                            <span>Otras</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estarían interesados en implantar un sistema de gestión de la innovación que incluya herramientas como la vigilancia, la creatividad y la gestión de proyectos de innovación?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesado_gestion" type="radio" onChange={handleOnChangeRadioInteresaGest}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesado_gestion" type="radio" onChange={handleOnChangeRadioInteresaGest}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesado_gestion" type="radio" onChange={handleOnChangeRadioInteresaGest}/>
                        <span>NSNC</span>
                    </label>
                </div>
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
        </form>
    );
};

export default Page12BForm;
