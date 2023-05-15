import { useState, useEffect } from 'react';

const useOrganizaciones = () => {

    const [ organizaciones, setOrganizaciones ] = useState(JSON.parse(localStorage.getItem('config__organizaciones')));

    useEffect(() => {
        localStorage.setItem('config__organizaciones', JSON.stringify(organizaciones));
    }, [organizaciones]);

    const add = organizacion => {
        let fecha = new Date();
        const newOrg = {
            ...organizacion,
            valor: organizaciones.length + 1,
            vinculos: [],
            created_at: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };
        setOrganizaciones([...organizaciones, newOrg]);
        return newOrg;
    };

    const show = idBase64 => {
        const id = atob(idBase64);
        const search = organizaciones.filter(({valor:idx}) => idx == id);
        return search.length ? search[0] : null;
    };

    return {
        organizaciones, add, show
    };
};

export default useOrganizaciones;
