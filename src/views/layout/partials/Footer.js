import React from 'react';
import AppConfig from "../../../config/app";

const Footer = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Footer</h3>
            <p>copyright { AppConfig.enterprise } | contact { AppConfig.contact }</p>
            <h3>End Footer</h3>
        </div>
    );
};

export default Footer;