import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndpoints = config.apiUrl + "/auth";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoints, { email, password });
  localStorage.setItem("token", jwt);
}

export function loginWithJwt() {
  localStorage.setItem("token");
}

export function logout() {
  localStorage.removeItem("token");
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function getCurrentUser() {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    return null;
    // Token doesn't exist or is invalid, handle accordingly (e.g., redirect to login page)
  } else {
    try {
      return jwtDecode(jwt);
      // Use decodedToken for authentication/authorization
    } catch (error) {
      console.error("Error decoding token:", error);
      // Handle token decoding error
    }
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
