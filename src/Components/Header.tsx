import React from 'react';
import {NavLink} from 'react-router-dom';
import {Login} from "./Login";
import {Registration} from "./Registration";

export const Header = () => {
    return (
        <div>
            <div>
                <input type="text"/>
                <input type="text"/>
                <span><NavLink to="/login">Login</NavLink></span>
                <div>
                    <span><NavLink to="/registration">Registration</NavLink></span>
                    <span><NavLink to="/passwordRecovery">PasswordRecovery</NavLink></span>
                </div>

            </div>
        </div>
    );
};
