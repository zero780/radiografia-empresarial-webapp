import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage7B } from "../../../../../actions/radiografia/page07";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ContactosList from "../../../../screens/radiografia/contactos/ContactosList";

const Page07BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor  }) => {

    // States
    let niveles = [{ 'id': '1', 'nombre': 'Primaria' }, { 'id': '2', 'nombre': 'Secundaria' }, { 'id': '3', 'nombre': 'Superior/Universitaria' }, { 'id': '4', 'nombre': 'Post Grado' }]

    const initialStateContacto = {
        area_empresa: '',
        persona_contacto: '',
        genero: '',
        id_tipo_cualificacion: '',
        puesto_trabajo: '',
        telefono: '',
        mail: '',
    };
    const [tempContacto, setTempContacto] = useState(initialStateContacto);

    const initialState = {
        contactos: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeArea = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            area_empresa: e.target.value,
        });
    };

    const handleOnChangePersona = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            persona_contacto: e.target.value,
        });
    };

    const handleOnChangeRadioGenero = e => {
        setTempContacto({
            ...tempContacto,
            genero: e.target.value,
        });
    };

    const handleOnChangeSelectNivel = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            id_tipo_cualificacion: e.target.value,
        });
    };

    const handleOnChangePuesto = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            puesto_trabajo: e.target.value,
        });
    };
    const handleOnChangeTelefono = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            telefono: e.target.value,
        });
    };
    const handleOnChangeMail = e => {
        e.preventDefault();
        setTempContacto({
            ...tempContacto,
            mail: e.target.value,
        });
    };

    const handleAddContacto = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            contactos: [
                ...tempForm.contactos,
                {
                    ...tempContacto,
                },
            ],
        });

        setTempContacto({
            area_empresa: '',
            persona_contacto: '',
            genero: '',
            id_tipo_cualificacion: '',
            puesto_trabajo: '',
            telefono: '',
            mail: '',
        });

        cleanRadiosCheckbox('genero');
        document.getElementById('nivel_cualificacion').value = "";
    }

    const handleRemoveContacto = area => {
        setTempForm({
            ...tempForm,
            contactos: tempForm.contactos?.filter(function (contacto) {
                return contacto.area_empresa !== area;
            })
        });
    };

    const cleanRadiosCheckbox = nombre => {
        let inputs = document.getElementsByName(nombre);
        inputs.forEach((input) => {
            if (input.checked) {
                input.checked = false;
            }
        })
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Estructura departamental y responsables</h5>
                </div>
                {
                    tempForm.contactos?.length ? (
                        <div className="row">
                            <ContactosList contactos={tempForm.contactos} removeCallback={handleRemoveContacto} />
                        </div>
                    ) : ''
                }
                <TextInput
                    s={12}
                    id="area_empresa"
                    name="area_empresa"
                    value={tempContacto.area_empresa}
                    onChange={handleOnChangeArea}
                    label="Área de la empresa"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="persona_contacto"
                    name="persona_contacto"
                    value={tempContacto.persona_contacto}
                    onChange={handleOnChangePersona}
                    label="Persona de contacto"
                    validate
                //disabled={disabled}
                />
                <div className="row no-margin-bot center-align">
                    <label className="col s6">
                        <input className="with-gap" value="Hombre" name="genero" type="radio" onChange={handleOnChangeRadioGenero}/>
                        <span>Hombre</span>
                    </label>
                    <label className="col s6">
                        <input className="with-gap" value="Mujer" name="genero" type="radio" onChange={handleOnChangeRadioGenero}/>
                        <span>Mujer</span>
                    </label>
                </div>
                <Select
                    id="nivel_cualificacion"
                    name="nivel_cualificacion"
                    s={12}
                    label="Nivel de Cualificación"
                    onChange={handleOnChangeSelectNivel}
                    value=""
                >
                    <option value="" key={`nivel_cualificacion_vacioDefault_0`} disabled selected>
                        Escoja el nivel
                    </option>
                    {
                        niveles.map(({ id, nombre }) => <option key={`nivel_cualificacion_${nombre}`} value={id}>{nombre}</option>)
                    }
                </Select>
                <TextInput
                    s={12}
                    id="puesto_trabajo"
                    name="puesto_trabajo"
                    value={tempContacto.puesto_trabajo}
                    onChange={handleOnChangePuesto}
                    label="Puesto de trabajo"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="telefono"
                    name="telefono"
                    value={tempContacto.telefono}
                    onChange={handleOnChangeTelefono}
                    label="Teléfono"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={10}
                    id="mail"
                    name="mail"
                    value={tempContacto.mail}
                    onChange={handleOnChangeMail}
                    label="Correo electrónico"
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
                        disabled={!tempContacto.area_empresa.length}
                        onClick={handleAddContacto}
                        tooltip="Agregar contacto"
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

export default Page07BForm;
