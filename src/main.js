import { fetchImages } from "./js/pixabay-api.js";
import {
  showLoader,
  hideLoader,
  renderGallery,
  clearGallery,
  refreshLightbox,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById("search-form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements.query.value.trim();
  const button = form.querySelector("button");

  if (!query) return;

  clearGallery();
  showLoader();
  button.disabled = true;

  try {
    const images = await fetchImages(query);
    hideLoader();
    button.disabled = false;

    if (images.length === 0) {
      iziToast.info({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    renderGallery(images);
  } catch (error) {
    hideLoader();
    button.disabled = false;
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later.",
      position: "topRight",
    });
  }
});
