import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage6D } from "../../../../../actions/radiografia/page06";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PeriodosList from "../../../../screens/radiografia/periodos/PeriodosList";

const Page06DForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialStatePeriodo = {
        periodo: '',
        clientes: '',
        facturacion: '',
    };
    const [tempPeriodo, setTempPeriodo] = useState(initialStatePeriodo);

    const initialState = {
        periodos: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6D({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangePeriodo = e => {
        e.preventDefault();
        setTempPeriodo({
            ...tempPeriodo,
            periodo: e.target.value,
        });
    };

    const handleOnChangeClientes = e => {
        e.preventDefault();
        setTempPeriodo({
            ...tempPeriodo,
            clientes: e.target.value,
        });
    };

    const handleOnChangeFacturacion = e => {
        e.preventDefault();
        setTempPeriodo({
            ...tempPeriodo,
            facturacion: e.target.value,
        });
    };

    const handleAddPeriodo = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            periodos: [
                ...tempForm.periodos,
                {
                    ...tempPeriodo,
                },
            ],
        });

        setTempPeriodo({
            periodo: '',
            clientes: '',
            facturacion: '',
        });
    }

    const handleRemovePeriodo = nombre => {
        setTempForm({
            ...tempForm,
            periodos: tempForm.periodos?.filter(function (periodo) {
                return periodo.periodo !== nombre;
            })
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Evolución de las ventas y clientes internacionales en los últimos 3 años</h5>
                </div>
                {
                    tempForm.periodos?.length ? (
                        <div className="row">
                            <PeriodosList periodos={tempForm.periodos} removeCallback={handleRemovePeriodo} />
                        </div>
                    ) : ''
                }
                <TextInput
                    s={12}
                    id="periodo"
                    name="periodo"
                    value={tempPeriodo.periodo}
                    onChange={handleOnChangePeriodo}
                    label="Periodo (Año)"
                    type="number"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={5}
                    id="clientes"
                    name="clientes"
                    value={tempPeriodo.clientes}
                    onChange={handleOnChangeClientes}
                    label="Número de Clientes"
                    type="number"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={5}
                    id="facturacion"
                    name="facturacion"
                    value={tempPeriodo.facturacion}
                    onChange={handleOnChangeFacturacion}
                    label="% de Facturación Anual"
                    validate
                //disabled={disabled}
                />
                <div className="input-field col s2">
                    <Button
                        className="green right"
                        style={{ 'marginTop': '25px' }}
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        //waves="light"
                        disabled={!tempPeriodo.periodo.length}
                        onClick={handleAddPeriodo}
                        tooltip="Agregar periodo"
                    />
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

export default Page06DForm;
