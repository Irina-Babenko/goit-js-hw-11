import{S as u,i as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(o){return o.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:l,downloads:h})=>`
    <li class="photo-card">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${r}" 
            alt="${s}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="photo-box">
          <ul class="photo-list">
            <li class="photo-item">
              <h2 class="photo-title">Likes</h2>
              <p class="photo-text">${e}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Views</h2>
              <p class="photo-text">${t}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Comments</h2>
              <p class="photo-text">${l}</p>
            </li>
            <li class="photo-item">
              <h2 class="photo-title">Downloads</h2>
              <p class="photo-text">${h}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const c={key:"44920148-106a3962957378fd34fa469a9",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function m(o){return c.q=o,`https://pixabay.com/api/?${new URLSearchParams(c).toString()}`}function d(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const y=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};i.searchForm.addEventListener("submit",g);function g(o){o.preventDefault();const a=o.currentTarget.elements.searchtext.value.toLowerCase().trim();i.gallery.innerHTML="",i.loader.classList.add("loader"),d(m(a)).then(s=>{i.loader.classList.remove("loader");const e=s.hits;e.length===0&&n(),i.gallery.insertAdjacentHTML("beforeend",f(e)),y.refresh()}).catch(n).finally(i.searchForm.reset())}function n(o){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
