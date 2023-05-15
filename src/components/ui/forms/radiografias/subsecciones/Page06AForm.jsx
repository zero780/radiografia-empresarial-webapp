import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage6A } from "../../../../../actions/radiografia/page06";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page06AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        tipo_internacionalizacion: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioTipoIntern = e => {
        setTempForm({
            ...tempForm,
            tipo_internacionalizacion: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Análisis de la situación actual de la empresa respecto a la internacionalización</h5>
                </div>
                <div className="input-field col s12">
                    <div className="row no-margin-bot">
                        <p>¿Cuál es el tipo de internacionalización de la empresa?</p>
                        <label className="col s12">
                            <input className="with-gap" value="exportacion_nula" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Nulo (la empresa no exporta)</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="exportacion_prod_serv" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Exportación de productos o servicios</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="implantacion_comercial" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Implantación comercial en otro país</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="implantacion_productiva" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Implantación productiva en otro país </span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="subcontratacion" name="tipo_internacionalizacion" type="radio" onChange={handleOnChangeRadioTipoIntern}/>
                            <span>Subcontratación y/o compra de productos/servicios en otro país</span>
                        </label>
                    </div>
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

export default Page06AForm;
