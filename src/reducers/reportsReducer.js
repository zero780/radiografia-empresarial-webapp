// Constants
import { ActionTypeConstants } from '../constants/ActionTypeConstants';

const initialState = {
    reports: [],
    active: null
};

export const reportsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ActionTypeConstants.reports.list:
            return {
                ...state,
                reports: action.payload.reports,
            };
        case ActionTypeConstants.workgroups.download:
            return {
                ...state,
                active: action.payload.result,
            };
        default:
            return state;
    }
};