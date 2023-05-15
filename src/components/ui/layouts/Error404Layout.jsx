import React from 'react';

const Error404Layout = () => {
    return (
        <div className="section">
            <div className="container">
                <section id="errorBox" className="container white z-depth-2">
                    <ul className="collection with-header" style={ { 'borderRadius': '0', 'border': '0' } }>
                        <li id="error" className="collection-header center grey lighten-4">
                            <div className="container">
                                <h1 className="bold text-rojo-una" style={ { 'fontSize': '8em' } }>404</h1>
                                <h5 className="text-rojo-una-2">ERROR</h5>
                            </div>
                        </li>
                        <li id="content" className="collection-item center-align">
                            <h4>¡No encontrado!</h4>
                            <h5>Est&aacute;s intentando acceder a un sitio o recurso no disponible.</h5>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Error404Layout;
