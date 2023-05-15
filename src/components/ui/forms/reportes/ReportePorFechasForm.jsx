import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Icon } from "react-materialize";
import ReportsDownload from "../../../screens/reportes/ReportsDownload";

const ReportePorFechasForm = ( { formValues, handleChange, handleSubmit } ) => {

    const optionsDatePicker = {
        autoClose: false,
        container: null,
        defaultDate: null,
        disableDayFn: null,
        disableWeekends: false,
        events: [],
        firstDay: 0,
        format: 'yyyy-m-dd',
        i18n: {
            cancel: 'Cancelar',
            clear: 'Limpiar',
            done: 'Seleccionar',
            months: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiemmbre',
                'Octubre',
                'Noviembre',
                'Deciembre'
            ],
            monthsShort: [
                'Ene',
                'Feb',
                'Mar',
                'Abr',
                'May',
                'Jun',
                'Jul',
                'Ago',
                'Sep',
                'Oct',
                'Nov',
                'Dic'
            ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [
                'Domingo',
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado'
            ],
            weekdaysAbbrev: [
                'D',
                'L',
                'M',
                'M',
                'J',
                'V',
                'S'
            ],
            weekdaysShort: [
                'Dom',
                'Lun',
                'Mar',
                'Mie',
                'Jue',
                'Vie',
                'Sab'
            ]
        },
        isRTL: false,
        maxDate: null,
        minDate: null,
        onClose: null,
        onDraw: null,
        onOpen: null,
        onSelect: null,
        parse: null,
        setDefaultDate: false,
        showClearBtn: false,
        showDaysInNextAndPreviousMonths: false,
        showMonthAfterYear: false,
        yearRange: 10
    };

    return (
        <form onSubmit={ handleSubmit }>
            <DatePicker
                id="fechas_reporte-inicial"
                s={ 12 }
                name="fecha_inicial"
                icon={<Icon>today</Icon>}
                label="Fecha inicial"
                options={ optionsDatePicker }
                value={ formValues.fecha_inicial }
                onChange={ handleChange }
                required
            />
            <DatePicker
                id="fechas_reporte-final"
                s={ 12 }
                name="fecha_final"
                icon={ <Icon>event</Icon> }
                label="Fecha final"
                options={ optionsDatePicker }
                value={ formValues.fecha_final }
                onChange={ handleChange }
                required
            />
            <div className="row no-margin-bot center-align">
                <div className="input-field col s12">
                    <input type="submit" className="btn" value="Generar reporte" />
                    <ReportsDownload />
                </div>
            </div>
        </form>
    );
};

ReportePorFechasForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default ReportePorFechasForm;
