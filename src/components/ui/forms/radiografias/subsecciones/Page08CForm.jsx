import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage8C } from "../../../../../actions/radiografia/page08";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import TecnologiasList from "../../../../screens/radiografia/tecnologias/TecnologiasList";

const Page08CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialStateTecnologia = {
        maquinaria_tecnologia: '',
        uso_diferenciacion: '',
    };
    const [tempTecnologia, setTempTecnologia] = useState(initialStateTecnologia);

    const initialState = {
        tecnologias: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage8C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeMaquinTecnolog = e => {
        e.preventDefault();
        setTempTecnologia({
            ...tempTecnologia,
            maquinaria_tecnologia: e.target.value,
        });
    };

    const handleOnChangeUso = e => {
        e.preventDefault();
        setTempTecnologia({
            ...tempTecnologia,
            uso_diferenciacion: e.target.value,
        });
    };

    const handleAddMaquinaria = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tecnologias: [
                ...tempForm.tecnologias,
                {
                    ...tempTecnologia,
                },
            ],
        });

        setTempTecnologia({
            maquinaria_tecnologia: '',
            uso_diferenciacion: '',
        });
    }

    const handleRemoveMaquinaria = nombre => {
        setTempForm({
            ...tempForm,
            tecnologias: tempForm.tecnologias?.filter(function (tecnologia) {
                return tecnologia.maquinaria_tecnologia !== nombre;
            })
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Maquinaria y Tecnología empleada en el proceso productivo que suponga un hecho diferencial para la empresa</h5>
                </div>
                {
                    tempForm.tecnologias?.length ? (
                        <div className="row">
                            <TecnologiasList tecnologias={tempForm.tecnologias} removeCallback={handleRemoveMaquinaria} />
                        </div>
                    ) : ''
                }
                <Textarea
                    s={12}
                    id="maquinaria_tecnologia"
                    name="maquinaria_tecnologia"
                    label="Maquinaria / Tecnología"
                    value={tempTecnologia.maquinaria_tecnologia}
                    onChange={handleOnChangeMaquinTecnolog}
                    data-length={200}
                    validate
                />
                <Textarea
                    s={10}
                    id="uso_diferenciacion"
                    name="uso_diferenciacion"
                    label="Uso y diferenciación que le aporta a la empresa respecto a la competencia"
                    value={tempTecnologia.uso_diferenciacion}
                    onChange={handleOnChangeUso}
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
                        disabled={!tempTecnologia.maquinaria_tecnologia}
                        onClick={handleAddMaquinaria}
                        tooltip="Agregar maquinaria/tecnología"
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

export default Page08CForm;
