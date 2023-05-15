import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage2F } from "../../../../../actions/radiografia/page02";
import { startAsyncGetMercados } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import PatentesList from "../../../../screens/radiografia/patentes/PatentesList";

const Page02FForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { mercados } = useSelector(state => state.mercados);

    useEffect(() => {
        dispatch(startAsyncGetMercados(token));
    }, []);

    //let mercados = [{ 'id': 1, 'nombre': 'Local' }, { 'id': 2, 'nombre': 'Provincial' }, { 'id': 3, 'nombre': 'Nacional' }, { 'id': 4, 'nombre': 'Internacional' }]

    const initialState = {
        porcentajeEmpresaPrivada: '',
        idMercadoGeograficoEmpresaPrivada: '',
        porcentajeEmpresaPublica: '',
        idMercadoGeograficoEmpresaPublica: '',
        porcentajeEmpresaMixta: '',
        idMercadoGeograficoEmpresaMixta: '',
        porcentajeEmpresaGeneral: '',
        idMercadoGeograficoGeneral: '',
        esAmpliar: '',
        cuales: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2F({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangePorcentajeEmpPrivada = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentajeEmpresaPrivada: e.target.value,
        });
    };

    const handleOnChangeMercadoEmpPrivada = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            idMercadoGeograficoEmpresaPrivada: e.target.value,
        });
    };

    const handleOnChangePorcentajeEmpPublica = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentajeEmpresaPublica: e.target.value,
        });
    };

    const handleOnChangeMercadoEmpPublica = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            idMercadoGeograficoEmpresaPublica: e.target.value,
        });
    };

    const handleOnChangePorcentajeEmpMixta = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentajeEmpresaMixta: e.target.value,
        });
    };

    const handleOnChangeMercadoEmpMixta = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            idMercadoGeograficoEmpresaMixta: e.target.value,
        });
    };

    const handleOnChangePorcentajeGeneral = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentajeEmpresaGeneral: e.target.value,
        });
    };

    const handleOnChangeMercadoGeneral = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            idMercadoGeograficoGeneral: e.target.value,
        });
    };

    const handleOnChangeRadio1 = e => {
        setTempForm({
            ...tempForm,
            esAmpliar: e.target.value,
        });
    };

    const handleOnChangeCuales = e => {
        setTempForm({
            ...tempForm,
            cuales: e.target.value,
        });
    }; 

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Cliente  - ¿cuál es el principal cliente?</h5>
                </div>
                <div className="row">
                    <TextInput
                        s={6}
                        id="porcentajeEmpresaPrivada"
                        name="porcentajeEmpresaPrivada"
                        value={tempForm.porcentajeEmpresaPrivada}
                        onChange={handleOnChangePorcentajeEmpPrivada}
                        label="% Empresa Privada"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <Select
                        id="idMercadoGeograficoEmpresaPrivada"
                        name="idMercadoGeograficoEmpresaPrivada"
                        s={6}
                        label="Mercado Geográfico"
                        disabled={esAdmin || esSupervisor}
                        onChange={handleOnChangeMercadoEmpPrivada}
                    >
                        <option value="" key={`id_mercado_geografico_vacioDefault_0`}>
                            Escoja el Mercado
                        </option>
                        {
                            mercados.map(({ id, nombre }) => <option key={`id_mercado_geografico_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <TextInput
                        s={6}
                        id="porcentajeEmpresaPublica"
                        name="porcentajeEmpresaPublica"
                        value={tempForm.porcentajeEmpresaPublica}
                        onChange={handleOnChangePorcentajeEmpPublica}
                        label="% Empresa Pública"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <Select
                        id="idMercadoGeograficoEmpresaPublica"
                        name="idMercadoGeograficoEmpresaPublica"
                        s={6}
                        label="Mercado Geográfico"
                        disabled={esAdmin || esSupervisor}
                        onChange={handleOnChangeMercadoEmpPublica}
                    >
                        <option value="" key={`id_mercado_geografico_vacioDefault_0`}>
                            Escoja el Mercado
                        </option>
                        {
                            mercados.map(({ id, nombre }) => <option key={`id_mercado_geografico_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <TextInput
                        s={6}
                        id="porcentajeEmpresaMixta"
                        name="porcentajeEmpresaMixta"
                        value={tempForm.porcentajeEmpresaMixta}
                        onChange={handleOnChangePorcentajeEmpMixta}
                        label="% Empresa Pública y Privada"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <Select
                        id="idMercadoGeograficoEmpresaMixta"
                        name="idMercadoGeograficoEmpresaMixta"
                        s={6}
                        label="Mercado Geográfico"
                        disabled={esAdmin || esSupervisor}
                        onChange={handleOnChangeMercadoEmpMixta}
                    >
                        <option value="" key={`id_mercado_geografico_vacioDefault_0`}>
                            Escoja el Mercado
                        </option>
                        {
                            mercados.map(({ id, nombre }) => <option key={`id_mercado_geografico_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                    <TextInput
                        s={6}
                        id="porcentajeEmpresaGeneral"
                        name="porcentajeEmpresaGeneral"
                        value={tempForm.porcentajeEmpresaGeneral}
                        onChange={handleOnChangePorcentajeGeneral}
                        label="% Público General"
                        validate
                        disabled={esAdmin || esSupervisor}
                    />
                    <Select
                        id="idMercadoGeograficoGeneral"
                        name="idMercadoGeograficoGeneral"
                        s={6}
                        label="Mercado Geográfico"
                        disabled={esAdmin || esSupervisor}
                        onChange={handleOnChangeMercadoGeneral}
                        value=""
                    >
                        <option value="" key={`id_mercado_geografico_vacioDefault_0`}>
                            Escoja el Mercado
                        </option>
                        {
                            mercados.map(({ id, nombre }) => <option key={`id_mercado_geografico_${id}`} value={id}>{nombre}</option>)
                        }
                    </Select>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Existe el interés en ampliar la actividad a otros mercados geográficos?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esAmpliar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="esAmpliar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esAmpliar" type="radio" onChange={handleOnChangeRadio1} disabled={esAdmin || esSupervisor} />
                        <span>NSNC</span>
                    </label>
                    <Textarea
                        s={12}
                        id="cuales"
                        label="¿En Cuáles mercados?"
                        value={tempForm.cuales}
                        onChange={handleOnChangeCuales}
                        data-length={200}
                        validate
                        disabled={esAdmin || esSupervisor}
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

export default Page02FForm;
