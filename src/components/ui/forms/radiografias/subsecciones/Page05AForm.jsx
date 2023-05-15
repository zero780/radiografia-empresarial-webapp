import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage5A } from "../../../../../actions/radiografia/page05";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page05AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //States

    //para admin y supervisor
    let tempFormAdmin = {
        existe_definicion: true,
        existe_plan: true,
        existe_interes: false,
        cv_comercial_propio: true,
        cv_comercial_multiproducto: false,
        cv_distribuidor: true,
        cv_comisionista: false,
        cv_venta_directa: true,
        cv_networking: false,
        cv_telemarketing: true,
        cv_venta_online: true,
        rc_web: true,
        rc_web_traducida: false,
        rc_videos: false,
        rc_catalogos: true,
        rc_mkt_digital: true,
        rc_posicionamiento_web: false,
        rc_ferias: true,
        rc_otros: false,
        existe_fidelizacion: true,
        cuales_fidelizacion: 'loren ipsum',
    }

    const initialState = {
        existe_definicion: '',
        existe_plan: '',
        existe_interes: '',
        cv_comercial_propio: false,
        cv_comercial_multiproducto: false,
        cv_distribuidor: false,
        cv_comisionista: false,
        cv_venta_directa: false,
        cv_networking: false,
        cv_telemarketing: false,
        cv_venta_online: false,
        rc_web: false,
        rc_web_traducida: false,
        rc_videos: false,
        rc_catalogos: false,
        rc_mkt_digital: false,
        rc_posicionamiento_web: false,
        rc_ferias: false,
        rc_otros: false,
        existe_fidelizacion: '',
        cuales_fidelizacion: '',
        idEstado: '1',
    };

    let [tempForm, setTempForm] = useState(initialState);

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage5A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioExisteDefinicion = e => {
        setTempForm({
            ...tempForm,
            existe_definicion: e.target.value,
        });
    };

    const handleOnChangeRadioExistePlan = e => {
        setTempForm({
            ...tempForm,
            existe_plan: e.target.value,
        });
    };

    const handleOnChangeRadioExisteInteres = e => {
        setTempForm({
            ...tempForm,
            existe_interes: e.target.value,
        });
    };

    const handleOnChangeCheckboxCvComercialPropio = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_comercial_propio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_comercial_propio: false,
            });
        }
    };

    const handleOnChangeCheckboxCvComercialMulti = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_comercial_multiproducto: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_comercial_multiproducto: false,
            });
        }
    };

    const handleOnChangeCheckboxCvDistribuidor = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_distribuidor: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_distribuidor: false,
            });
        }
    };

    const handleOnChangeCheckboxCvComisionista= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_comisionista: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_comisionista: false,
            });
        }
    };


    const handleOnChangeCheckboxCvVentaDirecta = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_venta_directa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_venta_directa: false,
            });
        }

    };

    const handleOnChangeCheckboxCvNetworking = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_networking: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_networking: false,
            });
        }

    };

    const handleOnChangeCheckboxCvTeleMkt = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_telemarketing: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_telemarketing: false,
            });
        }

    };

    const handleOnChangeCheckboxCvVentaOnline = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                cv_venta_online: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                cv_venta_online: false,
            });
        }
    };

    const handleOnChangeCheckboxRcWeb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_web: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_web: false,
            });
        }
    };

    const handleOnChangeCheckboxRcWebTrad = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_web_traducida: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_web_traducida: false,
            });
        }
    };

    const handleOnChangeCheckboxRcVideos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_videos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_videos: false,
            });
        }
    };

    const handleOnChangeCheckboxRcCatalogos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_catalogos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_catalogos: false,
            });
        }
    };

    const handleOnChangeCheckboxRcMktDigital = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_mkt_digital: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_mkt_digital: false,
            });
        }
    };

    const handleOnChangeCheckboxRcPosicWeb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_posicionamiento_web: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_posicionamiento_web: false,
            });
        }
    };

    const handleOnChangeCheckboxRcFerias = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_ferias: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_ferias: false,
            });
        }
    };

    const handleOnChangeCheckboxRcOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                rc_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                rc_otros: false,
            });
        }
    };

    const handleOnChangeRadioExisteFidelizacion = e => {
        setTempForm({
            ...tempForm,
            existe_fidelizacion: e.target.value,
        });
    };

    const handleOnChangeCualesFideliz = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_fidelizacion: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <p>¿Existe un sistema para definir la estrategia de la empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_definicion" type="radio" onChange={handleOnChangeRadioExisteDefinicion} disabled={esAdmin || esSupervisor} checked={tempForm.existe_definicion} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_definicion" type="radio" onChange={handleOnChangeRadioExisteDefinicion} disabled={esAdmin || esSupervisor} checked={!(tempForm.existe_definicion)}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_definicion" type="radio" onChange={handleOnChangeRadioExisteDefinicion} disabled={esAdmin || esSupervisor}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Existe un Plan Comercial y/o se planifican anualmente las actuaciones y objetivos comerciales?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_plan" type="radio" onChange={handleOnChangeRadioExistePlan} disabled={esAdmin || esSupervisor} checked={tempForm.existe_plan} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_plan" type="radio" onChange={handleOnChangeRadioExistePlan} disabled={esAdmin || esSupervisor} checked={!(tempForm.existe_plan)} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_plan" type="radio" onChange={handleOnChangeRadioExistePlan} disabled={esAdmin || esSupervisor}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estaría realmente interesado en poner en marcha acciones dirigidas a mejorar la Eficiencia Comercial de su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres} disabled={esAdmin || esSupervisor} checked={tempForm.existe_interes} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres} disabled={esAdmin || esSupervisor} checked={!(tempForm.existe_interes)} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_interes" type="radio" onChange={handleOnChangeRadioExisteInteres} disabled={esAdmin || esSupervisor}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Sistemas y canales de venta empleados</p>
                    <p>
                        <label>
                            <input
                                id="cv_comercial_propio"
                                name="cv_comercial_propio"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_comercial_propio}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvComercialPropio}                              
                            />
                            <span>Comercial propio</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_comercial_multiproducto"
                                name="cv_comercial_multiproducto"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_comercial_multiproducto}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvComercialMulti}
                            />
                            <span>Comercial multiproducto</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_distribuidor"
                                name="cv_distribuidor"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_distribuidor}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvDistribuidor}
                            />
                            <span>Distribuidor</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_comisionista"
                                name="cv_comisionista"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_comisionista}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvComisionista}
                            />
                            <span>Comisionista</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_venta_directa"
                                name="cv_venta_directa"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_venta_directa}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvVentaDirecta}
                            />
                            <span>Venta directa</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_networking"
                                name="cv_networking"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_networking}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvNetworking}
                            />
                            <span>Networking(contactos, ferias)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_telemarketing"
                                name="cv_telemarketing"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_telemarketing}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvTeleMkt}
                            />
                            <span>Telemarketing</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="cv_venta_online"
                                name="cv_venta_online"
                                value={true}
                                type="checkbox"
                                checked={tempForm.cv_venta_online}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxCvVentaOnline}
                            />
                            <span>Venta on-line</span>
                        </label>
                    </p>
                </div>
                <div className="row">
                    <p>¿De qué recursos / herramientas comerciales dispone?</p>
                    <p>
                        <label>
                            <input
                                id="rc_web"
                                name="rc_web"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_web}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcWeb}
                            />
                            <span>Página Web</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_web_traducida"
                                name="rc_web_traducida"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_web_traducida}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcWebTrad}
                            />
                            <span>Página Web traducida a distintos idiomas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_videos"
                                name="rc_videos"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_videos}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcVideos}
                            />
                            <span>Videos de empresas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_catalogos"
                                name="rc_catalogos"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_catalogos}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcCatalogos}
                            />
                            <span>Catálogos actualizados</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_mkt_digital"
                                name="rc_mkt_digital"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_mkt_digital}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcMktDigital}
                            />
                            <span>Acciones de marketing digital</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_posicionamiento_web"
                                name="rc_posicionamiento_web"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_posicionamiento_web}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcPosicWeb}
                            />
                            <span>Posicionamiento Web</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_ferias"
                                name="rc_ferias"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_ferias}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcFerias}
                            />
                            <span>Participación en ferias</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="rc_otros"
                                name="rc_otros"
                                value={true}
                                type="checkbox"
                                checked={tempForm.rc_otros}
                                disabled={esAdmin || esSupervisor}
                                onChange={handleOnChangeCheckboxRcOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Llevan a cabo algún plan de fidelización a clientes?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existe_fidelizacion" type="radio" onChange={handleOnChangeRadioExisteFidelizacion} disabled={esAdmin || esSupervisor} checked={tempForm.existe_fidelizacion} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="existe_fidelizacion" type="radio" onChange={handleOnChangeRadioExisteFidelizacion} disabled={esAdmin || esSupervisor} checked={!(tempForm.existe_fidelizacion)} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existe_fidelizacion" type="radio" onChange={handleOnChangeRadioExisteFidelizacion} disabled={esAdmin || esSupervisor}  />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cuales_fidelizacion"
                    name="cuales_fidelizacion"
                    label="Si la respuesta anterior es afirmativa… Cuál/es?"
                    value={tempForm.cuales_fidelizacion}
                    onChange={handleOnChangeCualesFideliz}
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

export default Page05AForm;
