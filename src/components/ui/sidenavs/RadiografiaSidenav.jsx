import React from 'react';
import {NavLink} from "react-router-dom";
import { Icon } from "react-materialize";
import uuid from "react-uuid";
import SidenavLayout from "../layouts/SidenavLayout";

const RadiografiaSidenav = ({ id_radiografia, id_organizacion, id_grupo }) => {
    return (
        <SidenavLayout>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-01`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Datos de contacto de la empresa</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-02`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Descripción de la empresa y su actividad</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-03`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Competitividad</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-04`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Infraestructura</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-05`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Estrategia comercial</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-06`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Internacionalización</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-07`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Recursos humanos</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-08`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Tecnología</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-09`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Calidad, prevención de riesgos y medio ambiente</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-10`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Cooperación Empresarial</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-11`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Datos financieros</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-12`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Innovación y mejora competitiva</span>
            </NavLink>
            <NavLink key={`sd_nav_item_${uuid()}`} to={`/organizaciones/${id_organizacion}/radiografia/${id_radiografia}/grupo/${id_grupo}/page-13`} exact>
                <Icon>bubble_chart</Icon>
                <span className="truncate">Subvenciones y otros programas de apoyo a las pymes</span>
            </NavLink>
        </SidenavLayout>
    );
};

export default RadiografiaSidenav;
