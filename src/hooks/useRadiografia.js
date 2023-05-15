import { useEffect, useState } from 'react';
import useAuth from "./useAuth";
import useGrupos from "./useGrupos";
import useOrganizaciones from "./useOrganizaciones";

const useRadiografia = () => {

    const [ radiografias, setRadiografias ] = useState([]);

    const { userLogged:{ correo }, canUserDo }  = useAuth();

    const { mios } = useGrupos();

    const { organizaciones } = useOrganizaciones();

    useEffect(() => {
        const r = mios.filter(( { estado } ) => estado.toLowerCase() === 'en ejecución').map(({ organizacion, vinculo }) => ({
            id: organizaciones.filter(({ valor, nombre }) => organizacion === nombre)[0].valor,
            organizacion: organizacion,
            vinculo: vinculo
        }));
        setRadiografias(r);
    }, []);

    useEffect(() => {
        console.log(radiografias);
    }, [radiografias]);

    return {
        radiografias
    };
};

export default useRadiografia;
