// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    frecuencias: [],
    active: null,
    new: null,
};

export const frecuenciasCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.frecuencias.list:
            return {
                ...state,
                frecuencias: action.payload.frecuencias,
            };
        default:
            return state;
    }
};
