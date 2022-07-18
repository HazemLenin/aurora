import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { add_message } from '../../actions';

function ResetPassword() {
    const [ email, setEmail ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState();
    const axios = useAxios({ includeToken: false });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError();

        axios.post('/users/reset_password/', { email: email })
        .then(res => {
            dispatch(add_message({ variant: 'success', title: 'Password reset link has been sent.'}));
            navigate('/');
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return <>
        <div className="flex justify-center items-center w-full mt-12">
            <form className="w-[450px] p-3 border-2 border-black" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl">Reset password</h1>
                { loading && <p>Loading...</p> }
                { error && error.response.status === 400 && <p className="my-4 text-red-500">Invalid email.</p> }
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-input" onChange={e => setEmail(e.target.value)} required />
                </div>
                <button className="btn-primary w-full">Reset</button>
            </form>
        </div>
    </>
}

export default ResetPassword;