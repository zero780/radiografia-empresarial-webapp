import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from "react-materialize";

const RadiografiasSupervisorTable = ({ radiografias }) => {

    return (
        <div className="white z-depth-1 section" style={{ 'padding': '1rem' }}>
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
                            radiografias.map(({ id_radiografia, id_organizacion, id_grupo, nombre_organizacion, nombre_estado }) => <tr key={`radiografia_${id_radiografia}`}>
                                <td>Grupo {id_grupo}</td>
                                <td>{nombre_organizacion}</td>
                                <td>
                                    <Icon title={`Estado: ${nombre_estado}`}>info</Icon>
                                </td>
                                <td>
                                    <a href={`/supervisor/radiografia/${id_radiografia}/organizacion/${id_organizacion}/grupo/${id_grupo}`} className="btn-flat" title="Ver Detalles">
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

RadiografiasSupervisorTable.propTypes = {
    radiografias: PropTypes.array.isRequired,
};

export default RadiografiasSupervisorTable;
