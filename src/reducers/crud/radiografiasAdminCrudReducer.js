// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    radiografiasAdmin: [],
    active: null,
    new: null,
};

export const radiografiasAdminCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.radiografiasAdmin.list:
            return {
                ...state,
                radiografiasAdmin: action.payload.radiografiasAdmin,
            };
        default:
            return state;
    }
};
