import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage4E } from "../../../../../actions/radiografia/page04";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page04EForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States
    const initialState = {
        residuo_generado_residuos_solidos: 'Residuos sólidos',
        cantidad_residuos_solidos: '',
        medida_residuos_solidos: '',
        tratamiento_residuos_solidos: '',
        costo_eliminacion_residuos_solidos: '',
        residuo_generado_emisiones: 'Emisiones a la atmósfera (gases y humos)',
        cantidad_emisiones: '',
        medida_emisiones: '',
        tratamiento_emisiones: '',
        costo_eliminacion_emisiones: '',
        residuo_generado_otros: 'Otros',
        cantidad_otros: '',
        medida_otros: '',
        tratamiento_otros: '',
        costo_eliminacion_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage4E({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //Residuos solidos
    const handleOnChangeCantResidSolidos = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cantidad_residuos_solidos: e.target.value,
        });
    };

    const handleOnChangeMedidResidSolidos = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            medida_residuos_solidos: e.target.value,
        });
    };

    const handleOnChangeTratResidSolidos = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tratamiento_residuos_solidos: e.target.value,
        });
    };

    const handleOnChangeCostoResidSolidos = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            costo_eliminacion_residuos_solidos: e.target.value,
        });
    };

    //Emisiones
    const handleOnChangeCantEmisiones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cantidad_emisiones: e.target.value,
        });
    };

    const handleOnChangeMedidEmisiones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            medida_emisiones: e.target.value,
        });
    };

    const handleOnChangeTratEmisiones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tratamiento_emisiones: e.target.value,
        });
    };

    const handleOnChangeCostoEmisiones = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            costo_eliminacion_emisiones: e.target.value,
        });
    };

    //Otros
    const handleOnChangeCantOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cantidad_otros: e.target.value,
        });
    };

    const handleOnChangeMedidOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            medida_otros: e.target.value,
        });
    };

    const handleOnChangeTratOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tratamiento_otros: e.target.value,
        });
    };

    const handleOnChangeCostoOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            costo_eliminacion_otros: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Otras infraestructuras: Otros residuos</h5>
                </div>
                <div className="row">
                    <p>Tipo de residuo generado: Residuos sólidos</p>
                    <TextInput
                        s={12}
                        id="cantidad_residuos_solidos"
                        name="cantidad_residuos_solidos"
                        value={tempForm.cantidad_residuos_solidos}
                        onChange={handleOnChangeCantResidSolidos}
                        label="Cantidad"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="medida_residuos_solidos"
                        name="medida_residuos_solidos"
                        value={tempForm.medida_residuos_solidos}
                        onChange={handleOnChangeMedidResidSolidos}
                        label="Medida"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="tratamiento_residuos_solidos"
                        name="tratamiento_residuos_solidos"
                        value={tempForm.tratamiento_residuos_solidos}
                        onChange={handleOnChangeTratResidSolidos}
                        label="Tratamiento"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="costo_eliminacion_residuos_solidos"
                        name="costo_eliminacion_residuos_solidos"
                        value={tempForm.costo_eliminacion_residuos_solidos}
                        onChange={handleOnChangeCostoResidSolidos}
                        label="Coste de eliminación"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Tipo de residuo generado: Emisiones a la atmósfera (gases y humos)</p>
                    <TextInput
                        s={12}
                        id="cantidad_emisiones"
                        name="cantidad_emisiones"
                        value={tempForm.cantidad_emisiones}
                        onChange={handleOnChangeCantEmisiones}
                        label="Cantidad"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="medida_emisiones"
                        name="medida_emisiones"
                        value={tempForm.medida_emisiones}
                        onChange={handleOnChangeMedidEmisiones}
                        label="Medida"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="tratamiento_emisiones"
                        name="tratamiento_emisiones"
                        value={tempForm.tratamiento_emisiones}
                        onChange={handleOnChangeTratEmisiones}
                        label="Tratamiento"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="costo_emisiones"
                        name="costo_emisiones"
                        value={tempForm.costo_eliminacion_emisiones}
                        onChange={handleOnChangeCostoEmisiones}
                        label="Coste de eliminación"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                </div>
                <div className="row">
                    <p>Tipo de residuo generado: Otros</p>
                    <TextInput
                        s={12}
                        id="cantidad_otros"
                        name="cantidad_otros"
                        value={tempForm.cantidad_otros}
                        onChange={handleOnChangeCantOtros}
                        label="Cantidad"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="medida_otros"
                        name="medida_otros"
                        value={tempForm.medida_otros}
                        onChange={handleOnChangeMedidOtros}
                        label="Medida"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="tratamiento_otros"
                        name="tratamiento_otros"
                        value={tempForm.tratamiento_otros}
                        onChange={handleOnChangeTratOtros}
                        label="Tratamiento"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <TextInput
                        s={12}
                        id="costo_otros"
                        name="costo_otros"
                        value={tempForm.costo_eliminacion_otros}
                        onChange={handleOnChangeCostoOtros}
                        label="Coste de eliminación"
                        validate
                        disabled={esAdmin || esSupervisor}
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
        </form>
    );
};

export default Page04EForm;
