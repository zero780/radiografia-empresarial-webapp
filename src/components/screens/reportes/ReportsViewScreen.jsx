import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// Actions
import { startAsyncGetReports } from "../../../actions/reports";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
import useForm from "../../../hooks/useForm";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import ReportesSidenav from "../../ui/sidenavs/ReportesSidenav";
import ReportesBreadcrum from "../../ui/breadcrums/ReportesBreadcrum";
import ReportePorFechasForm from "../../ui/forms/reportes/ReportePorFechasForm";

const ReportsViewScreen = ({ match: { params: { reporte:reporteSlug } } }) => {

    const { token } = useAuth();


    const { reports } = useSelector( state => state.reports );

    const [ titulo, setTitulo ] = useState('');

    const [ reporte, setReporte ] = useState('');

    const [ formularioComponente, setFormularioComponente ] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startAsyncGetReports(token) );
    }, []);

    useEffect(() => {
        if(reports.length) {
            setReporte(reports.filter( r => r.slug === reporteSlug )[0]);
        }
    }, [reports, reporteSlug]);

    const validateInput = (name, value) => {
        switch (name) {
            case 'fecha_inicial':
            case 'fecha_final':
                return value.length > 0;
            default:
                return false;
        }
    };

    const [ formValues, handleChange, setValues ] = useForm({ fecha_inicial: '', fecha_final: '' }, validateInput);

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formValues)
    };

    const handleDatePickerOnChange = e => {
        console.log(e);
    };

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    useEffect(() => {
        if(reporte) {
            setTitulo(reporte.nombre);
            switch (reporte.componente) {
                case 'ReportePorFechasForm':
                    setFormularioComponente(<ReportePorFechasForm formValues={ formValues } handleChange={ handleDatePickerOnChange } handleSubmit={ handleFormSubmit }/>);
                    break;
                default:
                    setFormularioComponente(<p>No existe el formulario indicado.</p>)
                    break;
            }
        }
    }, [reporte]);



    const [ isSaved, setIsSaved ] = useState(false);

    let reporte_name = '';

    const handleSubmit = e => {
        e.preventDefault();
        setIsSaved(true);
    };

    return (
        <MasterLayout sidenavComponent={ ReportesSidenav }>
            <section className="section has-sidebar">
                <ReportesBreadcrum url={ RouteConstants.reports.view.replace(':reporte?', reporte.slug) } action="Generar" />
                <h4 className="center-align">{ titulo }</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <div className="container">
                            <div className="row no-margin-bot">
                                <h5 className="more-text">Escoja el rango de fechas en el que quiere generar el reporte</h5>
                                { formularioComponente }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default ReportsViewScreen;
