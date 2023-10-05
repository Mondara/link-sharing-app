import { ProfileData } from "@/types";

export const compareProfileOject = (
  currProfileData: ProfileData,
  updatedProfileData: ProfileData
) => {
  const differenceProfileData: Partial<ProfileData> = {};

  if (currProfileData["firstName"] != updatedProfileData["firstName"]) {
    differenceProfileData["firstName"] = updatedProfileData["firstName"];
  }

  if (currProfileData["lastName"] != updatedProfileData["lastName"]) {
    differenceProfileData["lastName"] = updatedProfileData["lastName"];
  }

  if (currProfileData["email"] != updatedProfileData["email"]) {
    differenceProfileData["email"] = updatedProfileData["email"];
  }

  if (currProfileData["avatar"] != updatedProfileData["avatar"]) {
    differenceProfileData["avatar"] = updatedProfileData["avatar"];
  }

  if (currProfileData["links"] && updatedProfileData["links"]) {
    if (
      JSON.stringify(currProfileData["links"]) !=
      JSON.stringify(updatedProfileData["links"])
    ) {
      differenceProfileData["links"] = updatedProfileData["links"];
    }
  }

  return differenceProfileData;
};
