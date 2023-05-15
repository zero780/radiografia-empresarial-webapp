import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage7E } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page07EForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        existe_actividad: '',
        que_actividades: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7E({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioExiste = e => {
        setTempForm({
            ...tempForm,
            existe_actividad: e.target.value,
        });
    };

    const handleOnChangeQueActividades= e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_actividades: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Responsabilidad Social Corporativa</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Existe algún tipo de actividad enmarcada en lo denominado como RSC?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_actividad" type="radio" onChange={handleOnChangeRadioExiste}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_actividad" type="radio" onChange={handleOnChangeRadioExiste}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_actividad" type="radio" onChange={handleOnChangeRadioExiste}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="que_actividades"
                    label="¿Qué tipo de actividades se han llevado a cabo?"
                    value={tempForm.que_actividades}
                    onChange={handleOnChangeQueActividades}
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

export default Page07EForm;
