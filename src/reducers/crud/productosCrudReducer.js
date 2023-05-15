// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    productos: [],
    active: null,
    new: null,
};

export const productosCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.productos.list:
            return {
                ...state,
                productos: action.payload.productos,
            };
        default:
            return state;
    }
};
