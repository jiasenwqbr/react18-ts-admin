export  interface UserType {
    name : string
    password : string
}
export interface ActionType {
    type:string
    payload?:any
}

export interface LoginResponseType {
    code : number
    token : string
    msg?:string
    user:{
        name:string
        id:number
        score:number
        user_group:number
        avatar:string
    }
}