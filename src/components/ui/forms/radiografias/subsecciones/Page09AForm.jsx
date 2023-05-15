import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage9A } from "../../../../../actions/radiografia/page09";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page09AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        tiene_certificaciones: '',
        tiene_certificacion_18001: false,
        tiene_certificacion_9001: false,
        tiene_certificacion_14001: false,
        tiene_certificacion_otra: false,
        cuales_certificaciones_tiene: '',
        interesa_certificacion_18001: false,
        interesa_certificacion_9001: false,
        interesa_certificacion_14001: false,
        interesa_certificacion_otra: false,
        cuales_certificaciones_desea: '',
        practica_calidad: false,
        practica_ambiente: false,
        practica_prevencion: false,
        practica_recursos: false,
        practica_produccion: false,
        practica_otros: false,
        conoce_normativas: '',
        interesa_normativas: '',
        interesa_calidad: false,
        interesa_prevencion: false,
        interesa_ambiente: false,
        interesa_otra: false,
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage9A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //tiene certificaciones
    const handleOnChangeRadioTieneCertificaciones = e => {
        setTempForm({
            ...tempForm,
            tiene_certificaciones: e.target.value,
        });
    };

    const handleOnChangeCheckboxTiene18001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tiene_certificacion_18001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tiene_certificacion_18001: false,
            });
        }
    };

    const handleOnChangeCheckboxTiene9001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tiene_certificacion_9001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tiene_certificacion_9001: false,
            });
        }
    };

    const handleOnChangeCheckboxTiene14001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tiene_certificacion_14001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tiene_certificacion_14001: false,
            });
        }
    };

    const handleOnChangeCheckboxTieneOtra = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tiene_certificacion_otra: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tiene_certificacion_otra: false,
            });
        }
    };

    const handleOnChangeQueCertifTiene = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_certificaciones_tiene: e.target.value,
        });
    };

    //interesa certificaciones
    const handleOnChangeCheckboxInteresa18001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_certificacion_18001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_certificacion_18001: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresa9001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_certificacion_9001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_certificacion_9001: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresa14001 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_certificacion_14001: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_certificacion_14001: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresaOtra = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_certificacion_otra: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_certificacion_otra: false,
            });
        }
    };

    const handleOnChangeQueCertifDesea = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_certificaciones_desea: e.target.value,
        });
    };

    //buenas practicas
    const handleOnChangeCheckboxPracticaCalidad = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_calidad: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_calidad: false,
            });
        }
    };

    const handleOnChangeCheckboxPracticaAmbiente = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_ambiente: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_ambiente: false,
            });
        }
    };

    const handleOnChangeCheckboxPracticaPrevencion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_prevencion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_prevencion: false,
            });
        }
    };

    const handleOnChangeCheckboxPracticaRecursos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_recursos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_recursos: false,
            });
        }
    }; 

    const handleOnChangeCheckboxPracticaProduccion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_produccion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_produccion: false,
            });
        }
    };

    const handleOnChangeCheckboxPracticaOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                practica_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                practica_otros: false,
            });
        }
    };

    const handleOnChangeRadioConoceNormat = e => {
        setTempForm({
            ...tempForm,
            conoce_normativas: e.target.value,
        });
    };

    const handleOnChangeRadioInteresNormat = e => {
        setTempForm({
            ...tempForm,
            interesa_normativas: e.target.value,
        });
    };

    const handleOnChangeCheckboxInteresCalidad = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_calidad: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_calidad: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresPrevenc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_prevencion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_prevencion: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresAmbiente = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_ambiente: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_ambiente: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresOtra = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interesa_otra: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interesa_otra: false,
            });
        }
    };
    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Certificaciones y homologaciones</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Dispone la empresa de certificaciones y homologaciones o se encuentra en trámites para obtenerlas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_certificaciones" type="radio" onChange={handleOnChangeRadioTieneCertificaciones}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_certificaciones" type="radio" onChange={handleOnChangeRadioTieneCertificaciones}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_certificaciones" type="radio" onChange={handleOnChangeRadioTieneCertificaciones}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta anterior es afirmativa… Nombre de la Certificación</p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="tiene_certificacion_18001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTiene18001}
                            />
                            <span>OSHAS 18001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="tiene_certificacion_9001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTiene9001}
                            />
                            <span>ISO 9001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="tiene_certificacion_14001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTiene14001}
                            />
                            <span>ISO 14001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="tiene_certificacion_otra"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTieneOtra}
                            />
                            <span>Otra</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="cuales_certificaciones_tiene"
                    label="Indicar las otras certificaciones..."
                    value={tempForm.cuales_certificaciones_tiene}
                    onChange={handleOnChangeQueCertifTiene}
                    data-length={200}
                    validate
                />
                <div className="row">
                    <p>Si la respuesta anterior es negativa...¿le resultaría interesante o necesario poder certificarse en algún ámbito?</p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_certificacion_18001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresa18001}
                            />
                            <span>OSHAS 18001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_certificacion_9001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresa9001}
                            />
                            <span>ISO 9001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_certificacion_14001"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresa14001}
                            />
                            <span>ISO 14001</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_certificacion_otra"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresaOtra}
                            />
                            <span>Otra</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="cuales_certificaciones_desea"
                    label="Indicar las otras certificaciones..."
                    value={tempForm.cuales_certificaciones_desea}
                    onChange={handleOnChangeQueCertifDesea}
                    data-length={200}
                    validate
                />
                <div className="row">
                    <p>¿Tiene establecidos sistemas de Buenas Prácticas en los siguientes ámbitos?</p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="practica_calidad"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaCalidad}
                            />
                            <span>Calidad</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="practica_ambiente"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaAmbiente}
                            />
                            <span>Medio Ambiente</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="practica_prevencion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaPrevencion}
                            />
                            <span>Prevención</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="practica_recursos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaRecursos}
                            />
                            <span>Recursos humanos</span>
                        </label>
                    </p>
                    <p className="input-field col s6" style={{ 'marginBottom': '50px' }}>
                        <label>
                            <input
                                id="practica_produccion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaProduccion}
                            />
                            <span>Producción</span>
                        </label>
                    </p>
                    <p className="input-field col s6" style={{ 'marginBottom': '50px' }}>
                        <label>
                            <input
                                id="practica_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPracticaOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">Normativa</h5>
                    <p>¿Conoce la normativa aplicable en cada una de estas materias CALIDAD, PREVENCIÓN, MEDIO AMBIENTE?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="conoce_normativas" type="radio" onChange={handleOnChangeRadioConoceNormat}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="conoce_normativas" type="radio" onChange={handleOnChangeRadioConoceNormat} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="conoce_normativas" type="radio" onChange={handleOnChangeRadioConoceNormat} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si la respuesta anterior es negativa…¿Estaría interesado/a en contar con información de alguna de ellas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesa_normativas" type="radio" onChange={handleOnChangeRadioInteresNormat} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesa_normativas" type="radio" onChange={handleOnChangeRadioInteresNormat} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesa_normativas" type="radio" onChange={handleOnChangeRadioInteresNormat}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta anterior es negativa...¿le resultaría interesante o necesario poder certificarse en algún ámbito?</p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_calidad"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresCalidad}
                            />
                            <span>Calidad</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_prevencion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresPrevenc}
                            />
                            <span>Prevención</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_ambiente"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresAmbiente}
                            />
                            <span>Medio Ambiente</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="interesa_otra"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresOtra}
                            />
                            <span>Otra</span>
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

export default Page09AForm;
