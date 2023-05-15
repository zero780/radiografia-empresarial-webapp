import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from "redux-thunk";
// Reducers
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from "../reducers/uiReducer";
import { usersCrudReducer } from "../reducers/crud/usersCrudReducer";
import { bindingsCrudReducer } from "../reducers/crud/bindingsCrudReducer";
import { businessCrudReducer } from "../reducers/crud/businessCrudReducer";
import { workgroupsCrudReducer } from "../reducers/crud/workgroupsCrudReducer";
import { rolesCrudReducer } from "../reducers/crud/rolesCrudReducer";
import { juridicasCrudReducer } from "../reducers/crud/juridicasCrudReducer";
import { actividadesCrudReducer } from "../reducers/crud/actividadesCrudReducer";
import { productosCrudReducer } from "../reducers/crud/productosCrudReducer";
import { mercadosCrudReducer } from "../reducers/crud/mercadosCrudReducer";
import { cantonesCrudReducer } from "../reducers/crud/cantonesCrudReducer";
import { provinciasCrudReducer } from "../reducers/crud/provinciasCrudReducer";
import { posicionamientosCrudReducer } from "../reducers/crud/posicionamientosCrudReducer";
import { frecuenciasCrudReducer } from "../reducers/crud/frecuenciasCrudReducer";
import { suministrosCrudReducer } from "../reducers/crud/suministrosCrudReducer";
import { paisesCrudReducer } from "../reducers/crud/paisesCrudReducer";
import { importanciasCrudReducer } from "../reducers/crud/importanciasCrudReducer";
import { radiografiasAdminCrudReducer } from "../reducers/crud/radiografiasAdminCrudReducer";
import { radiografiasSupervisorCrudReducer } from "../reducers/crud/radiografiasSupervisorCrudReducer";
import { radiografiasUserCrudReducer } from "../reducers/crud/radiografiasUserCrudReducer";
import { reportsReducer } from "../reducers/reportsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    users: usersCrudReducer,
    bindings: bindingsCrudReducer,
    business: businessCrudReducer,
    workgroups: workgroupsCrudReducer,
    roles: rolesCrudReducer,
    juridicas: juridicasCrudReducer,
    actividades: actividadesCrudReducer,
    productos: productosCrudReducer,
    mercados: mercadosCrudReducer,
    cantones: cantonesCrudReducer,
    provincias: provinciasCrudReducer,
    posicionamientos: posicionamientosCrudReducer,
    frecuencias: frecuenciasCrudReducer,
    suministros: suministrosCrudReducer,
    paises: paisesCrudReducer,
    reports: reportsReducer,
    importancias: importanciasCrudReducer,
    radiografiasAdmin: radiografiasAdminCrudReducer,
    radiografiasSupervisor: radiografiasSupervisorCrudReducer,
    radiografiasUser: radiografiasUserCrudReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);