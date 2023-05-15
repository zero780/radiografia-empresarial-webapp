import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage2H } from "../../../../../actions/radiografia/page02";
import { startAsyncGetPosicionamientos } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page02HForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { posicionamientos } = useSelector(state => state.posicionamientos);

    useEffect(() => {
        dispatch(startAsyncGetPosicionamientos(token));
    }, []);

    //let competencias = [{ 'id': 1, 'nombre': 'Muy Bajo' }, { 'id': 2, 'nombre': 'Bajo' }, { 'id': 3, 'nombre': 'Normal' }, { 'id': 4, 'nombre': 'Alto' }, { 'id': 5, 'nombre': 'Muy Alto' }]
    //let posicionamientos = [{ 'id': 1, 'nombre': 'Muy Bajo' }, { 'id': 2, 'nombre': 'Bajo' }, { 'id': 3, 'nombre': 'Normal' }, { 'id': 4, 'nombre': 'Alto' }, { 'id': 5, 'nombre': 'Muy Alto' }]

    // States
    const initialState = {
        idCompetencia: '',
        idPosicionamiento: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2H({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadio1 = e => {
        setTempForm({
            ...tempForm,
            idCompetencia: e.target.value,
        });
    };

    const handleOnChangeRadio2 = e => {
        setTempForm({
            ...tempForm,
            idPosicionamiento: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Competencia y Posicionamiento</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>Nivel de competencia en el sector:</p>
                    {
                        posicionamientos.map(({ id, nombre }) =>
                            <label className="col s12">
                                <input className="with-gap col s6" key={`idCompetencia_${id}`} value={id} name="idCompetencia" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor}/>
                                <span>{nombre}</span>
                            </label>
                        )
                    }
                </div>
                <div className="row no-margin-bot">
                    <p>Posicionamiento respecto a la competencia:</p>
                    {
                        posicionamientos.map(({ id, nombre }) =>
                            <label className="col s12">
                                <input className="with-gap col s6" key={`idPosicionamiento_${id}`} value={id} name="idPosicionamiento" type="radio" onChange={handleOnChangeRadio2} disabled={esAdmin || esSupervisor}/>
                                <span>{nombre}</span>
                            </label>
                        )
                    }
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

export default Page02HForm;
