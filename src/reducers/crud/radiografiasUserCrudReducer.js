// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    radiografiasUser: [],
    active: null,
    new: null,
};

export const radiografiasUserCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.radiografiasUser.list:
            return {
                ...state,
                radiografiasUser: action.payload.radiografiasUser,
            };
        default:
            return state;
    }
};
