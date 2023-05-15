import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage6C } from "../../../../../actions/radiografia/page06";
import { startAsyncGetPaises } from "../../../../../actions/crud/utils";

// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page06CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor  }) => {

    //GET states
    const { token } = useAuth();

    const { paises } = useSelector(state => state.paises);

    useEffect(() => {
        dispatch(startAsyncGetPaises(token));
    }, []);

    //let paises = [{ 'id': 1, 'nombre': 'Argentina' }, { 'id': 2, 'nombre': 'Alemania' }, { 'id': 3, 'nombre': 'Estonia' }]

    //Handles
    const initialState = {
        zona_sudamerica_paises: [],
        zona_sudamerica_implantacion_productiva: false,
        zona_sudamerica_implantacion_comercial: false,
        zona_sudamerica_exportacion: false,
        zona_sudamerica_importacion: false,
        zona_centroamerica_paises: [],
        zona_centroamerica_implantacion_productiva: false,
        zona_centroamerica_implantacion_comercial: false,
        zona_centroamerica_exportacion: false,
        zona_centroamerica_importacion: false,
        zona_caribe_paises: [],
        zona_caribe_implantacion_productiva: false,
        zona_caribe_implantacion_comercial: false,
        zona_caribe_exportacion: false,
        zona_caribe_importacion: false,
        zona_norteamerica_paises: [],
        zona_norteamerica_implantacion_productiva: false,
        zona_norteamerica_implantacion_comercial: false,
        zona_norteamerica_exportacion: false,
        zona_norteamerica_importacion: false,
        zona_europa_paises: [],
        zona_europa_implantacion_productiva: false,
        zona_europa_implantacion_comercial: false,
        zona_europa_exportacion: false,
        zona_europa_importacion: false,
        zona_africa_paises: [],
        zona_africa_implantacion_productiva: false,
        zona_africa_implantacion_comercial: false,
        zona_africa_exportacion: false,
        zona_africa_importacion: false,
        zona_asia_paises: [],
        zona_asia_implantacion_productiva: false,
        zona_asia_implantacion_comercial: false,
        zona_asia_exportacion: false,
        zona_asia_importacion: false,
        zona_oceania_paises: [],
        zona_oceania_implantacion_productiva: false,
        zona_oceania_implantacion_comercial: false,
        zona_oceania_exportacion: false,
        zona_oceania_importacion: false,
        tipo_estrategia: '',
        cuales_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const getOptionsFromMultipleSelect = idSelect => {
        var options = document.getElementById(idSelect).selectedOptions;
        var values = Array.from(options).map(({ value }) => value);
        return values;
    }

    //zona sudamerica
    const handleChangeSelectPaisesZonaSudamerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_sudamerica_paises')
        setTempForm({
            ...tempForm,
            zona_sudamerica_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaSudamericaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_sudamerica_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_sudamerica_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaSudamericaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_sudamerica_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_sudamerica_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaSudamericaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_sudamerica_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_sudamerica_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaSudamericaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_sudamerica_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_sudamerica_importacion: false,
            });
        }
    };

    //zona centroamerica
    const handleChangeSelectPaisesZonaCentroAmerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_centroamerica_paises')
        setTempForm({
            ...tempForm,
            zona_centroamerica_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaCentroAmericaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_centroamerica_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_centroamerica_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCentroAmericaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_centroamerica_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_centroamerica_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCentroAmericaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_centroamerica_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_centroamerica_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCentroAmericaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_centroamerica_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_centroamerica_importacion: false,
            });
        }
    };

    //zona caribe
    const handleChangeSelectPaisesZonaCaribe = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_caribe_paises')
        setTempForm({
            ...tempForm,
            zona_caribe_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaCaribeImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_caribe_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_caribe_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCaribeImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_caribe_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_caribe_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCaribeExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_caribe_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_caribe_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCaribeImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_caribe_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_caribe_importacion: false,
            });
        }
    };

    //zona norteamerica
    const handleChangeSelectPaisesZonaNorteAmerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_norteamerica_paises')
        setTempForm({
            ...tempForm,
            zona_norteamerica_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaNorteAmericaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_norteamerica_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_norteamerica_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaNorteAmericaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_norteamerica_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_norteamerica_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaNorteAmericaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_norteamerica_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_norteamerica_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaNorteAmericaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_norteamerica_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_norteamerica_importacion: false,
            });
        }
    };

    //zona europa
    const handleChangeSelectPaisesZonaEuropa = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_europa_paises')
        setTempForm({
            ...tempForm,
            zona_europa_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaEuropaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_europa_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_europa_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaEuropaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_europa_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_europa_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaEuropaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_europa_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_europa_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaEuropaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_europa_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_europa_importacion: false,
            });
        }
    };

    //zona africa
    const handleChangeSelectPaisesZonaAfrica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_africa_paises')
        setTempForm({
            ...tempForm,
            zona_africa_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaAfricaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_africa_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_africa_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAfricaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_africa_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_africa_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAfricaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_africa_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_africa_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAfricaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_africa_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_africa_importacion: false,
            });
        }
    };

    //zona asia
    const handleChangeSelectPaisesZonaAsia = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_asia_paises')
        setTempForm({
            ...tempForm,
            zona_asia_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaAsiaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_asia_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_asia_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAsiaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_asia_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_asia_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAsiaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_asia_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_asia_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaAsiaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_asia_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_asia_importacion: false,
            });
        }
    };

    //zona oceania
    const handleChangeSelectPaisesZonaOceania = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_oceania_paises')
        setTempForm({
            ...tempForm,
            zona_oceania_paises: selectedOptions,
        });
    };

    const handleOnChangeCheckboxZonaOceaniaImplProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_oceania_implantacion_productiva: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_oceania_implantacion_productiva: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaOceaniaImplComer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_oceania_implantacion_comercial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_oceania_implantacion_comercial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaOceaniaExport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_oceania_exportacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_oceania_exportacion: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaOceaniaImport = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_oceania_importacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_oceania_importacion: false,
            });
        }
    };

    //otros
    const handleOnChangeRadioTipoEstrategia = e => {
        setTempForm({
            ...tempForm,
            tipo_estrategia: e.target.value,
        });
    };

    const handleOnChangeCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_otros: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">¿A qué lugares usted exporta?</h5>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Sudamérica</p>
                    <Select
                        id="zona_sudamerica_paises"
                        name="zona_sudamerica_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaSudamerica}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_sudamerica_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_sudamerica_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaSudamericaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_sudamerica_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaSudamericaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_sudamerica_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaSudamericaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_sudamerica_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaSudamericaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> América Central</p>
                    <Select
                        id="zona_centroamerica_paises"
                        name="zona_centroamerica_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaCentroAmerica}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_centroamerica_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_centroamerica_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCentroAmericaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_centroamerica_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCentroAmericaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_centroamerica_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCentroAmericaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_centroamerica_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCentroAmericaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Caribe</p>
                    <Select
                        id="zona_caribe_paises"
                        name="zona_caribe_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaCaribe}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_caribe_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_caribe_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCaribeImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_caribe_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCaribeImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_caribe_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCaribeExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_caribe_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaCaribeImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Norteamérica</p>
                    <Select
                        id="zona_norteamerica_paises"
                        name="zona_norteamerica_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaNorteAmerica}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_norteamerica_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_norteamerica_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaNorteAmericaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_norteamerica_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaNorteAmericaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_norteamerica_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaNorteAmericaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_norteamerica_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaNorteAmericaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Europa</p>
                    <Select
                        id="zona_europa_paises"
                        name="zona_europa_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaEuropa}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_europa_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_europa_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaEuropaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_europa_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaEuropaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_europa_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaEuropaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_europa_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaEuropaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> África</p>
                    <Select
                        id="zona_africa_paises"
                        name="zona_africa_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaAfrica}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_africa_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_africa_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAfricaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_africa_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAfricaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_africa_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAfricaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_africa_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAfricaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Asia</p>
                    <Select
                        id="zona_asia_paises"
                        name="zona_asia_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaAsia}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_asia_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_asia_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAsiaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_asia_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAsiaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_asia_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAsiaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_asia_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaAsiaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p><b>Destino:</b> Oceanía</p>
                    <Select
                        id="zona_oceania_paises"
                        name="zona_oceania_paises"
                        s={12}
                        label="Países concretos"
                        onChange={handleChangeSelectPaisesZonaOceania}
                        multiple
                    >
                        {
                            paises.map(({ id, nombre }) => <option key={`zona_oceania_id_pais_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <div className="input-field col s12">
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_oceania_implantacion_productiva"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaOceaniaImplProd}
                                />
                                <span>Implantación productiva</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_oceania_implantacion_comercial"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaOceaniaImplComer}
                                />
                                <span>Implantación comercial</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_oceania_exportacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaOceaniaExport}
                                />
                                <span>Exportacion</span>
                            </label>
                        </p>
                        <p className="col s6">
                            <label>
                                <input
                                    id="zona_oceania_importacion"
                                    value={true}
                                    type="checkbox"
                                //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                    onChange={handleOnChangeCheckboxZonaOceaniaImport}
                                />
                                <span>Importacion</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="input-field col s12">
                    <div className="row no-margin-bot">
                        <p>¿Cuál es su estrategia comercial en el exterior?</p>
                        <label className="col s12">
                            <input className="with-gap" value="estrategia_directo" name="tipo_estrategia" type="radio" onChange={handleOnChangeRadioTipoEstrategia}/>
                            <span>Directo al cliente final</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="estrategia_distribuidores" name="tipo_estrategia" type="radio" onChange={handleOnChangeRadioTipoEstrategia} />
                            <span>Distribuidores</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="estrategia_comision" name="tipo_estrategia" type="radio" onChange={handleOnChangeRadioTipoEstrategia} />
                            <span>Agente comisionista</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="estrategia_otros" name="tipo_estrategia" type="radio" onChange={handleOnChangeRadioTipoEstrategia} />
                            <span>Otros</span>
                        </label>
                    </div>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="cuales_otros"
                    label="Indicar..."
                    value={tempForm.cuales_otros}
                    onChange={handleOnChangeCualesOtros}
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

export default Page06CForm;
