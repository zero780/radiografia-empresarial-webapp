// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    importancias: [],
    active: null,
    new: null,
};

export const importanciasCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.importancias.list:
            return {
                ...state,
                importancias: action.payload.importancias,
            };
        default:
            return state;
    }
};
