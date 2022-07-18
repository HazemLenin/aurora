import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { set_token } from '../../actions';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const [ data, setData ] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const axios = useAxios({includeToken: false});

    function handleSubmit(e) {
        e.preventDefault();
        setError('');
        axios.post('/token/login/', data)
        .then(res => {
            localStorage.setItem('auth_token', res.data.auth_token);
            dispatch(set_token(res.data.auth_token));
            navigate('/');
        })
        .catch(err => {
            setError(err);
        });
    }

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return <>
        <div className="flex justify-center items-center w-full mt-12">
            <form className="w-[450px] p-3 border-2 border-black" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl">Login</h1>
                {(error && error.response.status === 400) && <p className="text-red-500">Invalid username/password or the account is deactivated.</p>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-input" type="text" name="username" placeholder="Username" onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-input" type="password" name="password" placeholder="Password" onChange={handleChange} required />
                </div>
                <Link className="my-4 underline" to="/password/reset">Forgot your password?</Link><br />
                <Link className="my-4 underline" to="/resend-activation">Resend Activation Link?</Link>
                <button className="btn-primary w-full" type="submit">Login</button>
            </form>
        </div>
    </>;
}

export default Login;