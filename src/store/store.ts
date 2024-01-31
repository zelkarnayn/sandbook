import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/authRespone";
import {API_URL} from "../http";

export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const responce = await AuthService.login(email, password);
      console.log(responce);

      localStorage.setItem("token", responce.data.accessToken);
      this.setUser(responce.data.user);
      this.setAuth(true);
    } catch (error) {
      console.log(error.responce?.data?.message);
    }
  }

  async registration(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        first_name,
        last_name
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
      this.setAuth(true);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}user/refresh`,
        { withCredentials: true }
      );
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setUser(response.data.user);
      this.setAuth(true);
    } catch (error) {
      console.log(error.response.data.message, 'Hello');
    }
  }
}
