// Constants
import { ActionTypeConstants } from '../../constants/ActionTypeConstants';

const initialState = {
    workgroups: {
        type: '',
        content: [],
    },
    active: null,
    new: null,
};

export const workgroupsCrudReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.workgroups.list:
            return {
                ...state,
                workgroups: {
                    type: action.payload.type,
                    content: action.payload.workgroups,
                },
            };
        case ActionTypeConstants.workgroups.view:
            return {
                ...state,
                active: action.payload.workgroup,
            };
        case ActionTypeConstants.workgroups.create:
            return {
                ...state,
                workgroups: [...state.workgroups, action.payload.workgroup],
                new: action.payload.workgroup,
            };
        default:
            return state;
    }
};