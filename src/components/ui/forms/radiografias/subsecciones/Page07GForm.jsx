import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage7G } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page07GForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        comunicacion_interna: false,
        seleccion_personal: false,
        gestion_competencias: false,
        evaluacion_formacion: false,
        evaluacion_desempeño: false,
        igualdad_oportunidades: false,
        descripcion_puestos: false,
        clima_laboral: false,
        competencia_liderazgo: false,
        otros: false,
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7G({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeCheckboxComInterna= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                comunicacion_interna: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                comunicacion_interna: false,
            });
        }
    };

    const handleOnChangeCheckboxSelecPersonal = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                seleccion_personal: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                seleccion_personal: false,
            });
        }
    };

    const handleOnChangeCheckboxGestionCompetencias = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                gestion_competencias: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                gestion_competencias: false,
            });
        }
    };

    const handleOnChangeCheckboxEvalFormacion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                evaluacion_formacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                evaluacion_formacion: false,
            });
        }
    };

    const handleOnChangeCheckboxEvalDesemp = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                evaluacion_desempeño: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                evaluacion_desempeño: false,
            });
        }
    };

    const handleOnChangeCheckboxIgualdOport= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                igualdad_oportunidades: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                igualdad_oportunidades: false,
            });
        }
    };

    const handleOnChangeCheckboxDescPuestos= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                descripcion_puestos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                descripcion_puestos: false,
            });
        }
    };

    const handleOnChangeCheckboxClimaLaboral = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                clima_laboral: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                clima_laboral: false,
            });
        }
    };

    const handleOnChangeCheckboxCompLiderazgo= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                competencia_liderazgo: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                competencia_liderazgo: false,
            });
        }
    };

    const handleOnChangeCheckboxOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                otros: false,
            });
        }
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Otros</h5>
                </div>
                <div className="row">
                    <p>¿Estaría interesado en desarrollar algún proyecto de capacitación relacionado con...?</p>
                    <p>
                        <label>
                            <input
                                id="comunicacion_interna"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComInterna}
                            />
                            <span>Comunicación interna</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="seleccion_personal"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxSelecPersonal}
                            />
                            <span>Selección de personal</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="gestion_competencias"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxGestionCompetencias}
                            />
                            <span>Gestión de competencias</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="evaluacion_formacion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEvalFormacion}
                            />
                            <span>Evaluación de la formación</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="evaluacion_desempeño"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxEvalDesemp}
                            />
                            <span>Evaluación del desempeño</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="igualdad_oportunidades"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxIgualdOport}
                            />
                            <span>Igualdad de oportunidades</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="descripcion_puestos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxDescPuestos}
                            />
                            <span>Descripción de puestos de trabajo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="clima_laboral"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxClimaLaboral}
                            />
                            <span>Clima laboral</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="competencia_liderazgo"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxCompLiderazgo}
                            />
                            <span>Competencias para el liderazgo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxOtros}
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
        </form>
    );
};

export default Page07GForm;
