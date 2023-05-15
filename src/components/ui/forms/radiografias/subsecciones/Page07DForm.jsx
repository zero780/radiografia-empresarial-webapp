import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Textarea, TextInput } from "react-materialize";
// Actions
import { startAsyncCreateRadiografiaPage7D } from "../../../../../actions/radiografia/page07";
import { startAsyncGetCantones } from "../../../../../actions/crud/utils";

// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page07DForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //GET cantones
    const { cantones } = useSelector(state => state.cantones);

    useEffect(() => {
        dispatch(startAsyncGetCantones(token));
    }, []);

    //States
    let data_cantones = {};
    cantones.forEach(({ id, nombre }) => data_cantones[id + '_' + nombre] = null);

    const initialState = {
        id_tipo_aumento: '',
        varia_num_empleados: '',
        que_epocas: '',
        que_perfiles: '',
        existen_problematicas: '',
        que_tipo_perfil_problema: '',
        preve_aumentar: '',
        que_vias_utiliza: '',
        ha_acogido: '',
        esta_interesado: '',
        para_que_perfiles: '',
        canton: '',
        porcentaje_canton: '',
        porcentaje_otros: '',
        idEstado: '1',
    };

    const [tempForm, setTempForm] = useState(initialState);

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    //Handles
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage7D({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    const handleOnChangeRadioNominaHa = e => {
        setTempForm({
            ...tempForm,
            id_tipo_aumento: e.target.value,
        });
    };

    const handleOnChangeRadioVariaNumEmpl = e => {
        setTempForm({
            ...tempForm,
            varia_num_empleados: e.target.value,
        });
    };

    const handleOnChangeQueEpocas = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_epocas: e.target.value,
        });
    };

    const handleOnChangeQuePerfiles = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_perfiles: e.target.value,
        });
    };

    const handleOnChangeRadioExistenProble = e => {
        setTempForm({
            ...tempForm,
            existen_problematicas: e.target.value,
        });
    };

    const handleOnChangeQuePerfilesProble = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_tipo_perfil_problema: e.target.value,
        });
    };

    const handleOnChangeRadioPreveAumentar= e => {
        setTempForm({
            ...tempForm,
            preve_aumentar: e.target.value,
        });
    };

    const handleOnChangeQueVias = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            que_vias_utiliza: e.target.value,
        });
    };

    const handleOnChangeRadioHaAcogido = e => {
        setTempForm({
            ...tempForm,
            ha_acogido: e.target.value,
        });
    };

    const handleOnChangeRadioEstaInteres = e => {
        setTempForm({
            ...tempForm,
            esta_interesado: e.target.value,
        });
    };

    const handleOnChangeParaQuePerfiles = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            para_que_perfiles: e.target.value,
        });
    };

    const handleAutocompleteCantonChange = e => {
        document.querySelector('input#canton').classList.remove('valid');
        document.querySelector('input#canton').classList.add('invalid');
    };

    const handleCantonAutocomplete = nombre => {
        setTempForm({
            ...tempForm,
            canton: nombre,
        });

        document.querySelector('input#canton').classList.remove('invalid');
        document.querySelector('input#canton').classList.add('valid');
    };

    const handleOnChangePorcentajeCanton = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentaje_canton: e.target.value,
        });
    };

    const handleOnChangePorcentajeOtros = e => {
        e.preventDefault();
        setTempForm({
            ...tempForm,
            porcentaje_otros: e.target.value,
        });
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">Evolución de la NÓMINA</h5>
                </div>
                <div className="row no-margin-bot">
                    <p>¿En los últimos dos años la Nómina ha…?</p>
                    <label className="col s12">
                        <input className="with-gap" value="1" name="id_tipo_aumento" type="radio" onChange={handleOnChangeRadioNominaHa} />
                        <span>Ha aumentado</span>
                    </label>
                    <label className="col s12">
                        <input className="with-gap" value="2" name="id_tipo_aumento" type="radio" onChange={handleOnChangeRadioNominaHa} />
                        <span>Ha disminuido</span>
                    </label>
                    <label className="col s12">
                        <input className="with-gap" value="3" name="id_tipo_aumento" type="radio" onChange={handleOnChangeRadioNominaHa} />
                        <span>No ha sufrido cambios</span>
                    </label>
                    <label className="col s12">
                        <input className="with-gap" value="4" name="id_tipo_aumento" type="radio" onChange={handleOnChangeRadioNominaHa} />
                        <span>No sabe/No contesta</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>¿Varía el número de empleados a lo largo del año debido a los picos de producción estacionales?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="varia_num_empleados" type="radio" onChange={handleOnChangeRadioVariaNumEmpl} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="0" name="varia_num_empleados" type="radio" onChange={handleOnChangeRadioVariaNumEmpl} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="varia_num_empleados" type="radio" onChange={handleOnChangeRadioVariaNumEmpl} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="que_epocas"
                    name="que_epocas"
                    label="En caso sea afirmativo: ¿En qué épocas varía el número de empleados?"
                    value={tempForm.que_epocas}
                    onChange={handleOnChangeQueEpocas}
                    data-length={200}
                    validate
                />
                <Textarea
                    s={12}
                    id="que_perfiles"
                    name="que_perfiles"
                    label="En caso sea afirmativo: ¿Qué perfiles son los que solicitan?"
                    value={tempForm.que_perfiles}
                    onChange={handleOnChangeQuePerfiles}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Existen problemáticas en la contratación del personal?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="existen_problematicas" type="radio" onChange={handleOnChangeRadioExistenProble} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="0" name="existen_problematicas" type="radio" onChange={handleOnChangeRadioExistenProble} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="existen_problematicas" type="radio" onChange={handleOnChangeRadioExistenProble} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="que_tipo_perfil_problema"
                    name="que_tipo_perfil_problema"
                    label="¿En qué tipo de perfil existen problemas de contratación y cuál es la problemática?"
                    value={tempForm.que_tipo_perfil_problema}
                    onChange={handleOnChangeQuePerfilesProble}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Prevé aumentar la NÓMINA a corto o medio plazo?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="preve_aumentar" type="radio" onChange={handleOnChangeRadioPreveAumentar} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="0" name="preve_aumentar" type="radio" onChange={handleOnChangeRadioPreveAumentar} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="preve_aumentar" type="radio" onChange={handleOnChangeRadioPreveAumentar} />
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="que_vias_utiliza"
                    name="que_vias_utiliza"
                    label="¿Qué vías utiliza de manera habitual para la búsqueda de candidatos?"
                    value={tempForm.que_vias_utiliza}
                    onChange={handleOnChangeQueVias}
                    data-length={200}
                    validate
                />
                <div className="row no-margin-bot">
                    <p>¿Ha acogido alguna vez personal en prácticas/pasantías en su empresa?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="ha_acogido" type="radio" onChange={handleOnChangeRadioHaAcogido} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="0" name="ha_acogido" type="radio" onChange={handleOnChangeRadioHaAcogido} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="ha_acogido" type="radio" onChange={handleOnChangeRadioHaAcogido} />
                        <span>NSNC</span>
                    </label>
                </div>
                <div className="row no-margin-bot">
                    <p>SI RESPONDE NO: ¿Estaría interesado?</p>
                    <label className="col s4">
                        <input className="with-gap" value={true} name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres} />
                        <span>Sí</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="0" name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres} />
                        <span>No</span>
                    </label>
                    <label className="col s4">
                        <input className="with-gap" value="" name="esta_interesado" type="radio" onChange={handleOnChangeRadioEstaInteres}/>
                        <span>NSNC</span>
                    </label>
                </div>
                <Textarea
                    s={12}
                    id="para_que_perfiles"
                    name="para_que_perfiles"
                    label="Si es que está interesado, para qué perfiles lo haría"
                    value={tempForm.para_que_perfiles}
                    onChange={handleOnChangeParaQuePerfiles}
                    data-length={200}
                    validate
                />
                <p>Porcentajes de los empleados de la empresa</p>
                <Autocomplete
                    s={6}
                    id="canton"
                    name="canton"
                    title="Originarios del cantón:"
                    onChange={handleAutocompleteCantonChange}
                    options={{
                        data: data_cantones,
                        onAutocomplete: handleCantonAutocomplete
                    }}
                />
                <TextInput
                    s={6}
                    id="porcentaje_canton"
                    name="porcentaje_canton"
                    value={tempForm.porcentaje_canton}
                    onChange={handleOnChangePorcentajeCanton}
                    label="Porcentaje"
                    validate
                //disabled={disabled}
                />
                <TextInput
                    s={12}
                    id="porcentaje_otros"
                    name="porcentaje_otros"
                    value={tempForm.porcentaje_otros}
                    onChange={handleOnChangePorcentajeOtros}
                    label="Porcentaje de originarios de otras ciudades"
                    validate
                //disabled={disabled}
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
        </form >
    );
};

export default Page07DForm;
