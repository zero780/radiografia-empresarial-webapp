// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    posicionamientos: [],
    active: null,
    new: null,
};

export const posicionamientosCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.posicionamientos.list:
            return {
                ...state,
                posicionamientos: action.payload.posicionamientos,
            };
        default:
            return state;
    }
};
