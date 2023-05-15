import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage6B } from "../../../../../actions/radiografia/page06";
import { startAsyncGetProductos } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

import ProductosList from "../../../../screens/radiografia/productos/ProductosList";

const Page06BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { productos } = useSelector(state => state.productos);

    useEffect(() => {
        dispatch(startAsyncGetProductos(token));
    }, []);

    let data_productos = {};
    productos.forEach(({ id, descripcion }) => data_productos[id + '_' + descripcion] = null);

    /*let data_productos = {};
    let productos = [{ 'id': 1, 'descripcion': 'Maíz' }, { 'id': 2, 'descripcion': 'Centeno' }]
    productos.forEach(({ id, descripcion }) => data_productos[id + '_' + descripcion] = null);*/

    // States
    const initialStateProducto = {
        producto: '',
        se_exporta: '',
    };

    const [tempProducto, setTempProducto] = useState(initialStateProducto);

    const initialState = {
        inicio_internacionalizacion: '',
        cuales_otros: '',
        productos: [],
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage6B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioInicioIntern = e => {
        setTempForm({
            ...tempForm,
            inicio_internacionalizacion: e.target.value,
        });
    };

    const handleOnChangeCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            cuales_otros: e.target.value,
        });
    };

    const handleAutocompleteProductoChange = e => {
        document.querySelector('input#producto').classList.remove('valid');
        document.querySelector('input#producto').classList.add('invalid');
    };

    const handleProductoAutocomplete = nombre => {
        setTempProducto({
            ...tempProducto,
            producto: nombre,
        });
        document.querySelector('input#producto').classList.remove('invalid');
        document.querySelector('input#producto').classList.add('valid');
    };

    const handleOnChangeRadioSeExporta = e => {
        setTempProducto({
            ...tempProducto,
            se_exporta: e.target.value,
        });
    };

    const handleAddProducto = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            productos: [
                ...tempForm.productos,
                {
                    ...tempProducto,
                },
            ],
        });

        setTempProducto({
            producto: '',
            se_exporta: '',
        });
        document.querySelector('input#producto').value = ''
        cleanRadiosCheckbox('se_exporta');
        document.querySelector('input#producto').classList.remove('valid');
    }

    const handleRemoveProducto = nombre => {
        setTempForm({
            ...tempForm,
            productos: tempForm.productos?.filter(function (producto) {
                return producto.producto !== nombre;
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
                    <h5 className="more-text">Si se trata de una empresa internacionalizada...</h5>
                </div>
                <div className="input-field col s12">
                    <div className="row no-margin-bot">
                        <p>¿Su inicio en la internacionalización, ha sido por…?</p>
                        <label className="col s12">
                            <input className="with-gap" value="inter_iniciativa_propia" name="inicio_internacionalizacion" type="radio" onChange={handleOnChangeRadioInicioIntern}/>
                            <span>Iniciativa propia</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="inter_clientes" name="inicio_internacionalizacion" type="radio" onChange={handleOnChangeRadioInicioIntern}/>
                            <span>De la mano de clientes</span>
                        </label>
                        <label className="col s12">
                            <input className="with-gap col s6" value="inter_otros" name="inicio_internacionalizacion" type="radio" onChange={handleOnChangeRadioInicioIntern}/>
                            <span>Otros</span>
                        </label>
                    </div>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="cuales_otros"
                    name="cuales_otros"
                    label="Indicar otros..."
                    value={tempForm.cuales_otros}
                    onChange={handleOnChangeCualesOtros}
                    data-length={200}
                    validate
                />
                <p>¿Qué productos / servicios exporta?</p>
                {
                    tempForm.productos?.length ? (
                        <div className="row">
                            <ProductosList productos={tempForm.productos} removeCallback={handleRemoveProducto} />
                        </div>
                    ) : ''
                }
                <Autocomplete
                    s={12}
                    id="producto"
                    name="producto"
                    title="Producto/Servicio"
                    onChange={handleAutocompleteProductoChange}
                    options={{
                        data: data_productos,
                        onAutocomplete: handleProductoAutocomplete
                    }}
                />
                <label className="col s3">
                    <input className="with-gap" value={true} name="se_exporta" type="radio" onChange={handleOnChangeRadioSeExporta}/>
                    <span>Sí</span>
                </label>
                <label className="col s3">
                    <input className="with-gap" value={false} name="se_exporta" type="radio" onChange={handleOnChangeRadioSeExporta} />
                    <span>No</span>
                </label>
                <label className="col s4">
                    <input className="with-gap" value="" name="se_exporta" type="radio" onChange={handleOnChangeRadioSeExporta} />
                    <span>NSNC</span>
                </label>
                <div className="input-field col s2">
                    <Button
                        className="green right"
                        style={{ 'marginTop': '25px' }}
                        floating
                        icon={<Icon>add</Icon>}
                        small
                        node="button"
                        //waves="light"
                        disabled={!tempProducto.producto.length}
                        onClick={handleAddProducto}
                        tooltip="Agregar producto/servicio"
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

export default Page06BForm;
