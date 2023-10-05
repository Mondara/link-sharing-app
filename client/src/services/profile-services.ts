import axios from "axios";

import { authHeader } from "./auth-header";
import { ProfileData } from "@/types";
import { API_URL } from "./api-url";

export const getUserProfileDataFromName = async (
  name: string
): Promise<ProfileData> => {
  return axios
    .get(`${API_URL}/profile/${name}`)
    .then(({ data }) => ({
      ...data,
      links: !data.links ? [] : JSON.parse(data.links),
    }))
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getUserProfileData = async (): Promise<ProfileData> => {
  const { data } = await axios.get(`${API_URL}/profile`, {
    headers: authHeader(),
  });

  if (!data.links.length) {
    data.links = [];
  } else {
    data.links = JSON.parse(data.links);
  }

  return {
    ...data,
    links: data.links,
  };
};

export const postUserProfileData = (userData: FormData) => {
  return axios.put(`${API_URL}/profile`, userData, { headers: authHeader() });
};
