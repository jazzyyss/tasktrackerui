import axios from 'axios';
/*
const setJwt = (jwt) => {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}
*/
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    //setJwt
}