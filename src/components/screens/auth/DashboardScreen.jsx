import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// Hooks
import useRadiografia from "../../../hooks/useRadiografia";
// Componentes
import RadiografiasTable from "../../ui/tables/RadiografiasTable";
import EnlacesInteresList from "../../ui/lists/enlaces/EnlacesInteresList";
import MasterLayout from "../../ui/layouts/MasterLayout";
import useAuth from "../../../hooks/useAuth";

//Actions
import { startAsyncGetRadiografiasUser } from "../../../actions/crud/utils";

const DashboardScreen = () => {

    //GET radiografias para administrador
    const dispatch = useDispatch();

    const { token } = useAuth();

    const { radiografiasUser } = useSelector(state => state.radiografiasUser);

    useEffect(() => {
        dispatch(startAsyncGetRadiografiasUser(token));
    }, []);

    //const { radiografias } = useRadiografia();

    const { userLogged } = useAuth();

    return (
        <MasterLayout>
            {/*<DashboardSidenav />*/}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <h2>Bienvenido(a)!</h2>
                        <p className="justify-align">Te damos la bienvenida al <strong>Sistema de Radiografía Empresarial</strong> de la ESPOL,
                            donde podrás realizar el levantamiento de información de las distintas organizaciones que
                            mantienen vínculos con la universidad y en las que participas.</p>
                    </div>
                    <div className="row">
                        <h4>Radiografías disponibles</h4>
                        <RadiografiasTable radiografias={radiografiasUser} />
                    </div>
                    <div className="row" style={{ marginTop: '60px' }}>
                        <h4>Enlaces de interés</h4>
                        <EnlacesInteresList />
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default DashboardScreen;
