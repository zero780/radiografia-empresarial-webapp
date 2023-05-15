import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage7A } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page07AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        n_nomina_total: '',
        n_hombres: '',
        n_mujeres: '',
        edad_media_nomina: '',
        tiene_plan: '',
        tiene_necesidad: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeNumTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            n_nomina_total: e.target.value,
        });
    };

    const handleOnChangeNumHombres = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            n_hombres: e.target.value,
        });
    };

    const handleOnChangeNumMujeres = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            n_mujeres: e.target.value,
        });
    };

    const handleOnChangeEdadMedia = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            edad_media_nomina: e.target.value,
        });
    };

    const handleOnChangeRadioPlan= e => {
        setTempForm({
            ...tempForm,
            tiene_plan: e.target.value,
        });
    };

    const handleOnChangeRadioNecesidad = e => {
        setTempForm({
            ...tempForm,
            tiene_necesidad: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Configuración de la plantilla (NÓMINA)</h5>
                </div>
                <TextInput
                    icon={<Icon>groups</Icon>}
                    s={12}
                    id="n_nomina_total"
                    name="n_nomina_total"
                    value={tempForm.n_nomina_total}
                    onChange={handleOnChangeNumTotal}
                    label="Nómina total estable"
                    type="number"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    icon={<Icon>groups</Icon>}
                    s={12}
                    id="n_hombres"
                    name="n_hombres"
                    value={tempForm.n_hombres}
                    onChange={handleOnChangeNumHombres}
                    label="Número de Hombres"
                    type="number"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    icon={<Icon>groups</Icon>}
                    s={12}
                    id="n_mujeres"
                    name="n_mujeres"
                    value={tempForm.n_mujeres}
                    onChange={handleOnChangeNumMujeres}
                    label="Número de Mujeres"
                    type="number"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="edad_media_nomina"
                    name="edad_media_nomina"
                    value={tempForm.edad_media_nomina}
                    onChange={handleOnChangeEdadMedia}
                    label="¿Cuál es la edad media de los trabajadores?"
                    validate
                //disabled={disabled}
                />
                <div className="row no-margin-bot">
                    <p>Si la edad media es mayor o igual a 50 años ¿Está previsto algún plan para subsanar el envejecimiento de la nómina?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_plan" type="radio" onChange={handleOnChangeRadioPlan}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_plan" type="radio" onChange={handleOnChangeRadioPlan}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_plan" type="radio" onChange={handleOnChangeRadioPlan}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Tiene la empresa necesidad de realizar un protocolo de sucesión familiar? (APLICA A EMPRESAS FAMILARES)</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_necesidad" type="radio" onChange={handleOnChangeRadioNecesidad}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_necesidad" type="radio" onChange={handleOnChangeRadioNecesidad}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_necesidad" type="radio" onChange={handleOnChangeRadioNecesidad}/>
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

export default Page07AForm;
