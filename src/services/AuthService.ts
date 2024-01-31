import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/authRespone";

export default class AuthService {

  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/user/login", { email, password });
  }

  static async registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/user/registration", { email, password, first_name, last_name });
  }

  static async logout(): Promise<void> {
    return $api.post("/user/logout");
  }
}
