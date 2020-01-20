import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
const KEY = "AIzaSyCNBPArXG4xxUDTiElDkjnMJuv248rDfSI";

export default axios.create({
  baseURL: YOUTUBE_BASE_URL,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
