import React from 'react';

const EnlacesInteresList = () => {

    return (
        <div className="row">
            <div className="col s12 m4 center">
                <div className="icon-block">
                    <a href="https://appscvsmovil.supercias.gob.ec/PortalInfor/consultaPrincipal.zul" target="_blank">
                        <img src="/assets/img/scvs_logo.png" alt="scvs_logo" width="270" height="83" />             
                    </a>
                </div>
            </div>
            <div className="col s12 m4 center">
                <div className="icon-block">
                    <a href="https://www.bolsadevaloresguayaquil.com/productos/emisiones-renta-fija.asp" target="_blank">
                        <img src="/assets/img/bvg_logo.png" alt="bvg_logo" width="270" height="83" />
                    </a>
                </div>
            </div>
            <div className="col s12 m4 center">
                <div className="icon-block">
                    <a href="https://www.bolsadequito.com/index.php/prospectos" target="_blank">
                        <img src="/assets/img/bvq_logo.png" alt="bvq_logo" width="250" height="70" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EnlacesInteresList;