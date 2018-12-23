import axios from 'axios'
import config from './config'
const instance = axios.create({
    baseURL: config.BASE_URL
});
// api Interface document : https://github.com/cnchenhao/idol-server/blob/master/specification.md
export default {
    /* {
    "address":"TVjmtiAVdbox9LYtZ7eu8Bq7mHJFZCZ3dg",
    "name":"chenhao",
    "sign":"eff7d5dba32b4da32d9a67a519434d3f"
    }*/
    register(data) {
        return instance.request({
            url:'/user/register',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    },
    /*{
    "address":"TVjmtiAVdbox9LYtZ7eu8Bq7mHJFZCZ3dg",
    "sign":"ab56b4d92b40713acc5af89985d4b786"
    }*/
    login(data) {
        return instance.request({
            url:'/user/login',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    },
    /* ?page=1&pageSize=2&category=forsale&hairColors=blonde,brown,black,blue&eyeColors=brown,black&hairStyles=long hair,short hair&attributes=hasname,hasbio,cooldownready,dark skin,blush,smile,open mouth,hat,ribbon,glasses&filters=iteration:1~2,cooldown:ur|ssr|sr|r|n,price:1~2&sort=-id
    */
    getMarketIdols(params) {
        return instance.request({
            url:'/idol/getMarketIdols',
            method: 'get',
            params
        }).then(function (response) {
            return response.data;
        })
    },
    getMyIdols(params) {
        return instance.request({
            url:'/idol/getMyIdols',
            method: 'get',
            params
        }).then(function (response) {
            return response.data;
        })
    },
    /* detail
    * request data: ?tokenId=1
    * request header: Cookie:csrfToken=IHoPCGBkcxULU7tpQOXl2Zyr; locale=en-us; tron_Idol_1544608605980_4384=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjUsIkFkZHJlc3MiOiJhZHNmZHNmZHNmZHMxMWRmc2RzZmEiLCJpYXQiOjE1NDUyODY2NzEsImV4cCI6MTU0NTM3MzA3MX0.cPKzSnTw96zoQFAldR1Vkma0HLG2nGgdgdpxjFgo1lY; undefined_1544608605980_4384.sig=Pqqz-SZgb5Fzm3jA7BvbZsRu016fWhPHtDhlvXW7SnI
    * */
    getIdol(params) {
        return instance.request({
            url:'/idol/getIdol',
            method: 'get',
            params
        }).then(function (response) {
            return response.data;
        })
    },
    /*
    * request data: "tokenId":1
    * request header: Cookie
    * */
    like(data) {
        return instance.request({
            url:'/idol/like',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    },
    /*
    * request data: "tokenId":1
    * request header: Cookie
    * */
    unlike(data) {
        return instance.request({
            url:'/idol/unlike',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    },
    /*
    * set idol name
    * request data: {
    *   "tokenId":1,
    *   "name":"chenhao"
    * }
    * request header: Cookie
    * */
    setName(data) {
        return instance.request({
            url:'/idol/setName',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    },
    /*
    * request data: {
    *     "tokenId":1,
    *     "bio":"chenhao test"
    * }
    * request header: Cookie
    * */
    setBio(data) {
        return instance.request({
            url:'/idol/setBio',
            method: 'post',
            data
        }).then(function (response) {
            return response.data;
        })
    }
}