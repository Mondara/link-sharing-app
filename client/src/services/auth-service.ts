import axios from "axios";

const API_URL = "http://localhost:9000/auth/";

export const loginRequest = async (email: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data.user;
    })
    .catch((err) => {
      if (err.response) {
        throw new Error(err.response.data.message);
      } else {
        throw new Error(err.message);
      }
    });
};

export const registerRequest = async (email: string, password: string) => {
  return axios
    .post(API_URL + "signup", {
      email,
      password,
    })
    .catch((err) => {
      if (err.response) {
        throw new Error(err.response.data.message);
      } else {
        throw new Error(err.message);
      }
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
