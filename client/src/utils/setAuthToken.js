/**
 * Created by agros on 26.05.2019.
 */
import axios from 'axios';

const setAuthToken  = token => {
    if (token){
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
};


export default setAuthToken;