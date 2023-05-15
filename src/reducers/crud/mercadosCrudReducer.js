// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    mercados: [],
    active: null,
    new: null,
};

export const mercadosCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.mercados.list:
            return {
                ...state,
                mercados: action.payload.mercados,
            };
        default:
            return state;
    }
};
