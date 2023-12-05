import LoginView from "../views/LoginView";
import Admin from "../views/admin/AdminView";
const  baseRouter=[
    {
        path:"/",
        element:<LoginView></LoginView>
    },
    {
        path:"/admin",
        element:<Admin></Admin>,
        children:[]
    }
];

export default baseRouter;