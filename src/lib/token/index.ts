import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import cookie from "../cookie";

class Token {
  public getToken(key: string): string | undefined {
    return cookie.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
  }
}

export default new Token();
