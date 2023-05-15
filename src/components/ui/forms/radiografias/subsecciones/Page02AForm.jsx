import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage2A } from "../../../../../actions/radiografia/page02";
import { startAsyncGetJuridicas } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page02AForm = ({ tipologias, idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { juridicas } = useSelector(state => state.juridicas);

    useEffect(() => {
        dispatch(startAsyncGetJuridicas(token));
    }, []);

    //let juridicas = [{ 'id': 1, 'nombre': 'Sociedad Anónima' }, { 'id': 2, 'nombre': 'Compañía Limitada' }, { 'id': 3, 'nombre': 'Otro' }]

    //Handles
    const getCurrentDate = () => {
        return new Date();
    }

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const validateInput = (name, value) => {
        switch (name) {
            case 'idTipologia':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            default:
                return false;
        }
    };

    //para admin y supervisor
    let tempFormAdmin = {
        idTipologia: '2',
        fechaConstitucion: '10-08-1950',
        nTrabajadores: '175',
        nEstablecimientos: '3',
        esMatriz: true,
    }

    let [tempForm, handleInputChange] = useForm({ idTipologia: '', fechaConstitucion: '', nTrabajadores: '', nEstablecimientos: '', esMatriz: false, idEstado: '1' }, validateInput);

    const { idTipologia, fechaConstitucion, nTrabajadores, nEstablecimientos, esMatriz } = tempForm;

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleDateChange = (newDate) => {
        tempForm.fechaConstitucion = newDate;
    };

    const handleCheckChange = e => {
        if (e.target.checked) {
            tempForm.esMatriz = e.target.value
        } else {
            tempForm.esMatriz = false
        }
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Datos Descriptivos</h5>
                </div>
                <Select
                    icon={<Icon>account_balance</Icon>}
                    id="idTipologia"
                    name="idTipologia"
                    s={12}
                    label="Tipología Jurídica"
                    value={tempForm.idTipologia}
                    onChange={handleInputChange}
                    disabled={esAdmin || esSupervisor}
                >
                    <option value="" key={`idTipologia_vacioDefault_0`}>
                        Escoja la tipología jurídica
                    </option>
                    {
                        juridicas.map(({ id, nombre }) => <option key={`idTipologia_${id}`} value={id}>{nombre}</option>)
                    }
                </Select>
                <DatePicker
                    icon={<Icon>event_available</Icon>}
                    id="fechaConstitucion"
                    name="fechaConstitucion"
                    s={12}
                    label="Fecha de Constitución"
                    disabled={esAdmin || esSupervisor}
                    options={{
                        maxDate: getCurrentDate(),
                        yearRange: [1900, (getCurrentDate()).getFullYear()],
                        i18n: ComponentSettingConstants.datepickerOptions,
                        format: 'dd-mm-yyyy',
                        autoClose: true,
                        defaultDate: new Date(tempForm.fechaConstitucion),
                        setDefaultDate: true,
                        onSelect: function (newDate) {
                            handleDateChange(newDate)
                        }
                    }}
                    
                />
                <TextInput
                    icon={<Icon>groups</Icon>}
                    s={12}
                    id="nTrabajadores"
                    name="nTrabajadores"
                    value={tempForm.nTrabajadores}
                    onChange={handleInputChange}
                    label="Número de Trabajadores"
                    type="number"
                    disabled={esAdmin || esSupervisor}
                    validate
                />
                <TextInput
                    icon={<Icon>holiday_village</Icon>}
                    s={12}
                    id="nEstablecimientos"
                    name="nEstablecimientos"
                    value={tempForm.nEstablecimientos}
                    onChange={handleInputChange}
                    label="Número de Establecimientos"
                    type="number"
                    disabled={esAdmin || esSupervisor}
                    validate
                />
                <div className="input-field col s12">
                    <p>
                        <label>
                            <input
                                id="esMatriz"
                                name="esMatriz"
                                value={true}
                                type="checkbox"
                                disabled={esAdmin || esSupervisor}
                                checked={tempForm.esMatriz}
                                onChange={handleCheckChange}
                            />
                            <span>Es Matriz</span>
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

export default Page02AForm;
