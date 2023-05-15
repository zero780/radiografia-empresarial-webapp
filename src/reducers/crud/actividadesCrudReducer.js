// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    actividades: [],
    active: null,
    new: null,
};

export const actividadesCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.actividades.list:
            return {
                ...state,
                actividades: action.payload.actividades,
            };
        default:
            return state;
    }
};
