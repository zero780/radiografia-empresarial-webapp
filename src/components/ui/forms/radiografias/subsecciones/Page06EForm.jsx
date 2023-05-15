import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage6E } from "../../../../../actions/radiografia/page06";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page06EForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        abrir_mercados_int: '',
        cuales_mercados_int: '',
        tipo_internacionalizacion: '',
        zona_sudamerica: false,
        zona_centroamerica: false,
        zona_caribe: false,
        zona_norteamerica: false,
        zona_europa: false,
        zona_africa: false,
        zona_asia: false,
        zona_oceania: false,
        cuales_paises: '',
        cuales_sectores: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6E({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioAbrirMercadosInt = e => {
        setTempForm({
            ...tempForm,
            abrir_mercados_int: e.target.value,
        });
    };

    const handleOnChangeCualesMercadosInt = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_mercados_int: e.target.value,
        });
    };

    const handleOnChangeRadioTipoIntern = e => {
        setTempForm({
            ...tempForm,
            tipo_internacionalizacion: e.target.value,
        });
    };

    const handleOnChangeCheckboxZonaSudamerica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_sudamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_sudamerica: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCentroAmerica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_centroamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_centroamerica: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCaribe = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_caribe: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_caribe: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaNorteAmerica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_norteamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_norteamerica: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaEuropa = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_europa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_europa: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAfrica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_africa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_africa: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAsia = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_asia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_asia: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaOceania= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_oceania: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_oceania: false,
            });
        }
    };

    const handleOnChangeCualesPaises = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_paises: e.target.value,
        });
    };

    const handleOnChangeCualesSectores = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_sectores: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Si se trata de una empresa no internacionalizada...</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estaría interesado en tener presencia o en abrir nuevos mercados internacionales?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="abrir_mercados_int" type="radio" onChange={handleOnChangeRadioAbrirMercadosInt}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="abrir_mercados_int" type="radio" onChange={handleOnChangeRadioAbrirMercadosInt}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="abrir_mercados_int" type="radio" onChange={handleOnChangeRadioAbrirMercadosInt}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="cuales_mercados_int"
                    name="cuales_mercados_int"
                    label="Indicar qué productos / servicios..."
                    value={tempForm.cuales_mercados_int}
                    onChange={handleOnChangeCualesMercadosInt}
                    data-length={200}
                    validate
                />
                <div className="input-field col s12">
                    <div className="row no-margin-bot">
                        <p>Si la respuesta es afirmativa… ¿Cuál es el tipo de internacionalización que desea alcanzar?</p>
                        <label className="col s12">
                            <input className="with-gap" value="int_exportacion" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Exportación</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="int_implantacion_comercial" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Implantación comercial</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="int_implantacion_productiva" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Implantación productiva</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="int_importacion" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Importación</span>
                        </label>
                    </div>
                    <div className="row no-margin-bot">
                        <p>Si la respuesta es afirmativa… ¿A alguna zona en particular?</p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_sudamerica"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaSudamerica}
                                />
                                <span>Sudamérica</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_centroamerica"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCentroAmerica}
                                />
                                <span>América central</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_caribe"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCaribe}
                                />
                                <span>Caribe</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_norteamerica"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaNorteAmerica}
                                />
                                <span>Norteamérica</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_europa"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaEuropa}
                                />
                                <span>Europa</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_africa"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAfrica}
                                />
                                <span>África</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_asia"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAsia}
                                />
                                <span>Asia</span>
                            </label>
                        </p>
                        <p className="input-field col s6">
                            <label>
                                <input
                                    id="zona_oceania"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaOceania}
                                />
                                <span>Oceanía</span>
                            </label>
                        </p>
                    </div>
                </div>
                <Textarea
                    s={12}
                    id="cuales_paises"
                    label="¿A algún país en concreto? Indicar por orden de prioridad."
                    value={tempForm.cuales_paises}
                    onChange={handleOnChangeCualesPaises}
                    data-length={200}
                    validate
                />
                <Textarea
                    s={12}
                    id="cuales_sectores"
                    label="¿A qué sectores o grupos de actividad le gustaría dirigirse?"
                    value={tempForm.cuales_sectores}
                    onChange={handleOnChangeCualesSectores}
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
        </form>
    );
};

export default Page06EForm;
