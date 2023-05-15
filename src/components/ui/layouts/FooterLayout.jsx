import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from "react-materialize";
import {RouteConstants} from "../../../constants/RouteConstants";

const FooterLayout = ({ className, isUserLogged = false }) => {

    return (
        <Footer
            className={ className }
            copyrights={<>
                <div id="minilogo" className="left">
                    <a className="right" href="https://www.espol.edu.ec/" target="_blank" rel="noreferrer" title="ESPOL">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANVSURBVFhH7VZbSJNhGP7/HWK6YdZQK6GCGnSAXVQgQXfSRdFFSI7qJgi6FSLwQigvQrrJ7ncjEt0EsxNeaEaG0tZhugphuLGR7Lzm5txRt/X3fN//NtTp3J03/wM/3/f5np73fb/3m6IkScJeQkXrnkEhoBBQCIi0ckxPT2vMZnOPwWC4WSwWT6+vrzfr9foURM5MJjPa3t7+WRTFug8H3hUxGAx2GY3Geziey+VyB3U6XValUrng701ra+tr+KjI2hswPz9/BgouONgWFWBtbc3m8XhayKQGkLUVCoXxvwCZ1aBUKjncbvdxMpEBlhdgkyYdDpCBr0Jkqy+Q+Do4OLiPTKtA9Q6har9IrS6QS2Jubu4YN3Q6nVoY/iQZY/gnm83etdvtTb29veqpqSnj6urqQ1YAUpESicQTbkxg7YI8TGIOtGwsEAh0Yds8Ozt7AEneRzIZWcoTsWMRhVAodFv+E8864XK5NpcHgEgNg/eyliSVy+UfJBKSyaQZwWMk4kACAxBtul8MDoeDEc2RmhQOh3uEfD7/ls6MdR8Ww8YPAfbDyIY9B/bf0um0kTn0+/1dIBMnkcR6j/MDHm0HoFr9pM6qYGP938S+HhDYNjw83MQc4XgdwaolBbFiNBq9xaPUAS57G9pcYjZorY85agi4kC+sVquWOYHhDQTkThhY8OXl5as8wi7ABdYh8xSZSiIchzCnR5gQGT1Tq9VFtkc7WuCYB9RoNOGJiYkhi8VSQd/udHR0jGCu+SMGH0XoXdFqtZ/YeTcsLi52mkymIN4CFsMjgMArmQu/hH2kty1SqVQ/glVInfUwCkLnSdwQcAcGyFzC/qUQiUQsdGaXKIPvIulWgbKp0LYhUuPAOYAJOkUqDQEJXgL/6hTE4/FrfMTgjM0kB1NYWVl5tLCwcBJkDiPrbly+MRJzQOc3KneC/O4IPE7cBy6eCT4ewy5PLli1P2CRR9Xn8x1F/xuaBsy4A0vNW7EV0BExwgFutAVI2D8zM9NGqjLw8nViJD+STg1AsIKePZ+cnNSTSV3AZFsCqNx4TfD/gFxcWlq6jECj+Jwomxtsv2Dsnnq93rOk1ijEWCz2Di30wtd3PHgj+JXsZjFIzqH8W64QUAgoBPaYgCD8A0tuMFKoYr4iAAAAAElFTkSuQmCC" alt="" />
                        <span id="copyright" className="grey-text text-lighten-4">&copy;2021 &#8211; <strong>ESPOL</strong></span>
                    </a>
                </div>

            </>}
            moreLinks={isUserLogged ? <a className="grey-text text-lighten-4 right" href={ RouteConstants.auth.logout }>Cerrar sesión</a> : <a className="grey-text text-lighten-4 right" href={ RouteConstants.auth.login }>Iniciar sesión</a>}
        >
            <p className="grey-text text-lighten-4">
                Escuela Superior Politécnica del Litoral - Campus Gustavo Galindo - Guayaquil - Ecuador
            </p>
            <p className="grey-text text-lighten-4">
                © El contenido de esta obra es de propiedad intelectual de la ESPOL. Todos los derechos reservados. Prohibida su reproducción total o parcial,
                comunicación pública o distribución sin autorización previa del titular de los derechos.
            </p>
        </Footer>
    );
};

FooterLayout.propTypes = {
    className: PropTypes.string,
    isUserLogged: PropTypes.bool,
};

export default FooterLayout;
