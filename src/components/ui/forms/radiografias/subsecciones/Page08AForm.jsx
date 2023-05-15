import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage8A } from "../../../../../actions/radiografia/page08";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page08AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        dispone_internet: '',
        posee_pagina_web: '',
        gustaria_disponer_pagina: '',
        resulta_interesante: '',
        valora_learning: '',
        tiene_presencia_redes: '',
        presencia_facebook: false,
        presencia_twitter: false,
        presencia_linkedin: false,
        presencia_flicker: false,
        presencia_skype: false,
        presencia_youtube: false,
        que_area: '',
        que_recursos: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage8A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioDisponeInternet = e => {
        setTempForm({
            ...tempForm,
            dispone_internet: e.target.value,
        });
    };

    const handleOnChangeRadioPoseePag = e => {
        setTempForm({
            ...tempForm,
            posee_pagina_web: e.target.value,
        });
    };

    const handleOnChangeRadioGustariaPag = e => {
        setTempForm({
            ...tempForm,
            gustaria_disponer_pagina: e.target.value,
        });
    };

    const handleOnChangeRadioResultaInters= e => {
        setTempForm({
            ...tempForm,
            resulta_interesante: e.target.value,
        });
    };

    const handleOnChangeRadioValoraLearning= e => {
        setTempForm({
            ...tempForm,
            valora_learning: e.target.value,
        });
    };

    const handleOnChangeRadioTienePresRedes = e => {
        setTempForm({
            ...tempForm,
            tiene_presencia_redes: e.target.value,
        });
    };

    const handleOnChangeCheckboxPresFacebook = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_facebook: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_facebook: false,
            });
        }
    };

    const handleOnChangeCheckboxPresTwitter= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_twitter: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_twitter: false,
            });
        }
    };

    const handleOnChangeCheckboxPresLinkedin = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_linkedin: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_linkedin: false,
            });
        }
    };

    const handleOnChangeCheckboxPresFlicker= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_flicker: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_flicker: false,
            });
        }
    };

    const handleOnChangeCheckboxPresSkype = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_skype: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_skype: false,
            });
        }
    };

    const handleOnChangeCheckboxPresYoutube= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                presencia_youtube: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                presencia_youtube: false,
            });
        }
    };

    const handleOnChangeQueArea = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_area: e.target.value,
        });
    };

    const handleOnChangeQueRecursos = e => {
        setTempForm({
            ...tempForm,
            que_recursos: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Internet</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Disponen de conexión a Internet?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="dispone_internet" type="radio" onChange={handleOnChangeRadioDisponeInternet}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="dispone_internet" type="radio" onChange={handleOnChangeRadioDisponeInternet}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="dispone_internet" type="radio" onChange={handleOnChangeRadioDisponeInternet}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Poseen página web?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="posee_pagina_web" type="radio" onChange={handleOnChangeRadioPoseePag}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="posee_pagina_web" type="radio" onChange={handleOnChangeRadioPoseePag}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="posee_pagina_web" type="radio" onChange={handleOnChangeRadioPoseePag}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si no dispone de página web, ¿Le gustaría disponer de página web?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="gustaria_disponer_pagina" type="radio" onChange={handleOnChangeRadioGustariaPag}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="gustaria_disponer_pagina" type="radio" onChange={handleOnChangeRadioGustariaPag} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="gustaria_disponer_pagina" type="radio" onChange={handleOnChangeRadioGustariaPag} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>Si dispone de página web... ¿le resultaría interesante activar acciones para mejorar el posicionamiento de la página generar negocio a través de ella?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="resulta_interesante" type="radio" onChange={handleOnChangeRadioResultaInters} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="resulta_interesante" type="radio" onChange={handleOnChangeRadioResultaInters} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value=""  name="resulta_interesante" type="radio" onChange={handleOnChangeRadioResultaInters}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Valora el e-learning como una alternativa de formación útil para su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraLearning} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraLearning} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="valora_learning" type="radio" onChange={handleOnChangeRadioValoraLearning} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Tienen presencia en redes sociales?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="tiene_presencia_redes" type="radio" onChange={handleOnChangeRadioTienePresRedes} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="tiene_presencia_redes" type="radio" onChange={handleOnChangeRadioTienePresRedes} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="tiene_presencia_redes" type="radio" onChange={handleOnChangeRadioTienePresRedes} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row">
                    <p>Si la respuesta es sí, ¿En qué redes sociales?</p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_facebook"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresFacebook}
                            />
                            <span>Facebook</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_twitter"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresTwitter}
                            />
                            <span>Twitter</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_linkedin"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresLinkedin}
                            />
                            <span>Linkedin</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_flicker"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresFlicker}
                            />
                            <span>Flicker</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_skype"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresSkype}
                            />
                            <span>Skype</span>
                        </label>
                    </p>
                    <p className="input-field col s6">
                        <label>
                            <input
                                id="presencia_youtube"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxPresYoutube}
                            />
                            <span>Youtube</span>
                        </label>
                    </p>
                </div>
                <TextInput
                    s={12}
                    id="que_area"
                    name="que_area"
                    value={tempForm.que_area}
                    onChange={handleOnChangeQueArea}
                    label="Si utiliza redes sociales, indique qué área se encarga de gestionar las redes sociales"
                    validate
                //disabled={disabled}
                />
                <div className="row no-margin-bot">
                    <p>¿Con qué recursos se asume esta actividad?</p>
                    <label className="col s12">
                        <input className="with-gap" value="Recursos propios" name="que_recursos" type="radio" onChange={handleOnChangeQueRecursos}/>
                        <span>Recursos propios</span>
                    </label>
                    <label className="col s12">
                        <input className="with-gap" value="Subcontrato la actividad" name="que_recursos" type="radio" onChange={handleOnChangeQueRecursos}/>
                        <span>Subcontrato la actividad</span>
                    </label>
                    <label className="col s12">
                        <input className="with-gap" value="No sabe/No contesta" name="que_recursos" type="radio" onChange={handleOnChangeQueRecursos}/>
                        <span>No sabe/No contesta</span>
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

export default Page08AForm;
