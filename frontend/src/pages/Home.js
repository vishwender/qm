import React, {useEffect, useState} from "react";
import {useForm} from "../hooks/useForm";
//import axios from 'axios';
import apiInstance from './Api';

export const Home = () => {

    const [user, setUser] = useState(null);
    const { navigate } = useForm();
    const userdata = JSON.parse(localStorage.getItem('user'));
    const headers = {
        'Authorization': 'Bearer '+ userdata.data.token
    }
    useEffect(() => {
        
        apiInstance.get('/api/user', {headers: headers}).then(response => {
            //console.log(response.data);
            setUser(response.data);
        });
    }, []);

    const handleLogout = () => {
        
        const payload = {};
        //console.log(headers);

        apiInstance.post('/api/logout', payload, {headers: headers}).then(response => {
            //console.log(response);
            alert(response.data.message);
            navigate('/');
        }).catch(err => {
            console.log(err);
        })
    }
    return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home
                            <button className="btn btn-primary btn-sm float-end" onClick={handleLogout}>Logout</button>
                        </div>
                            
                        <div className="card-body">
                            {
                                user && (
                                    <>
                                        <p>Signed in as </p>
                                        <div>Hi {user.username}</div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};