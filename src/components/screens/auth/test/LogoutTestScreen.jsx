import React from 'react';
//import { useHistory } from "react-router";

const LogoutTestScreen = () => {

    //const history = useHistory();

    console.log('Cerrando sesión. . .');

    localStorage.removeItem('auth__login');
    //history.push({ pathname:  '/' });
    window.location = '/';

    return (
        <>
        </>
    );
};

export default LogoutTestScreen;
