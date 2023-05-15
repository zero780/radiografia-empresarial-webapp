// UI Framwork
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
// Reducers
import { Provider } from 'react-redux';
import { store } from "./store/store";
// Components
import AppRouter from "./routers/AppRouter";
import './RadiografiaApp.css';


function RadiografiaApp() {

    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
}

export default RadiografiaApp;
