import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Textarea } from "react-materialize";
// Actions
import { startAsyncCreateRadiografiaPage2G } from "../../../../../actions/radiografia/page02";
import { startAsyncGetProvincias, startAsyncGetCantones } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page02GForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { provincias } = useSelector(state => state.provincias);
    const { cantones } = useSelector(state => state.cantones);

    useEffect(() => {
        dispatch(startAsyncGetProvincias(token));
        dispatch(startAsyncGetCantones(token));
    }, []);

    let data_provincias = {};
    let data_cantones = {};
    provincias.forEach(({ id, nombre }) => data_provincias[id + '_' + nombre] = null);
    cantones.forEach(({ id, nombre }) => data_cantones[id + '_' + nombre] = null);

    /*let data_provincias = {};
    let provincias = [{ 'id': 1, 'nombre': 'Guayas' }, { 'id': 2, 'nombre': 'Pichincha' }, { 'id': 3, 'nombre': 'Azuay' }]
    provincias.forEach(({ id, nombre }) => data_provincias[id + '_' + nombre] = null);

    let data_cantones = {};
    let cantones = [{ 'id': 1, 'nombre': 'Guayaquil' }, { 'id': 2, 'nombre': 'Quito' }, { 'id': 3, 'nombre': 'Cuenca' }]
    cantones.forEach(({ id, nombre }) => data_cantones[id + '_' + nombre] = null);*/

    //States
    const initialState = {
        provinciaMateriaPrima: '',
        cantonMateriaPrima: '',
        compraMateriaPrima: false,
        cualesMateriaPrima: '',
        porqueMateriaPrima: '',
        provinciaProveedoresM: '',
        cantonProveedoresM: '',
        desarrollarProveedoresM: false,
        cualesProveedoresM: '',
        porqueProveedoresM: '',
        provinciaInsumos: '',
        cantonInsumos: '',
        compraInsumos: false,
        cualesInsumos: '',
        porqueInsumos: '',
        provinciaProveedoresI: '',
        cantonProveedoresI: '',
        desarrollarProveedoresI: false,
        cualesProveedoresI: '',
        porqueProveedoresI: '',
        existeInteres: '',
        cualesInteres: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2G({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    //Materia prima
    const handleAutocompleteProvMateriaPrimaChange = e => {
        document.querySelector('input#provinciaMateriaPrima').classList.remove('valid');
        document.querySelector('input#provinciaMateriaPrima').classList.add('invalid');
    };

    const handleProvMateriaPrimaAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            provinciaMateriaPrima: nombre,
        });

        document.querySelector('input#provinciaMateriaPrima').classList.remove('invalid');
        document.querySelector('input#provinciaMateriaPrima').classList.add('valid');
    };

    const handleAutocompleteCantonMateriaPrimaChange = e => {
        document.querySelector('input#cantonMateriaPrima').classList.remove('valid');
        document.querySelector('input#cantonMateriaPrima').classList.add('invalid');
    };

    const handleCantonMateriaPrimaAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            cantonMateriaPrima: nombre,
        });

        document.querySelector('input#cantonMateriaPrima').classList.remove('invalid');
        document.querySelector('input#cantonMateriaPrima').classList.add('valid');
    };

    const handleOnChangeRadioMateriaPrima = e => {
        setTempForm({
            ...tempForm,
            compraMateriaPrima: e.target.value,
        });
    };

    const handleOnChangeCualesMateriaPrima = e => {
        setTempForm({
            ...tempForm,
            cualesMateriaPrima: e.target.value,
        });
    };

    const handleOnChangePorqueMateriaPrima = e => {
        setTempForm({
            ...tempForm,
            porqueMateriaPrima: e.target.value,
        });
    };

    //Proveedores M
    const handleAutocompleteProvProveedoresMChange = e => {
        document.querySelector('input#provinciaProveedoresM').classList.remove('valid');
        document.querySelector('input#provinciaProveedoresM').classList.add('invalid');
    };

    const handleProvProveedoresMAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            provinciaProveedoresM: nombre,
        });

        document.querySelector('input#provinciaProveedoresM').classList.remove('invalid');
        document.querySelector('input#provinciaProveedoresM').classList.add('valid');
    };

    const handleAutocompleteCantonProveedoresMChange = e => {
        document.querySelector('input#cantonProveedoresM').classList.remove('valid');
        document.querySelector('input#cantonProveedoresM').classList.add('invalid');
    };

    const handleCantonProveedoresMAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            cantonProveedoresM: nombre,
        });

        document.querySelector('input#cantonProveedoresM').classList.remove('invalid');
        document.querySelector('input#cantonProveedoresM').classList.add('valid');
    };

    const handleOnChangeRadioProveedoresM = e => {
        setTempForm({
            ...tempForm,
            desarrollarProveedoresM: e.target.value,
        });
    };

    const handleOnChangeCualesProveedoresM = e => {
        setTempForm({
            ...tempForm,
            cualesProveedoresM: e.target.value,
        });
    };

    const handleOnChangePorqueProveedoresM = e => {
        setTempForm({
            ...tempForm,
            porqueProveedoresM: e.target.value,
        });
    };

    //Insumos
    const handleAutocompleteProvinciaInsumosChange = e => {
        document.querySelector('input#provinciaInsumos').classList.remove('valid');
        document.querySelector('input#provinciaInsumos').classList.add('invalid');
    };

    const handleProvinciaInsumosAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            provinciaInsumos: nombre,
        });

        document.querySelector('input#provinciaInsumos').classList.remove('invalid');
        document.querySelector('input#provinciaInsumos').classList.add('valid');
    };

    const handleAutocompleteCantonInsumosChange = e => {
        document.querySelector('input#cantonInsumos').classList.remove('valid');
        document.querySelector('input#cantonInsumos').classList.add('invalid');
    };

    const handleCantonInsumosAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            cantonInsumos: nombre,
        });

        document.querySelector('input#cantonInsumos').classList.remove('invalid');
        document.querySelector('input#cantonInsumos').classList.add('valid');
    };

    const handleOnChangeRadioInsumos = e => {
        setTempForm({
            ...tempForm,
            compraInsumos: e.target.value,
        });
    };

    const handleOnChangeCualesInsumos = e => {
        setTempForm({
            ...tempForm,
            cualesInsumos: e.target.value,
        });
    };

    const handleOnChangePorqueInsumos = e => {
        setTempForm({
            ...tempForm,
            porqueInsumos: e.target.value,
        });
    };

    //Proveedores I
    const handleAutocompleteProvinciaProveedoresIChange = e => {
        document.querySelector('input#provinciaProveedoresI').classList.remove('valid');
        document.querySelector('input#provinciaProveedoresI').classList.add('invalid');
    };

    const handleProvinciaProveedoresIAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            provinciaProveedoresI: nombre,
        });

        document.querySelector('input#provinciaProveedoresI').classList.remove('invalid');
        document.querySelector('input#provinciaProveedoresI').classList.add('valid');
    };

    const handleAutocompleteCantonProveedoresIChange = e => {
        document.querySelector('input#cantonProveedoresI').classList.remove('valid');
        document.querySelector('input#cantonProveedoresI').classList.add('invalid');
    };

    const handleCantonProveedoresIAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            cantonProveedoresI: nombre,
        });

        document.querySelector('input#cantonProveedoresI').classList.remove('invalid');
        document.querySelector('input#cantonProveedoresI').classList.add('valid');
    };

    const handleOnChangeRadioProveedoresI = e => {
        setTempForm({
            ...tempForm,
            desarrollarProveedoresI: e.target.value,
        });
    };

    const handleOnChangeCualesProveedoresI = e => {
        setTempForm({
            ...tempForm,
            cualesProveedoresI: e.target.value,
        });
    };

    const handleOnChangePorqueProveedoresI = e => {
        setTempForm({
            ...tempForm,
            porqueProveedoresI: e.target.value,
        });
    };

    //interes en subcontratacion
    const handleOnChangeRadioInteres = e => {
        setTempForm({
            ...tempForm,
            existeInteres: e.target.value,
        });
    };

    const handleOnChangeCualesIntereses = e => {
        setTempForm({
            ...tempForm,
            cualesInteres: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Proveedores</h5>
                </div>
            </div>
            <div className="row no-margin-bot">
                <p>¿Compra materias primas en...?</p>
                <Autocomplete
                    s={6}
                    id="provinciaMateriaPrima"
                    name="provinciaMateriaPrima"
                    title="Provincia"
                    onChange={handleAutocompleteProvMateriaPrimaChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_provincias,
                        onAutocomplete: handleProvMateriaPrimaAutocomplete
                    }}
                />
                <Autocomplete
                    s={6}
                    id="cantonMateriaPrima"
                    name="cantonMateriaPrima"
                    title="Cantón"
                    onChange={handleAutocompleteCantonMateriaPrimaChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_cantones,
                        onAutocomplete: handleCantonMateriaPrimaAutocomplete
                    }}
                />
                <label className="col s6">
                    <input className="with-gap" value={true} name="compraMateriaPrima" type="radio" onChange={handleOnChangeRadioMateriaPrima} disabled={esAdmin || esSupervisor} />
                    <span>Sí</span>
                </label>
                <label className="col s6">
                    <input className="with-gap" value={false} name="compraMateriaPrima" type="radio" onChange={handleOnChangeRadioMateriaPrima} disabled={esAdmin || esSupervisor} />
                    <span>No</span>
                </label>
                <Textarea
                    s={12}
                    id="cualesMateriaPrima"
                    name="cualesMateriaPrima"
                    label="¿Qué tipos de materias primas?"
                    value={tempForm.cualesMateriaPrima}
                    onChange={handleOnChangeCualesMateriaPrima}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    s={12}
                    id="porqueMateriaPrima"
                    name="porqueMateriaPrima"
                    label="¿Por qué no compra materias primas en...?"
                    value={tempForm.porqueMateriaPrima}
                    onChange={handleOnChangePorqueMateriaPrima}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
            </div>
            <div className="row no-margin-bot">
                <p>¿Ha pensado en desarrollar proveedores locales en...?</p>
                <Autocomplete
                    s={6}
                    id="provinciaProveedoresM"
                    name="provinciaProveedoresM"
                    title="Provincia"
                    onChange={handleAutocompleteProvProveedoresMChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_provincias,
                        onAutocomplete: handleProvProveedoresMAutocomplete
                    }}
                />
                <Autocomplete
                    s={6}
                    id="cantonProveedoresM"
                    name="cantonProveedoresM"
                    title="Cantón"
                    onChange={handleAutocompleteCantonProveedoresMChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_cantones,
                        onAutocomplete: handleCantonProveedoresMAutocomplete
                    }}
                />
                <label className="col s6">
                    <input className="with-gap" value={true} name="desarrollarProveedoresM" type="radio" onChange={handleOnChangeRadioProveedoresM} disabled={esAdmin || esSupervisor} />
                    <span>Sí</span>
                </label>
                <label className="col s6">
                    <input className="with-gap" value={false} name="desarrollarProveedoresM" type="radio" onChange={handleOnChangeRadioProveedoresM} disabled={esAdmin || esSupervisor} />
                    <span>No</span>
                </label>
                <Textarea
                    s={12}
                    id="cualesProveedoresM"
                    label="¿Qué materias primas podría comprar en...?"
                    value={tempForm.cualesProveedoresM}
                    onChange={handleOnChangeCualesProveedoresM}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    s={12}
                    id="porqueProveedoresM"
                    label="¿Cuáles son las limitaciones para desarrollar proveedores locales de materia prima en...?"
                    value={tempForm.porqueProveedoresM}
                    onChange={handleOnChangePorqueProveedoresM}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
            </div>
            <div className="row no-margin-bot">
                <p>¿Compra insumos en...? Ej: Materiales de oficina, herramientas, equipos eléctricos y electrónicos.</p>
                <Autocomplete
                    s={6}
                    id="provinciaInsumos"
                    name="provinciaInsumos"
                    title="Provincia"
                    onChange={handleAutocompleteProvinciaInsumosChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_provincias,
                        onAutocomplete: handleProvinciaInsumosAutocomplete
                    }}
                />
                <Autocomplete
                    s={6}
                    id="cantonInsumos"
                    name="cantonInsumos"
                    title="Cantón"
                    onChange={handleAutocompleteCantonInsumosChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_cantones,
                        onAutocomplete: handleCantonInsumosAutocomplete
                    }}
                />
                <label className="col s6">
                    <input className="with-gap" value={true} name="compraInsumos" type="radio" onChange={handleOnChangeRadioInsumos} disabled={esAdmin || esSupervisor} />
                    <span>Sí</span>
                </label>
                <label className="col s6">
                    <input className="with-gap" value={false} name="compraInsumos" type="radio" onChange={handleOnChangeRadioInsumos} disabled={esAdmin || esSupervisor} />
                    <span>No</span>
                </label>
                <Textarea
                    s={12}
                    id="cualesInsumos"
                    label="¿Qué tipo de insumos compra?"
                    value={tempForm.cualesInsumos}
                    onChange={handleOnChangeCualesInsumos}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    s={12}
                    id="porqueInsumos"
                    label="¿Por qué no compra insumos en...?"
                    value={tempForm.porqueInsumos}
                    onChange={handleOnChangePorqueInsumos}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
            </div>
            <div className="row no-margin-bot">
                <p>¿Ha pensado en desarrollar proveedores locales en...?</p>
                <Autocomplete
                    s={6}
                    id="provinciaProveedoresI"
                    name="provinciaProveedoresI"
                    title="Provincia"
                    onChange={handleAutocompleteProvinciaProveedoresIChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_provincias,
                        onAutocomplete: handleProvinciaProveedoresIAutocomplete
                    }}
                />
                <Autocomplete
                    s={6}
                    id="cantonProveedoresI"
                    name="cantonProveedoresI"
                    title="Cantón"
                    onChange={handleAutocompleteCantonProveedoresIChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_cantones,
                        onAutocomplete: handleCantonProveedoresIAutocomplete
                    }}
                />
                <label className="col s6">
                    <input className="with-gap" value={true} name="desarrollarProveedoresI" type="radio" onChange={handleOnChangeRadioProveedoresI} disabled={esAdmin || esSupervisor} />
                    <span>Sí</span>
                </label>
                <label className="col s6">
                    <input className="with-gap" value={false} name="desarrollarProveedoresI" type="radio" onChange={handleOnChangeRadioProveedoresI} disabled={esAdmin || esSupervisor} />
                    <span>No</span>
                </label>
                <Textarea
                    s={12}
                    id="cualesProveedoresI"
                    label="¿Qué insumos podría comprar en...?"
                    value={tempForm.cualesProveedoresI}
                    onChange={handleOnChangeCualesProveedoresI}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    s={12}
                    id="porqueProveedoresI"
                    label="¿Cuáles son las limitaciones para desarrollar proveedores locales de insumos en...?"
                    value={tempForm.porqueProveedoresI}
                    onChange={handleOnChangePorqueProveedoresI}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
            </div>
            <div className="row no-margin-bot">
                <p>¿Existe el interés en la subcontratación de algún producto/servicio en concreto?</p>
                <label className="col s4">
                    <input className="with-gap" value={true} name="existeInteres" type="radio" onChange={handleOnChangeRadioInteres} disabled={esAdmin || esSupervisor} />
                    <span>Sí</span>
                </label>
                <label className="col s4">
                    <input className="with-gap" value={false} name="existeInteres" type="radio" onChange={handleOnChangeRadioInteres} disabled={esAdmin || esSupervisor} />
                    <span>No</span>
                </label>
                <label className="col s4">
                    <input className="with-gap" value="" name="existeInteres" type="radio" onChange={handleOnChangeRadioInteres} disabled={esAdmin || esSupervisor} />
                    <span>NSNC</span>
                </label>
                <Textarea
                    s={12}
                    id="cualesInteres"
                    label="¿En Cuáles productos/servicios?"
                    value={tempForm.cualesInteres}
                    onChange={handleOnChangeCualesIntereses}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
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
        </form>
    );
};

export default Page02GForm;
