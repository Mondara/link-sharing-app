import axios from "axios";

const API_URL = "http://localhost:9000/auth/";

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const register = (username: string, password: string) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};
