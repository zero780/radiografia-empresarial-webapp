// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    provincias: [],
    active: null,
    new: null,
};

export const provinciasCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.provincias.list:
            return {
                ...state,
                provincias: action.payload.provincias,
            };
        default:
            return state;
    }
};
