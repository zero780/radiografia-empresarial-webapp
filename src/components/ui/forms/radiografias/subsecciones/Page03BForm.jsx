import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, Button, Icon, Select, Textarea, TextInput, DatePicker } from "react-materialize";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ComponentSettingConstants from "../../../../../constants/ComponentSettingConstants";
// Actions
import { startAsyncCreateRadiografiaPage3B } from "../../../../../actions/radiografia/page03";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page03BForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    //Handles
    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const validateInput = (name, value) => {
        switch (name) {
            case 'fortaleza':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            default:
                return false;
        }
    };

    //para admin y supervisor
    let tempFormAdmin = {
        fortaleza: 'Domina el mercado de teléfonos inteligentes. Cuenta con alto nivel de investigación y desarrollo. Ha ganado diversos premios como marca(credibilidad). Promueve la innovación ecológica.',
        debilidad: 'Depende en gran medida del mercado estadounidense, que es particularmente cambiante. Presenta un declive en venta de smartphones desde 2017. Ha tenido fallas de producto relevantes.',
        oportunidad: 'Cuenta con grandes logros en manejo de recursos humanos. Hace diversificaciones y adquisiciones estratégicas. Es un líder en la tecnología 5G.',
        amenaza: 'Presenta controversias de patente. Percibe un aumento sostenido de la competencia. No es inmune a la falta de certeza financiera.',
    }

    let [tempForm, handleInputChange] = useForm({ fortaleza: '', debilidad: '', oportunidad: '', amenaza: '', idEstado: '1' }, validateInput);

    const { fortaleza, debilidad, oportunidad, amenaza } = tempForm;

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage3B({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="row no-margin-bot">
                    <h5 className="more-text">FODA</h5>
                </div>
                <p className="justify-align">
                    <b>Fortalezas.-</b>  Aspectos internos a favor con que cuenta la organización para generar diferencial competitivo.<br />
                    <b>Debilidades.-</b> Aspectos internos que requieren ser potenciados para mejorar el desempeño organizacional.<br />
                    <b>Oportunidades.-</b> Circunstancias externas que se espera que ocurran y que podrían tener un impacto positivo en la organización.<br />
                    <b>Amenazas.-</b>  Circunstancias externas que en el caso de que ocurran tendrían influencia negativa sobre la organización.
                        </p>
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="fortaleza"
                    name="fortaleza"
                    label="Fortalezas"
                    value={tempForm.fortaleza}
                    onChange={handleInputChange}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="debilidad"
                    name="debilidad"
                    label="Debilidades"
                    value={tempForm.debilidad}
                    onChange={handleInputChange}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="oportunidad"
                    name="oportunidad"
                    label="Oportunidades"
                    value={tempForm.oportunidad}
                    onChange={handleInputChange}
                    data-length={200}
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <Textarea
                    icon={<Icon>mode_edit</Icon>}
                    s={12}
                    id="amenaza"
                    label="Amenazas"
                    name="amenaza"
                    value={tempForm.amenaza}
                    onChange={handleInputChange}
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

export default Page03BForm;
