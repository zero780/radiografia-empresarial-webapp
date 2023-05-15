// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    radiografiasSupervisor: [],
    active: null,
    new: null,
};

export const radiografiasSupervisorCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypeConstants.radiografiasSupervisor.list:
            return {
                ...state,
                radiografiasSupervisor: action.payload.radiografiasSupervisor,
            };
        default:
            return state;
    }
};
