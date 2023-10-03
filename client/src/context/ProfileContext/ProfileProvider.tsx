import React from "react";
import { toast } from 'react-toastify';

import { ProfileContext } from "./ProfileContext";
import { LinksType, ProfileData } from "@/types";
import { getUserProfileData, postUserProfileData } from "@/services";
import { emailValidator, isAuthenticated } from "@/utils";
import { getPlatformURL } from "@/assets";
import { Errors } from "./ProfileContext"

export const useProfileContext = () => {
    const context = React.useContext(ProfileContext);

    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvide");
    }

    return context;
}

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [profileData, setProfileData] = React.useState<ProfileData>({
        firstName: "",
        lastName: "",
        email: "",
        links: [{
            id: `1`,
            platform: "GitHub",
            link: ""
        }],
    });

    const [errors, setErrors] = React.useState<Errors>({
        linkError: {
            "0": "",
        },
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        imageError: ""
    })

    const [saveBtnDisabled, setSaveBtnDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);


    const addLink = () => {
        const newLink: LinksType = {
            id: `${profileData.links ? profileData.links.length + 1 : "1"}`,
            platform: "GitHub",
            link: ""
        }

        const updatedLinks = profileData.links?.length === 0 ? [newLink] : [...profileData.links, newLink]

        setProfileData({
            ...profileData,
            links: updatedLinks
        })
    }

    const updateLink = (updatelink: LinksType) => {
        const updatedLink = profileData.links.map((link) => link.id === updatelink.id ? updatelink : link)
        setProfileData({
            ...profileData,
            links: updatedLink,
        })
    }

    const removeLink = (id: string) => {
        const newLinks = profileData.links.filter((link) => link.id != id)

        setProfileData({
            ...profileData,
            links: newLinks,
        });
    }

    const reorderLinks = (links: LinksType[], startIdx: number, endIdx: number) => {
        const result = Array.from(links);
        const [removed] = result.splice(startIdx, 1);
        result.splice(endIdx, 0, removed);

        setProfileData({
            ...profileData,
            links: result,
        });
    }

    const setAvatar = async (images: FileList | null) => {
        if (!images?.length) {
            setErrors(prev => ({
                ...prev,
                imageError: 'No image found.'
            }))
            return;
        }


        const avatar = images[0];

        if (avatar.size > 1024 * 1024) {
            setErrors(prev => ({
                ...prev,
                imageError: 'Incorrect Image Size (Max: 1MB)'
            }));

            return;
        } else if (!avatar.type.startsWith('image/')) {
            setErrors(prev => ({
                ...prev,
                imageError: 'Please select an image file.'
            }));

            return;
        }

        setProfileData(prev => ({
            ...prev,
            avatar: avatar,
        }))

        toast.success("Image Uploaded Successfully");
    }

    const updateProfileDetails = (updatedProfileDetails: ProfileData) => {
        setProfileData(updatedProfileDetails)
    }

    const isSavable = React.useCallback(() => {

        if (!profileData.firstName) {
            setErrors((prev) => ({
                ...prev,
                firstNameError: "Can\"t be empty.",
            }))

            setSaveBtnDisabled(true);
        } else {
            setErrors((prev) => ({
                ...prev,
                firstNameError: "",
            }))

            setSaveBtnDisabled(false);
        }


        if (!profileData.lastName) {
            setErrors((prev) => ({
                ...prev,
                lastNameError: "Can\"t be empty.",
            }))

            setSaveBtnDisabled(true);
        } else {
            setErrors((prev) => ({
                ...prev,
                lastNameError: "",
            }))

            setSaveBtnDisabled(false);

        }


        if (!profileData.email) {
            setErrors((prev) => ({
                ...prev,
                emailError: "Can\"t be empty.",
            }))

            setSaveBtnDisabled(true);
        } else if (!emailValidator(profileData.email)) {
            setErrors((prev) => ({
                ...prev,
                emailError: "Incorrect Email",
            }))

            setSaveBtnDisabled(true);
        } else {
            setErrors((prev) => ({
                ...prev,
                emailError: "",
            }))

            setSaveBtnDisabled(false);

        }

        if (loading) {
            setSaveBtnDisabled(true);
        } else {
            setSaveBtnDisabled(false);
        }

        profileData.links.forEach(linkElement => {
            if (linkElement.link === "") {
                setErrors((prev) => ({
                    ...prev,
                    linkError: {
                        ...prev.linkError,
                        [linkElement.id]: "Can\"t be empty.",
                    }
                }))

                setSaveBtnDisabled(true);
            } else if (!linkElement.link.startsWith(getPlatformURL[linkElement.platform])) {
                setErrors((prev) => ({
                    ...prev,
                    linkError: {
                        ...prev.linkError,
                        [linkElement.id]: "Invalid Link.",
                    }
                }))

                setSaveBtnDisabled(true);

            } else {
                setErrors((prev) => ({
                    ...prev,
                    linkError: {
                        ...prev.linkError,
                        [linkElement.id]: "",
                    }
                }))

                setSaveBtnDisabled(false);
            }
        })
    }, [profileData, loading])


    const loadProfileData = async () => {
        setLoading(true);

        const user = await getUserProfileData();

        if (user) {
            setProfileData(user);
        }

        setLoading(false);
    }


    const saveProfileData = async () => {
        const profileDataForm = new FormData();
        profileDataForm.append("avatar", profileData.avatar || "");
        profileDataForm.append("firstName", profileData.firstName);
        profileDataForm.append("lastName", profileData.lastName);
        profileDataForm.append("email", profileData.email)
        profileDataForm.append("links", JSON.stringify(profileData.links))

        setLoading(true);

        const { data } = await postUserProfileData(profileDataForm);

        setLoading(false);

        setProfileData({
            ...data,
            links: JSON.parse(data.links)
        });

        toast.success("Updated Profile Details");
    }

    React.useEffect(() => {
        if (!isAuthenticated()) return

        const loadData = async () => {
            await loadProfileData()
        }

        loadData();
    }, [])

    React.useEffect(() => {
        isSavable()
    }, [profileData, isSavable])



    return (
        <ProfileContext.Provider value={{ errors, loading, profileData, updateProfileDetails, addLink, updateLink, removeLink, reorderLinks, setAvatar, loadProfileData, saveProfileData, saveBtnDisabled }}>
            {children}
        </ProfileContext.Provider>
    )
}