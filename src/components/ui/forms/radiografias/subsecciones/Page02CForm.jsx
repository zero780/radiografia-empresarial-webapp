import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage2C } from "../../../../../actions/radiografia/page02";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ProductosList from "../../../../screens/radiografia/productos/ProductosList";

const Page02CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States

    //para admin y supervisor
    let tempFormAdmin = {
        productosServicios: [
            { producto: "Manteca de cerdo y grasas." },
            { producto: "Comestibles de origen animal." },
        ],
    }

    const initialStateProducto = {
        producto: '',
        facturacion: '',
        esPDisenoPropio: false,
        esPBajoPlano: false,
        esPSubcontratado: false,
        esSPropio: false,
        esSSubcontratado: false,
    };
    const [tempProducto, setTempProducto] = useState(initialStateProducto);

    const initialState = {
        productosServicios: [],
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
        dispatch(startAsyncCreateRadiografiaPage2C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeDescripcion = e => {
        e.preventDefault();
        setTempProducto({
            ...tempProducto,
            producto: e.target.value,
        });
    };

    const handleOnChangeFacturacion = e => {
        e.preventDefault();
        setTempProducto({
            ...tempProducto,
            facturacion: e.target.value,
        });
    };

    const handleOnChangeCheckbox1 = e => {
        if (e.target.checked) {
            setTempProducto({
                ...tempProducto,
                esPDisenoPropio: e.target.value,
            });
        } else {
            setTempProducto({
                ...tempProducto,
                esPDisenoPropio: false,
            });
        }
    };

    const handleOnChangeCheckbox2 = e => {
        if (e.target.checked) {
            setTempProducto({
                ...tempProducto,
                esPBajoPlano: e.target.value,
            });
        } else {
            setTempProducto({
                ...tempProducto,
                esPBajoPlano: false,
            });
        }
    };
    const handleOnChangeCheckbox3 = e => {
        if (e.target.checked) {
            setTempProducto({
                ...tempProducto,
                esPSubcontratado: e.target.value,
            });
        } else {
            setTempProducto({
                ...tempProducto,
                esPSubcontratado: false,
            });
        }
    };
    const handleOnChangeCheckbox4 = e => {
        if (e.target.checked) {
            setTempProducto({
                ...tempProducto,
                esSPropio: e.target.value,
            });
        } else {
            setTempProducto({
                ...tempProducto,
                esSPropio: false,
            });
        }
    };
    const handleOnChangeCheckbox5 = e => {
        if (e.target.checked) {
            setTempProducto({
                ...tempProducto,
                esSSubcontratado: e.target.value,
            });
        } else {
            setTempProducto({
                ...tempProducto,
                esSSubcontratado: false,
            });
        }
    };

    const handleAddProductoServicio = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            productosServicios: [
                ...tempForm.productosServicios,
                {
                    ...tempProducto,
                },
            ],
        });

        setTempProducto({
            producto: '',
            facturacion: '',
            esPDisenoPropio: false,
            esPBajoPlano: false,
            esPSubcontratado: false,
            esSPropio: false,
            esSSubcontratado: false,
        });

        cleanRadiosCheckbox('esPDisenoPropio');
        cleanRadiosCheckbox('esPBajoPlano');
        cleanRadiosCheckbox('esPSubcontratado');
        cleanRadiosCheckbox('esSPropio');
        cleanRadiosCheckbox('esSSubcontratado');
    }

    const handleRemoveProducto = nombre => {
        console.log(nombre)
        setTempForm({
            ...tempForm,
            productosServicios: tempForm.productosServicios?.filter(function (producto) {
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
                    <h5 className="more-text">Productos y Servicios</h5>
                </div>
                {
                    tempForm.productosServicios?.length ? (
                        <div className="row">
                            <ProductosList productos={tempForm.productosServicios} removeCallback={handleRemoveProducto} />
                        </div>
                    ) : ''
                }
                {
                    (!esAdmin && !esSupervisor) ? (
                        <div className="row">
                            <Textarea
                                icon={<Icon>mode_edit</Icon>}
                                s={12}
                                id="producto"
                                name="producto"
                                label="Descripción de Producto/Servicio"
                                value={tempProducto.producto}
                                onChange={handleOnChangeDescripcion}
                                data-length={200}
                                validate
                            />
                            <TextInput
                                icon={<Icon>request_quote</Icon>}
                                s={10}
                                id="facturacion"
                                name="facturacion"
                                value={tempProducto.facturacion}
                                onChange={handleOnChangeFacturacion}
                                label="% de Facturación"
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
                                    disabled={!tempProducto.producto.length}
                                    onClick={handleAddProductoServicio}
                                    tooltip="Agregar producto/servicio"
                                />
                            </div>
                            <div className="input-field col s6">
                                <p>El producto es:</p>
                                <p>
                                    <label>
                                        <input
                                            id="esPDisenoPropio"
                                            name="esPDisenoPropio"
                                            value={true}
                                            type="checkbox"
                                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                            onChange={handleOnChangeCheckbox1}
                                        />
                                        <span>Producto/Diseño propio</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input
                                            id="esPBajoPlano"
                                            name="esPBajoPlano"
                                            value={true}
                                            type="checkbox"
                                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                            onChange={handleOnChangeCheckbox2}
                                        />
                                        <span>Bajo plano</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input
                                            id="esPSubcontratado"
                                            name="esPSubcontratado"
                                            value={true}
                                            type="checkbox"
                                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                            onChange={handleOnChangeCheckbox3}
                                        />
                                        <span>Subcontratado</span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s6">
                                <p>El servicio es:</p>
                                <p>
                                    <label>
                                        <input
                                            id="esSPropio"
                                            name="esSPropio"
                                            value={true}
                                            type="checkbox"
                                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                            onChange={handleOnChangeCheckbox4}
                                        />
                                        <span>Propio</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input
                                            id="esSSubcontratado"
                                            name="esSSubcontratado"
                                            value={true}
                                            type="checkbox"
                                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                            onChange={handleOnChangeCheckbox5}
                                        />
                                        <span>Subcontratado</span>
                                    </label>
                                </p>
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

export default Page02CForm;
