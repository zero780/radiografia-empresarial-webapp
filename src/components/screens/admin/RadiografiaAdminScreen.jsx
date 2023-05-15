import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link, Redirect, Route } from "react-router-dom";
import RadiografiaAdminSidenav from "../../ui/sidenavs/RadiografiaAdminSidenav";
import RadiografiaPage1Form from "../../ui/forms/radiografias/RadiografiaPage1Form";
import RadiografiaPage2Form from "../../ui/forms/radiografias/RadiografiaPage2Form";
import RadiografiaPage3Form from "../../ui/forms/radiografias/RadiografiaPage3Form";
import RadiografiaPage4Form from "../../ui/forms/radiografias/RadiografiaPage4Form";
import RadiografiaPage5Form from "../../ui/forms/radiografias/RadiografiaPage5Form";
import RadiografiaPage6Form from "../../ui/forms/radiografias/RadiografiaPage6Form";
import RadiografiaPage7Form from "../../ui/forms/radiografias/RadiografiaPage7Form";
import RadiografiaPage8Form from "../../ui/forms/radiografias/RadiografiaPage8Form";
import RadiografiaPage9Form from "../../ui/forms/radiografias/RadiografiaPage9Form";
import RadiografiaPage10Form from "../../ui/forms/radiografias/RadiografiaPage10Form";
import RadiografiaPage11Form from "../../ui/forms/radiografias/RadiografiaPage11Form";
import RadiografiaPage12Form from "../../ui/forms/radiografias/RadiografiaPage12Form";
import RadiografiaPage13Form from "../../ui/forms/radiografias/RadiografiaPage13Form";
import Error404Screen from "../errors/Error404Screen";
import AdministracionSidenav from "../../ui/sidenavs/AdministracionSidenav";
import RouteConstants from "../../../constants/RouteConstants";
import VinculosForm from "../../ui/forms/VinculosForm";
import MasterLayout from "../../ui/layouts/MasterLayout";
// Actions
import { startAsyncGetOrganizationById } from "../../../actions/crud/business";
// Hooks
import useAuth from "../../../hooks/useAuth";

const RadiografiaAdminScreen = ({ match: { params: { id_radiografia, id_organizacion, action } } }) => {

    //GET empresa
    const { token } = useAuth();

    const { active: organizacion } = useSelector(state => state.business);

    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(startAsyncGetOrganizationById(id_organizacion, token));
        } catch (e) { }
    }, []);

    let titulo = '';
    let component = (<h4>Formulario en desarrollo</h4>);

    switch (action || '') {
        case '':
            return <Redirect to={`/administracion/radiografia/${id_radiografia}/organizacion/${id_organizacion}/page-01`} />;
        case 'page-01':
            titulo = 'DATOS DE CONTACTO DE LA EMPRESA';
            component = <RadiografiaPage1Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-02':
            titulo = 'DESCRIPCIÓN DE LA EMPRESA Y SU ACTIVIDAD';
            component = <RadiografiaPage2Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-03':
            titulo = 'COMPETITIVIDAD';
            component = <RadiografiaPage3Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-04':
            titulo = 'INFRAESTRUCTURA';
            component = <RadiografiaPage4Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-05':
            titulo = 'ESTRATEGIA COMERCIAL';
            component = <RadiografiaPage5Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-06':
            titulo = 'INTERNACIONALIZACIÓN';
            component = <RadiografiaPage6Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-07':
            titulo = 'RECURSOS HUMANOS';
            component = <RadiografiaPage7Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-08':
            titulo = 'TECNOLOGÍA';
            component = <RadiografiaPage8Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-09':
            titulo = 'CALIDAD, PREVENCIÓN DE RIESGOS Y MEDIO AMBIENTE';
            component = <RadiografiaPage9Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-10':
            titulo = 'COOPERACIÓN EMPRESARIAL';
            component = <RadiografiaPage10Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-11':
            titulo = 'DATOS FINANCIEROS';
            component = <RadiografiaPage11Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-12':
            titulo = 'INNOVACIÓN Y MEJORA COMPETITIVA';
            component = <RadiografiaPage12Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        case 'page-13':
            titulo = 'SUBVENCIONES Y OTROS PROGRAMAS DE APOYO A LA PYME';
            component = <RadiografiaPage13Form idRadiografia={id_radiografia} idOrganizacion={id_organizacion} idGrupo={null} esAdmin={true} esSupervisor={false} />;
            break;
        /*default:
            return <Route component={Error404Screen} />;*/
    }

    return (
        <MasterLayout sidenavComponent={RadiografiaAdminSidenav} id_radiografia={id_radiografia} id_organizacion={id_organizacion} id_grupo={null}>
            <section className="section has-sidebar">
                <div className="col s12 right-align">
                    <Link to={RouteConstants.admin.prefix} className="breadcrumb">Administración</Link>
                    <Link to={RouteConstants.admin.x_ray_admin} className="breadcrumb">Radiografiar</Link>
                    {
                        organizacion ? (
                            <Link className="breadcrumb">{organizacion.nombre}</Link>
                        ) : ''
                    }
                </div>
                <h4 className="center-align">{titulo}</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <div className="container">
                            {/*<p className="justify-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.</p>*/}
                            {
                                component ?? ''
                            }
                        </div>
                    </div>
                </div>
                {/*<p className="right">Puedes obtener información en este sitio: <a href="https://google.com.ec" target="_blank">https://google.com.ec</a></p>*/}
            </section>
        </MasterLayout>
    );
};

export default RadiografiaAdminScreen;
