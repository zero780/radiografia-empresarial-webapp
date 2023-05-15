// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    business: [],
    active: null,
    new: null,
};

export const businessCrudReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.business.list:
            return {
                ...state,
                business: action.payload.business,
            };
        case ActionTypeConstants.business.view:
            return {
                ...state,
                active: action.payload.organization,
            };
        case ActionTypeConstants.business.create:
            return {
                ...state,
                business: [...state.business, action.payload.organization],
                new: action.payload.organization,
            };
        case ActionTypeConstants.business.edit:
            return {
                ...state,
                new: action.payload.organization,
            };
        default:
            return state;
    }
};