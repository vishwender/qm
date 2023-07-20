import React, {useState} from "react";
import {useForm} from "../hooks/useForm";
import {Link} from "react-router-dom";
//import axios from "axios";
import apiInstance from './Api';

const Register = (props) => {

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setErrors, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();
        setErrors(null);

        apiInstance.post('/api/signup', {
            username,
            email,
            password
        }).then(response => {

            console.log(response.data);

            if(response.data.success == true) {
                alert(response.data.message);
                navigate('/');
            }
        }).catch(error => {
            console.log(error);

            if(error.response) {
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            }
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header"><h4>Register<Link to={"/"} className="btn btn-primary btn-sm float-end">Back</Link></h4>
                    </div>

                    <div className="card-body">
                        <form method="POST" action="#" onSubmit={makeRequest}>

                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">Username</label>

                                <div className="col-md-6">
                                    <input id="name" type="text"
                                           className="form-control" name="username" required autoComplete="name" autoFocus value={username} onChange={e => setName(e.target.value)} />
                                    
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">E-Mail Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email"
                                           className="form-control" name="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                                    
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">Password</label>

                                <div className="col-md-6">
                                    <input id="password" type="password"
                                           className="form-control"
                                           name="password" required autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Register
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

export {Register};