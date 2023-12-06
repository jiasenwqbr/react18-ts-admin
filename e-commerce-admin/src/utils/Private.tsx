import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
interface Iprops {
  children?: ReactNode;
}
// 定义一个函数Private是FC类型 指令泛型为Iprops
const Private: FC<Iprops> = (props) => {
  var token = sessionStorage.getItem("token");
  const location = useLocation();
  if (token) {
    return <>{props.children}</>;
  } else {
    // 跳转到首页
    return <Navigate to={"/?redirect" + location.pathname}></Navigate>;
  }
};

export default Private;
