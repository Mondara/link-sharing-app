import React from 'react';

import { GithubIcon, FrontendMentorIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, FacebookIcon, TwitchIcon, DevtoIcon, CodewarsIcon, CodepenIcon, FreeCodeCampIcon, GitLabIcon, HashnodeIcon, StackOverflowIcon } from '@/assets';
import { PlatformOptionData, PlatformOptions } from '@/types';



export const getPlaceholder = (platformsOptions: PlatformOptions) => {

    switch (platformsOptions) {
        case 'GitHub':
            return "https://github.com/";
        case 'Frontend Mentor':
            return "https://github.com/";
        case 'Twitter':
            return "https://twitter.com/";
        case 'Linkedin':
            return "https://www.linkedin.com/in/";
        case 'Youtube':
            return "https://www.youtube.com/channel/";
        case 'Facebook':
            return "https://www.facebook.com/";
        case 'Twitch':
            return "https://www.twitch.tv/";
        case 'Dev.to':
            return "https://dev.to/";
        case 'Codewars':
            return "https://www.codewars.com/users/";
        case 'Codepen':
            return "https://codepen.io/";
        case 'freeCodeCamp':
            return "https://www.freecodecamp.org/";
        case 'GitLab':
            return "https://gitlab.com/";
        case 'Hashnode':
            return "https://hashnode.com/";
        case 'Stack Overflow':
            return "https://stackoverflow.com/users/";

    }
}

export const getPlatformIcon = (platformsOptions: PlatformOptions) => {

    switch (platformsOptions) {
        case 'GitHub':
            return <GithubIcon />;
        case 'Frontend Mentor':
            return <FrontendMentorIcon />;
        case 'Twitter':
            return <TwitterIcon />;
        case 'Linkedin':
            return <LinkedinIcon />;
        case 'Youtube':
            return <YoutubeIcon />;
        case 'Facebook':
            return <FacebookIcon />;
        case 'Twitch':
            return <TwitchIcon />;
        case 'Dev.to':
            return <DevtoIcon />;
        case 'Codewars':
            return <CodewarsIcon />;
        case 'Codepen':
            return <CodepenIcon />;
        case 'freeCodeCamp':
            return <FreeCodeCampIcon />;
        case 'GitLab':
            return <GitLabIcon />;
        case 'Hashnode':
            return <HashnodeIcon />;
        case 'Stack Overflow':
            return <StackOverflowIcon />;

    }
}

export const getPlatformBackgroundColor = (platform: PlatformOptions) => {
    switch (platform) {

        case "GitHub":
            return '#1A1A1A'

        case "Frontend Mentor":
            return '#FFFFFF'

        case "Twitter":
            return '#43B7E9'

        case "Linkedin":
            return '#2D68FF'

        case "Youtube":
            return '#EE3939'

        case "Facebook":
            return '#2442AC'

        case "Twitch":
            return '#EE3FC8'

        case "Dev.to":
            return '#333333'

        case "Codewars":
            return '#8A1A50'

        case "Codepen":
            return '#333333'

        case "freeCodeCamp":
            return '#302267'

        case "GitLab":
            return '#EB4925'

        case "Hashnode":
            return '#0330D1'

        case "Stack Overflow":
            return '#EC7100'

    }
}

export const platformOptions: PlatformOptionData[] = [
    { label: 'GitHub', icon: <GithubIcon />, placeholderLink: "https://github.com/" },
    { label: 'Frontend Mentor', icon: <FrontendMentorIcon />, placeholderLink: "https://frontendmentor.io/profile/" },
    { label: 'Twitter', icon: <TwitterIcon />, placeholderLink: "https://twitter.com/" },
    { label: 'Linkedin', icon: <LinkedinIcon />, placeholderLink: "https://www.linkedin.com/in/" },
    { label: 'Youtube', icon: <YoutubeIcon />, placeholderLink: "https://www.youtube.com/channel/" },
    { label: 'Facebook', icon: <FacebookIcon />, placeholderLink: "https://www.facebook.com/" },
    { label: 'Twitch', icon: <TwitchIcon />, placeholderLink: "https://www.twitch.tv/" },
    { label: 'Dev.to', icon: <DevtoIcon />, placeholderLink: "https://dev.to/" },
    { label: 'Codewars', icon: <CodewarsIcon />, placeholderLink: "https://www.codewars.com/users/" },
    { label: 'Codepen', icon: <CodepenIcon />, placeholderLink: "https://codepen.io/" },
    { label: 'freeCodeCamp', icon: <FreeCodeCampIcon />, placeholderLink: "https://www.freecodecamp.org/" },
    { label: 'GitLab', icon: <GitLabIcon />, placeholderLink: "https://gitlab.com/" },
    { label: 'Hashnode', icon: <HashnodeIcon />, placeholderLink: "https://hashnode.com/" },
    { label: 'Stack Overflow', icon: <StackOverflowIcon />, placeholderLink: "https://stackoverflow.com/users/" },
]

export const getPlatformURL = {
    'GitHub': "https://github.com/",
    'Frontend Mentor': "https://frontendmentor.io/profile/",
    'Twitter': "https://twitter.com/",
    'Linkedin': "https://www.linkedin.com/in/",
    'Youtube': "https://www.youtube.com/channel/",
    'Facebook': "https://www.facebook.com/",
    'Twitch': "https://www.twitch.tv/",
    'Dev.to': "https://dev.to/",
    'Codewars': "https://www.codewars.com/users/",
    'Codepen': "https://codepen.io/",
    'freeCodeCamp': "https://www.freecodecamp.org/",
    'GitLab': "https://gitlab.com/",
    'Hashnode': "https://hashnode.com/",
    'Stack Overflow': "https://stackoverflow.com/users/",
}