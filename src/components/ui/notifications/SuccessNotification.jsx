import React from 'react';
import {Toast} from "react-materialize";

const SuccessNotification = () => {

    return (
        <Toast
            options={{
                html: 'Here you go!'
            }}
        ></Toast>
    );
};

export default SuccessNotification;
