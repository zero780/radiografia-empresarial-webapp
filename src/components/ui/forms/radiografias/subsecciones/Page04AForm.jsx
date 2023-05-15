import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage4A } from "../../../../../actions/radiografia/page04";
import { startAsyncGetFrecuencias } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import MediosTransporteList from "../../../../screens/radiografia/medios/MediosTransporteList";

const Page04AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { frecuencias } = useSelector(state => state.frecuencias);

    useEffect(() => {
        dispatch(startAsyncGetFrecuencias(token));
    }, []);

    //let frecuencias = [{ 'id': 1, 'nombre': 'Diario' }, { 'id': 2, 'nombre': 'Semanal' }, { 'id': 3, 'nombre': 'Mensual' }, { 'id': 4, 'nombre': 'Anual' }, { 'id': 5, 'nombre': 'Otro' }]

    // States
    const initialStateTransporte = {
        transporte: '',
        id_frecuencia: '',
        necesario_agrupar: '',
        fiabilidad: '',
    };

    const [tempTransporte, setTempTransporte] = useState(initialStateTransporte);

    const initialState = {
        tam_despachos: '',
        id_frecuencia_despachos: '',
        tam_recepciones: '',
        id_frecuencia_recepciones: '',
        medios_transporte: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage4A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeTamDespacho = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tam_despachos: e.target.value,
        });
    };

    const handleOnChangeTamRecepciones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tam_recepciones: e.target.value,
        });
    };

    const handleOnChangeRadioFrecDespachos = e => {
        setTempForm({
            ...tempForm,
            id_frecuencia_despachos: e.target.value,
        });
    };

    const handleOnChangeRadioFrecRecepciones = e => {
        setTempForm({
            ...tempForm,
            id_frecuencia_recepciones: e.target.value,
        });
    };

    //transporte
    const handleOnChangeTransporte = e => {
        e.preventDefault();
        setTempTransporte({
            ...tempTransporte,
            transporte: e.target.value,
        });
    };

    const handleOnChangeRadioFrecuencias = e => {
        setTempTransporte({
            ...tempTransporte,
            id_frecuencia: e.target.value,
        });
    };

    const handleOnChangeRadioNecAgrupar = e => {
        setTempTransporte({
            ...tempTransporte,
            necesario_agrupar: e.target.value,
        });
    };

    const handleOnChangeFiabilidad = e => {
        setTempTransporte({
            ...tempTransporte,
            fiabilidad: e.target.value,
        });
    };


    const handleAddMedioTransporte = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            medios_transporte: [
                ...tempForm.medios_transporte,
                {
                    ...tempTransporte,
                },
            ],
        });

        setTempTransporte({
            transporte: '',
            id_frecuencia: '',
            necesario_agrupar: '',
            fiabilidad: '',
        });

        cleanRadiosCheckbox('id_frecuencia');
        cleanRadiosCheckbox('necesario_agrupar');
    }

    const handleRemoveTransporte = nombre => {
        setTempForm({
            ...tempForm,
            medios_transporte: tempForm.medios_transporte?.filter(function (medio) {
                return medio.transporte !== nombre;
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
                    <h5 className="more-text">Necesidades Logísticas</h5>
                </div>
                <TextInput
                    s={12}
                    id="tam_despachos"
                    name="tam_despachos"
                    value={tempForm.tam_despachos}
                    onChange={handleOnChangeTamDespacho}
                    label="Tamaño medio de los despachos de productos terminados? (m3/ kg)"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <div className="row no-margin-bot">
                    <p>Frecuencia de los despachos de producto terminado</p>
                    {
                        frecuencias.map(({ id, nombre }) =>
                            <label className="col s6">
                                <input className="with-gap" value={id} name="id_frecuencia_despachos" type="radio" onChange={handleOnChangeRadioFrecDespachos} disabled={esAdmin || esSupervisor} />
                                <span>{nombre}</span>
                            </label>
                        )
                    }
                </div>
                <TextInput
                    s={12}
                    id="tam_recepciones"
                    name="tam_recepciones"
                    value={tempForm.tam_recepciones}
                    onChange={handleOnChangeTamRecepciones}
                    label="Tamaño medio de las recepciones (m3/ kg)"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <div className="row no-margin-bot">
                    <p>Frecuencia de las recepciones</p>
                    {
                        frecuencias.map(({ id, nombre }) =>
                            <label className="col s6">
                                <input className="with-gap" value={id} name="id_frecuencia_recepciones" type="radio" onChange={handleOnChangeRadioFrecRecepciones} disabled={esAdmin || esSupervisor} />
                                <span>{nombre}</span>
                            </label>
                        )
                    }
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">Medios de transporte</h5>
                </div>
                {
                    tempForm.medios_transporte?.length ? (
                        <div className="row">
                            <MediosTransporteList medios={tempForm.medios_transporte} removeCallback={handleRemoveTransporte} />
                        </div>
                    ) : ''
                }
                {
                    (!esAdmin && !esSupervisor) ? (
                        <div className="row">
                            <TextInput
                                s={12}
                                id="transporte"
                                name="transporte"
                                value={tempTransporte.transporte}
                                onChange={handleOnChangeTransporte}
                                label="Medio de transporte disponible"
                                validate
                            //disabled={disabled}
                            />
                            <div className="row no-margin-bot">
                                <p>Periodicidad de contratación del servicio de transporte</p>
                                {
                                    frecuencias.map(({ id, nombre }) =>
                                        <label className="col s6">
                                            <input className="with-gap" value={id} name="id_frecuencia" type="radio" onChange={handleOnChangeRadioFrecuencias} />
                                            <span>{nombre}</span>
                                        </label>
                                    )
                                }
                            </div>
                            <div className="row no-margin-bot">
                                <p>¿Es necesario agrupar con otras cargas?</p>
                                <label className="col s4">
                                    <input className="with-gap" value={true} name="necesario_agrupar" type="radio" onChange={handleOnChangeRadioNecAgrupar} />
                                    <span>Sí</span>
                                </label>
                                <label className="col s4">
                                    <input className="with-gap" value={false} name="necesario_agrupar" type="radio" onChange={handleOnChangeRadioNecAgrupar} />
                                    <span>No</span>
                                </label>
                                <label className="col s4">
                                    <input className="with-gap" value="" name="necesario_agrupar" type="radio" onChange={handleOnChangeRadioNecAgrupar} />
                                    <span>NSNC</span>
                                </label>
                            </div>
                            <TextInput
                                s={10}
                                id="fiabilidad"
                                name="fiabilidad"
                                value={tempTransporte.fiabilidad}
                                onChange={handleOnChangeFiabilidad}
                                label="% de fiabilidad del medio de transporte"
                                validate
                            //disabled={disabled}
                            />
                            <div className="input-field col s2">
                                <Button
                                    className="green right"
                                    style={{ 'marginTop': '25px' }}
                                    floating
                                    icon={<Icon>add</Icon>}
                                    small
                                    node="button"
                                    //waves="light"
                                    disabled={!tempTransporte.transporte.length}
                                    onClick={handleAddMedioTransporte}
                                    tooltip="Agregar medio"
                                />
                            </div>
                            </div>
                    ) : ''
                }
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

export default Page04AForm;
