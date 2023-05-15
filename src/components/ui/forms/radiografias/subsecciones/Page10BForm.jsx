import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage10B } from "../../../../../actions/radiografia/page10";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page10BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    // States
    const initialState = {
        entiende_cooperacion: '',
        marketing_acuerdos: false,
        marketing_redes: false,
        marketing_consorcio: false,
        marketing_estudios: false,
        marketing_acciones: false,
        marketing_intercambio: false,
        marketing_otros: false,
        marketing_cuales_otros: '',
        inter_agrupacion: false,
        inter_antena: false,
        inter_acciones: false,
        inter_estudios: false,
        inter_cambio: false,
        inter_otros: false,
        inter_cuales_otros: '',
        tecnologia_transferencia: false,
        tecnologia_desarrollo: false,
        tecnologia_cesion: false,
        tecnologia_acceso: false,
        tecnologia_acuerdos: false,
        tecnologia_spinoff: false,
        tecnologia_busqueda: false,
        tecnologia_intercambio: false,
        tecnologia_otros: false,
        tecnologia_cuales_otros: '',
        compras_central: false,
        compras_aprovisionamiento: false,
        compras_busqueda: false,
        compras_intercambio: false,
        compras_modelos: false,
        compras_otros: false,
        compras_cuales_otros: '',
        produccion_compartir: false,
        produccion_fabricacion: false,
        produccion_acuerdo: false,
        produccion_intercambio: false,
        produccion_subcontratacion: false,
        produccion_otros: false,
        produccion_cuales_otros: '',
        otro_compartir_infraestructura: false,
        otro_compartir_servicios: false,
        otro_otros: false,
        otro_cuales_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage10B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioEntiendeCoop = e => {
        setTempForm({
            ...tempForm,
            entiende_cooperacion: e.target.value,
        });
    };

    //marketing
    const handleOnChangeCheckboxMktAcuerdos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_acuerdos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_acuerdos: false,
            });
        }
    };

    const handleOnChangeCheckboxMktRedes = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_redes: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_redes: false,
            });
        }
    };

    const handleOnChangeCheckboxMktConsorcio = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_consorcio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_consorcio: false,
            });
        }
    };

    const handleOnChangeCheckboxMktEstudios = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_estudios: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_estudios: false,
            });
        }
    };

    const handleOnChangeCheckboxMktAcciones = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_acciones: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_acciones: false,
            });
        }
    };

    const handleOnChangeCheckboxMktIntercamb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_intercambio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_intercambio: false,
            });
        }
    };

    const handleOnChangeCheckboxMktOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                marketing_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                marketing_otros: false,
            });
        }
    };

    const handleOnChangeMktCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            marketing_cuales_otros: e.target.value,
        });
    };

    //internacionalizacion
    const handleOnChangeCheckboxInterAgrupac = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_agrupacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_agrupacion: false,
            });
        }
    };

    const handleOnChangeCheckboxInterAntena = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_antena: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_antena: false,
            });
        }
    };

    const handleOnChangeCheckboxInterAcciones = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_acciones: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_acciones: false,
            });
        }
    };

    const handleOnChangeCheckboxInterEstudios = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_estudios: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_estudios: false,
            });
        }
    };

    const handleOnChangeCheckboxInterCambio = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_cambio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_cambio: false,
            });
        }
    };

    const handleOnChangeCheckboxInterOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                inter_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                inter_otros: false,
            });
        }
    };

    const handleOnChangeInterCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            inter_cuales_otros: e.target.value,
        });
    };

    //tecnologia
    const handleOnChangeCheckboxTecnTransfer = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_transferencia: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_transferencia: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnDesarrollo = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_desarrollo: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_desarrollo: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnCesion = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_cesion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_cesion: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnAcceso = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_acceso: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_acceso: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnAcuerdos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_acuerdos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_acuerdos: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnSpin = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_spinoff: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_spinoff: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnBusqueda = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_busqueda: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_busqueda: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnIntercamb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_intercambio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_intercambio: false,
            });
        }
    };

    const handleOnChangeCheckboxTecnOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                tecnologia_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                tecnologia_otros: false,
            });
        }
    };

    const handleOnChangeTecnCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            tecnologia_cuales_otros: e.target.value,
        });
    };

    //compras
    const handleOnChangeCheckboxComprCentral = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_central: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_central: false,
            });
        }
    };

    const handleOnChangeCheckboxComprAprovis = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_aprovisionamiento: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_aprovisionamiento: false,
            });
        }
    };

    const handleOnChangeCheckboxComprBusqueda = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_busqueda: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_busqueda: false,
            });
        }
    };

    const handleOnChangeCheckboxComprIntercamb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_intercambio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_intercambio: false,
            });
        }
    };

    const handleOnChangeCheckboxComprModelos = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_modelos: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_modelos: false,
            });
        }
    };

    const handleOnChangeCheckboxComprOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                compras_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                compras_otros: false,
            });
        }
    };

    const handleOnChangeComprCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            compras_cuales_otros: e.target.value,
        });
    };

    //produccion
    const handleOnChangeCheckboxProdCompartir = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_compartir: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_compartir: false,
            });
        }
    };

    const handleOnChangeCheckboxProdFabric = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_fabricacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_fabricacion: false,
            });
        }
    };

    const handleOnChangeCheckboxProdAcuerd = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_acuerdo: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_acuerdo: false,
            });
        }
    };

    const handleOnChangeCheckboxProdIntercamb = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_intercambio: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_intercambio: false,
            });
        }
    };

    const handleOnChangeCheckboxProdSubcontrat = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_subcontratacion: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_subcontratacion: false,
            });
        }
    };

    const handleOnChangeCheckboxProdOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                produccion_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                produccion_otros: false,
            });
        }
    }; 

    const handleOnChangeProdCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            produccion_cuales_otros: e.target.value,
        });
    };

    //otros
    const handleOnChangeCheckboxOtroCompartInfraest = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                otro_compartir_infraestructura: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                otro_compartir_infraestructura: false,
            });
        }
    };

    const handleOnChangeCheckboxOtroCompartServ = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                otro_compartir_servicios: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                otro_compartir_servicios: false,
            });
        }
    };

    const handleOnChangeCheckboxOtroOtros = e => {
        if (e.target.checked) {
            setTempForm({
                ...tempForm,
                otro_otros: e.target.value,
            });
        } else {
            setTempForm({
                ...tempForm,
                otro_otros: false,
            });
        }
    };

    const handleOnChangeOtroCualesOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            otro_cuales_otros: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <p>¿Entiende que la Cooperación es una herramienta útil para la estrategia de su empresa y estaría realmente interesado en hacerla efectiva colaborando con otras?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="entiende_cooperacion" type="radio" onChange={handleOnChangeRadioEntiendeCoop}/>
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value={false} name="entiende_cooperacion" type="radio" onChange={handleOnChangeRadioEntiendeCoop}/>
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="entiende_cooperacion" type="radio" onChange={handleOnChangeRadioEntiendeCoop}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <p>Si la respuesta anterior es afirmativa… Indique en qué ámbito/s estaría interesado en cooperar con otras empresas:</p>
                <div className="row no-margin-bot">
                    <h5 className="more-text">COOPERACIÓN COMERCIAL Y FINANCIERA</h5>
                </div>
                <div className="row">
                    <p>Comercialización y Marketing</p>
                    <p>
                        <label>
                            <input
                                id="marketing_acuerdos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktAcuerdos}
                            />
                            <span>Acuerdos de distribución</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_redes"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktRedes}
                            />
                            <span>Redes comerciales comunes</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_consorcio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktConsorcio}
                            />
                            <span>Consorcio temporal de empresas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_estudios"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktEstudios}
                            />
                            <span>Estudios de mercado conjuntos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_acciones"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktAcciones}
                            />
                            <span>Acciones conjuntas de marketing y promoción</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_intercambio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktIntercamb}
                            />
                            <span>Intercambio de información comercial - vigilancia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="marketing_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxMktOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="marketing_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.marketing_cuales_otros}
                        onChange={handleOnChangeMktCualesOtros}
                        data-length={200}
                        validate
                    />
                </div>
                <div className="row">
                    <p>Internacionalización</p>
                    <p>
                        <label>
                            <input
                                id="inter_agrupacion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterAgrupac}
                            />
                            <span>Agrupación de exportadores</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inter_antena"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterAntena}
                            />
                            <span>Antena colectiva</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inter_acciones"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterAcciones}
                            />
                            <span>Acciones comerciales conjuntas</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inter_estudios"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterEstudios}
                            />
                            <span>Estudios de mercado conjuntos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inter_cambio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterCambio}
                            />
                            <span>Intercambio de información comercial</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="inter_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxInterOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="inter_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.inter_cuales_otros}
                        onChange={handleOnChangeInterCualesOtros}
                        data-length={200}
                        validate
                    />
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">COOPERACIÓN TECNOLÓGICA</h5>
                </div>
                <div className="row">
                    <p>
                        <label>
                            <input
                                id="tecnologia_transferencia"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnTransfer}
                            />
                            <span>Transferencia de conocimiento</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_desarrollo"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnDesarrollo}
                            />
                            <span>Desarrollo conjunto de proyectos de I+D+i</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_cesion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnCesion}
                            />
                            <span>Cesión o licencia de marca</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_acceso"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnAcceso}
                            />
                            <span>Acceso compartido a tecnologías3</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_acuerdos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnAcuerdos}
                            />
                            <span>Acuerdos de asistencia técnica recíproca</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_spinoff"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnSpin}
                            />
                            <span>Spin-off</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_busqueda"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnBusqueda}
                            />
                            <span>Búsqueda de alianzas tecnológicas internacionales</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_intercambio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnIntercamb}
                            />
                            <span>Intercambio de información tecnológica – vigilancia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="tecnologia_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxTecnOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="tecnologia_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.tecnologia_cuales_otros}
                        onChange={handleOnChangeTecnCualesOtros}
                        data-length={200}
                        validate
                    />
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">COOPERACIÓN PRODUCTIVA / LOGÍSTICA</h5>
                </div>
                <div className="row">
                    <p>Compras y Aprovisionamiento</p>
                    <p>
                        <label>
                            <input
                                id="compras_central"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprCentral}
                            />
                            <span>Central de compras</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="compras_aprovisionamiento"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprAprovis}
                            />
                            <span>Aprovisionamiento vertical</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="compras_busqueda"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprBusqueda}
                            />
                            <span>Búsqueda de proveedores cualificados en otros países</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="compras_intercambio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprIntercamb}
                            />
                            <span>Intercambio de información – vigilancia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="compras_modelos"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprModelos}
                            />
                            <span>Modelos de gestión energética cooperativa.</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="compras_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxComprOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="compras_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.compras_cuales_otros}
                        onChange={handleOnChangeComprCualesOtros}
                        data-length={200}
                        validate
                    />
                </div>
                <div className="row">
                    <p>Producción</p>
                    <p>
                        <label>
                            <input
                                id="produccion_compartir"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdCompartir}
                            />
                            <span>Compartir activos tecnológicos y/o know-how para el desarrollo de un proceso productivo</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="produccion_fabricacion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdFabric}
                            />
                            <span>Fabricación o ensamblaje conjunto</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="produccion_acuerdo"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdAcuerd}
                            />
                            <span>Acuerdo internacional de producción</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="produccion_intercambio"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdIntercamb}
                            />
                            <span>Intercambio de información – vigilancia</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="produccion_subcontratacion"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdSubcontrat}
                            />
                            <span>Subcontratación de procesos</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="produccion_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxProdOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="produccion_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.produccion_cuales_otros}
                        onChange={handleOnChangeProdCualesOtros}
                        data-length={200}
                        validate
                    />
                </div>
                <div className="row no-margin-bot">
                    <h5 className="more-text">OTRO TIPO DE COOPERACIÓN</h5>
                </div>
                <div className="row">
                    <p>
                        <label>
                            <input
                                id="otro_compartir_infraestructura"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxOtroCompartInfraest}
                            />
                            <span>Compartir infraestructuras (instalaciones, maquinaria, utillaje, etc.)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="otro_compartir_servicios"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxOtroCompartServ}
                            />
                            <span>Compartir servicios (limpieza, seguridad, etc.)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                id="otro_otros"
                                value={true}
                                type="checkbox"
                            //checked={roles.filter(r2 => r.nombre === r2.nombre).length > 0}
                                onChange={handleOnChangeCheckboxOtroOtros}
                            />
                            <span>Otros</span>
                        </label>
                    </p>
                    <Textarea
                        s={12}
                        id="otro_cuales_otros"
                        label="Indicar otros..."
                        value={tempForm.otro_cuales_otros}
                        onChange={handleOnChangeOtroCualesOtros}
                        data-length={200}
                        validate
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

export default Page10BForm;
