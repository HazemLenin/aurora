import axios from 'axios'
import { useSelector } from 'react-redux';

function useAxios({includeToken= true} = {}) {

    const authToken = useSelector(state => state.authToken);

    const axiosInstance = axios.create({
        // baseURL: "http://127.0.0.1:8000/api/", // generates cors block
        headers: {
            "Content-Type": "application/json"
        }
    });

    axiosInstance.interceptors.request.use(async req => {
        if (includeToken) {
            req.headers.Authorization =  `Token ${authToken}`;
            return req;
        }
        return req;
    });


    
    
    return axiosInstance
}

export default useAxios;