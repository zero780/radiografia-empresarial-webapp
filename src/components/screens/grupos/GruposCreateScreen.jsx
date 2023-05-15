import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// Actions
import { startAsyncGetBusiness } from "../../../actions/crud/business";
import { startAsyncGetBindings} from "../../../actions/crud/bindings";
import { startAsyncCreateWorkgroup } from "../../../actions/crud/workgroup";
// Constants
import RouteConstants from "../../../constants/RouteConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import MasterLayout from "../../ui/layouts/MasterLayout";
import GruposSidenav from "../../ui/sidenavs/GruposSidenav";
import GruposForm from "../../ui/forms/GruposForm";
import GruposBreadcrum from "../../ui/breadcrums/GruposBreadcrum";

const GrupoCreateScreen = () => {

    const { token } = useAuth();

    const { business } = useSelector( state => state.business );

    const { bindings } = useSelector( state => state.bindings );

    const { new:newWorkgroup } = useSelector( state => state.workgroups );

    const [ saved, setSaved ] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory();

    const initialState = {
        organizacion: '',
        vinculo: '',
        integrantes: [],
        motivoCreacion: ''
    };

    const [ tempGrupo, setTempGrupo ] = useState(initialState);

    useEffect(() => {
        dispatch( startAsyncGetBusiness(token) );
        dispatch( startAsyncGetBindings(token) );
    }, []);

    useEffect(() => {
        console.log('useEffect', tempGrupo);
    }, [tempGrupo]);

    useEffect(() => {
        if(saved) {
            dispatch( startAsyncCreateWorkgroup(tempGrupo, token) );
            setSaved(false);
        }
    }, [saved]);

    useEffect(() => {
        if(newWorkgroup && saved) {
            history.push({ pathname:  RouteConstants.workgroups.view.replace(':id', btoa(newWorkgroup.id)), });
        }
    }, [newWorkgroup]);

    return (
        <MasterLayout sidenavComponent={ GruposSidenav }>
            <section className="section has-sidebar">
                <GruposBreadcrum urlAction={ RouteConstants.workgroups.create } urlSection={ RouteConstants.workgroups.index } action="Nuevo" section="Grupos de trabajo"/>
                <h4 className="center-align">Nuevo grupo de trabajo</h4>
                <div className="container">
                    <div className="white z-depth-1 section form-pseudo">
                        <div className="container">
                            <GruposForm vinculos={ bindings } organizaciones={ business } tempGrupo={ tempGrupo } setTempGrupo={ setTempGrupo } setIsSaved={ setSaved } />
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default GrupoCreateScreen;
