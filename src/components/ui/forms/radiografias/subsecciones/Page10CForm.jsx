import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage10C } from "../../../../../actions/radiografia/page10";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import EmpresasList from "../../../../screens/radiografia/empresas/EmpresasList";

const Page10CForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialStateEmpresa = {
        nombre_empresa: '',
        tipo_cooperacion: '',
    };
    const [tempEmpresa, setTempEmpresa] = useState(initialStateEmpresa);

    const initialState = {
        actividades_principales: '',
        zona_local: false,
        zona_provincial: false,
        zona_cantonal: false,
        zona_indiferente: false,
        zona_nacional: false,
        zona_internacional: false,
        tamaño_10: false,
        tamaño_10_49: false,
        tamaño_50_150: false,
        tamaño_150: false,
        tamaño_indiferente: false,
        conoce_empresa: '',
        empresas: [],
        expectativas_mejoras_productos: false,
        expectativas_mejoras_procesos: false,
        expectativas_mejoras_modelo: false,
        expectativas_crecimiento: false,
        expectativas_gestion: false,
        expectativas_ventas: false,
        expectativas_otros: false,
        expectativas_cuales_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage10C({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeActivPrincip = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            actividades_principales: e.target.value,
        });
    };

    //zona geografica
    const handleOnChangeCheckboxZonaLocal = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_local: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_local: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaProvinc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_provincial: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_provincial: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaCanton = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_cantonal: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_cantonal: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaIndif = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_indiferente: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_indiferente: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaNac = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_nacional: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_nacional: false,
            });
        }
    };

    const handleOnChangeCheckboxZonaInter = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                zona_internacional: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                zona_internacional: false,
            });
        }
    };

    //tamaño
    const handleOnChangeCheckboxTam10 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tamaño_10: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tamaño_10: false,
            });
        }
    };

    const handleOnChangeCheckboxTam1049 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tamaño_10_49: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tamaño_10_49: false,
            });
        }
    };

    const handleOnChangeCheckboxTam50150 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tamaño_50_150: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tamaño_50_150: false,
            });
        }
    };

    const handleOnChangeCheckboxTam150 = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tamaño_150: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tamaño_150: false,
            });
        }
    };

    const handleOnChangeCheckboxTamIndif = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tamaño_indiferente: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tamaño_indiferente: false,
            });
        }
    };

    //empresa
    const handleOnChangeRadioConoceEmp = e => {
        setTempForm({
            ...tempForm,
            conoce_empresa: e.target.value,
        });
    };

    const handleOnChangeNombreEmpr = e => {
        e.preventDefault();
        setTempEmpresa({
            ...tempEmpresa,
            nombre_empresa: e.target.value,
        });
    };

    const handleOnChangeTipoCoop = e => {
        e.preventDefault();
        setTempEmpresa({
            ...tempEmpresa,
            tipo_cooperacion: e.target.value,
        });
    };

    //expectativas
    const handleOnChangeCheckboxExpectMejorProd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_productos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_productos: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectMejorProc = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_procesos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_procesos: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectMejorModel = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_modelo: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_mejoras_modelo: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectCrecim = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_crecimiento: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_crecimiento: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectGestion= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_gestion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_gestion: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectVentas= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_ventas: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_ventas: false,
            });
        }
    };

    const handleOnChangeCheckboxExpectOtros= e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                expectativas_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                expectativas_otros: false,
            });
        }
    };

    const handleOnChangeExpectCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            expectativas_cuales_otros: e.target.value,
        });
    };

    
    //otros
    const handleAddEmpresaCooperacion = e => {
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
            tipo_cooperacion: '',
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
            <p>¿Con qué tipo de empresa entiende que la cooperación podría resultar más eficaz?</p>
            <Textarea
                s={12}
                id="actividades_principales"
                label="Actividades principales (DETALLE LO MÁS QUE PUEDA)"
                value={tempForm.actividades_principales}
                onChange={handleOnChangeActivPrincip}
                data-length={200}
                validate
            />
            <div className="row">
                <p>Zona Geográfica</p>
                <p>
                    <label>
                        <input
                            id="zona_local"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaLocal}
                        />
                        <span>Local</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="zona_provincial"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaProvinc}
                        />
                        <span>Provincial</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="zona_cantonal"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaCanton}
                        />
                        <span>Cantonal</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="zona_indiferente"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaIndif}
                        />
                        <span>Indiferente</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="zona_nacional"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaNac}
                        />
                        <span>Nacional</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="zona_internacional"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxZonaInter}
                        />
                        <span>Internacional</span>
                    </label>
                </p>
            </div>
            <div className="row">
                <p>Tamaño</p>
                <p>
                    <label>
                        <input
                            id="tamaño_10"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxTam10}
                        />
                        <span>&lt;10 empleados</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="tamaño_10_49"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxTam1049}
                        />
                        <span>entre 10 y 49 empleados</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="tamaño_50_150"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxTam50150}
                        />
                        <span>entre 50 y 150 empleados</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="tamaño_150"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxTam150}
                        />
                        <span>&gt;150 empleados</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            id="tamaño_indiferente"
                            value={true}
                            type="checkbox"
                        //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                            onChange={handleOnChangeCheckboxTamIndif}
                        />
                        <span>Indiferente</span>
                    </label>
                </p>
            </div>
            <div className="row">
                <div className="row no-margin-bot">
                    <p>¿Conoce alguna empresa en concreto con la que pudiera o estuviera interesado en cooperar?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="conoce_empresa" type="radio" onChange={handleOnChangeRadioConoceEmp}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="conoce_empresa" type="radio" onChange={handleOnChangeRadioConoceEmp} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="conoce_empresa" type="radio" onChange={handleOnChangeRadioConoceEmp}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <p>Si la respuesta anterior es afirmativa… </p>
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
                    id="tipo_cooperacion"
                    name="tipo_cooperacion"
                    value={tempEmpresa.tipo_cooperacion}
                    onChange={handleOnChangeTipoCoop}
                    label="Tipo de cooperación"
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
                        disabled={!tempEmpresa.nombre_empresa}
                        onClick={handleAddEmpresaCooperacion}
                        tooltip="Agregar empresa"
                    />
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <p>¿Cuáles son sus expectativas respecto a la cooperación?</p>
                    <p>
                        <label>
                            <input
                                id="expectativas_mejoras_productos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectMejorProd}
                            />
                            <span>Introducir mejoras en sus productos o servicios </span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_mejoras_procesos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectMejorProc}
                            />
                            <span>Introducir mejoras sus procesos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_mejoras_modelo"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectMejorModel}
                            />
                            <span>Introducir mejoras en su modelo de negocio</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_crecimiento"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectCrecim}
                            />
                            <span>Lograr un crecimiento sostenido</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_gestion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectGestion}
                            />
                            <span>Implantar una gestión continua de su innovación</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_ventas"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectVentas}
                            />
                            <span>Incrementar ventas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="expectativas_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxExpectOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                </div>
                <Textarea
                    s={12}
                    id="expectativas_cuales_otros"
                    label="Indicar otros..."
                    value={tempForm.expectativas_cuales_otros}
                    onChange={handleOnChangeExpectCualesOtros}
                    data-length={200}
                    validate
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

export default Page10CForm;
