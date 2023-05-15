import React from 'react';
import {Tab, Tabs} from "react-materialize";

const OrganizacionesTabs = () => {
    return (
        <Tabs className="tabs-fixed-width z-">
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title="Nueva organización"
                href="/organizaciones/crear"
                target="_self"
            />
            <Tab
                active
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title="Test 2"
            />
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title="Test 3"
            />
            <Tab
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                target="_selft"
                title="Test 4"
                to="/"
            />
        </Tabs>
    );
};

export default OrganizacionesTabs;
