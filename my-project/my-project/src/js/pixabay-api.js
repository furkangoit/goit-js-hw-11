import axios from "axios";

const API_KEY = "50136749-dac3218f1634fe54e8a0614ce";
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
    if (response.data && Array.isArray(response.data.hits)) {
      return response.data.hits;
    } else {
      throw new Error("Unexpected API response format");
    }
  } catch (error) {
    throw new Error(`Image fetch failed: ${error.message}`);
  }
}
