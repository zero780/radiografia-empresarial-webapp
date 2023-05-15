import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage4D } from "../../../../../actions/radiografia/page04";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page04DForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        existe_alcantarillado: '',
        necesidad_depurar: '',
        condiciones_vertido: '',
        como_evacuacion: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage4D({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioAlcantarillado = e => {
        setTempForm({
            ...tempForm,
            existe_alcantarillado: e.target.value,
        });
    };

    const handleOnChangeRadioNecesidad= e => {
        setTempForm({
            ...tempForm,
            necesidad_depurar: e.target.value,
        });
    };

    const handleOnChangeCondiciones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            condiciones_vertido: e.target.value,
        });
    };

    const handleOnChangeEvacuacion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            como_evacuacion: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Otras infraestructuras: Alcantarillado</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>Existe red de alcantarillado</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_alcantarillado" type="radio" onChange={handleOnChangeRadioAlcantarillado} disabled={esAdmin || esSupervisor} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_alcantarillado" type="radio" onChange={handleOnChangeRadioAlcantarillado} disabled={esAdmin || esSupervisor} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_alcantarillado" type="radio" onChange={handleOnChangeRadioAlcantarillado} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Es necesario depurar en planta</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="necesidad_depurar" type="radio" onChange={handleOnChangeRadioNecesidad} disabled={esAdmin || esSupervisor} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="necesidad_depurar" type="radio" onChange={handleOnChangeRadioNecesidad} disabled={esAdmin || esSupervisor} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="necesidad_depurar" type="radio" onChange={handleOnChangeRadioNecesidad} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="condiciones_vertido"
                    label="Condiciones para el vertido"
                    value={tempForm.condiciones_vertido}
                    onChange={handleOnChangeCondiciones}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    s={12}
                    id="como_evacuacion"
                    label="Si no existiera alcantarillado, ¿cómo realizarían la evacuación de los residuos?"
                    value={tempForm.como_evacuacion}
                    onChange={handleOnChangeEvacuacion}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
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

export default Page04DForm;
