import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import cookie from "../cookie";

export const customAxios = axios.create({
  baseURL: "http://44.209.75.36:8080",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)}`,
  },
});
