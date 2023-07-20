/* import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";

function RootApp() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={<Register /> } />
            </Routes>
        </Layout>
    );
}

export default RootApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <RootApp />
        </BrowserRouter>
            , document.getElementById('app'));
} */