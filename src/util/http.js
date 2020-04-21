import axios from "axios";
import store from "../store/store";
import router from "./routes";

const instance = axios.create({
    withCredentials: true,
    timeout: 10000
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        store.dispatch('updateMessages', ['Please login to have an access']).then();
        router.push({name: 'Login'}).then();
    }
    return Promise.reject(error);
});

instance.interceptors.request.use(request => {
    return request
}, error => Promise.reject(error));

export default instance;