import { PlatformOptions } from "./types";

export interface LinksType {
  id: string;
  platform: PlatformOptions;
  link: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: File | string;
  links: LinksType[];
}

export interface PlatformOptionData {
  label: PlatformOptions;
  icon?: JSX.Element;
  placeholderLink?: string;
}
