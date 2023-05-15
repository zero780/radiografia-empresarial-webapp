import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage9B } from "../../../../../actions/radiografia/page09";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page09AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        toma_medidas: '',
        cuales_medidas: '',
        tiene_auditorias: '',
        interesa_auditorias: '',
        medida_eficiencia_instalaciones: false,
        medida_eficiencia_proceso: false,
        plan_residuos: false,
        plan_agua: false,
        dispone_fuentes_renovables: '',
        cuales_fuentes: '',
        interes_fotovoltaica: false,
        interes_solar_termica: false,
        interes_biomasa: false,
        interes_eolica: false,
        interes_cogeneracion: false,
        interes_desconoce: false,
        dispone_informe: '',
        cuales_informes: '',
        quien_emitio_informe: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage9B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //tiene certificaciones
    const handleOnChangeRadioTomaMedidas = e => {
        setTempForm({
            ...tempForm,
            toma_medidas: e.target.value,
        });
    };

    const handleOnChangeCualesMedidas = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_medidas: e.target.value,
        });
    };

    const handleOnChangeRadioTieneAudit = e => {
        setTempForm({
            ...tempForm,
            tiene_auditorias: e.target.value,
        });
    };

    const handleOnChangeRadioInteresaAudit = e => {
        setTempForm({
            ...tempForm,
            interesa_auditorias: e.target.value,
        });
    };

    const handleOnChangeCheckboxMedEficInstal = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                medida_eficiencia_instalaciones: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                medida_eficiencia_instalaciones: false,
            });
        }
    };

    const handleOnChangeCheckboxMedEficProc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                medida_eficiencia_proceso: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                medida_eficiencia_proceso: false,
            });
        }
    };

    const handleOnChangeCheckboxPlanResid = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                plan_residuos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                plan_residuos: false,
            });
        }
    };

    const handleOnChangeCheckboxPlanAgua = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                plan_agua: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                plan_agua: false,
            });
        }
    };

    const handleOnChangeRadioDisponeFuentes = e => {
        setTempForm({
            ...tempForm,
            dispone_fuentes_renovables: e.target.value,
        });
    };

    const handleOnChangeCualesFuentes = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_fuentes: e.target.value,
        });
    };

    const handleOnChangeCheckboxInteresFotov = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_fotovoltaica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_fotovoltaica: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresSolar = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_solar_termica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_solar_termica: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresBiomasa = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_biomasa: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_biomasa: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresEol = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_eolica: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_eolica: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresCogenerac = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_cogeneracion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_cogeneracion: false,
            });
        }
    };

    const handleOnChangeCheckboxInteresDescon = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                interes_desconoce: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                interes_desconoce: false,
            });
        }
    };

    const handleOnChangeRadioDisponeInforme = e => {
        setTempForm({
            ...tempForm,
            dispone_informe: e.target.value,
        });
    };

    const handleOnChangeCualesInformes = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_informes: e.target.value,
        });
    };

    const handleOnChangeQuienEmitInformes = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            quien_emitio_informe: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Sostenibilidad</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Toman medidas específicas orientadas a la reducción del consumo de gas o electricidad?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="toma_medidas" type="radio" onChange={handleOnChangeRadioTomaMedidas}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="toma_medidas" type="radio" onChange={handleOnChangeRadioTomaMedidas} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="toma_medidas" type="radio" onChange={handleOnChangeRadioTomaMedidas} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cuales_medidas"
                    label="Si la respuesta anterior es afirmativa… ¿Cuáles medidas?"
                    value={tempForm.cuales_medidas}
                    onChange={handleOnChangeCualesMedidas}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Se han llevado a cabo Auditorías Energéticas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_auditorias" type="radio" onChange={handleOnChangeRadioTieneAudit}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_auditorias" type="radio" onChange={handleOnChangeRadioTieneAudit}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_auditorias" type="radio" onChange={handleOnChangeRadioTieneAudit}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si la respuesta es negativa: ¿Estarían interesados en llevar a cabo una Auditoría Energética?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesa_auditorias" type="radio" onChange={handleOnChangeRadioInteresaAudit} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesa_auditorias" type="radio" onChange={handleOnChangeRadioInteresaAudit} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesa_auditorias" type="radio" onChange={handleOnChangeRadioInteresaAudit} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>¿En qué aspectos cree que podría resultar interesante actuar desde el punto de vista de la sostenibilidad?</p>
                    <p>
                        <label>
                            <input
                                id="medida_eficiencia_instalaciones"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMedEficInstal}
                            />
                            <span>Medidas de eficiencia energética en las instalaciones auxiliares (climatización, ACS, iluminación)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="medida_eficiencia_proceso"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMedEficProc}
                            />
                            <span>Medidas de eficiencia energética en el proceso productivo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="plan_residuos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPlanResid}
                            />
                            <span>Plan de minimización de generación de residuos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="plan_agua"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPlanAgua}
                            />
                            <span>Plan de minimización del consumo de agua</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Disponen de fuentes de energías renovables?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="dispone_fuentes_renovables" type="radio" onChange={handleOnChangeRadioDisponeFuentes}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="dispone_fuentes_renovables" type="radio" onChange={handleOnChangeRadioDisponeFuentes}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="dispone_fuentes_renovables" type="radio" onChange={handleOnChangeRadioDisponeFuentes}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cuales_fuentes"
                    label="Si la respuesta anterior es afirmativa… ¿Cuáles fuentes?"
                    value={tempForm.cuales_fuentes}
                    onChange={handleOnChangeCualesFuentes}
                    data-length={200}
                    validate
                />
                <div className="row">
                    <p>¿Estarían interesados en instalar alguna de las siguientes energías renovables para reducir sus consumos energéticos?</p>
                    <p>
                        <label>
                            <input
                                id="interes_fotovoltaica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresFotov}
                            />
                            <span>Energía fotovoltaica</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="interes_solar_termica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresSolar}
                            />
                            <span>Energía Solar Térmica</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="interes_biomasa"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresBiomasa}
                            />
                            <span>Biomasa</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="interes_eolica"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresEol}
                            />
                            <span>Mini eólica</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="interes_cogeneracion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresCogenerac}
                            />
                            <span>Micro cogeneración</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="interes_desconoce"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInteresDescon}
                            />
                            <span>Desconozco cuál sería la más adecuada para mi caso, pero me gustaría implantar este tipo de instalaciones en mi empresa.</span>
                        </label>
                    </p>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Dispone de algún informe de evaluación de su edificio?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="dispone_informe" type="radio" onChange={handleOnChangeRadioDisponeInforme}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="dispone_informe" type="radio" onChange={handleOnChangeRadioDisponeInforme}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="dispone_informe" type="radio" onChange={handleOnChangeRadioDisponeInforme}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cuales_informes"
                    label="Si la respuesta anterior es afirmativa… ¿Cuáles informes?"
                    value={tempForm.cuales_informes}
                    onChange={handleOnChangeCualesInformes}
                    data-length={200}
                    validate
                />
                <TextInput
                    s={12}
                    id="quien_emitio_informe"
                    name="quien_emitio_informe"
                    value={tempForm.quien_emitio_informe}
                    onChange={handleOnChangeQuienEmitInformes}
                    label="¿Quién emitió el informe? Por ejemplo Bomberos, Municipio de ..señale la ciudad o provincia..., etc."
                    validate
                //disabled={disabled}
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

export default Page09AForm;
