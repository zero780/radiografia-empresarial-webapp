import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage12C } from "../../../../../actions/radiografia/page12";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page12CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        interesado_asesoramiento: '',
        actividad_compras: false,
        actividad_proveedores: false,
        actividad_stocks: false,
        actividad_almacen: false,
        actividad_logistica: false,
        actividad_ases_otros: false,
        interesado_proyecto: '',
        actividad_metodologia: false,
        actividad_reduccion: false,
        actividad_mantenimiento: false,
        actividad_automantenimiento: false,
        actividad_efic_otros: false,
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage12C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //asesoramiento
    const handleOnChangeRadioInteresAses = e => {
        setTempForm({
            ...tempForm,
            interesado_asesoramiento: e.target.value,
        });
    };

    const handleOnChangeCheckboxActCompras = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_compras: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_compras: false,
            });
        }
    };

    const handleOnChangeCheckboxActProveed = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_proveedores: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_proveedores: false,
            });
        }
    };

    const handleOnChangeCheckboxActStocks = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_stocks: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_stocks: false,
            });
        }
    };

    const handleOnChangeCheckboxActAlmacen = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_almacen: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_almacen: false,
            });
        }
    };

    const handleOnChangeCheckboxActLogist = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_logistica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_logistica: false,
            });
        }
    };

    const handleOnChangeCheckboxActAsesOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_ases_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_ases_otros: false,
            });
        }
    };

    //eficiencia productiva
    const handleOnChangeRadioInteresProy = e => {
        setTempForm({
            ...tempForm,
            interesado_proyecto: e.target.value,
        });
    };

    const handleOnChangeCheckboxActMetod = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_metodologia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_metodologia: false,
            });
        }
    };

    const handleOnChangeCheckboxActReduccion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_reduccion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_reduccion: false,
            });
        }
    };

    const handleOnChangeCheckboxActManten = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_mantenimiento: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_mantenimiento: false,
            });
        }
    };

    const handleOnChangeCheckboxActAutoManten = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_automantenimiento: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_automantenimiento: false,
            });
        }
    };

    const handleOnChangeCheckboxActEficOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                actividad_efic_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                actividad_efic_otros: false,
            });
        }
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Logística y producción</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>Estaría interesado en recibir asesoramiento para realizar mejoras en algunos o todos los aspectos de su Logística?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesado_asesoramiento" type="radio" onChange={handleOnChangeRadioInteresAses}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesado_asesoramiento" type="radio" onChange={handleOnChangeRadioInteresAses}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesado_asesoramiento" type="radio" onChange={handleOnChangeRadioInteresAses}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta es afirmativa: ¿Para qué actividades?</p>
                    <p>
                        <label>
                            <input
                                id="actividad_compras"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActCompras}
                            />
                            <span>Compras y aprovisionamientos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_proveedores"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActProveed}
                            />
                            <span>Evaluación de Proveedores</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_stocks"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActStocks}
                            />
                            <span>Gestión de Stocks</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_almacen"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActAlmacen}
                            />
                            <span>Gestión de Almacén</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_logistica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActLogist}
                            />
                            <span>Logística Integral</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_ases_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActAsesOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estaría interesado en implantar algún tipo de proyecto que mejore la eficiencia productiva de su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesado_proyecto" type="radio" onChange={handleOnChangeRadioInteresProy}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesado_proyecto" type="radio" onChange={handleOnChangeRadioInteresProy} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesado_proyecto" type="radio" onChange={handleOnChangeRadioInteresProy}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta es afirmativa: ¿Para qué actividades?</p>
                    <p>
                        <label>
                            <input
                                id="actividad_metodologia"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActMetod}
                            />
                            <span>Metodología 5S</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_reduccion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActReduccion}
                            />
                            <span>Reducción de tiempos de cambios SMED</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_mantenimiento"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActManten}
                            />
                            <span>Gestión del mantenimiento - TPM</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_automantenimiento"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActAutoManten}
                            />
                            <span>Automantenimiento</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="actividad_efic_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxActEficOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
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
        </form >
    );
};

export default Page12CForm;
