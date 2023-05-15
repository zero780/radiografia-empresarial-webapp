import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage3A } from "../../../../../actions/radiografia/page03";
import { startAsyncGetImportancias, startAsyncGetPosicionamientos } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import FactoresList from "../../../../screens/radiografia/factores/FactoresList";

const Page03AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { importancias } = useSelector(state => state.importancias);
    const { posicionamientos } = useSelector(state => state.posicionamientos);

    useEffect(() => {
        dispatch(startAsyncGetImportancias(token));
        dispatch(startAsyncGetPosicionamientos(token));
    }, []);

    // States
    //let importancias = [{ 'id': 1, 'nombre': 'Poco Importante' }, { 'id': 2, 'nombre': 'Importante' }, { 'id': 3, 'nombre': 'Muy Importante' }]
    //let posicionamientos = [{ 'id': 1, 'nombre': 'Muy Bajo' }, { 'id': 2, 'nombre': 'Bajo' }, { 'id': 3, 'nombre': 'Normal' }, { 'id': 4, 'nombre': 'Alto' }, { 'id': 5, 'nombre': 'Muy Alto' }]

    //para admin y supervisor
    let tempFormAdmin = {
        factores: [
            { factor: "Diferenciación de marca." },
            { factor: "Relación con la competencia." },
        ],
    }

    const initialStateFactor = {
        factor: '',
        id_importancia: '',
        id_posicionamiento: '',
    };

    const [tempFactor, setTempFactor] = useState(initialStateFactor);

    const initialState = {
        factores: [],
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
        dispatch(startAsyncCreateRadiografiaPage3A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeFactor = e => {
        e.preventDefault();
        setTempFactor({
            ...tempFactor,
            factor: e.target.value,
        });
    };

    const handleOnChangeRadioImportancia = e => {
        setTempFactor({
            ...tempFactor,
            id_importancia: e.target.value,
        });
    };

    const handleOnChangeRadioPosicionamiento = e => {
        setTempFactor({
            ...tempFactor,
            id_posicionamiento: e.target.value,
        });
    };

    const handleAddFactorCompetitividad = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            factores: [
                ...tempForm.factores,
                {
                    ...tempFactor,
                },
            ],
        });

        setTempFactor({
            factor: '',
            id_importancia: '',
            id_posicionamiento: '',
        });

        cleanRadiosCheckbox('id_importancia');
        cleanRadiosCheckbox('id_posicionamiento');
    }

    const handleRemoveFactor = nombre => {
        setTempForm({
            ...tempForm,
            factores: tempForm.factores?.filter(function (factor) {
                return factor.factor !== nombre;
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
                    <h5 className="more-text">Factores de Competitividad</h5>
                </div>
                {
                    tempForm.factores?.length ? (
                        <div className="row">
                            <FactoresList factores={tempForm.factores} removeCallback={handleRemoveFactor} />
                        </div>
                    ) : ''
                }
                {
                    (!esAdmin && !esSupervisor) ? (
                        <div className="row">
                            <TextInput
                                icon={<Icon>apartment</Icon>}
                                s={10}
                                id="factor"
                                name="factor"
                                value={tempFactor.factor}
                                onChange={handleOnChangeFactor}
                                label="Factor de Competitividad"
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
                                    disabled={!tempFactor.factor.length}
                                    onClick={handleAddFactorCompetitividad}
                                    tooltip="Agregar factor"
                                />
                            </div>
                            <div className="row no-margin-bot">
                                <p>Grado de importancia:</p>
                                {
                                    importancias.map(({ id, nombre }) =>
                                        <label className="col s12">
                                            <input className="with-gap col s6" value={id} name="id_importancia" type="radio" onChange={handleOnChangeRadioImportancia} />
                                            <span>{nombre}</span>
                                        </label>
                                    )
                                }
                            </div>
                            <div className="row no-margin-bot">
                                <p>Posicionamiento actual:</p>
                                {
                                    posicionamientos.map(({ id, nombre }) =>
                                        <label className="col s12">
                                            <input className="with-gap col s6" value={id} name="id_posicionamiento" type="radio" onChange={handleOnChangeRadioPosicionamiento} />
                                            <span>{nombre}</span>
                                        </label>
                                    )
                                }
                            </div>
                        </div>
                    ) : ''
                }
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

export default Page03AForm;
