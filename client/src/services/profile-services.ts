import axios from "axios";

import { authHeader } from "./auth-header";
import { ProfileData } from "@/types";
import { API_URL } from "./api-url";

export const getUserProfileDataFromName = async (
  name: string
): Promise<ProfileData> => {
  return axios
    .get(`${API_URL}/${name}`)
    .then(({ data }) => ({
      ...data,
      links: JSON.parse(data.links),
    }))
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getUserProfileData = async (): Promise<ProfileData> => {
  const { data } = await axios.get(API_URL, { headers: authHeader() });
  return {
    ...data,
    links: JSON.parse(data.links),
  };
};

export const postUserProfileData = (userData: FormData) => {
  return axios.post(API_URL, userData, { headers: authHeader() });
};
