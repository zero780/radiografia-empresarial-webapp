import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage2D } from "../../../../../actions/radiografia/page02";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page02DForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States

    //para admin y supervisor
    let tempFormAdmin = {
        esPatentar: true,
        esAsesoramiento: false,
        patentes: [
            { tipo: "Diseño de máquinas y métodos." },
            { tipo: "Invensión de ornamentación." },
        ],
    }

    const initialStatePatente = {
        tipo: '',
        descripcion: '',
    };
    const [tempPatente, setTempPatente] = useState(initialStatePatente);

    const initialState = {
        patentes: [],
        esPatentar: "",
        esAsesoramiento: "",
        idEstado: "1",
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
        dispatch(startAsyncCreateRadiografiaPage2D({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeTipo = e => {
        e.preventDefault();
        setTempPatente({
            ...tempPatente,
            tipo: e.target.value,
        });
    };

    const handleOnChangeDescripcion = e => {
        e.preventDefault();
        setTempPatente({
            ...tempPatente,
            descripcion: e.target.value,
        });
    };

    const handleOnChangeRadio1 = e => {
        setTempForm({
            ...tempForm,
            esPatentar: e.target.value,
        });
    };

    const handleOnChangeRadio2 = e => {
        setTempForm({
            ...tempForm,
            esAsesoramiento: e.target.value,
        });
    };

    const handleAddPatenteMarca = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            patentes: [
                ...tempForm.patentes,
                {
                    ...tempPatente,
                },
            ],
        });

        setTempPatente({
            tipo: '',
            descripcion: '',
        });
    }

    const handleRemovePatente = tipo => {
        setTempForm({
            ...tempForm,
            patentes: tempForm.patentes?.filter(function (patente) {
                return patente.tipo !== tipo;
            })
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Patentes o Marcas Registradas</h5>
                </div>
                {
                    tempForm.patentes?.length ? (
                        <div className="row">
                            <PatentesList patentes={tempForm.patentes} removeCallback={handleRemovePatente} />
                        </div>
                    ) : ''
                }
                {
                    (!esAdmin && !esSupervisor) ? (
                        <div className="row">
                            <TextInput
                                icon={<Icon>category</Icon>}
                                s={12}
                                id="tipo"
                                name="tipo"
                                value={tempPatente.tipo}
                                onChange={handleOnChangeTipo}
                                label="Tipo de patente o marca"
                                validate
                            //disabled={disabled}
                            />
                            <Textarea
                                icon={<Icon>mode_edit</Icon>}
                                s={10}
                                id="descripcion"
                                label="Descripción"
                                value={tempPatente.descripcion}
                                onChange={handleOnChangeDescripcion}
                                data-length={200}
                                validate
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
                                    disabled={!tempPatente.tipo.length}
                                    onClick={handleAddPatenteMarca}
                                    tooltip="Agregar patente/marca"
                                />
                            </div>
                        </div>
                    ) : ''
                }
                <div className="row no-margin-bot">
                    <p>¿Tiene pensado patentar algún producto/servicio?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esPatentar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} checked={tempForm.esPatentar}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="esPatentar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} checked={!(tempForm.esPatentar)}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esPatentar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Estaría interesado en recibir asesoramiento en Propiedad Intelectual?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esAsesoramiento" type="radio" onChange={handleOnChangeRadio2} disabled={esAdmin || esSupervisor} checked={tempForm.esAsesoramiento}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="esAsesoramiento" type="radio" onChange={handleOnChangeRadio2} disabled={esAdmin || esSupervisor} checked={!(tempForm.esAsesoramiento)}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esAsesoramiento" type="radio" onChange={handleOnChangeRadio2} disabled={esAdmin || esSupervisor} />
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

export default Page02DForm;
