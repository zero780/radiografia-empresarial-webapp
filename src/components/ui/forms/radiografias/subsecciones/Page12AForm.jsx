import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage12A } from "../../../../../actions/radiografia/page12";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ActividadesList from "../../../../screens/radiografia/actividades/ActividadesList";

const Page12AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    let areas = [{ 'id': '1', 'nombre': 'Informática y SI (TIC)' }, { 'id': '2', 'nombre': 'Producción y Desarrollo (PYD)' }, { 'id': '3', 'nombre': 'Recursos Humanos (RRHH)' }, { 'id': '4', 'nombre': 'Administración (AD)' }, { 'id': '5', 'nombre': 'Dirección y Estrategia (DYE)' }, { 'id': '6', 'nombre': 'I+D+i (IDI)' }, { 'id': '7', 'nombre': 'Compras (CMP)' }, { 'id': '8', 'nombre': 'Marketing, Comunicación y Promoción (MKT)' }, { 'id': '9', 'nombre': 'Logística (L)' }, { 'id': '10', 'nombre': 'Comercialización y Mercado (CM)' }, { 'id': '11', 'nombre': 'Calidad, prevención y medioambiente (CPM)' }, { 'id': '12', 'nombre': 'Otros(O)' }]

    const initialStateActividad = {
        nombre: '',
        id_area_actividad: '',
        mide_resultados: '',
    };

    const [tempActividad, setTempActividad] = useState(initialStateActividad);

    const initialState = {
        tiene_consideracion: '',
        realiza_actividad: '',
        actividades: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage12A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioTieneConsid= e => {
        setTempForm({
            ...tempForm,
            tiene_consideracion: e.target.value,
        });
    };

    const handleOnChangeRadioRealizaAct = e => {
        setTempForm({
            ...tempForm,
            realiza_actividad: e.target.value,
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

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Situación actual de la empresa</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿La empresa tiene en consideración la innovación en su estrategia?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_consideracion" type="radio" onChange={handleOnChangeRadioTieneConsid}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_consideracion" type="radio" onChange={handleOnChangeRadioTieneConsid}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_consideracion" type="radio" onChange={handleOnChangeRadioTieneConsid}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Llevan a cabo algún tipo de actividad para la detección de amenazas y oportunidades de negocio, establecer mejoras e impulsar y apoyar la gestión de su innovación?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="realiza_actividad" type="radio" onChange={handleOnChangeRadioRealizaAct}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="realiza_actividad" type="radio" onChange={handleOnChangeRadioRealizaAct}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="realiza_actividad" type="radio" onChange={handleOnChangeRadioRealizaAct}/>
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
                        disabled={!tempActividad.nombre}
                        onClick={handleAddActividad}
                        tooltip="Agregar actividad"
                    />
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

export default Page12AForm;
