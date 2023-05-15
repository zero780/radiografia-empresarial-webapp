import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Icon, TextInput } from "react-materialize";
// Actions
import { startAsyncCreateRadiografiaPage1A } from "../../../../../actions/radiografia/page01";
// Hooks
import useAuth from "../../../../../hooks/useAuth";
import useForm from "../../../../../hooks/useForm";
// Validations
import { validateText } from "../../../../../utils/validate";

const Page01AForm = ({ idRadiografia, idOrganizacion, idGrupo, buttonText = 'Guardar', buttonSupervisorDecline = 'Rechazar', buttonSupervisorAcept = 'Aceptar', esAdmin, esSupervisor }) => {

    const { token } = useAuth();

    const [saved, setSaved] = useState(false);

    const dispatch = useDispatch();

    const validateInput = (name, value) => {
        switch (name) {
            case 'nombreComercial':
                const words = value.split(' ');
                return words.filter(w => validateText(w)).length > 0;
            default:
                return false;
        }
    };

    //para admin y supervisor
    let tempFormAdmin = {
        nombreComercial:'TELCONET S.A.',
        razonSocial:'TELCONET S.A.',
        identificacion:'0123598475368',
        representanteLegal:'Ing. José Meza',
        gerente:'Ing. José Meza',
        ciudad:'Guayaquil',
        direccion:'Kennedy Norte',
        telefono:'023698521',
        web:'https://www.telconet.net/',
        email:'info@telconet.ec',
    }

    let [tempForm, handleInputChange] = useForm({ nombreComercial: '', razonSocial: '', identificacion: '', idTipoIdentificacion: '1', representanteLegal: '', gerente: '', ciudad: '', direccion: '', telefono: '', web: '', email: '', idEstado: '1' }, validateInput);

    const { nombreComercial, razonSocial, identificacion, representanteLegal, gerente, ciudad, direccion, telefono, web, email, idEstado } = tempForm;

    if (esAdmin || esSupervisor) {
        tempForm = tempFormAdmin
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(startAsyncCreateRadiografiaPage1A({
            idRadiografia: idRadiografia,
            idOrganizacion: idOrganizacion,
            idGrupo: idGrupo,
            ...tempForm
        }, token));
        setSaved(true);
    };

    return (
        <form className="row" autoComplete="off" onSubmit={handleFormSubmit}>
            <TextInput
                icon={<Icon>business</Icon>}
                id="nombreComercial"
                name="nombreComercial"
                s={12}
                label="Nombre comercial"
                value={tempForm.nombreComercial}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>corporate_fare</Icon>}
                id="razonSocial"
                name="razonSocial"
                s={12}
                label="Razón social"
                value={tempForm.razonSocial}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>fingerprint</Icon>}
                id="identificacion"
                name="identificacion"
                s={12}
                label="RUC"
                value={tempForm.identificacion}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>face</Icon>}
                id="representanteLegal"
                name="representanteLegal"
                s={12}
                label="Representante legal"
                value={tempForm.representanteLegal}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>perm_identity</Icon>}
                id="gerente"
                name="gerente"
                s={12}
                label="Nombre del gerente"
                value={tempForm.gerente}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>location_city</Icon>}
                id="ciudad"
                name="ciudad"
                s={12}
                label="Ciudad"
                value={tempForm.ciudad}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>eco</Icon>}
                id="direccion"
                name="direccion"
                s={12}
                label="Dirección"
                value={tempForm.direccion}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>phone</Icon>}
                id="telefono"
                name="telefono"
                s={12}
                label="Teléfono"
                value={tempForm.telefono}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>language</Icon>}
                id="web"
                name="web"
                s={12}
                label="Página web"
                value={tempForm.web}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
            <TextInput
                icon={<Icon>mail</Icon>}
                id="email"
                name="email"
                s={12}
                label="Correo electrónico"
                value={tempForm.email}
                onChange={handleInputChange}
                disabled={esAdmin || esSupervisor}
                validate
            />
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

export default Page01AForm;
