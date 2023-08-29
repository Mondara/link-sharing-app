import axios from "axios";

const API_URL = "http://localhost:9000/auth/";

export const login = async (email: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const register = (email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};
