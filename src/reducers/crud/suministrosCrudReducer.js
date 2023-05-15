// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    suministros: [],
    active: null,
    new: null,
};

export const suministrosCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.suministros.list:
            return {
                ...state,
                suministros: action.payload.suministros,
            };
        default:
            return state;
    }
};
