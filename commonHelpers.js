import{S as l,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="44920148-106a3962957378fd34fa469a9",f="https://pixabay.com/api/";async function d(s,t=1){const o=await fetch(`${f}?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`);if(!o.ok)throw new Error(o.status);return o.json()}function m({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:n}){return`
    <div class="photo-card">
      <a href="${t}">
        <img src="${s}" alt="${o}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${i}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${e}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${r}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${n}
        </p>
      </div>
    </div>
  `}function y(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(m).join("")}const p=document.querySelector("#search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new l(".gallery a");p.addEventListener("submit",async s=>{s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term!"});return}c.style.display="block";try{const o=await d(t);if(o.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}),g.innerHTML="";return}y(o.hits),h.refresh()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
