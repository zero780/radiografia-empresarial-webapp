import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { startAsyncGetReports } from "../../../actions/reports";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import ReportesSidenav from "../../ui/sidenavs/ReportesSidenav";
import ReportesBreadcrum from "../../ui/breadcrums/ReportesBreadcrum";

const ReportesIndexScreen = () => {

    const { token } = useAuth();

    const { reports } = useSelector( state => state.reports );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startAsyncGetReports(token) );
    }, []);

    return (
        <MasterLayout>
            <section className="section">
                <ReportesBreadcrum url={ RouteConstants.reports.index } action="Listar" />
                <div className="container">
                    <h4 className="center-align">Reportes disponibles</h4>
                    <div className="row">
                    {
                        reports.map( reporte => (
                            <div className="col s12 m4">
                                <Link to={ RouteConstants.reports.view.replace(':reporte?', reporte.slug) } exact>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src="https://picsum.photos/350/250" />
                                            <span className="card-title">{ reporte.nombre }</span>
                                        </div>
                                        <div className="card-content">
                                            <p>Esta es una breve descripción del reporte "{ reporte.nombre }".</p>
                                        </div>
                                        <div className="card-action">
                                            <span>Generar reporte</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default ReportesIndexScreen;
