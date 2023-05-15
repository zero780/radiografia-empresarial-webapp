import React from 'react';
import { Carousel, Icon } from "react-materialize";
import MasterLayout from "../ui/layouts/MasterLayout";

const HomeScreen = () => {

    //const { vitrinas } = useVitrinas;

    return (
        <MasterLayout>
            <section>
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true,
                        interval: 2000,
                    }}
                >
                    <div className="light-blue darken-4" style={ { 'background': 'https://picsum.photos/1920/500'} }>
                        <img src="/assets/img/banner_1.png" alt="home_banner_1" width="520" height="555"/>
                        <h2 style={{ 'position': 'absolute', 'top': '20%', 'width': '100%', 'fontSize': '4.2rem', 'fontWeight': '400' }}>
                            Sistema de Radiografía Empresarial
                        </h2>
                        <p style={ { 'position': 'absolute', 'top': '40%', 'width': '100%' } } className="no-margin-bot">
                            Realiza levantamiento de información de las organizaciones que tienen vínculos con la ESPOL.
                        </p>
                    </div>
                    <div className="light-blue darken-4" style={{ 'background': 'https://picsum.photos/1920/500' }}>
                        <img src="/assets/img/banner_2.jpg" alt="home_banner_2" width="520" height="555"/>
                        <h2 style={{ 'position': 'absolute', 'top': '20%', 'width': '100%', 'fontSize': '4.2rem', 'fontWeight': '400'}}>
                            Sistema de Radiografía Empresarial
                        </h2>
                        <p style={{ 'position': 'absolute', 'top': '40%', 'width': '100%' }} className="no-margin-bot">
                            Realiza levantamiento de información de las organizaciones que tienen vínculos con la ESPOL.
                        </p>
                    </div>
                    <div className="light-blue darken-4" style={{ 'background': 'https://picsum.photos/1920/500' }}>
                        <img src="/assets/img/banner_3.jpg" alt="home_banner_3" width="520" height="555"/>
                        <h2 style={{ 'position': 'absolute', 'top': '20%', 'width': '100%', 'fontSize': '4.2rem', 'fontWeight': '400' }}>
                            Sistema de Radiografía Empresarial
                        </h2>
                        <p style={{ 'position': 'absolute', 'top': '40%', 'width': '100%' }} className="no-margin-bot">
                            Realiza levantamiento de información de las organizaciones que tienen vínculos con la ESPOL.
                        </p>
                    </div>
                </Carousel>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col s12 m4" >
                        <div className="icon-block">
                            <h2 className="center light-blue-text">
                                <Icon>flash_on</Icon>
                            </h2>
                            <h5 className="center">Automático</h5>
                            <p className="light center">
                                Los usuarios se crean conforme se inicie sesión en el sistema.
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text">
                                <Icon>group</Icon>
                            </h2>
                            <h5 className="center">Dirigido a para la ESPOL</h5>
                            <p className="light center">
                                El inicio de sesión es validado con el CAS de ESPOL.
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text">
                                <Icon>settings</Icon>
                            </h2>
                            <h5 className="center">Fácil para trabajar</h5>
                            <p className="light center">
                                Los flujos de trabajo están definidos mediante los roles que tengas asignados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>
    );
};

export default HomeScreen;
