import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage6F } from "../../../../../actions/radiografia/page06";
import { startAsyncGetPaises } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page06FForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor}) => {

    //GET states
    const { token } = useAuth();

    const { paises } = useSelector(state => state.paises);

    useEffect(() => {
        dispatch(startAsyncGetPaises(token));
    }, []);

    //    let paises = [{ 'id': 1, 'nombre': 'Argentina' }, { 'id': 2, 'nombre': 'Alemania' }, { 'id': 3, 'nombre': 'Estonia' }]

    //Handles
    const initialState = {
        asisten_a_ferias: '',
        existe_interes: '',
        zona_interes_sudamerica: false,
        zona_interes_sudamerica_paises: [],
        zona_interes_centroamerica: false,
        zona_interes_centroamerica_paises: [],
        zona_interes_caribe: false,
        zona_interes_caribe_paises: [],
        zona_interes_norteamerica: false,
        zona_interes_norteamerica_paises: [],
        zona_interes_europa: false,
        zona_interes_europa_paises: [],
        zona_interes_africa: false,
        zona_interes_africa_paises: [],
        zona_interes_asia: false,
        zona_interes_asia_paises: [],
        zona_interes_oceania: false,
        zona_interes_oceania_paises: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6F({
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

    const handleOnChangeRadioAsistenFerias = e => {
        setTempForm({
            ...tempForm,
            asisten_a_ferias: e.target.value,
        });
    };

    const handleOnChangeRadioExisteInteres = e => {
        setTempForm({
            ...tempForm,
            existe_interes: e.target.value,
        });
    };

    //zona sudamerica
    const handleOnChangeCheckboxZonaSudamerica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_sudamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_sudamerica: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaSudamerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_sudamerica_paises')
        setTempForm({
            ...tempForm,
            zona_interes_sudamerica_paises: selectedOptions,
        });
    };

    //zona centroamerica
    const handleOnChangeCheckboxZonaCentroAmerica= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_centroamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_centroamerica: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaCentroAmerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_centroamerica_paises')
        setTempForm({
            ...tempForm,
            zona_interes_centroamerica_paises: selectedOptions,
        });
    };

    //zona caribe
    const handleOnChangeCheckboxZonaCaribe = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_caribe: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_caribe: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaCaribe = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_caribe_paises')
        setTempForm({
            ...tempForm,
            zona_interes_caribe_paises: selectedOptions,
        });
    };

    //zona norteamerica
    const handleOnChangeCheckboxZonaNorteAmerica = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_norteamerica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_norteamerica: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaNorteAmerica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_norteamerica_paises')
        setTempForm({
            ...tempForm,
            zona_interes_norteamerica_paises: selectedOptions,
        });
    };

    //zona europa
    const handleOnChangeCheckboxZonaEuropa = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_europa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_europa: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaEuropa = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_europa_paises')
        setTempForm({
            ...tempForm,
            zona_interes_europa_paises: selectedOptions,
        });
    };

    //zona africa
    const handleOnChangeCheckboxZonaAfrica= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_africa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_africa: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaAfrica = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_africa_paises')
        setTempForm({
            ...tempForm,
            zona_interes_africa_paises: selectedOptions,
        });
    };

    //zona asia
    const handleOnChangeCheckboxZonaAsia = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_asia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_asia: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaAsia = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_asia_paises')
        setTempForm({
            ...tempForm,
            zona_interes_asia_paises: selectedOptions,
        });
    };

    //zona oceania
    const handleOnChangeCheckboxZonaOceania = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_interes_oceania: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_interes_oceania: false,
            });
        }
    };

    const handleChangeSelectPaisesZonaOceania = e => {
        let selectedOptions = getOptionsFromMultipleSelect('zona_oceania_paises')
        setTempForm({
            ...tempForm,
            zona_interes_oceania_paises: selectedOptions,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Ferias, convenciones y misiones comerciales </h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Asisten a ferias o convenciones internacionales?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="asisten_a_ferias" type="radio" onChange={handleOnChangeRadioAsistenFerias}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="asisten_a_ferias" type="radio" onChange={handleOnChangeRadioAsistenFerias}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="asisten_a_ferias" type="radio" onChange={handleOnChangeRadioAsistenFerias}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Existe interés en acudir a este tipo de eventos?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres}/>
                        <span>NSNC</span>
                    </label>
                </div>
            </div>
            <div className="row no-margin-bot">
                <p>Si la respuesta es afirmativa… ¿Qué destinos son de su interés?</p>
                <p>
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
                <p>
                    <label>
                        <input
                            id="zona_centroamerica"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaCentroAmerica}
                        />
                        <span>América Central</span>
                    </label>
                </p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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
                <p>
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

export default Page06FForm;
