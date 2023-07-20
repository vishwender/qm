import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export const useForm = () => {
    let navigate = useNavigate();

    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState('');

    return {
        navigate,
        errors,
        setErrors,
        message,
        setMessage,
    }
}