import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Table } from "react-materialize";
import { Link } from "react-router-dom";
// Constants
import ModelConstants from "../../../constants/ModelConstants"
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
import DataTable from "react-data-table-component";

const OrganizacionesTable = ({ organizaciones }) => {

    const { canUserDo } = useAuth();

    const [ data, setData ] = useState(organizaciones);

    const [ filterText, setFilterText ] = useState('');

    useEffect(() => {
        if(filterText.length) {
            setData(organizaciones.filter(item => (item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase())) || (item.identificacion && item.identificacion.includes(filterText))));
        } else {
            setData(organizaciones);
        }
    }, [filterText, organizaciones]);

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
                        name: 'Nombre / Razón social',
                        selector: 'nombre',
                        sortable: true,
                    },
                    {
                        name: 'Identificación',
                        selector: 'identificacion',
                        sortable: true,
                    },
                    {
                        name: 'Opciones',
                        sortable: false,
                        cell: row => (
                            <div className="model-actions">
                                {
                                    canUserDo(ModelConstants.business.modelname, ModelConstants.business.actions.view) ? (
                                        <Link to={ { pathname: RouteConstants.business.view.replace(':id', btoa(row.id)) } } className="btn-flat" title="Ver detalles"><Icon>zoom_in</Icon></Link>
                                    ) : (
                                        <span className="btn-flat disabled" title="Ver detalles"><Icon>zoom_in</Icon></span>
                                    )
                                }
                                {
                                    canUserDo(ModelConstants.business.modelname, ModelConstants.business.actions.edit) ? (
                                        <Link to={ { pathname: RouteConstants.business.edit.replace(':id', btoa(row.id)) } } className="btn-flat" title="Editar detalles"><Icon>edit</Icon></Link>
                                    ) : (
                                        <span className="btn-flat disabled" title="Editar detalles"><Icon>edit</Icon></span>
                                    )
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

OrganizacionesTable.propTypes = {
    organizaciones: PropTypes.array.isRequired,
};

export default OrganizacionesTable;
