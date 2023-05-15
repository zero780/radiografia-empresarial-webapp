export const RouteConstants = {

    home: '/',
    auth: {
        prefix: '/auth',
        login: '/auth/login',
        logout: '/auth/logout',
        dashboard: '/auth/dashboard'
    },
    admin: {
        prefix: '/administracion',
        x_ray_admin: '/administracion/radiografia',
        x_ray_admin_detail: '/administracion/radiografia/:id_radiografia/organizacion/:id_organizacion/:action?'
    },
    supervisor: {
        prefix: '/supervisor',
        x_ray_supervisor: '/supervisor/radiografia',
        x_ray_supervisor_detail: '/supervisor/radiografia/:id_radiografia/organizacion/:id_organizacion/grupo/:id_grupo/:action?'
    },
    workgroups: {
        prefix: '/grupos-de-trabajo',
        index: '/grupos-de-trabajo',
        create: '/grupos-de-trabajo/nuevo',
        view: '/grupos-de-trabajo/:id/detalles',
        edit: '/grupos-de-trabajo/:id/editar',
        list: {
            mine: '/grupos-de-trabajo',
            pending: '/grupos-de-trabajo/pendientes',
            active: '/grupos-de-trabajo/activos',
            archived: '/grupos-de-trabajo/archivados'
        },
    },
    business: {
        prefix: '/organizaciones',
        index: '/organizaciones',
        create: '/organizaciones/nuevo',
        view: '/organizaciones/:id/detalles',
        edit: '/organizaciones/:id/editar',
        x_ray: '/organizaciones/:id_organizacion/radiografia/:id_radiografia/grupo/:id_grupo/:action?',
    },
    reports: {
        prefix: '/reportes',
        index: '/reportes',
        view: '/reportes/:reporte?',
        download: '/reportes/:id/descargar'
    },
    users: {
        prefix: '/administracion/usuarios',
        index: '/administracion/usuarios',
        create: '/administracion/usuarios/nuevo',
        view: '/administracion/usuarios/:id/detalles',
        edit: '/administracion/usuarios/:id/editar',
        delete: '/administracion/usuarios/:id/eliminar',
        roles: '/administracion/usuarios/:id/roles'
    },
    bindings: {
        prefix: '/administracion/vinculos',
        index: '/administracion/vinculos',
        create: '/administracion/vinculos/nuevo',
        view: '/administracion/vinculos/:id/detalles',
        edit: '/administracion/vinculos/:id/editar',
        manager: '/administracion/vinculos/:id/representante',
    },

};

export default RouteConstants;