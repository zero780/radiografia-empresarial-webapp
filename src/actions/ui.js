import M from 'materialize-css';// Constants
import { ActionTypeConstants } from "../constants/ActionTypeConstants";

export const doSuccessMessage = ( message ) => {
    M.toast({ html: `<p><i class="material-icons yellow-text left">check_circle_outline</i><span>${message}</span></p>`, classes: '' });
    return {
        type: ActionTypeConstants.ui.messages.success,
        payload: {
            message:{
                type: 'success',
                content: message
            }
        }
    }
};

export const doInfoMessage = ( message ) => {
    M.toast({ html: `<p><i class="material-icons brown-text text-darken-2 left">help_outline</i><span>${message}</span></p>`, classes: 'yellow lighten-1 grey-text text-darken-4' });
    return {
        type: ActionTypeConstants.ui.messages.info,
        payload: {
            message:{
                type: 'info',
                content: message
            }
        }
    }
};

export const doErrorMessage = ( message ) => {
    M.toast({ html: `<p><i class="material-icons left">error_outline</i><span>${message}</span></p>`, classes: 'red white-text' });
    return {
        type: ActionTypeConstants.ui.messages.error,
        payload: {
            message:{
                type: 'error',
                content: message
            }
        }
    }
};

export const toogleLoading = ( active ) => {
    return {
        type: active ? ActionTypeConstants.ui.loading.start : ActionTypeConstants.ui.loading.end,
        payload: {
            loading: active
        }
    }
};