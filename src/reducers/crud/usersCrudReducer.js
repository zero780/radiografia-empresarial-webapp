// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    users: [],
    active: null,
    new: null,
};

export const usersCrudReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.users.list:
            return {
                ...state,
                users: action.payload.users,
            };
        case ActionTypeConstants.users.view:
            return {
                ...state,
                active: action.payload.user,
            };
        case ActionTypeConstants.users.create:
            return {
                ...state,
                users: [...state.users, action.payload.user],
                new: action.payload.user,
            };
        default:
            return state;
    }
};