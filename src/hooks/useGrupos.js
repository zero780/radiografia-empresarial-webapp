import { useState, useEffect } from 'react';
import useAuth from "./useAuth";

const useGrupos = () => {

    const { userLogged:{ correo }, canUserDo }  = useAuth();

    const [all, setAll] = useState([]/*JSON.parse(localStorage.getItem('config__grupos'))*/);

    /*useEffect(() => {
        localStorage.setItem('config__grupos', JSON.stringify(all));
    }, [all]);*/

    const modelname = 'Grupo';

    const pendientes = canUserDo(modelname, 'check') ?
        all.filter(({estado}) => estado === 'Pendiente' || estado === 'Finalizado') :
        all.filter(({estado, supervisor}) => supervisor === correo && (estado === 'Pendiente' || estado === 'Finalizado'))
    ;
    const archivados = canUserDo(modelname, 'check') ?
        all.filter(({estado}) => estado === 'Archivado') :
        all.filter(({estado, supervisor}) => supervisor === correo && estado === 'Archivado');
    const ejecucion = canUserDo(modelname, 'check') ?
        all.filter(({estado}) => estado === 'En ejecución') :
        all.filter(({estado, supervisor}) => supervisor === correo && estado === 'En ejecución');
    const finalizados = all.filter(({estado}) => estado === 'Finalizado');
    const mios = all.filter(({estado, integrantes}) => estado !== 'Pendiente' && integrantes.filter(({mail}) => mail === correo).length > 0);

    const add = grupo => {
        let fecha = new Date();
        const newGrupo = {
            ...grupo,
            id: all.length + 1,
            estado: 'Pendiente',
            motivoAceptacion: '',
            supervisor: correo,
            representante: 'representante@espol.edu.ec',
            authorized_at: '',
            created_at: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDay()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };
        setAll([...all, newGrupo]);
        return newGrupo;
    };

    const show = (idBase64) => {
        const id = atob(idBase64);
        const search = all.filter(({id:idx}) => idx == id);
        return search.length ? search[0] : null;
    };

    const edit = (idBase64, newGrupo) => {
        const id = atob(idBase64);
        const other = all.filter(({id:idx}) => idx != id);
        setAll([...other, newGrupo]);
        return newGrupo;
    };

    return {
        all, pendientes, archivados, ejecucion, finalizados, mios, add, show, edit
    };
};

export default useGrupos;
