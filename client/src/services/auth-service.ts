import axios from "axios";

const API_URL = "http://localhost:9000/auth/";

export const loginRequest = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(API_URL + "signin", {
      email,
      password,
    });

    if (data.accessToken) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    return data.user;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err);
      throw new Error(err?.response?.data.message);
    } else {
      console.log(err);
    }
  }
};

export const registerRequest = async (email: string, password: string) => {
  return axios
    .post(API_URL + "signup", {
      email,
      password,
    })
    .then((response) => {
      return response.data.message;
    })
    .catch((err) => {
      if (axios.isAxiosError(err)) {
        console.log(err);
        throw new Error(err?.response?.data.message);
      } else {
        console.log(err);
      }
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
