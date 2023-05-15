import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage10A } from "../../../../../actions/radiografia/page10";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import EmpresasList from "../../../../screens/radiografia/empresas/EmpresasList";

const Page10AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialStateEmpresa = {
        nombre_empresa: '',
        tipo_colaboracion: '',
    };
    const [tempEmpresa, setTempEmpresa] = useState(initialStateEmpresa);

    const initialState = {
        pertenece_holding: '',
        cual_grupo: '',
        pertenece_incubadora: '',
        cual_incubadora: '',
        pertenece_asociacion: '',
        cual_asociacion: '',
        interes_asociacion: '',
        motivo_asociacion: '',
        colabora_con_universidades: '',
        colabora_con_empresas: '',
        empresas: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage10A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioPerteneceHolding = e => {
        setTempForm({
            ...tempForm,
            pertenece_holding: e.target.value,
        });
    };

    const handleOnChangeCualGrupo = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cual_grupo: e.target.value,
        });
    };

    const handleOnChangeRadioPerteneceIncub = e => {
        setTempForm({
            ...tempForm,
            pertenece_incubadora: e.target.value,
        });
    };

    const handleOnChangeCualIncub = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cual_incubadora: e.target.value,
        });
    };

    const handleOnChangeRadioPerteneceAsoc = e => {
        setTempForm({
            ...tempForm,
            pertenece_asociacion: e.target.value,
        });
    };

    const handleOnChangeCualAsoc = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cual_asociacion: e.target.value,
        });
    };

    const handleOnChangeRadioInteresAsoc = e => {
        setTempForm({
            ...tempForm,
            interes_asociacion: e.target.value,
        });
    };

    const handleOnChangeMotivoAsoc = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            motivo_asociacion: e.target.value,
        });
    };

    const handleOnChangeRadioColabUniv = e => {
        setTempForm({
            ...tempForm,
            colabora_con_universidades: e.target.value,
        });
    };

    const handleOnChangeRadioColabEmpr = e => {
        setTempForm({
            ...tempForm,
            colabora_con_empresas: e.target.value,
        });
    };

    const handleOnChangeNombreEmpr= e => {
        e.preventDefault();
        setTempEmpresa({
            ...tempEmpresa,
            nombre_empresa: e.target.value,
        });
    };

    const handleOnChangeTipoColab = e => {
        e.preventDefault();
        setTempEmpresa({
            ...tempEmpresa,
            tipo_colaboracion: e.target.value,
        });
    };

    const handleAddEmpresaColaboracion = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            empresas: [
                ...tempForm.empresas,
                {
                    ...tempEmpresa,
                },
            ],
        });

        setTempEmpresa({
            nombre_empresa: '',
            tipo_colaboracion: '',
        });
    }

    const handleRemoveEmpresa = nombre => {
        setTempForm({
            ...tempForm,
            empresas: tempForm.empresas?.filter(function (empresa) {
                return empresa.nombre_empresa !== nombre;
            })
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <p>¿Pertenece a algún grupo empresarial (Holding)?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="pertenece_holding" type="radio" onChange={handleOnChangeRadioPerteneceHolding}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false}  name="pertenece_holding" type="radio" onChange={handleOnChangeRadioPerteneceHolding}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="pertenece_holding" type="radio" onChange={handleOnChangeRadioPerteneceHolding}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cual_grupo"
                    label="Si la respuesta anterior es afirmativa… ¿Cuál grupo?"
                    value={tempForm.cual_grupo}
                    onChange={handleOnChangeCualGrupo}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Pertenece a alguna incubadora de empresas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="pertenece_incubadora" type="radio" onChange={handleOnChangeRadioPerteneceIncub}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="pertenece_incubadora" type="radio" onChange={handleOnChangeRadioPerteneceIncub}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="pertenece_incubadora" type="radio" onChange={handleOnChangeRadioPerteneceIncub}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cual_incubadora"
                    label="Si la respuesta anterior es afirmativa… ¿Cuál incubadora?"
                    value={tempForm.cual_incubadora}
                    onChange={handleOnChangeCualIncub}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Pertenece a algún tipo de asociación empresarial?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true}  name="pertenece_asociacion" type="radio" onChange={handleOnChangeRadioPerteneceAsoc}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false}  name="pertenece_asociacion" type="radio" onChange={handleOnChangeRadioPerteneceAsoc}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value=""  name="pertenece_asociacion" type="radio" onChange={handleOnChangeRadioPerteneceAsoc}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="cual_asociacion"
                    label="Si la respuesta anterior es afirmativa… ¿Cuál asociación?"
                    value={tempForm.cual_asociacion}
                    onChange={handleOnChangeCualAsoc}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>Si no pertenece a  alguna asociación  ¿Estaría interesado/a en formar parte de alguna Asociación de empresas?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="interes_asociacion" type="radio" onChange={handleOnChangeRadioInteresAsoc}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="interes_asociacion" type="radio" onChange={handleOnChangeRadioInteresAsoc}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="interes_asociacion" type="radio" onChange={handleOnChangeRadioInteresAsoc}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="motivo_asociacion"
                    label="¿Por qué motivo le interesaría formar parte de una Asociación de empresas?"
                    value={tempForm.motivo_asociacion}
                    onChange={handleOnChangeMotivoAsoc}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Colabora o ha colaborado recientemente con Universidades, Centros de Innovación y Tecnología, consultoras especializadas, etc. para el desarrollo de actividades innovadoras?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="colabora_con_universidades" type="radio" onChange={handleOnChangeRadioColabUniv}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="colabora_con_universidades" type="radio" onChange={handleOnChangeRadioColabUniv} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="colabora_con_universidades" type="radio" onChange={handleOnChangeRadioColabUniv} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Colabora o ha colaborado recientemente con otras empresas para el desarrollo de actividades innovadoras?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="colabora_con_empresas" type="radio" onChange={handleOnChangeRadioColabEmpr}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="colabora_con_empresas" type="radio" onChange={handleOnChangeRadioColabEmpr}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="colabora_con_empresas" type="radio" onChange={handleOnChangeRadioColabEmpr}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <p>Si la respuesta anterior es afirmativa…</p>
                {
                    tempForm.empresas?.length ? (
                        <div className="row">
                            <EmpresasList empresas={tempForm.empresas} removeCallback={handleRemoveEmpresa} />
                        </div>
                    ) : ''
                }
                <TextInput
                    s={12}
                    id="nombre_empresa"
                    name="nombre_empresa"
                    value={tempEmpresa.nombre_empresa}
                    onChange={handleOnChangeNombreEmpr}
                    label="Nombre de la empresa"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={10}
                    id="tipo_colaboracion"
                    name="tipo_colaboracion"
                    value={tempEmpresa.tipo_colaboracion}
                    onChange={handleOnChangeTipoColab}
                    label="Tipo de colaboración"
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
                        disabled={!tempEmpresa.nombre_empresa.length}
                        onClick={handleAddEmpresaColaboracion}
                        tooltip="Agregar empresa"
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

export default Page10AForm;
