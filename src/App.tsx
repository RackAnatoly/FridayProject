import React from 'react';
import './App.css';
import {Main} from './Components/Main';
import {Header} from "./Components/Header";
import {Registration} from "./Components/Registration";
import {Login} from "./Components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PasswordRecovery} from "./Components/PasswordRecovery";

function App() {
    return (
        <div className="App">
            {/*prov*/}
            <>
                <BrowserRouter>
                    <Header/>
                    <div>
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/registration' element={<Registration/>}/>
                            <Route path='/passwordRecovery' element={<PasswordRecovery/>}/>
                            <Route path='/main' element={<Main/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </>
        </div>
    );
}
const Routess = {
    login: '/login',

}

export default App;
