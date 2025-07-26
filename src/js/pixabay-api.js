import axios from "axios";

const API_KEY = "51495108-70da61c0e762648aa60ab0fc1";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits;
  } catch (error) {
    throw new Error("Image fetch failed");
  }
}
