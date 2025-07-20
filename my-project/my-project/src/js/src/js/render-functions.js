import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function showLoader() {
  document.querySelector(".loader").classList.remove("hidden");
}

export function hideLoader() {
  document.querySelector(".loader").classList.add("hidden");
}

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery__item">
        <a class="photo-card" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${likes}</p>
            <p class="info-item"><b>Views:</b> ${views}</p>
            <p class="info-item"><b>Comments:</b> ${comments}</p>
            <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
        </a>
      </li>`
    )
    .join("");

  document.querySelector(".gallery").insertAdjacentHTML("beforeend", markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
}

export function refreshLightbox() {
  lightbox?.refresh();
}
