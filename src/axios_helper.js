import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/v1/";
axios.defaults.headers.post["Content-Type"] = "application/json";

 export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data
    });
};

export const admin_auth = axios.defaults.baseURL + 'auth/admin/signin';

export const uri_auth = (role) => {
    return axios.defaults.baseURL + 'auth/' + role + '/signin';
};
