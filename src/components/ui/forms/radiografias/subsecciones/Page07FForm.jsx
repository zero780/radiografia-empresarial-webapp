import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage7F } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page07FForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        esta_interesado: '',
        lleva_actividades: '',
        valora_learning: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7F({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioEstaInteres = e => {
        setTempForm({
            ...tempForm,
            esta_interesado: e.target.value,
        });
    };

    const handleOnChangeRadioLlevaActiv = e => {
        setTempForm({
            ...tempForm,
            lleva_actividades: e.target.value,
        });
    };

    const handleOnChangeRadioValoraELearning = e => {
        setTempForm({
            ...tempForm,
            valora_learning: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Formación</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estaría interesado en realizar un Diagnóstico de Necesidades Formativas en su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Llevan a cabo actividades formativas con cierta periodicidad?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="lleva_actividades" type="radio" onChange={handleOnChangeRadioLlevaActiv}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="lleva_actividades" type="radio" onChange={handleOnChangeRadioLlevaActiv}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="lleva_actividades" type="radio" onChange={handleOnChangeRadioLlevaActiv}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Valora el e-learning como una alternativa de formación útil para su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraELearning}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraELearning}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraELearning}/>
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

export default Page07FForm;
