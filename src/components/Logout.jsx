import React from 'react';
import { useNavigate } from 'react-router-dom';
import useValidationInlog from '../components/ValidationLogIn';


const Logout = () => {
    const { logout, resetLoginForm } = useValidationInlog();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
        resetLoginForm();
    };

    return (
        <button onClick={handleLogout}>Log out</button>
    );
};

export default Logout;
