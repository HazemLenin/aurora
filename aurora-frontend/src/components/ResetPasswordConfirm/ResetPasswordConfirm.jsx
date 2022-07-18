import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { add_message } from '../../actions';
import useAxios from '../../hooks/useAxios';

function ResetPasswordConfirm() {
    const params = useParams();
    const axios = useAxios({ includeToken: false });
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();
    const [ data, setData ] = useState({
        new_password: "",
        re_new_password: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError();
        
        axios.post('/users/reset_password_confirm/', {
            uid: params.uid,
            token: params.token,
            new_password: data.new_password,
            re_new_password: data.re_new_password
        })
        .then(res => {
            dispatch(add_message({ variant: 'success', title: 'Password reset successfully.'}));
            navigate('/');
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return <>
        <div className="flex justify-center items-center w-full mt-12">
            <form className="w-[450px] p-3 border-2 border-black" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl">Reset password confirm</h1>
                { loading && <p>Loading...</p> }
                { error?.response?.data?.non_field_errors && <p className="text-red-500 my-4">{error.response.data.non_field_errors}</p> }
                <div className="form-group">
                    <label htmlFor="new_password">New password</label>
                    <input className="form-input" type="password" name="new_password" placeholder="password" onChange={handleChange} required />
                    { error?.response?.data?.new_password && <p className="text-red-500">{error.response.data.new_password}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="re_new_password">New password confirm</label>
                    <input className="form-input" type="password" name="re_new_password" placeholder="password" onChange={handleChange} required />
                    { error?.response?.data?.re_new_password && <p className="text-red-500">{error.response.data.re_new_password}</p> }
                </div>
                <button className="btn-primary w-full" type="submit">Reset</button>
            </form>
        </div>
    </>
}

export default ResetPasswordConfirm;