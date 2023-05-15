import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage13A } from "../../../../../actions/radiografia/page13";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ProgramasList from "../../../../screens/radiografia/programas/ProgramasList";

const Page13AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialStatePrograma = {
        nombre_proyecto: '',
        nombre_programa: '',
        nombre_entidad: '',
        año_solicitud: '',
    };
    const [tempPrograma, setTempPrograma] = useState(initialStatePrograma);

    const initialState = {
        conoce_informacion: '',
        interesa_servicio: '',
        ha_solicitado: '',
        programas: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage13A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioConoceInfo = e => {
        setTempForm({
            ...tempForm,
            conoce_informacion: e.target.value,
        });
    };

    const handleOnChangeRadioInteresa= e => {
        setTempForm({
            ...tempForm,
            interesa_servicio: e.target.value,
        });
    };

    const handleOnChangeRadioHaSolic = e => {
        setTempForm({
            ...tempForm,
            ha_solicitado: e.target.value,
        });
    };

    const handleOnChangeNombreProy= e => {
        e.preventDefault();
        setTempPrograma({
            ...tempPrograma,
            nombre_proyecto: e.target.value,
        });
    };

    const handleOnChangeNombrePrograma = e => {
        e.preventDefault();
        setTempPrograma({
            ...tempPrograma,
            nombre_programa: e.target.value,
        });
    };

    const handleOnChangeNombreEntidad = e => {
        e.preventDefault();
        setTempPrograma({
            ...tempPrograma,
            nombre_entidad: e.target.value,
        });
    };

    const handleOnChangeAnioSolic = e => {
        e.preventDefault();
        setTempPrograma({
            ...tempPrograma,
            año_solicitud: e.target.value,
        });
    };

    const handleAddPrograma = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            programas: [
                ...tempForm.programas,
                {
                    ...tempPrograma,
                },
            ],
        });

        setTempPrograma({
            nombre_proyecto: '',
            nombre_programa: '',
            nombre_entidad: '',
            año_solicitud: '',
        });
    }

    const handleRemovePrograma = nombre => {
        setTempForm({
            ...tempForm,
            programas: tempForm.programas?.filter(function (programa) {
                return programa.nombre_proyecto !== nombre;
            })
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Programas de subvenciones y ayudas públicas de carácter general</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Conoce o recibe información sobre los diferentes programas de subvenciones y ayudas públicas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="conoce_informacion" type="radio" onChange={handleOnChangeRadioConoceInfo}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="conoce_informacion" type="radio" onChange={handleOnChangeRadioConoceInfo}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="conoce_informacion" type="radio" onChange={handleOnChangeRadioConoceInfo}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Le interesaría un servicio de asesoramiento en esta materia?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interesa_servicio" type="radio" onChange={handleOnChangeRadioInteresa} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interesa_servicio" type="radio" onChange={handleOnChangeRadioInteresa} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interesa_servicio" type="radio" onChange={handleOnChangeRadioInteresa} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Ha solicitado alguna vez, alguno de los programas de ayudas públicas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="ha_solicitado" type="radio" onChange={handleOnChangeRadioHaSolic}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="ha_solicitado" type="radio" onChange={handleOnChangeRadioHaSolic}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="ha_solicitado" type="radio" onChange={handleOnChangeRadioHaSolic}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <p>Si la respuesta anterior es afirmativa… ¿Cuáles programas?</p>
                {
                    tempForm.programas?.length ? (
                        <div className="row">
                            <ProgramasList programas={tempForm.programas} removeCallback={handleRemovePrograma} />
                        </div>
                    ) : ''
                }
                <TextInput
                    s={12}
                    id="nombre_proyecto"
                    name="nombre_proyecto"
                    value={tempPrograma.nombre_proyecto}
                    onChange={handleOnChangeNombreProy}
                    label="Nombre del proyecto"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="nombre_programa"
                    name="nombre_programa"
                    value={tempPrograma.nombre_programa}
                    onChange={handleOnChangeNombrePrograma}
                    label="Nombre del programa"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="nombre_entidad"
                    name="nombre_entidad"
                    value={tempPrograma.nombre_entidad}
                    onChange={handleOnChangeNombreEntidad}
                    label="Entidad"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={10}
                    id="año_solicitud"
                    name="año_solicitud"
                    value={tempPrograma.año_solicitud}
                    onChange={handleOnChangeAnioSolic}
                    label="Año de solicitud"
                    type="number"
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
                        disabled={!tempPrograma.nombre_proyecto}
                        onClick={handleAddPrograma}
                        tooltip="Agregar programa"
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

export default Page13AForm;
