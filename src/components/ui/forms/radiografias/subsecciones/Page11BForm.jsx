import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage11B } from "../../../../../actions/radiografia/page11";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page11AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        tiene_previsto: '',
        inversion_tecnologia: false,
        inversion_recursos: false,
        inversion_maquinaria: false,
        inversion_marketing: false,
        inversion_i_d: false,
        inversion_seguridad: false,
        inversion_instalaciones: false,
        inversion_locales: false,
        inversion_otras: false,
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage11B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioTienePrev = e => {
        setTempForm({
            ...tempForm,
            tiene_previsto: e.target.value,
        });
    };

    const handleOnChangeCheckboxInvTecn = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_tecnologia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_tecnologia: false,
            });
        }
    };

    const handleOnChangeCheckboxInvRecur = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_recursos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_recursos: false,
            });
        }
    };

    const handleOnChangeCheckboxInvMaquin = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_maquinaria: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_maquinaria: false,
            });
        }
    };

    const handleOnChangeCheckboxInvMkt = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_marketing: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_marketing: false,
            });
        }
    };

    const handleOnChangeCheckboxInvID = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_i_d: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_i_d: false,
            });
        }
    };

    const handleOnChangeCheckboxInvSeg = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_seguridad: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_seguridad: false,
            });
        }
    };

    const handleOnChangeCheckboxInvInstal = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_instalaciones: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_instalaciones: false,
            });
        }
    };

    const handleOnChangeCheckboxInvLocales = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_locales: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_locales: false,
            });
        }
    };

    const handleOnChangeCheckboxInvOtras = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inversion_otras: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inversion_otras: false,
            });
        }
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Inversiones previstas</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Tiene previsto realizar inversiones en los próximos 3 años?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_previsto" type="radio" onChange={handleOnChangeRadioTienePrev}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_previsto" type="radio" onChange={handleOnChangeRadioTienePrev}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_previsto" type="radio" onChange={handleOnChangeRadioTienePrev}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta anterior es afirmativa…¿Qué tipo de inversiones?</p>
                    <p>
                        <label>
                            <input
                                id="inversion_tecnologia"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvTecn}
                            />
                            <span>Nuevas tecnologías</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_recursos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvRecur}
                            />
                            <span>Recursos humanos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_maquinaria"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvMaquin}
                            />
                            <span>Maquinaria</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_marketing"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvMkt}
                            />
                            <span>Promoción y marketing</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_i_d"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvID}
                            />
                            <span>I+D</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_seguridad"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvSeg}
                            />
                            <span>Seguridad e higiene</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_instalaciones"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvInstal}
                            />
                            <span>Instalaciones</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_locales"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvLocales}
                            />
                            <span>Locales y reformas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inversion_otras"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInvOtras}
                            />
                            <span>Otras</span>
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

export default Page11AForm;
