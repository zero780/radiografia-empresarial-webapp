// Constants
import { ActionTypeConstants } from "../constants/ActionTypeConstants";

const initialState = {
    loading: false,
    messages: [],
};

export const uiReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.ui.messages.success:
        case ActionTypeConstants.ui.messages.info:
        case ActionTypeConstants.ui.messages.error:
            return {
                ...state,
                messages: [ action.payload.message, ...state.messages ]
            };
        case ActionTypeConstants.ui.loading.start:
        case ActionTypeConstants.ui.loading.end:
            return {
                ...state,
                loading: action.payload.loading
            };
        default:
            return state;
    }
};