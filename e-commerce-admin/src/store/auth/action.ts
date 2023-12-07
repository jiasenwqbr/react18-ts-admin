import {  UserType } from "../../types";
import { login as loginApi } from "../../api/auth";
import { SET_USER,SET_TOKEN } from "../Type";
import { Dispatch } from 'redux'

export function login (data:UserType) {
    return (dispatch:Dispatch) => {
        loginApi(data).then((res:any) => {
            if (res.code === 200){
                sessionStorage.setItem("token",res.token);
                sessionStorage.setItem("userInfo",JSON.stringify(res.user));
                dispatch({type:SET_TOKEN,payload:res.token});
                dispatch({type:SET_USER,payload:res.user});
            }
        })
    }
}