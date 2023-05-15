import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
import { Button, Icon, SideNav } from "react-materialize";

const SidenavLayout = ({ classname, children }) => {

    const handleResize = () => {
        if(window.innerWidth > 992) {
            document.querySelectorAll('.sidenav-overlay').forEach(e => e.style.display = 'none');
            document.getElementById('sidenav-main').style.transform = 'translateX(0%)';
        }
        else
            document.getElementById('sidenav-main').style.transform = 'translateX(-105%)';
    };
    window.addEventListener('resize', handleResize);

    return (
        <SideNav
            id="sidenav-main"
            options={{
                draggable: true,
                edge: 'left',
                preventScrolling: true
            }}
            trigger={<Button flat node="button" waves="light"><Icon>menu</Icon></Button>}
        >
            {
                children.map( (Component, idx) => <li key={`sd_nav_${idx}_${uuid()}`}>{ Component }</li>)
            }
        </SideNav>
    );
    /*return (
        <ul id="sidenav" className={`sidenav sidenav-fixed ${ classname ?? '' }`}>
            {
                children.map( (Component, idx) => <li key={`sd_nav_${idx}_${uuid()}`}>{ Component }</li>)
            }
        </ul>
    );*/
};

SidenavLayout.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.array.isRequired
};

export default SidenavLayout;
