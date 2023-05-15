export const MessageConstants = {
    success: {
        auth: {
            login: 'Bienvenido(a)!',
            logout: 'Se cerró sesión correctamente.'
        },
        users: {
            create: 'Usuario creado correctamente.',
        },
        bindings: {
            create: 'Tipo de vínculo creado correctamente.',
            edit: 'Tipo de vínculo actualizado correctamente.',
        },
        business: {
            create: 'Organización creada correctamente.',
            edit: 'Organización actualizada correctamente.',
        },
        workgroups: {
            create: 'Grupo de trabajo creado correctamente.',
            edit: 'Grupo de trabajo actualizado correctamente.',
        },
        radiografia: {
            create: 'Radiografía actualizada correctamente.'
        }
    },
    error: {
        auth: {
            login: 'No se pudo iniciar sesión.',
            logout: 'No se pudo cerrar sesión.'
        },
        users: {
            list: 'Se presentó un error al cargar los usuarios.',
            create: 'Se presentó un error al intentar crear el usuario.',
            view: 'Se presentó un error al cargar los detalles del usuario.'
        },
        bindings: {
            list: 'Se presentó un error al cargar los tipos de vínculos.',
            create: 'Se presentó un error al intentar crear el tipo de vínculo.',
            edit: 'Se presentó un error al intentar actualizar el tipo de vínculo.',
            view: 'Se presentó un error al cargar los detalles del tipo de vínculo.',
            notFound: 'Vínculo no encontrado.'
        },
        business: {
            list: 'Se presentó un error al cargar las organizaciones.',
            create: 'Se presentó un error al intentar crear la organización.',
            edit: 'Se presentó un error al intentar actualizar la organización.',
            view: 'Se presentó un error al cargar los detalles de la organización.',
            notFound: 'Organización no encontrada.'
        },
        workgroups: {
            list: 'Se presentó un error al cargar los grupos de trabajo.',
            create: 'Se presentó un error al intentar crear el grupo de trabajo.',
            edit: 'Se presentó un error al intentar actualizar el grupo de trabajo.',
            view: 'Se presentó un error al cargar los detalles del grupo de trabajo.',
            notFound: 'Grupo de trabajo no encontrado.'
        },
        roles: {
            list: 'Se presentó un error al cargar los roles del sistema.',
        },
        reports: {
            list: 'Se presentó un error al cargar los reportes del sistema.',
            download: 'Se presentó un error al generar el reporte seleccionado.',
        },
        radiografia: {
            create: 'Se presentó un error al intentar guardar la radiografía.'
        },
        juridicas: {
            list: 'Se presentó un error al cargar las tipologías jurídicas del sistema.',
        },
        actividades: {
            list: 'Se presentó un error al cargar las actividades ciius del sistema.',
        },
        productos: {
            list: 'Se presentó un error al cargar los productos cpcs del sistema.',
        },
        mercados: {
            list: 'Se presentó un error al cargar los tipos de mercados del sistema.',
        },
        provincias: {
            list: 'Se presentó un error al cargar las provincias.',
        },
        posicionamientos: {
            list: 'Se presentó un error al cargar los niveles de posicionamiento del sistema.',
        },
        frecuencias: {
            list: 'Se presentó un error al cargar los niveles de frecuencia del sistema.',
        },
        suministros: {
            list: 'Se presentó un error al cargar los suministros del sistema.',
        },
        paises: {
            list: 'Se presentó un error al cargar los países.',
        },
        importancias: {
            list: 'Se presentó un error al cargar los niveles de importancia del sistema.',
        },
        radiografiaAdmin: {
            list: 'Se presentó un error al intentar cargar las radiografías.'
        },
        radiografiaSupervisor: {
            list: 'Se presentó un error al intentar cargar las radiografías.'
        },
        radiografiaUser: {
            list: 'Se presentó un error al intentar cargar las radiografías.'
        },
    }

};