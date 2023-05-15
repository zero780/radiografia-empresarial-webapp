// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    bindings: [],
    active: null,
    new: null,
};

export const bindingsCrudReducer  = (state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.bindings.list:
            return {
                ...state,
                bindings: action.payload.bindings,
            };
        case ActionTypeConstants.bindings.view:
            return {
                ...state,
                active: action.payload.binding,
            };
        case ActionTypeConstants.bindings.create:
            return {
                ...state,
                bindings: [...state.bindings, action.payload.binding],
                new: action.payload.binding,
            };
        case ActionTypeConstants.bindings.edit:
            return {
                ...state,
                new: action.payload.binding,
            };
        default:
            return state;
    }
};