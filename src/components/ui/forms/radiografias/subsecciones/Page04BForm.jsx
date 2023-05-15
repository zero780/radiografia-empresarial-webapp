import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage4B } from "../../../../../actions/radiografia/page04";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page04BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        consumo_unidades_kwh_mgwh: '',
        consumo_unidades_produccion_kwh_mgwh: '',
        consumo_unidades_otras_areas_kwh_mgwh: '',
        consumo_unidades_total_kwh_mgwh: '',
        consumo_dolares_kwh_mgwh: '',
        consumo_dolares_produccion_kwh_mgwh: '',
        consumo_dolares_otras_areas_kwh_mgwh: '',
        consumo_dolares_total_kwh_mgwh: '',
        gasolina_extra_galones_produccion: '',
        gasolina_extra_galones_otras_areas: '',
        gasolina_extra_galones_total: '',
        gasolina_extra_dolares_produccion: '',
        gasolina_extra_dolares_otras_areas: '',
        gasolina_extra_dolares_total: '',
        gasolina_super_galones_produccion: '',
        gasolina_super_galones_otras_areas: '',
        gasolina_super_galones_total: '',
        gasolina_super_dolares_produccion: '',
        gasolina_super_dolares_otras_areas: '',
        gasolina_super_dolares_total: '',
        diesel_galones_produccion: '',
        diesel_galones_otras_areas: '',
        diesel_galones_total: '',
        diesel_dolares_produccion: '',
        diesel_dolares_otras_areas: '',
        diesel_dolares_total: '',
        gas_kg_produccion: '',
        gas_kg_otras_areas: '',
        gas_kg_total: '',
        gas_dolares_produccion: '',
        gas_dolares_otras_areas: '',
        gas_dolares_total: '',
        otro_gls_produccion: '',
        otro_gls_otras_areas: '',
        otro_gls_total: '',
        otro_dolares_produccion: '',
        otro_dolares_otras_areas: '',
        otro_dolares_total: '',
        problema: '',
        descripcion: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage4B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //Consumo en unidades
    const handleOnChangeRadioConsumUnidadesKWHMGWH = e => {
        setTempForm({
            ...tempForm,
            consumo_unidades_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumUnidadesProduccionKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_unidades_produccion_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumUnidadesOtrasKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_unidades_otras_areas_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumUnidadesTotalKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_unidades_total_kwh_mgwh: e.target.value,
        });
    };

    //Consumo en dolares
    const handleOnChangeRadioConsumDolaresKWHMGWH = e => {
        setTempForm({
            ...tempForm,
            consumo_dolares_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumDolaresProduccionKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_dolares_produccion_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumDolaresOtrasKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_dolares_otras_areas_kwh_mgwh: e.target.value,
        });
    };

    const handleOnChangeConsumDolaresTotalKWHMGWH = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            consumo_dolares_total_kwh_mgwh: e.target.value,
        });
    };

    //Gasolina extra en galones
    const handleOnChangeGasolinaExtraGalonesProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_galones_produccion: e.target.value,
        });
    };

    const handleOnChangeGasolinaExtraGalonesOtras= e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_galones_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasolinaExtraGalonesTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_galones_total: e.target.value,
        });
    };

    //Gasolina extra en dolares
    const handleOnChangeGasolinaExtraDolaresProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_dolares_produccion: e.target.value,
        });
    };

    const handleOnChangeGasolinaExtraDolaresOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_dolares_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasolinaExtraDolaresTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_extra_dolares_total: e.target.value,
        });
    };

    //Gasolina super en galones
    const handleOnChangeGasolinaSuperGalonesProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_galones_produccion: e.target.value,
        });
    };

    const handleOnChangeGasolinaSuperGalonesOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_galones_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasolinaSuperGalonesTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_galones_total: e.target.value,
        });
    };

    //Gasolina super en dolares
    const handleOnChangeGasolinaSuperDolaresProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_dolares_produccion: e.target.value,
        });
    };

    const handleOnChangeGasolinaSuperDolaresOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_dolares_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasolinaSuperDolaresTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gasolina_super_dolares_total: e.target.value,
        });
    };

    //Diesel en galones
    const handleOnChangeDieselGalonesProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_galones_produccion: e.target.value,
        });
    };

    const handleOnChangeDieselGalonesOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_galones_otras_areas: e.target.value,
        });
    };

    const handleOnChangeDieselGalonesTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_galones_total: e.target.value,
        });
    };

    //Diesel en dolares
    const handleOnChangeDieselDolaresProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_dolares_produccion: e.target.value,
        });
    };

    const handleOnChangeDieselDolaresOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_dolares_otras_areas: e.target.value,
        });
    };

    const handleOnChangeDieselDolaresTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            diesel_dolares_total: e.target.value,
        });
    };

    //Gas en kg
    const handleOnChangeGasKGProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_kg_produccion: e.target.value,
        });
    };

    const handleOnChangeGasKGOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_kg_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasKGTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_kg_total: e.target.value,
        });
    };

    //Gas en dolares
    const handleOnChangeGasDolaresProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_dolares_produccion: e.target.value,
        });
    };

    const handleOnChangeGasDolaresOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_dolares_otras_areas: e.target.value,
        });
    };

    const handleOnChangeGasDolaresTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            gas_dolares_total: e.target.value,
        });
    };

    //Otro en gls
    const handleOnChangeOtroGLSProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_gls_produccion: e.target.value,
        });
    };

    const handleOnChangeOtroGLSGOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_gls_otras_areas: e.target.value,
        });
    };

    const handleOnChangeOtroGLSTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_gls_total: e.target.value,
        });
    };

    //Otro en dolares
    const handleOnChangeOtroDolaresProduccion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_dolares_produccion: e.target.value,
        });
    };

    const handleOnChangeOtroDolaresOtras = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_dolares_otras_areas: e.target.value,
        });
    };

    const handleOnChangeOtroDolaresTotal = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_dolares_total: e.target.value,
        });
    };

    const handleOnChangeRadioProblema = e => {
        setTempForm({
            ...tempForm,
            problema: e.target.value,
        });
    };

    const handleOnChangeDescripcion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            descripcion: e.target.value,
        });
    };
    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Necesidades Energéticas</h5>
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">Consumos mensuales de energía en la empresa</h5>
                </div>
                <div className="row">
                    <p>Consumo en unidades</p>
                    <div className="row no-margin-bot center-align">
                        <label className="col s6">
                            <input className="with-gap" value="electricidad-kwh" name="consumo_unidades_kwh_mgwh" type="radio" onChange={handleOnChangeRadioConsumUnidadesKWHMGWH} disabled={esAdmin || esSupervisor} />
                            <span>KWH</span>
                        </label>
                        <label className="col s6">
                            <input className="with-gap" value="electricidad-gwh" name="consumo_unidades_kwh_mgwh" type="radio" onChange={handleOnChangeRadioConsumUnidadesKWHMGWH} disabled={esAdmin || esSupervisor} />
                            <span>MGWH</span>
                        </label>
                    </div>
                    <TextInput
                        s={12}
                        id="consumo_unidades_produccion_kwh_mgwh"
                        name="consumo_unidades_produccion_kwh_mgwh"
                        value={tempForm.consumo_unidades_produccion_kwh_mgwh}
                        onChange={handleOnChangeConsumUnidadesProduccionKWHMGWH}
                        label="Producción"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="consumo_unidades_otras_areas_kwh_mgwh"
                        name="consumo_unidades_otras_areas_kwh_mgwh"
                        value={tempForm.consumo_unidades_otras_areas_kwh_mgwh}
                        onChange={handleOnChangeConsumUnidadesOtrasKWHMGWH}
                        label="Otras áreas"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="consumo_unidades_total_kwh_mgwh"
                        name="consumo_unidades_total_kwh_mgwh"
                        value={tempForm.consumo_unidades_total_kwh_mgwh}
                        onChange={handleOnChangeConsumUnidadesTotalKWHMGWH}
                        label="Total"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Consumo en dólares</p>
                    <div className="row no-margin-bot center-align">
                        <label className="col s6">
                            <input className="with-gap" value="electricidad-usd" name="consumo_dolares_kwh_mgwh" type="radio" onChange={handleOnChangeRadioConsumDolaresKWHMGWH} disabled={esAdmin || esSupervisor} />
                            <span>KWH</span>
                        </label>
                        <label className="col s6">
                            <input className="with-gap" value="electricidad-usd" name="consumo_dolares_kwh_mgwh" type="radio" onChange={handleOnChangeRadioConsumDolaresKWHMGWH} disabled={esAdmin || esSupervisor} />
                            <span>MGWH</span>
                        </label>
                    </div>
                    <TextInput
                        s={12}
                        id="consumo_dolares_produccion_kwh_mgwh"
                        name="consumo_dolares_produccion_kwh_mgwh"
                        value={tempForm.consumo_dolares_produccion_kwh_mgwh}
                        onChange={handleOnChangeConsumDolaresProduccionKWHMGWH}
                        label="Producción"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="consumo_dolares_otras_areas_kwh_mgwh"
                        name="consumo_dolares_otras_areas_kwh_mgwh"
                        value={tempForm.consumo_dolares_otras_areas_kwh_mgwh}
                        onChange={handleOnChangeConsumDolaresOtrasKWHMGWH}
                        label="Otras áreas"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="consumo_dolares_total_kwh_mgwh"
                        name="consumo_dolares_total_kwh_mgwh"
                        value={tempForm.consumo_dolares_total_kwh_mgwh}
                        onChange={handleOnChangeConsumDolaresTotalKWHMGWH}
                        label="Total"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>GASOLINA  EXTRA  (Galones)</p>
                    <TextInput
                        s={12}
                        id="gasolina_extra_galones_produccion"
                        name="gasolina_extra_galones_produccion"
                        value={tempForm.gasolina_extra_galones_produccion}
                        onChange={handleOnChangeGasolinaExtraGalonesProduccion}
                        label="Producción"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_extra_galones_otras_areas"
                        name="gasolina_extra_galones_otras_areas"
                        value={tempForm.gasolina_extra_galones_otras_areas}
                        onChange={handleOnChangeGasolinaExtraGalonesOtras}
                        label="Otras áreas"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_extra_galones_total"
                        name="gasolina_extra_galones_total"
                        value={tempForm.gasolina_extra_galones_total}
                        onChange={handleOnChangeGasolinaExtraGalonesTotal}
                        label="Total"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>GASOLINA EXTRA (Dólares)</p>
                    <TextInput
                        s={12}
                        id="gasolina_extra_dolares_produccion"
                        name="gasolina_extra_dolares_produccion"
                        value={tempForm.gasolina_extra_dolares_produccion}
                        onChange={handleOnChangeGasolinaExtraDolaresProduccion}
                        label="Producción"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_extra_dolares_otras_areas"
                        name="gasolina_extra_dolares_otras_areas"
                        value={tempForm.gasolina_extra_dolares_otras_areas}
                        onChange={handleOnChangeGasolinaExtraDolaresOtras}
                        label="Otras áreas"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_extra_dolares_total"
                        name="gasolina_extra_dolares_total"
                        value={tempForm.gasolina_extra_dolares_total}
                        onChange={handleOnChangeGasolinaExtraDolaresTotal}
                        label="Total"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>GASOLINA  SUPER  (Galones)</p>
                    <TextInput
                        s={12}
                        id="gasolina_super_galones_produccion"
                        name="gasolina_super_galones_produccion"
                        value={tempForm.gasolina_super_galones_produccion}
                        onChange={handleOnChangeGasolinaSuperGalonesProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_super_galones_otras_areas"
                        name="gasolina_super_galones_otras_areas"
                        value={tempForm.gasolina_super_galones_otras_areas}
                        onChange={handleOnChangeGasolinaSuperGalonesOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_super_galones_total"
                        name="gasolina_super_galones_total"
                        value={tempForm.gasolina_super_galones_total}
                        onChange={handleOnChangeGasolinaSuperGalonesTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>GASOLINA  SUPER (Dólares)</p>
                    <TextInput
                        s={12}
                        id="gasolina_super_dolares_produccion"
                        name="gasolina_super_dolares_produccion"
                        value={tempForm.gasolina_super_dolares_produccion}
                        onChange={handleOnChangeGasolinaSuperDolaresProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_super_dolares_otras_areas"
                        name="gasolina_super_dolares_otras_areas"
                        value={tempForm.gasolina_super_dolares_otras_areas}
                        onChange={handleOnChangeGasolinaSuperDolaresOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gasolina_super_dolares_total"
                        name="gasolina_super_dolares_total"
                        value={tempForm.gasolina_super_dolares_total}
                        onChange={handleOnChangeGasolinaSuperDolaresTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>DIESEL (Galones)</p>
                    <TextInput
                        s={12}
                        id="diesel_galones_produccion"
                        name="diesel_galones_produccion"
                        value={tempForm.diesel_galones_produccion}
                        onChange={handleOnChangeDieselGalonesProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="diesel_galones_otras_areas"
                        name="diesel_galones_otras_areas"
                        value={tempForm.diesel_galones_otras_areas}
                        onChange={handleOnChangeDieselGalonesOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="diesel_galones_total"
                        name="diesel_galones_total"
                        value={tempForm.diesel_galones_total}
                        onChange={handleOnChangeDieselGalonesTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>DIESEL (Dólares)</p>
                    <TextInput
                        s={12}
                        id="diesel_dolares_produccion"
                        name="diesel_dolares_produccion"
                        value={tempForm.diesel_dolares_produccion}
                        onChange={handleOnChangeDieselDolaresProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="diesel_dolares_otras_areas"
                        name="diesel_dolares_otras_areas"
                        value={tempForm.diesel_dolares_otras_areas}
                        onChange={handleOnChangeDieselDolaresOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="diesel_dolares_total"
                        name="diesel_dolares_total"
                        value={tempForm.diesel_dolares_total}
                        onChange={handleOnChangeDieselDolaresTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Gas Natural  (KG)</p>
                    <TextInput
                        s={12}
                        id="gas_kg_produccion"
                        name="gas_kg_produccion"
                        value={tempForm.gas_kg_produccion}
                        onChange={handleOnChangeGasKGProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gas_kg_otras_areas"
                        name="gas_kg_otras_areas"
                        value={tempForm.gas_kg_otras_areas}
                        onChange={handleOnChangeGasKGOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gas_kg_total"
                        name="gas_kg_total"
                        value={tempForm.gas_kg_total}
                        onChange={handleOnChangeGasKGTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Gas Natural (Dólares)</p>
                    <TextInput
                        s={12}
                        id="gas_dolares_produccion"
                        name="gas_dolares_produccion"
                        value={tempForm.gas_dolares_produccion}
                        onChange={handleOnChangeGasDolaresProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gas_dolares_otras_areas"
                        name="gas_dolares_otras_areas"
                        value={tempForm.gas_dolares_otras_areas}
                        onChange={handleOnChangeGasDolaresOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="gas_dolares_total"
                        name="gas_dolares_total"
                        value={tempForm.gas_dolares_total}
                        onChange={handleOnChangeGasDolaresTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Otro combustible (GLS)</p>
                    <TextInput
                        s={12}
                        id="otro_gls_produccion"
                        name="otro_gls_produccion"
                        value={tempForm.otro_gls_produccion}
                        onChange={handleOnChangeOtroGLSProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="otro_gls_otras_areas"
                        name="otro_gls_otras_areas"
                        value={tempForm.otro_gls_otras_areas}
                        onChange={handleOnChangeOtroGLSGOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="otro_gls_total"
                        name="otro_gls_total"
                        value={tempForm.otro_gls_total}
                        onChange={handleOnChangeOtroGLSTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Otro combustible (USD)</p>
                    <TextInput
                        s={12}
                        id="otro_dolares_produccion"
                        name="otro_dolares_produccion"
                        value={tempForm.otro_dolares_produccion}
                        onChange={handleOnChangeOtroDolaresProduccion}
                        label="Producción"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="otro_dolares_otras_areas"
                        name="otro_dolares_otras_areas"
                        value={tempForm.otro_dolares_otras_areas}
                        onChange={handleOnChangeOtroDolaresOtras}
                        label="Otras áreas"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="otro_dolares_total"
                        name="otro_dolares_total"
                        value={tempForm.otro_dolares_total}
                        onChange={handleOnChangeOtroDolaresTotal}
                        label="Total"
                        validate
                    disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row no-margin-bot">
                    <p>¿Ha tenido problemas con el suministro de energía?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="problema" type="radio" onChange={handleOnChangeRadioProblema} disabled={esAdmin || esSupervisor} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="problema" type="radio" onChange={handleOnChangeRadioProblema} disabled={esAdmin || esSupervisor} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="problema" type="radio" onChange={handleOnChangeRadioProblema} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="descripcion"
                    label="Descripción de problemas"
                    value={tempForm.descripcion}
                    onChange={handleOnChangeDescripcion}
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
        </form>
    );
};

export default Page04BForm;
