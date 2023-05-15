import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage4C } from "../../../../../actions/radiografia/page04";
import { startAsyncGetSuministros } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page04CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { suministros } = useSelector(state => state.suministros);

    useEffect(() => {
        dispatch(startAsyncGetSuministros(token));
    }, []);

    //let suministros = [{ 'id': 1, 'nombre': 'Red' }, { 'id': 2, 'nombre': 'Captaciones Propias' }, { 'id': 3, 'nombre': 'Cisternas' }, { 'id': 4, 'nombre': 'Otros' }]

    //States
    const initialState = {
        necesidad: '',
        id_suministro_agua: '',
        hora_parada: '',
        necesidad_tratamiento: '',
        tipo_tratamiento: '',
        costo_tratamiento: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage4C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeNecesidad = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            necesidad: e.target.value,
        });
    };

    const handleOnChangeRadioSuministro = e => {
        setTempForm({
            ...tempForm,
            id_suministro_agua: e.target.value,
        });
    };

    const handleOnChangeHora = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            hora_parada: e.target.value,
        });
    };

    const handleOnChangeRadioTratamiento = e => {
        setTempForm({
            ...tempForm,
            necesidad_tratamiento: e.target.value,
        });
    };
    
    const handleOnChangeTipoTratamiento = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tipo_tratamiento: e.target.value,
        });
    };

    const handleOnChangeCostoTratamiento = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            costo_tratamiento: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Otras infraestructuras: Agua</h5>
                </div>
                <TextInput
                    s={12}
                    id="necesidad"
                    name="necesidad"
                    value={tempForm.necesidad}
                    onChange={handleOnChangeNecesidad}
                    label="Necesidades de suministro de agua (litros/día) ¿Cuántos litros de agua requiere al día?"
                    validate
                disabled={esAdmin || esSupervisor}
                />
                <div className="row no-margin-bot">
                    <p>Forma de suministro del agua</p>
                    {
                        suministros.map(({ id, nombre }) =>
                            <label className="col s12">
                                <input className="with-gap col s6" value={id} name="id_suministro_agua" type="radio" onChange={handleOnChangeRadioSuministro} disabled={esAdmin || esSupervisor} />
                                <span>{nombre}</span>
                            </label>
                        )
                    }
                </div>
                <TextInput
                    s={12}
                    id="hora_parada"
                    name="hora_parada"
                    value={tempForm.hora_parada}
                    onChange={handleOnChangeHora}
                    label="Calidad del suministro. (hora  parada por falta de suministro)"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <div className="row no-margin-bot">
                    <p>Necesidad de tratamiento en planta del agua para el proceso</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="necesidad_tratamiento" type="radio" onChange={handleOnChangeRadioTratamiento} disabled={esAdmin || esSupervisor} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="necesidad_tratamiento" type="radio" onChange={handleOnChangeRadioTratamiento} disabled={esAdmin || esSupervisor} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="necesidad_tratamiento" type="radio" onChange={handleOnChangeRadioTratamiento} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                </div>
                <TextInput
                    s={12}
                    id="tipo_tratamiento"
                    name="tipo_tratamiento"
                    value={tempForm.tipo_tratamiento}
                    onChange={handleOnChangeTipoTratamiento}
                    label="Tipo de tratamiento"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <TextInput
                    s={12}
                    id="costo_tratamiento"
                    name="costo_tratamiento"
                    value={tempForm.costo_tratamiento}
                    onChange={handleOnChangeCostoTratamiento}
                    label="¿Cuánto le cuesta a la empresa realizar el tratamiento de agua?"
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

export default Page04CForm;
