import axios from 'axios';

const API_KEY = '';

export const baseURL = {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});


