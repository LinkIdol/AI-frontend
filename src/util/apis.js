import axios from 'axios'
const BASE_URL = 'http://localhost:7001';
const instance = axios.create({
    baseURL: BASE_URL
});
export default {
    getList(params) {
        return instance.request({
            url:'/idol/getMarketIdols',
            method:`get`,
            params
        }).then(function (response) {
            return response;
        })
    }
}