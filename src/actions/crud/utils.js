// Constants
import { ActionTypeConstants } from "../../constants/ActionTypeConstants";
import { ApiConstants } from "../../constants/ApiConstants";
import { MessageConstants } from '../../constants/MessageConstants';
// Actions
import { doErrorMessage, doSuccessMessage, toogleLoading } from "../ui";

//get tipologias juridicas
export const startAsyncGetJuridicas = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.juridicas.list.endoint}`, {
            method: ApiConstants.juridicas.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetJuridicas(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.juridicas.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetJuridicas = juridicas => {

    return {
        type: ActionTypeConstants.juridicas.list,
        payload: {
            juridicas: juridicas,
        }
    }

};

//get actividades
export const startAsyncGetActividades = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.actividades.list.endoint}`, {
            method: ApiConstants.actividades.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetActividades(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.actividades.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetActividades = actividades => {

    return {
        type: ActionTypeConstants.actividades.list,
        payload: {
            actividades: actividades,
        }
    }

};

//get productos
export const startAsyncGetProductos = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.productos.list.endoint}`, {
            method: ApiConstants.productos.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetProductos(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.productos.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetProductos = productos => {

    return {
        type: ActionTypeConstants.productos.list,
        payload: {
            productos: productos,
        }
    }

};

//get mercados
export const startAsyncGetMercados = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.mercados.list.endoint}`, {
            method: ApiConstants.mercados.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetMercados(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.mercados.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetMercados = mercados => {

    return {
        type: ActionTypeConstants.mercados.list,
        payload: {
            mercados: mercados,
        }
    }

};

//get provincias
export const startAsyncGetProvincias = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.provincias.list.endoint}`, {
            method: ApiConstants.provincias.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetProvincias(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.provincias.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetProvincias = provincias => {

    return {
        type: ActionTypeConstants.provincias.list,
        payload: {
            provincias: provincias,
        }
    }

};

//get cantones
export const startAsyncGetCantones = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.cantones.list.endoint}`, {
            method: ApiConstants.cantones.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetCantones(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.cantones.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetCantones = cantones => {

    return {
        type: ActionTypeConstants.cantones.list,
        payload: {
            cantones: cantones,
        }
    }

};

//get competencias y posicionamientos
export const startAsyncGetPosicionamientos = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.posicionamientos.list.endoint}`, {
            method: ApiConstants.posicionamientos.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetPosicionamientos(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.posicionamientos.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetPosicionamientos = posicionamientos => {

    return {
        type: ActionTypeConstants.posicionamientos.list,
        payload: {
            posicionamientos: posicionamientos,
        }
    }

};

//get importancias
export const startAsyncGetImportancias = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.importancias.list.endoint}`, {
            method: ApiConstants.importancias.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetImportancias(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.importancias.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetImportancias = importancias => {

    return {
        type: ActionTypeConstants.importancias.list,
        payload: {
            importancias: importancias,
        }
    }

};

//get frecuencias
export const startAsyncGetFrecuencias = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.frecuencias.list.endoint}`, {
            method: ApiConstants.frecuencias.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetFrecuencias(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.frecuencias.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetFrecuencias = frecuencias => {

    return {
        type: ActionTypeConstants.frecuencias.list,
        payload: {
            frecuencias: frecuencias,
        }
    }

};

//get suministros
export const startAsyncGetSuministros = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.suministros.list.endoint}`, {
            method: ApiConstants.suministros.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetSuministros(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.suministros.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetSuministros = suministros => {

    return {
        type: ActionTypeConstants.suministros.list,
        payload: {
            suministros: suministros,
        }
    }

};

//get paises
export const startAsyncGetPaises = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.paises.list.endoint}`, {
            method: ApiConstants.paises.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetPaises(data.data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.paises.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetPaises = paises => {

    return {
        type: ActionTypeConstants.paises.list,
        payload: {
            paises: paises,
        }
    }

};

//get radiografias para administrador
export const startAsyncGetRadiografiasAdmin = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografiaAdmin.list.endoint}`, {
            method: ApiConstants.radiografiaAdmin.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetRadiografiasAdmin(data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografiaAdmin.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetRadiografiasAdmin = radiografias => {

    return {
        type: ActionTypeConstants.radiografiasAdmin.list,
        payload: {
            radiografiasAdmin: radiografias,
        }
    }
};

//get radiografias para supervisor
export const startAsyncGetRadiografiasSupervisor = (idUser, jwtTicket) => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografiaSupervisor.list.endoint}/${idUser}`, {
            method: ApiConstants.radiografiaSupervisor.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetRadiografiasSupervisor(data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografiaSupervisor.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetRadiografiasSupervisor = radiografias => {

    return {
        type: ActionTypeConstants.radiografiasSupervisor.list,
        payload: {
            radiografiasSupervisor: radiografias,
        }
    }
};


//get radiografias para cualquier usuario (dashboard)
export const startAsyncGetRadiografiasUser = jwtTicket => {

    return async (dispatch) => {
        //dispatch(toogleLoading(true));
        await fetch(`${ApiConstants.baseUrl}${ApiConstants.radiografiaUser.list.endoint}`, {
            method: ApiConstants.radiografiaUser.list.method,
            headers: {
                'Authorization': `Bearer ${jwtTicket}`
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(doGetRadiografiasUser(data));
                //dispatch(toogleLoading(false));
            })
            .catch(error => {
                dispatch(doErrorMessage(MessageConstants.error.radiografiaUser.list));
                //dispatch(toogleLoading(false));
            });
    }
};

export const doGetRadiografiasUser = radiografias => {

    return {
        type: ActionTypeConstants.radiografiasUser.list,
        payload: {
            radiografiasUser: radiografias,
        }
    }
};