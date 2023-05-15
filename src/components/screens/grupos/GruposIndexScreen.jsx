import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
// Actions
import { startAsyncGetWorkgroupByType } from "../../../actions/crud/workgroup";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import GruposSidenav from "../../ui/sidenavs/GruposSidenav";
import GruposBreadcrum from "../../ui/breadcrums/GruposBreadcrum";
import GruposTable from "../../ui/tables/GruposTable";
import Error404Screen from "../errors/Error404Screen";


const GruposIndexScreen = ( { action='mine' } ) => {

    const { token } = useAuth();

    const { workgroups:{ content:grupos } } = useSelector( state => state.workgroups );

    const dispatch = useDispatch();

    const [ titulo, setTitulo ] = useState('Grupos de trabajo');
    const [ breadcrum, setBreadcrum ] = useState(null);

    const init = () => {
        switch(action || '') {
            case 'mine':
                setTitulo('Mis grupos de trabajo');
                setBreadcrum((<GruposBreadcrum urlAction={ RouteConstants.workgroups.list.mine } urlSection={ RouteConstants.workgroups.index } action="Mis grupos de trabajo" section="Grupos de trabajo" />));
                dispatch( startAsyncGetWorkgroupByType(RouteConstants.workgroups.list.mine, token) );
                break;
            case RouteConstants.workgroups.list.pending:
                setTitulo('Grupos de trabajo pendientes de aceptación/validación');
                setBreadcrum((<GruposBreadcrum urlAction={ RouteConstants.workgroups.list.pending } urlSection={ RouteConstants.workgroups.index } action="Pendientes de aprobación/rechazo" section="Grupos de trabajo" />));
                dispatch( startAsyncGetWorkgroupByType(RouteConstants.workgroups.list.pending, token) );
                break;
            case RouteConstants.workgroups.list.active:
                setTitulo('Grupos de trabajo activos');
                setBreadcrum((<GruposBreadcrum urlAction={ RouteConstants.workgroups.list.active } urlSection={ RouteConstants.workgroups.index } action="En ejecución" section="Grupos de trabajo" />));
                dispatch( startAsyncGetWorkgroupByType(RouteConstants.workgroups.list.active, token) );
                break;
            case RouteConstants.workgroups.list.archived:
                setTitulo('Grupos de trabajo archivados');
                setBreadcrum((<GruposBreadcrum urlAction={ RouteConstants.workgroups.list.archived } urlSection={ RouteConstants.workgroups.index } action="Archivados" section="Grupos de trabajo" />));
                dispatch( startAsyncGetWorkgroupByType(RouteConstants.workgroups.list.archived, token) );
                break;
            // case 'nuevo':
            //     const vinculos = JSON.parse(localStorage.getItem('config__vinculos'));
            //     const organizaciones = JSON.parse(localStorage.getItem('config__organizaciones'));
            //     component = <GruposForm vinculos={vinculos} organizaciones={organizaciones} />;
            //     titulo = 'Nuevo grupo de trabajo';
            //     break;
            default:
                return <Route component={ Error404Screen } />;
        }
    };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        init();
    }, [action]);

    return (
        <MasterLayout sidenavComponent={ GruposSidenav }>
            <section className="section has-sidebar">
                { breadcrum }
                <h4 className="center-align">{ titulo }</h4>
                <GruposTable grupos={ grupos } showEstado />
            </section>
        </MasterLayout>
    );
};

GruposIndexScreen.propTypes = {
    action: PropTypes.string
};

export default GruposIndexScreen;
