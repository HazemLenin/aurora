import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { add_message } from '../../actions';

function ResendActivation() {
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

        axios.post('/users/resend_activation/', { email: email })
        .then(res => {
            dispatch(add_message({ variant: 'success', title: 'Activation link has been sent.'}));
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
                <h1 className="text-center text-4xl">Resend activation link</h1>
                { loading && <p>Loading...</p> }
                { error && error.response.status === 400 && <p className="my-4 text-red-500">Invalid email, non usable password for the account or account is already active.</p> }
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-input" onChange={e => setEmail(e.target.value)} required />
                </div>
                <button className="btn-primary w-full">Resend</button>
            </form>
        </div>
    </>
}

export default ResendActivation;