import React, { useState } from "react";
import {useForm} from "../hooks/useForm";
import {Link} from "react-router-dom";
//import axios from 'axios';
import apiInstance from './Api';

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setErrors, message, setMessage, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();
        setErrors(null);
        setMessage('');

        // make request first to sanctum/csrf-cookie
        apiInstance.get('/sanctum/csrf-cookie').then(() => {

           const payload = {
              email,
              password
           };

           //call login api
           apiInstance.post('/api/login', payload, {headers: { 'Accept': 'application/json' } }).then(response => {

                console.log(response);

                if(response.data.success == true) {
                    alert(response.data.message);
                    //save user data after login locally
                    localStorage.setItem('user', JSON.stringify(response.data))
                    navigate('/home');
                }
            }).catch(error => {
                console.log(error);

                if(error.response) {
                    if (error.response.data.message) {
                        setMessage(error.response.data.message);
                    }

                    if (error.response.data.errors) {
                        setErrors(error.response.data.errors);
                    }
                }
            });
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header"><h4>
                                    Login
                                    <Link to={"register"} className="btn btn-primary btn-sm float-end">Sign Up</Link>
                                </h4></div>

                    <div className="card-body">

                        {
                            message && <div className="alert alert-danger">{message}</div>
                        }

                        <form method="POST" action="#" onSubmit={makeRequest}>

                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control" name="email"
                                            required autoComplete="email" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                <div className="col-md-6">
                                    <input id="password" type="password"
                                           className="form-control" name="password"
                                           required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};