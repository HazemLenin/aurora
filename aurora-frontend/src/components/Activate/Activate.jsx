import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { add_message } from '../../actions';

function Activate() {

    const params = useParams();
    const axios = useAxios({ includeToken: false });
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('/users/activation/', {
            uid: params.uid,
            token: params.token
        })
        .then(res => {
            dispatch(add_message({ variant: 'success', title: 'Your account has been activated.'}));
            navigate('/');
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return <>
        <div className="px-40 mt-12">
            <h1 className="text-4xl">Activate account</h1>
            { loading ? 
                <h2 className="ml-5 text-3xl">Loading...</h2>
            :
                error && ( // if error
                    error.response.status === 403 ?
                        <h2 className="ml-5 text-3xl text-red-500">Account already activated.</h2>
                    : error.response.status === 400 &&
                        <h2 className="ml-5 text-3xl text-red-500">Invalid uid/token (link invalid).</h2>
                )
            }
        </div>
    </>
}

export default Activate;