import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon } from "react-materialize";
import 'react-tabs/style/react-tabs.css';
// Actions
import { startAsyncCreateRadiografiaPage2B } from "../../../../../actions/radiografia/page02";
import { startAsyncGetActividades, startAsyncGetProductos } from "../../../../../actions/crud/utils";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
// Validations
import { validateText } from "../../../../../utils/validate";
import ActividadesList from "../../../../screens/radiografia/actividades/ActividadesList";

const Page02BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET states
    const { token } = useAuth();

    const { actividades } = useSelector(state => state.actividades);
    const { productos } = useSelector(state => state.productos);

    useEffect(() => {
        dispatch(startAsyncGetActividades(token));
        dispatch(startAsyncGetProductos(token));
    }, []);

    let data_actividades = {};
    let data_productos = {};
    actividades.forEach(({ id, descripcion }) => data_actividades[id + '_' + descripcion] = null);
    productos.forEach(({ id, descripcion }) => data_productos[id + '_' + descripcion] = null);

    /*let data_actividades = {};
    let actividades = [{ 'id': 1, 'descripcion': 'Agricultura' }, { 'id': 2, 'descripcion': 'Cultivo' }]
    actividades.forEach(({ id, descripcion }) => data_actividades[id + '_' + descripcion] = null);

    let data_productos = {};
    let productos = [{ 'id': 1, 'descripcion': 'Maíz' }, { 'id': 2, 'descripcion': 'Centeno' }]
    productos.forEach(({ id, descripcion }) => data_productos[id + '_' + descripcion] = null);*/

    // States

    //para admin y supervisor
    let tempFormAdmin = {
        actividadPrincipal: '2_AGRICULTURA, GANADERÍA, CAZA Y ACTIVIDADES DE SERVICIOS CONEXAS.',
        productoElaborado: '2_SEMILLA DE MAIZ-109, HIBRIDO(A)',
        actividadesSecundarias: [
            { nombre: "1_AGRICULTURA, GANADERÍA, SILVICULTURA Y PESCA." },
            { nombre: "328_Extracción de manteca de cerdo y otras grasas comestibles de origen animal." },
        ],
    }

    const [tempActividadSecundaria, setTempActividadSecundaria] = useState('');
    const initialState = {
        actividadPrincipal: '',
        productoElaborado: '',
        actividadesSecundarias: [],
        idEstado: '1',
    };

    let [tempForm, setTempForm] = useState(initialState);

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            id_grupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleAutocompleteActividadPrincipalChange = e => {
        document.querySelector('input#actividadPrincipal').classList.remove('valid');
        document.querySelector('input#actividadPrincipal').classList.add('invalid');
    };

    const handleActividadPrincipalAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            actividadPrincipal: nombre,
        });
        document.querySelector('input#actividadPrincipal').classList.remove('invalid');
        document.querySelector('input#actividadPrincipal').classList.add('valid');
    };

    const handleAutocompleteProductoChange = e => {
        document.querySelector('input#productoElaborado').classList.remove('valid');
        document.querySelector('input#productoElaborado').classList.add('invalid');
    };

    const handleProductoAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            productoElaborado: nombre,
        });
        document.querySelector('input#productoElaborado').classList.remove('invalid');
        document.querySelector('input#productoElaborado').classList.add('valid');
    };

    const handleAutocompleteActividadSecundariaChange = e => {
        document.querySelector('input#actividad_secundaria').classList.remove('valid');
        document.querySelector('input#actividad_secundaria').classList.add('invalid');
    };

    const handleActividadSecundariaAutocomplete = nombre => {
        setTempActividadSecundaria(nombre);

        document.querySelector('input#actividad_secundaria').classList.remove('invalid');
        document.querySelector('input#actividad_secundaria').classList.add('valid');
    };

    const handleAddActividadSecundaria = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            actividadesSecundarias: [
                ...tempForm.actividadesSecundarias,
                {
                    nombre: tempActividadSecundaria,
                },
            ],
        });

        setTempActividadSecundaria('');
        document.querySelector('input#actividad_secundaria').value = ''
        document.querySelector('input#actividad_secundaria').classList.remove('valid');
    }

    const handleRemoveActividad = nombre => {
        setTempForm({
            ...tempForm,
            actividadesSecundarias: tempForm.actividadesSecundarias?.filter(({ nombre: actividad }) => nombre !== actividad),
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Actividad que desarrolla</h5>
                </div>
                <Autocomplete
                    s={6}
                    id="actividadPrincipal"
                    name="actividadPrincipal"
                    title="Actividad Principal"
                    value={ tempForm.actividadPrincipal }
                    onChange={handleAutocompleteActividadPrincipalChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_actividades,
                        onAutocomplete: handleActividadPrincipalAutocomplete
                    }}
                />
                <Autocomplete
                    s={6}
                    id="productoElaborado"
                    name="productoElaborado"
                    title="Producto elaborado"
                    value={tempForm.productoElaborado}
                    onChange={handleAutocompleteProductoChange}
                    disabled={esAdmin || esSupervisor}
                    options={{
                        data: data_productos,
                        onAutocomplete: handleProductoAutocomplete
                    }}
                />
                {
                    tempForm.actividadesSecundarias?.length ? (
                        <div className="row">
                            <div className="row no-margin-bot">
                                <h5 className="more-text">Actividades Secundarias</h5>
                            </div>
                            <ActividadesList actividades={tempForm.actividadesSecundarias} removeCallback={handleRemoveActividad} />
                        </div>
                    ) : ''
                }
                {
                    (!esAdmin && !esSupervisor) ? (
                        <div className="row">
                            <div className="col s10">
                                <div className="row no-margin-bot">
                                    <Autocomplete
                                        s={12}
                                        id="actividad_secundaria"
                                        name="actividad_secundaria"
                                        title="Actividad Secundaria"
                                        onChange={handleAutocompleteActividadSecundariaChange}
                                        //value={tempActividadSecundaria}
                                        options={{
                                            data: data_actividades,
                                            onAutocomplete: handleActividadSecundariaAutocomplete
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="input-field col s2">
                                <Button
                                    className="green right"
                                    style={{ 'marginTop': '25px' }}
                                    floating
                                    icon={<Icon>add</Icon>}
                                    small
                                    node="button"
                                    //waves="light"
                                    disabled={!tempActividadSecundaria.length}
                                    onClick={handleAddActividadSecundaria}
                                    tooltip="Agregar actividad secundaria"
                                />
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

export default Page02BForm;
