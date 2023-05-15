import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, Button, Icon, RadioGroup, Select, Textarea, TextInput } from "react-materialize";
// Validations
import { validateEmail } from "../../../utils/validate";
// Components
import IntegrantesList from "../../screens/grupos/integrantes/IntegrantesList";


const GruposForm = ({ vinculos, organizaciones, tempGrupo, setTempGrupo, setIsSaved }) => {

    // States
    const [ tempIntegrante, setTempIntegrante ] = useState('');
    const [ motivoCreacion, setmotivoCreacion ] = useState('');

    let data = {};
    organizaciones.forEach( ( { nombre } ) => data[nombre] = null );

    // Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        if(!tempGrupo.organizacion?.length) {
            alert('Necesita escoger una organización para continuar.');
            document.querySelector('input#grupo__organizacion').classList.remove('valid');
            document.querySelector('input#grupo__organizacion').classList.add('invalid');
            return;
        }
        if(!tempGrupo.vinculo?.length) {
            alert('Necesita seleccionar un vínculo para continuar.');
            document.querySelector('.select-dropdown.dropdown-trigger').classList.remove('valid');
            document.querySelector('.select-dropdown.dropdown-trigger').classList.add('invalid');
            return;
        } else {
            document.querySelector('.select-dropdown.dropdown-trigger').classList.remove('invalid');
            document.querySelector('.select-dropdown.dropdown-trigger').classList.add('valid');
        }
        if(!tempGrupo.integrantes?.length) {
            alert('Necesita agregar integrantes al grupo para continuar.');
            document.querySelector('input#integrante_correo').classList.remove('valid');
            document.querySelector('input#integrante_correo').classList.add('invalid');
            return;
        } else {
            document.querySelector('input#integrante_correo').classList.remove('invalid');
        }
        if(!tempGrupo.motivoCreacion?.length) {
            alert('Necesita definir un motivo para al creación del grupo.');
        }
        setIsSaved(true);
    };
    const handleOrganizationAutocomplete = nombre => {
        setTempGrupo({
            ...tempGrupo,
            organizacion: nombre.toUpperCase(),
        });
        document.querySelector('input#grupo__organizacion').classList.remove('invalid');
        document.querySelector('input#grupo__organizacion').classList.add('valid');
    };
    const handleAutocompleteChange = e => {
        document.querySelector('input#grupo__organizacion').classList.remove('valid');
        document.querySelector('input#grupo__organizacion').classList.add('invalid');
    };
    const handleChangeSelect = ({ target:{ value:vinculo } }) => {
        setTempGrupo({
            ...tempGrupo,
            vinculo: vinculo.toLowerCase(),
        });
    };
    const handleOnChangeIntegrante = e => {
        e.preventDefault();
        setTempIntegrante(e.target.value.toLowerCase());
    };
    const handleRemoveIntegrante = mail => {
        setTempGrupo({
            ...tempGrupo,
            integrantes: tempGrupo.integrantes?.filter( ({ mail:mailIntegrante }) => mailIntegrante !== mail ),
        });
    };
    const handleAddIntegrante = e => {
        e.preventDefault();
        const input = document.querySelector('input#integrante_correo');
        if (validateEmail(tempIntegrante)) {
            const repetidos =  tempGrupo.integrantes?.filter(({mail}) => mail === tempIntegrante);
            if(!repetidos.length) {
                setTempGrupo({
                    ...tempGrupo,
                    integrantes: [
                        ...tempGrupo.integrantes,
                        {
                            name: tempIntegrante,
                            mail: tempIntegrante,
                            tipo: tempGrupo.integrantes?.length ? 'Miembro normal' : 'Líder de grupo'
                        },
                    ],
                });
                setTempIntegrante('');
                input?.classList.remove('valid');
            } else {
                input?.classList.remove('valid');
                input?.classList.add('invalid');
                repetidos.map( ({mail} ) => console.error('Correo repetido: ', tempIntegrante));
            }
        } else {
            input?.classList.remove('valid');
            input?.classList.add('invalid');
            console.error('Correo inválido: ', tempIntegrante);
        }
    };
    const handleMotivoChange = e => {
        e.preventDefault();
        setmotivoCreacion(e.target.value);
        setTempGrupo({
            ...tempGrupo,
            motivoCreacion: e.target.value, //correccion input motivo para crear grupo no se actualizaba al hacer onchange
        });
    };
    return (
        <form className="row" autoComplete="off" onSubmit={ handleFormSubmit }>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Información de la Organización</h5>
                </div>
                <Autocomplete
                    icon={<Icon>business</Icon>}
                    s={12}
                    id="grupo__organizacion"
                    name="organizacionNombre"
                    title="Organización a radiografiar"
                    onChange={ handleAutocompleteChange }
                    options={{
                        data: data,
                        onAutocomplete: handleOrganizationAutocomplete
                    }}
                />
                <Select
                    icon={<Icon>share</Icon>}
                    id="grupo__vinculo"
                    name="vinculo"
                    s={12}
                    label="Vínculo con la ESPOL"
                    onChange={ handleChangeSelect }
                    value=""
                >
                    <option value="" key={`vin_vacioDefault_0`} disabled>
                        Escoge el vínculo
                    </option>
                    {
                        vinculos.map( ({ nombre, slug }) => <option key={`vin_${slug}`} value={slug}>{nombre}</option> )
                    }
                </Select>
            </div>
            {
                tempGrupo.integrantes?.length ? (
                    <div className="row">
                        <div className="row no-margin-bot">
                            <h5 className="more-text">Integrantes</h5>
                        </div>
                        <IntegrantesList integrantes={ tempGrupo.integrantes } removeCallback={ handleRemoveIntegrante } />
                    </div>
                ) : ''
            }
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Agregar Integrantes</h5>
                </div>
                <div className="row">
                    <div className="col s10">
                        <div className="row no-margin-bot">
                            <TextInput
                                icon={ <Icon>mail</Icon> }
                                value={ tempIntegrante }
                                email
                                s={12}
                                id="integrante_correo"
                                onChange={ handleOnChangeIntegrante }
                                label="Correo electrónico"
                                validate
                            />
                        </div>
                        <div className="row no-margin-bot center-align">
                            <RadioGroup
                                name="integrante"
                                onChange={ (e) => { return e.preventDefault() } }
                                options={[
                                    {
                                        label: 'Líder de grupo',
                                        value: 'Líder de grupo'
                                    },
                                    {
                                        label: 'Miembro normal',
                                        value: 'Miembro normal'
                                    }
                                ]}
                                withGap
                                radioClassNames='col s6'
                                value={ tempGrupo.integrantes?.length ? 'Miembro normal' : 'Líder de grupo' }
                            />
                        </div>
                    </div>
                    <div className="input-field col s2">
                        <Button
                            className="green right"
                            style={ {'marginTop': '25px'} }
                            floating
                            icon={ <Icon>person_add</Icon> }
                            small
                            node="button"
                            waves="light"
                            disabled={ !tempIntegrante.length }
                            onClick={ handleAddIntegrante }
                            tooltip="Agregar integrante al grupo de trabajo"
                        />
                    </div>
                </div>
            </div>
            <div className="row no-margin-bot">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Solicitud de creación</h5>
                </div>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="motivoSolicitud"
                    label="Motivo para creación"
                    value={ motivoCreacion }
                    onChange={ handleMotivoChange }
                    data-length={200}
                    validate
                />
            </div>
            <div className="row center-align">
                <div className="input-field col s12">
                    <input type="submit" className="btn" value="Solicitar creación" />
                </div>
            </div>
        </form>
    );
};

GruposForm.propTypes = {
    vinculos: PropTypes.array.isRequired,
    organizaciones: PropTypes.array.isRequired,
    setTempGrupo: PropTypes.func.isRequired,
    setIsSaved: PropTypes.func.isRequired,
};

export default GruposForm;
