import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage7C } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page07CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        tiene_plan_equidad: '',
        realizo_diagnostico: '',
        tiene_en_consideracion: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioTienePlan = e => {
        setTempForm({
            ...tempForm,
            tiene_plan_equidad: e.target.value,
        });
    };

    const handleOnChangeRadioDiagnostico = e => {
        setTempForm({
            ...tempForm,
            realizo_diagnostico: e.target.value,
        });
    };

    const handleOnChangeRadioConsideracion = e => {
        setTempForm({
            ...tempForm,
            tiene_en_consideracion: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Igualdad y conciliación</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Disponen de un plan de equidad de género? SI RESPONDE QUE NO CONTINÚE CASO CONTRARIO SALTE A (d)</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_plan_equidad" type="radio" onChange={handleOnChangeRadioTienePlan}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_plan_equidad" type="radio" onChange={handleOnChangeRadioTienePlan}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_plan_equidad" type="radio" onChange={handleOnChangeRadioTienePlan}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si responde que no: ¿Han realizado algún diagnóstico de equidad de género?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="realizo_diagnostico" type="radio" onChange={handleOnChangeRadioDiagnostico}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="realizo_diagnostico" type="radio" onChange={handleOnChangeRadioDiagnostico}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="realizo_diagnostico" type="radio" onChange={handleOnChangeRadioDiagnostico}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si responde que no: ¿Tiene en consideración la igualdad de género en la misión, visión o políticas de la empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_en_consideracion" type="radio" onChange={handleOnChangeRadioConsideracion}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_en_consideracion" type="radio" onChange={handleOnChangeRadioConsideracion}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_en_consideracion" type="radio" onChange={handleOnChangeRadioConsideracion} />
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
        </form >
    );
};

export default Page07CForm;
