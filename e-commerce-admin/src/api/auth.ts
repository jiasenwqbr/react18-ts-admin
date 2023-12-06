import {UserType} from "../type";
import request from "../utils/request";

export function login(data: UserType) {
  return request.post("/api/login");
}
