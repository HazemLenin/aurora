import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { add_message } from '../../actions';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const axios = useAxios();
    const [ data, setData ] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
        birth_date: "",
        profile_picture: ""
    });
    const dispatch = useDispatch();
    const [ error, setError ] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        axios.post('/users/', data)
        .then(res => {
            dispatch(add_message({ variant: 'success', title: 'Thanks for registering. Check your email to activate your account.'}));
            navigate('/');
        })
        .catch(err => {
            setError(err);
        });
    }

    function handleChange(e) {
        if (e.target.type === 'file') {
            setData({ ...data, [e.target.name]: e.target.files[0] });
        } else if (e.target.type === 'date') {

            let date = new Date(e.target.value);
            let month = date.getMonth() + 1;
            if (month < 10){
                month = `0${month}`; // formatted string used to avoid js string convertions
            }
            let day = date.getDate();
            if (day < 10){
                day = `0${day}`; // formatted string used to avoid js string convertions
            }
            let formattedDate = `${date.getFullYear()}-${month}-${day}`;
            setData({ ...data, [e.target.name]: formattedDate });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    return <>
        <div className="flex justify-center items-center w-full mt-12">
            <form className="w-[450px] p-3 border-2 border-black" onSubmit={handleSubmit}>
                <h1 className="text-4xl text-center">Singup</h1>
                { error?.response?.data?.non_field_errors && <p className="text-red-500 my-4">{error.response.data.non_field_errors}</p> }
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-input" type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} required />
                    { error?.response?.data?.username && <p className="text-red-500">{error.response.data.username}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input className="form-input" type="text" name="first_name" placeholder="First Name" value={data.first_name} onChange={handleChange} required />
                    { error?.response?.data?.first_name && <p className="text-red-500">{error.response.data.first_name}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input className="form-input" type="text" name="last_name" placeholder="Last Name" value={data.last_name} onChange={handleChange} required />
                    { error?.response?.data?.last_name && <p className="text-red-500">{error.response.data.last_name}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-input" type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
                    { error?.response?.data?.email && <p className="text-red-500">{error.response.data.email}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-input" type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
                    { error?.response?.data?.password && <p className="text-red-500">{error.response.data.password}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="re_password">Password Confirm</label>
                    <input className="form-input" type="password" name="re_password" placeholder="Password Confirm" value={data.re_password} onChange={handleChange} required />
                    { error?.response?.data?.re_password && <p className="text-red-500">{error.response.data.re_password}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="birth_date">Birth Date</label>
                    <input className="form-input" type="date" name="birth_date" value={data.birth_date} onChange={handleChange} required />
                    { error?.response?.data?.birth_date && <p className="text-red-500">{error.response.data.birth_date}</p> }
                </div>
                <div className="form-group">
                    <label htmlFor="profile_picture">Profile Picture</label>
                    <input className="form-input" type="file" name="profile_picture" placeholder="Profile Picture" onChange={handleChange} required />
                    { error?.response?.data?.profile_picture && <p className="text-red-500">{error.response.data.profile_picture}</p> }
                </div>
                <button className="btn-primary w-full" type="submit">Signup</button>
            </form>
        </div>
    </>
}

export default Signup;