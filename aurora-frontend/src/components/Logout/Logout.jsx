import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remove_token, remove_user } from '../../actions';
import { Navigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

function Logout() {
    const dispatch = useDispatch();
    const axios = useAxios();

    function logout() {
        dispatch(remove_token());
        dispatch(remove_user());
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
    }

    useEffect(() => {
        axios.post('/token/logout/')
        .then(res => {
            logout();
        })
        .catch(err => {
            if (err.response.status === 401) {
                logout();
            }
        });
    }, []);
    
    return <Navigate replace to="/" />
}

export default Logout