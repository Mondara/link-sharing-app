import React from "react";
import { LinksType, ProfileData } from "@/types";

interface LinkError {
  [id: string]: string;
}

export interface Errors {
  linkError: LinkError;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  imageError: string;
}

interface ProfileContextType {
  errors: Errors;
  loading: boolean;
  profileData: ProfileData;
  addLink: () => void;
  updateLink: (updatedLink: LinksType) => void;
  removeLink: (id: string) => void;
  reorderLinks: (links: LinksType[], startIdx: number, endIdx: number) => void;
  setAvatar: (avatar: FileList | null) => void;
  loadProfileData: () => void;
  saveProfileData: () => void;
  saveBtnDisabled: boolean;
  updateProfileDetails: (updatedProfileDetails: ProfileData) => void;
}

export const ProfileContext = React.createContext<ProfileContextType | null>(
  null
);
