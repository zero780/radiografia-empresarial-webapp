// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    juridicas: [],
    active: null,
    new: null,
};

export const juridicasCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.juridicas.list:
            return {
                ...state,
                juridicas: action.payload.juridicas,
            };
        default:
            return state;
    }
};
