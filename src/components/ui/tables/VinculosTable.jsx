import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTable from "react-data-table-component";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
// Constants
import ModelConstants from "../../../constants/ModelConstants"
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";

const VinculosTable = ({ vinculos }) => {

    const { canUserDo } = useAuth();

    const [ data, setData ] = useState(vinculos);

    const [ filterText, setFilterText ] = useState('');

    useEffect(() => {
        if(filterText.length) {
            setData(vinculos.filter(item => item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase())));
        } else {
            setData(vinculos);
        }
    }, [filterText, vinculos]);

    const handleFilter = e => {
        e.preventDefault();
        setFilterText(e.target.value);
    };

    return (
        <div className="z-depth-1">
            <nav className="blue darken-1">
                <div className="nav-wrapper">
                    <form autoComplete="off">
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Buscar" required value={ filterText } onChange={ handleFilter } />
                            <label className="label-icon" htmlFor="search"><Icon>search</Icon></label>
                            <Icon onClick={ () => setFilterText('') }>close</Icon>
                        </div>
                    </form>
                </div>
            </nav>
            <DataTable
                noHeader
                columns={[
                    {
                        name: 'Vínculo',
                        selector: 'nombre',
                        sortable: true,
                    },
                    {
                        name: 'Opciones',
                        sortable: false,
                        cell: row => (
                            <div className="model-actions">
                                {
                                    canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.view) ? (
                                        <Link to={ { pathname: RouteConstants.bindings.view.replace(':id', btoa(row.id)) } } className="btn-flat" title="Ver detalles"><Icon>zoom_in</Icon></Link>
                                    ) : (
                                        <span className="btn-flat disabled" title="Ver detalles"><Icon>zoom_in</Icon></span>
                                    )
                                }
                                {
                                    canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) ? (
                                        <Link to={ { pathname: RouteConstants.bindings.edit.replace(':id', btoa(row.id)) } } className="btn-flat" title="Editar detalles"><Icon>edit</Icon></Link>
                                    ) : (
                                        <span className="btn-flat disabled" title="Editar detalles"><Icon>edit</Icon></span>
                                    )
                                }
                                {
                                    canUserDo(ModelConstants.binding.modelname, ModelConstants.binding.actions.edit) ? (
                                        <Link to={ { pathname: RouteConstants.bindings.manager.replace(':id', btoa(row.id)) } } className="btn-flat" title="Asignar representante"><Icon>assignment_ind</Icon></Link>
                                    ) : (
                                        <span className="btn-flat disabled" title="Asignar representante"><Icon>assignment_ind</Icon></span>
                                    )
                                }
                                {
                                    <span className="btn-flat disabled" title="Eliminar"><Icon>delete_outline</Icon></span>
                                }
                            </div>
                        )
                    }
                ]}
                data={ data }
                striped
                highlightOnHover
                responsive
                pagination
                paginationPerPage={20}
                paginationRowsPerPageOptions={[20, 30, 40, 50]}
                paginationComponentOptions={ { rowsPerPageText: 'Registros:', rangeSeparatorText: 'de', noRowsPerPage: false, selectAllRowsItem: false, selectAllRowsItemText: 'All' } }
            />
        </div>
    );
};

VinculosTable.propTypes = {
    vinculos: PropTypes.array.isRequired,
};

export default VinculosTable;
