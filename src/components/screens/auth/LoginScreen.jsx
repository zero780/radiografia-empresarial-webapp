import React, { useEffect, useState } from 'react';
import CasClient, { constant } from "react-cas-client";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// Actions
import { doLogin } from "../../../actions/auth";
import { doErrorMessage, doSuccessMessage } from "../../../actions/ui";
// Constants
import { MessageConstants } from '../../../constants/MessageConstants';
import { RouteConstants } from '../../../constants/RouteConstants';
// Components
import LoadingAside from "../../ui/asides/LoadingAside";

const LoginScreen = () => {

    const cargarData = () => {
        if (localStorage.getItem('config__vinculos') === null) {
            localStorage.setItem('config__vinculos', JSON.stringify([
                {nombre: 'Pasantías comunitarias', valor: '1'},
                {nombre: 'Pasantías empresariales', valor: '2'},
                {nombre: 'Proyecto de investigación', valor: '3'},
                {nombre: 'Proyecto integrador', valor: '4'},
                {nombre: 'Servicios prestados', valor: '5'},
            ]));
        }
        if (localStorage.getItem('config__organizaciones') === null) {
            localStorage.setItem('config__organizaciones', JSON.stringify([
                {valor: '1', nombre: 'CLARO', identificacion: '1111111111001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '1111111111001'}}},
                {valor: '2', nombre: 'CNT EP', identificacion: '2222222222001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '2222222222001'}}},
                {valor: '3', nombre: 'HOSPITAL LEÓN BECERRA', identificacion: '3333333333001', vinculos: ['Pasantías comunitarias'], respuestas: {datos_generales: {ruc: '3333333333001'}}},
                {valor: '4', nombre: 'TELCONET', identificacion: '4444444444001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '4444444444001'}}},
            ]));
        }
        if (localStorage.getItem('config__grupos') === null) {
            localStorage.setItem('config__grupos', JSON.stringify([
                {
                    id: '1',
                    estado: 'Archivado',
                    organizacion: 'CLARO',
                    vinculo: 'Pasantías empresariales',
                    integrantes: [
                        {name: 'profesor1@espol.edu.ec', mail: 'profesor1@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'estudiante1@espol.edu.ec', mail: 'estudiante1@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante2@espol.edu.ec', mail: 'estudiante2@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante3@espol.edu.ec', mail: 'estudiante3@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'Grupo de estudiantes realizarán pasantías empresariales en dicha empresa.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 12:45',
                    authorized_at: '2020-01-07 07:44',
                },
                {
                    id: '2',
                    estado: 'Archivado',
                    organizacion: 'CLARO',
                    vinculo: 'Servicios prestados',
                    integrantes: [
                        {name: 'empleado1@espol.edu.ec', mail: 'empleado1@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'empleado2@espol.edu.ec', mail: 'empleado2@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'ESPOL ha firmado un contrato para la implementación de la red 5G.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 13:12',
                    authorized_at: '2020-01-07 07:45',
                },
                {
                    id: '3',
                    estado: 'Archivado',
                    organizacion: 'TELCONET',
                    vinculo: 'Servicios prestados',
                    integrantes: [
                        {name: 'administrador@espol.edu.ec', mail: 'administrador@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'empleado2@espol.edu.ec', mail: 'empleado2@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'ESPOL ha firmado un contrato para la construcción de clases.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisorgtsi@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 13:12',
                    authorized_at: '2020-01-07 07:45',
                },
                {
                    id: '4',
                    estado: 'Pendiente',
                    organizacion: 'HOSPITAL LEÓN BECERRA',
                    vinculo: 'Pasantías comunitarias',
                    integrantes: [
                        {name: 'lider@espol.edu.ec', mail: 'lider@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'fafarfan@espol.edu.ec', mail: 'fafarfan@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'jaipcaic@espol.edu.ec', mail: 'jaipcaic@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante3@espol.edu.ec', mail: 'estudiante3@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'Estudiantes realizarán pasantías comunitarias.',
                    motivoAceptacion: '',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-11 14:35',
                    authorized_at: '',
                },
            ]));
        }
    };

    const dispatch = useDispatch();

    const history = useHistory();

    const [ token, setToken ] = useState(null);

    const { REACT_APP_CAS_ENDPOINT, REACT_APP_CAS_PROTOCOL, REACT_APP_CAS_VALIDATION_ENDPOINT, REACT_APP_CAS_VALIDATION_PATH } = process.env;

    const casClient = new CasClient(REACT_APP_CAS_ENDPOINT, {
        version: constant.CAS_VERSION_2_0,
        protocol: REACT_APP_CAS_PROTOCOL,
        path: '/',
        validation_proxy_domain: REACT_APP_CAS_VALIDATION_ENDPOINT,
        validation_proxy_path: REACT_APP_CAS_VALIDATION_PATH
    });

    useEffect(() => {
        casClient
            .auth()
            .then(response => {
                setToken(response.user.trim());
                // cargarData();
            })
            .catch(errorRes => {
                //console.error(errorRes);
                dispatch( doErrorMessage(MessageConstants.error.auth.login) );
                history.push({ pathname:  RouteConstants.home });
            });
    }, []);

    useEffect(() => {
        if(token) {
            dispatch( doLogin(token) );
            dispatch( doSuccessMessage(MessageConstants.success.auth.login) );
            //history.push({ pathname:  RouteConstants.auth.dashboard });
        }
    }, [token]);

    return (
        <LoadingAside style={ { 'opacity': '1' } } />
    );
};

export default LoginScreen;
