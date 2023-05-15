import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, TextInput } from "react-materialize";
// Actions
import { startAsyncCreateRadiografiaPage2E } from "../../../../../actions/radiografia/page02";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page02AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const validateInput = (name, value) => {
        switch (name) {
            case 'porcentajeMercadoLocal':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            default:
                return false;
        }
    };

    //para admin y supervisor
    let tempFormAdmin = {
        porcentajeMercadoLocal: '26',
        porcentajeMercadoProvincial: '35',
        porcentajeMercadoNacional: '10',
        porcentajeMercadoInternacional: '2',
    }

    let [tempForm, handleInputChange] = useForm({ porcentajeMercadoLocal: '', porcentajeMercadoProvincial: '', porcentajeMercadoNacional: '', porcentajeMercadoInternacional: '', idEstado: '1' }, validateInput);

    const { porcentajeMercadoLocal, porcentajeMercadoProvincial, porcentajeMercadoNacional, porcentajeMercadoInternacional, idEstado } = tempForm;

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage2E({
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
                    <h5 className="more-text">Mercado Geográfico</h5>
                </div>
                <TextInput
                    s={6}
                    id="porcentajeMercadoLocal"
                    name="porcentajeMercadoLocal"
                    value={tempForm.porcentajeMercadoLocal}
                    onChange={handleInputChange}
                    label="% para Mercado Local"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <TextInput
                    s={6}
                    id="porcentajeMercadoProvincial"
                    name="porcentajeMercadoProvincial"
                    value={tempForm.porcentajeMercadoProvincial}
                    onChange={handleInputChange}
                    label="% para Mercado Provincial"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <TextInput
                    s={6}
                    id="porcentajeMercadoNacional"
                    name="porcentajeMercadoNacional"
                    value={tempForm.porcentajeMercadoNacional}
                    onChange={handleInputChange}
                    label="% para Mercado Nacional"
                    validate
                    disabled={esAdmin || esSupervisor}
                />
                <TextInput
                    s={6}
                    id="porcentajeMercadoInternacional"
                    name="porcentajeMercadoInternacional"
                    value={tempForm.porcentajeMercadoInternacional}
                    onChange={handleInputChange}
                    label="% para Mercado Internacional"
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

export default Page02AForm;
