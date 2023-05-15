import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PropTypes from 'prop-types';
import { Icon, Table } from "react-materialize";
import useAuth from "../../../hooks/useAuth";

//Actions
import { startAsyncGetRadiografiasAdmin } from "../../../actions/crud/utils";

const RadiografiasAdminTable = ({ radiografias }) => {

    return (
        <div className="white z-depth-1 section" style={{ 'padding': '1rem' }}>
            <Table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th data-field="organizacion">Organización</th>
                        <th data-field="detalles">Detalles</th>
                        <th data-field="opciones">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        radiografias.length ? (
                            radiografias.map(({ id_radiografia, id_organizacion, organizacion_nombre, estado_nombre, created_at }) => <tr key={`radiografia_${id_radiografia}`}>
                                <td>{organizacion_nombre}</td>
                                <td>
                                    <Icon title={`Estado: ${estado_nombre}`}>info</Icon>
                                    <Icon title={`Fecha de Creación: ${created_at}`}>schedule</Icon>
                                </td>
                                <td>                                
                                    <a href={`/administracion/radiografia/${(id_radiografia)}/organizacion/${(id_organizacion)}`} className="btn-flat" title="Ver Detalles">
                                        <Icon>edit</Icon>
                                    </a>
                                </td>
                            </tr>)
                        ) : (
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};



export default RadiografiasAdminTable;
