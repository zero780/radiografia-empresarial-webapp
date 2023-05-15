import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from "react-materialize";
import useAuth from "../../../hooks/useAuth";

const GruposTable = ({ grupos, showEstado=false }) => {

    const modelname = 'Grupo';
    const { canUserDo } = useAuth();

    return (
        <div className="container-2">
            <div className="white z-depth-1 section" style={{'padding': '1rem'}}>
                <Table className="highlight centered responsive-table">
                    <thead>
                        <tr>
                            <th data-field="organizacion">Organización</th>
                            <th data-field="vinculo">Vínculo</th>
                            <th data-field="integrantes">Cantidad de integrantes</th>
                            {
                                showEstado ? <th data-field="estado">Estado</th> : ''
                            }
                            <th data-field="createdAt">Fecha de creación</th>
                            <th data-field="opciones">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        grupos.length ? (
                            grupos.map(({id, organizacion, vinculo, integrantes, estado, createdAt}) => <tr key={`grupo_${id}`}>
                                <td>{organizacion}</td>
                                <td>{vinculo}</td>
                                <td>{integrantes?.length}</td>
                                {
                                    showEstado ? <td>{estado}</td> : ''
                                }
                                <td>{ createdAt }</td>
                                <td>
                                {
                                    canUserDo(modelname, 'view') ? (
                                        <a href={`/grupos-de-trabajo/${btoa(id)}/detalles`} className="btn-flat" title="Ver Detalles">
                                            <Icon>zoom_in</Icon>
                                        </a>
                                    ) : (
                                        <a href="#?" className="btn-flat disabled" title="Ver Detalles">
                                            <Icon>zoom_in</Icon>
                                        </a>
                                    )
                                }
                                </td>
                            </tr>)
                        ) : (
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                {
                                    showEstado ? <td>-</td> : ''
                                }
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

GruposTable.propTypes = {
    grupos: PropTypes.array.isRequired,
    //showEstado: PropTypes.bool
};

export default GruposTable;
