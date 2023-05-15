const { REACT_APP_API_BASE_URL } = process.env;

export const ApiConstants = {
    baseUrl: REACT_APP_API_BASE_URL,
    users: {
        list: {
            endoint: 'usuarios',
            method: 'GET'
        },
        create: {
            endoint: 'usuarios',
            method: 'POST'
        },
        view: {
            endoint: 'usuarios',
            method: 'GET'
        }
    },
    bindings: {
        list: {
            endoint: 'vinculos',
            method: 'GET'
        },
        create: {
            endoint: 'vinculos',
            method: 'POST'
        },
        edit: {
            endoint: 'vinculos',
            method: 'PUT'
        },
        view: {
            endoint: 'vinculos',
            method: 'GET'
        }
    },
    business: {
        list: {
            endoint: 'organizaciones',
            method: 'GET'
        },
        create: {
            endoint: 'organizaciones',
            method: 'POST'
        },
        edit: {
            endoint: 'organizaciones',
            method: 'PUT'
        },
        view: {
            endoint: 'organizaciones',
            method: 'GET'
        }
    },
    workgroups: {
        list: {
            mine: {
                endoint: 'grupos-de-trabajo',
                method: 'GET'
            },
            pending: {
                endoint: 'grupos-de-trabajo',
                method: 'GET'
            },
            active: {
                endoint: 'grupos-de-trabajo',
                method: 'GET'
            },
            archived: {
                endoint: 'grupos-de-trabajo',
                method: 'GET'
            }
        },
        create: {
            endoint: 'grupos-de-trabajo',
            method: 'POST'
        },
        edit: {
            endoint: 'grupos-de-trabajo',
            method: 'PUT'
        },
        view: {
            endoint: 'grupos-de-trabajo',
            method: 'GET'
        }
    },
    roles: {
        list: {
            endoint: 'roles',
            method: 'GET'
        },
    },
    reports: {
        list: {
            endoint: 'reportes',
            method: 'GET'
        },
        download: {
            endoint: 'reportes',
            method: 'POST'
        },
    },
    radiografia: {
        list: {
            endoint: 'Radiografia',
            method: 'GET'
        },
        create: {
            endoint: 'Radiografia',
            method: 'POST'
        },
        edit: {
            endoint: 'Radiografia',
            method: 'PUT'
        },
        view: {
            endoint: 'Radiografia',
            method: 'GET'
        }
    },
    radiografiaAdmin: {
        list: {
            endoint: 'RadRadiografias',
            method: 'GET'
        },
        create: {
            endoint: 'RadRadiografias',
            method: 'POST'
        },
        edit: {
            endoint: 'RadRadiografias',
            method: 'PUT'
        },
        view: {
            endoint: 'RadRadiografias',
            method: 'GET'
        }
    },
    radiografiaSupervisor: {
        list: {
            endoint: 'RadRadiografias/rad_supervisor',
            method: 'GET'
        },
        create: {
            endoint: 'RadRadiografias/rad_supervisor',
            method: 'POST'
        },
        edit: {
            endoint: 'RadRadiografias/rad_supervisor',
            method: 'PUT'
        },
        view: {
            endoint: 'RadRadiografias/rad_supervisor',
            method: 'GET'
        }
    },
    radiografiaUser: {
        list: {
            endoint: 'RadRadiografias',
            method: 'GET'
        },
        create: {
            endoint: 'RadRadiografias',
            method: 'POST'
        },
        edit: {
            endoint: 'RadRadiografias',
            method: 'PUT'
        },
        view: {
            endoint: 'RadRadiografias',
            method: 'GET'
        }
    },
    juridicas: {
        list: {
            endoint: 'TipoJuridicas',
            method: 'GET'
        }
    },
    actividades: {
        list: {
            endoint: 'TipoCiius',
            method: 'GET'
        }
    },
    productos: {
        list: {
            endoint: 'TipoCpcs',
            method: 'GET'
        }
    },
    mercados: {
        list: {
            endoint: 'TipoMercados',
            method: 'GET'
        }
    },
    provincias: {
        list: {
            endoint: 'ConfigProvincias',
            method: 'GET'
        }
    },
    cantones: {
        list: {
            endoint: 'ConfigCantones',
            method: 'GET'
        }
    },
    posicionamientos: {
        list: {
            endoint: 'TipoPosicionamientos',
            method: 'GET'
        }
    },
    frecuencias: {
        list: {
            endoint: 'TipoFrecuencias',
            method: 'GET'
        }
    },
    suministros: {
        list: {
            endoint: 'TipoSuministros',
            method: 'GET'
        }
    },
    paises: {
        list: {
            endoint: 'ConfigPaises',
            method: 'GET'
        }
    },
    importancias: {
        list: {
            endoint: 'TipoImportancias',
            method: 'GET'
        }
    },
};