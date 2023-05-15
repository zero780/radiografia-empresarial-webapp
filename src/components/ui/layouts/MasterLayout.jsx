import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// Constants
import { StorageConstants } from "../../../constants/StorageConstants";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Componentes
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import LoadingAside from "../asides/LoadingAside";

const MasterLayout = ({ className, children, sidenavComponent: SidenavComponent, id_radiografia = null, id_organizacion=null, id_grupo=null} ) => {

    const { isLogged:isUserLogged, userLogged, canUserDo } = useAuth();

    const { REACT_APP_CAS_ENDPOINT, REACT_APP_CAS_PROTOCOL } = process.env;

    const { loading } = useSelector( state => state.ui );

    useEffect(() => {
        const random = localStorage.getItem(StorageConstants.auth.random);
        if(!isUserLogged && random) {
            localStorage.removeItem(StorageConstants.auth.random);
            window.location.href = `${REACT_APP_CAS_PROTOCOL}://${REACT_APP_CAS_ENDPOINT}/logout`;
        }
    }, [isUserLogged]);

    return (
        <>
            <HeaderLayout isUserLogged={ isUserLogged } usuario={ userLogged } callbackUserCanDo={ canUserDo } />
            <main className={ className }>
                {
                    SidenavComponent && <SidenavComponent id_radiografia={id_radiografia} id_organizacion={id_organizacion} id_grupo={id_grupo}/>
                }
                {
                    Array.isArray(children) ? children.map( (Component) => (Component) ) : (children)
                }
                {
                    loading && <LoadingAside />
                }
            </main>
            <FooterLayout className={ `${SidenavComponent && 'has-sidebar'}` } isUserLogged={ isUserLogged } />
        </>
    );
};

MasterLayout.propTypes = {
    className: PropTypes.string,
    sidenavComponent: PropTypes.elementType,
};

export default MasterLayout;
