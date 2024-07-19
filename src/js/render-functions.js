export function renderPictures(hits) {
  return hits
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
    <li class="photo-card">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="photo-box">
          <ul class="photo-list">
            <li class="photo-item">
              <h2 class="photo-title">Likes</h2>
              <p class="photo-text">${likes}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Views</h2>
              <p class="photo-text">${views}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Comments</h2>
              <p class="photo-text">${comments}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Downloads</h2>
              <p class="photo-text">${downloads}</p>
            </li>
          </ul>
        </div>
      </li>
    `
    )
    .join('');
}
