import React from 'react';

const LoginTestScreen = () => {

    console.log('Iniciando sesión. . .');

    const cargarData = () => {
        if (localStorage.getItem('config__vinculos') === null) {
            localStorage.setItem('config__vinculos', JSON.stringify([
                {nombre: 'Pasantías comunitarias', valor: '1'},
                {nombre: 'Pasantías empresariales', valor: '2'},
                {nombre: 'Proyecto de investigación', valor: '3'},
                {nombre: 'Proyecto integrador', valor: '4'},
                {nombre: 'Servicios prestados', valor: '5'},
            ]));
        }
        if (localStorage.getItem('config__organizaciones') === null) {
            localStorage.setItem('config__organizaciones', JSON.stringify([
                {valor: '1', nombre: 'CLARO', identificacion: '1111111111001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '1111111111001'}}},
                {valor: '2', nombre: 'CNT EP', identificacion: '2222222222001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '2222222222001'}}},
                {valor: '3', nombre: 'HOSPITAL LEÓN BECERRA', identificacion: '3333333333001', vinculos: ['Pasantías comunitarias'], respuestas: {datos_generales: {ruc: '3333333333001'}}},
                {valor: '4', nombre: 'TELCONET', identificacion: '4444444444001', vinculos: ['Pasantías empresariales', 'Servicios prestados'], respuestas: {datos_generales: {ruc: '4444444444001'}}},
            ]));
        }
        if (localStorage.getItem('config__grupos') === null) {
            localStorage.setItem('config__grupos', JSON.stringify([
                {
                    id: '1',
                    estado: 'Archivado',
                    organizacion: 'CLARO',
                    vinculo: 'Pasantías empresariales',
                    integrantes: [
                        {name: 'profesor1@espol.edu.ec', mail: 'profesor1@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'estudiante1@espol.edu.ec', mail: 'estudiante1@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante2@espol.edu.ec', mail: 'estudiante2@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante3@espol.edu.ec', mail: 'estudiante3@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'Grupo de estudiantes realizarán pasantías empresariales en dicha empresa.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 12:45',
                    authorized_at: '2020-01-07 07:44',
                },
                {
                    id: '2',
                    estado: 'Archivado',
                    organizacion: 'CLARO',
                    vinculo: 'Servicios prestados',
                    integrantes: [
                        {name: 'empleado1@espol.edu.ec', mail: 'empleado1@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'empleado2@espol.edu.ec', mail: 'empleado2@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'ESPOL ha firmado un contrato para la implementación de la red 5G.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 13:12',
                    authorized_at: '2020-01-07 07:45',
                },
                {
                    id: '3',
                    estado: 'Archivado',
                    organizacion: 'TELCONET',
                    vinculo: 'Servicios prestados',
                    integrantes: [
                        {name: 'administrador@espol.edu.ec', mail: 'administrador@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'empleado2@espol.edu.ec', mail: 'empleado2@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'ESPOL ha firmado un contrato para la construcción de clases.',
                    motivoAceptacion: 'OK',
                    supervisor: 'supervisorgtsi@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-06 13:12',
                    authorized_at: '2020-01-07 07:45',
                },
                {
                    id: '4',
                    estado: 'Pendiente',
                    organizacion: 'HOSPITAL LEÓN BECERRA',
                    vinculo: 'Pasantías comunitarias',
                    integrantes: [
                        {name: 'lider@espol.edu.ec', mail: 'lider@espol.edu.ec', tipo: 'Líder de grupo'},
                        {name: 'fafarfan@espol.edu.ec', mail: 'fafarfan@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'jaipcaic@espol.edu.ec', mail: 'jaipcaic@espol.edu.ec', tipo: 'Miembro normal'},
                        {name: 'estudiante3@espol.edu.ec', mail: 'estudiante3@espol.edu.ec', tipo: 'Miembro normal'},
                    ],
                    motivoCreacion: 'Estudiantes realizarán pasantías comunitarias.',
                    motivoAceptacion: '',
                    supervisor: 'supervisor@espol.edu.ec',
                    representante: 'representante@espol.edu.ec',
                    created_at: '2020-01-11 14:35',
                    authorized_at: '',
                },
            ]));
        }
    };

    const login = (user) => {
        cargarData();
        localStorage.setItem('auth__login', JSON.stringify(user));
        window.location ='/';
    };

    const handleLogin = e => {
        e.preventDefault();
        login({
            nombre: 'Frederick Farfán',
            correo: 'fafarfan@espol.edu.ec',
            canDo: [
            ],
        });
    };
    const handleLoginAdministrador = e => {
        e.preventDefault();
        login({
            nombre: 'Frederick Farfán',
            correo: 'administrador@espol.edu.ec',
            canDo: [
                { model: 'Usuario', action: 'create' },
                { model: 'Usuario', action: 'view' },
                { model: 'Usuario', action: 'edit' },
                { model: 'Usuario', action: 'delete' },
                { model: 'Usuario', action: 'list' },
                { model: 'Vinculo', action: 'create' },
                { model: 'Vinculo', action: 'view' },
                { model: 'Vinculo', action: 'edit' },
                { model: 'Vinculo', action: 'delete' },
                { model: 'Vinculo', action: 'list' },
                { model: 'Organizacion', action: 'create' },
                { model: 'Organizacion', action: 'view' },
                { model: 'Organizacion', action: 'edit' },
                { model: 'Organizacion', action: 'delete' },
                { model: 'Organizacion', action: 'list' },
            ],
        });
    };
    const handleLoginRepresentante = e => {
        e.preventDefault();
        login({
            nombre: 'Frederick Farfán',
            correo: 'representante@espol.edu.ec',
            canDo: [
                { model: 'Organizacion', action: 'create' },
                { model: 'Organizacion', action: 'view' },
                { model: 'Organizacion', action: 'edit' },
                { model: 'Organizacion', action: 'delete' },
                { model: 'Organizacion', action: 'list' },
                { model: 'Grupo', action: 'check' },
                { model: 'Grupo', action: 'view' },
                { model: 'Grupo', action: 'list' },
            ],
        });
    };
    const handleLoginSupervisor = e => {
        e.preventDefault();
        login({
            nombre: 'Frederick Farfán',
            correo: 'supervisor@espol.edu.ec',
            canDo: [
                { model: 'Organizacion', action: 'create' },
                { model: 'Organizacion', action: 'view' },
                { model: 'Organizacion', action: 'edit' },
                { model: 'Organizacion', action: 'delete' },
                { model: 'Organizacion', action: 'list' },
                { model: 'Grupo', action: 'create' },
                { model: 'Grupo', action: 'view' },
                { model: 'Grupo', action: 'edit' },
                { model: 'Grupo', action: 'delete' },
                { model: 'Grupo', action: 'list' },
            ],
        });
    };
    const handleLoginVisualizador = e => {
        e.preventDefault();
        login({
            nombre: 'Frederick Farfán',
            correo: 'visualizador@espol.edu.ec',
            canDo: [
                { model: 'Reporte', action: 'view' },
                { model: 'Reporte', action: 'list' },
            ],
        });
    };

    return (
        <section className="container">
            <h1>Inicia sesión</h1>
            <p>Por el momento, se simula el inicio de sesión haciendo clic en el botón de a continuación.</p>
            <div className="row">
                <button onClick={handleLoginAdministrador}>Iniciar sesión como Administrador</button>
            </div>
            <div className="row">
                <button onClick={handleLoginRepresentante}>Iniciar sesión como Representante</button>
            </div>
            <div className="row">
                <button onClick={handleLoginSupervisor}>Iniciar sesión como Supervisor</button>
            </div>
            <div className="row">
                <button onClick={handleLoginVisualizador}>Iniciar sesión como Visualizador</button>
            </div>
            <div className="row">
                <button onClick={handleLogin}>Iniciar sesión como Usuario</button>
            </div>
        </section>
    );
};

export default LoginTestScreen;
