import axios from 'axios'
import { message } from 'antd';
import NProgress from 'nprogress'
NProgress.settings.showSpinner = false;
const request = axios.create({
    baseURL : 'http://dida100.com:8888',
    timeout:5000
})
request.interceptors.request.use(config => {
    let token = sessionStorage.getItem("token");
    NProgress.start()
    if (token) {
        config.headers['Authorization'] = "Bearer"+token;
    }
    return config;
})

request.interceptors.response.use (
    res  => {
        NProgress.done();
        if (res.status!==200){
            // 没有请求成功
            if (res.status === 401){
                message.info("没有权限")
            } else if (res.status === 500 || res.status === 505){
                message.info("服务器错误！")
            } else if (res.status === 404 ){
                message.info("找不到请求地址")
            } else {
                message.info("请求错误")
            }
        } 
        if (res.status===200){
            return res.data;
        }
        
    },
    err => {
        NProgress.done();
        console.error("请求错误")
        return err;
    }
)

export default request;