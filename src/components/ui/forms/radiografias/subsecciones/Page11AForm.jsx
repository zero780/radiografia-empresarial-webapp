import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage11A } from "../../../../../actions/radiografia/page11";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page11AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        facturacion_100000: false,
        facturacion_100000_300000: false,
        facturacion_300000_500000: false,
        facturacion_500000_1m: false,
        facturacion_1m_2m: false,
        facturacion_2m_5m: false,
        facturacion_5m_10m: false,
        facturacion_10m: false,
        facturacion_nsnc: false,
        que_genera: '',
        dispone_mecanismo: '',
        esta_interesado: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage11A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeCheckboxFacturacion1 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_100000: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_100000: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion2 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_100000_300000: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_100000_300000: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion3 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_300000_500000: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_300000_500000: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion4 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_500000_1m: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_500000_1m: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion5 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_1m_2m: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_1m_2m: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion6 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_2m_5m: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_2m_5m: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion7 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_5m_10m: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_5m_10m: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion8 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_10m: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_10m: false,
            });
        }
    };

    const handleOnChangeCheckboxFacturacion9 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                facturacion_nsnc: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                facturacion_nsnc: false,
            });
        }
    };

    const handleOnChangeRadioQueGenera = e => {
        setTempForm({
            ...tempForm,
            que_genera: e.target.value,
        });
    };

    const handleOnChangeRadioDisponeMecanis = e => {
        setTempForm({
            ...tempForm,
            dispone_mecanismo: e.target.value,
        });
    };

    const handleOnChangeRadioEstaInteres = e => {
        setTempForm({
            ...tempForm,
            esta_interesado: e.target.value,
        });
    };
    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Situación actual</h5>
                </div>
                <div className="row">
                    <p>Facturación Anual</p>
                    <p>
                        <label>
                            <input
                                id="facturacion_100000"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion1}
                            />
                            <span>Hasta 100.000</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_100000_300000"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion2}
                            />
                            <span>De 100.000 a 300.000</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_300000_500000"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion3}
                            />
                            <span>De 300.000 a 500.000</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_500000_1m"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion4}
                            />
                            <span>De 500.000 a 1M</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_1m_2m"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion5}
                            />
                            <span>De 1M a 2M</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_2m_5m"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion6}
                            />
                            <span>De 2M a 5M</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_5m_10m"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion7}
                            />
                            <span>De 5M a 10M</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_10m"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion8}
                            />
                            <span>Más de 10M</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="facturacion_nsnc"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxFacturacion9}
                            />
                            <span>NSNC</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>Al final del ejercicio ¿generan pérdidas o beneficios?</p>
                    <label className="col s4">
                        <input className="with-gap" value="Pérdidas" name="que_genera" type="radio" onChange={handleOnChangeRadioQueGenera}/>
                        <span>Pérdidas</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="Beneficios" name="que_genera" type="radio" onChange={handleOnChangeRadioQueGenera}/>
                        <span>Beneficios</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="NSNC"  name="que_genera" type="radio" onChange={handleOnChangeRadioQueGenera}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Disponen de algún mecanismo de control de aquellos aspectos básicos en cuanto a la gestión financiera: control de la tesorería, principales inversiones, Cuenta de Resultados/Explotación,…?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="dispone_mecanismo" type="radio" onChange={handleOnChangeRadioDisponeMecanis}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="dispone_mecanismo" type="radio" onChange={handleOnChangeRadioDisponeMecanis}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="dispone_mecanismo" type="radio" onChange={handleOnChangeRadioDisponeMecanis}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estarían interesados en realizar un proyecto de análisis, control y ajuste de costes o gestión financiera general?:</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres} />
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

export default Page11AForm;
