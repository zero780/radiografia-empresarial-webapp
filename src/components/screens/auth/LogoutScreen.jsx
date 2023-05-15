import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// Actions
import { startAsyncLogout } from "../../../actions/auth";
// Constants
import { RouteConstants } from '../../../constants/RouteConstants';
// Hooks
import useAuth from "../../../hooks/useAuth";
// Components
import LoadingAside from "../../ui/asides/LoadingAside";

const LogoutScreen = () => {

    const { token } = useAuth();

    const dispatch = useDispatch();

    const history = useHistory();

    const { REACT_APP_CAS_ENDPOINT, REACT_APP_CAS_PROTOCOL } = process.env;

    useEffect(() => {
        dispatch( startAsyncLogout(token) );
    }, []);

    useEffect(() => {
        if(!token) {
            //history.push({ pathname:  RouteConstants.home });
            window.location.href = `${REACT_APP_CAS_PROTOCOL}://${REACT_APP_CAS_ENDPOINT}/logout`;
        }
    }, [token]);

    return (
        <LoadingAside style={ { 'opacity': '1' } } />
    );
};

export default LogoutScreen;
