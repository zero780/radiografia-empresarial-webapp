import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from "react-materialize";

const RadiografiasTable = ({ radiografias }) => {

    //corregir cuando se tenga el servicio de get radiografias para usuario OJO
    return (
        <div className="white z-depth-1 section" style={{'padding': '1rem'}}>
            <Table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th data-field="grupo">Grupo</th>
                        <th data-field="organizacion">Organización</th>
                        <th data-field="detalles">Detalles</th>
                        <th data-field="opciones">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    radiografias.length ? (
                            radiografias.map(({ id_radiografia, id_organizacion, id_grupo, organizacion_nombre, estado_nombre, created_at }) => <tr key={`radiografia_${id_radiografia}`}>
                                <td>Grupo {id_grupo}</td>
                                <td>{organizacion_nombre}</td>
                                <td>
                                    <Icon title={`Estado: ${estado_nombre}`}>info</Icon>
                                    <Icon title={`Fecha de Creación: ${created_at}`}>schedule</Icon>
                                </td>
                                <td>
                                    <a href={`/organizaciones/${(id_organizacion)}/radiografia/${(id_radiografia)}/grupo/1`} className="btn-flat" title="Ver Detalles">
                                        <Icon>edit</Icon>
                                    </a>
                                </td>
                        </tr>)
                    ) : (
                        <tr>
                            <td>-</td>
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

RadiografiasTable.propTypes = {
    radiografias: PropTypes.array.isRequired,
};

export default RadiografiasTable;
