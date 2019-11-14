import React from 'react';
import {Link} from 'react-router-dom';
import AppConfig from "../../../config/app";

const Header = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Header</h3>
            <h4>{ AppConfig.name }</h4>
            <p>Here the navigation</p>
            <nav>
                <ul>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/institution"}>Institution Management</Link></li>
                    <li><Link to={"/user"}>User Management</Link></li>
                </ul>
            </nav>
            <h3>End Header</h3>
        </div>
    );
};

export default Header;