import { useSelector } from 'react-redux';

const useAuth = () => {

    const { isLogged, user:userLogged, token } = useSelector( state => state.auth );

    const { canDo } = userLogged || {};

    const canUserDo = (modelname, doAction) => {
        return canDo[0]?.filter(({model, action}) => model.toLowerCase() === modelname.toLowerCase() && action.toLowerCase() === doAction.toLowerCase()).length > 0;
    };

    return { isLogged, userLogged, canUserDo, token };
};

export default useAuth;
