// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    paises: [],
    active: null,
    new: null,
};

export const paisesCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.paises.list:
            return {
                ...state,
                paises: action.payload.paises,
            };
        default:
            return state;
    }
};
