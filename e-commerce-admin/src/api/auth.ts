import {UserType} from "../types";
import request from "../utils/request";

export function login(data: UserType) {
  return request.post("/api/login");
}
