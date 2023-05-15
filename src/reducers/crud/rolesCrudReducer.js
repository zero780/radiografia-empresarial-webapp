// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    roles: [],
    active: null,
    new: null,
};

export const rolesCrudReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.roles.list:
            return {
                ...state,
                roles: action.payload.roles,
            };
        default:
            return state;
    }
};
