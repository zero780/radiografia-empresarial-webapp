// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    cantones: [],
    active: null,
    new: null,
};

export const cantonesCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.cantones.list:
            return {
                ...state,
                cantones: action.payload.cantones,
            };
        default:
            return state;
    }
};
