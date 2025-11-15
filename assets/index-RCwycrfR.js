(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const a=[{id:1,title:"Laptop Asus VivoBook 14",price:2900,cover:"./public/img/products/image01.jpg",path:"./laptop1/"},{id:2,title:"Laptop Asus ZenBook 13",price:3200,cover:"./public/img/products/image02.jpg",path:"./laptop2/"},{id:3,title:"Laptop Asus ROG Strix 15",price:4500,cover:"./public/img/products/image03.jpg",path:"./laptop3/"},{id:4,title:"Laptop Asus TUF Gaming 16",price:4100,cover:"./public/img/products/image04.jpg",path:"./laptop4/"},{id:5,title:"Laptop Asus ExpertBook 14",price:3e3,cover:"./public/img/products/image05.jpg",path:"./laptop5/"},{id:6,title:"Laptop Asus ZenBook Flip 14",price:3400,cover:"./public/img/products/image06.jpg",path:"./laptop6/"},{id:7,title:"Laptop Asus ROG Flow X13",price:4700,cover:"./public/img/products/image07.jpg",path:"./laptop7/"},{id:8,title:"Laptop Asus TUF Dash 15",price:4200,cover:"./public/img/products/image08.jpg",path:"./laptop8/"},{id:9,title:"Laptop Asus VivoBook S14",price:3100,cover:"./public/img/products/image09.jpg",path:"./laptop9/"},{id:10,title:"Laptop Asus ZenBook 14 OLED",price:3600,cover:"./public/img/products/image10.jpg",path:"./laptop10/"},{id:11,title:"Laptop Asus ROG Zephyrus G14",price:5e3,cover:"./public/img/products/image11.jpg",path:"./laptop11/"},{id:12,title:"Laptop Asus ExpertBook B9",price:3300,cover:"./public/img/products/image12.jpg",path:"./laptop12/"}];function l(){console.log("click shod")}window.addToCart=l;const u=document.querySelector("#productsElem");let d=1;const s=4;function n(){let p=(d-1)*s,i=p+s;a.slice(p,i).forEach(o=>{u.insertAdjacentHTML("afterbegin",`<div class="flex flex-col justify-between max-w-72 rounded-2xl p-4 shadow transition-all ">
      <img src="${o.cover}" alt="" />
      <h3 class="my-4 cursor-default">
      ${o.title}
      </h3>
      <div class="flex items-center justify-between">
      <button
      onclick="addToCart()"
      class="cursor-pointer rounded bg-blue-600 px-2 py-1 text-white transition-all hover:bg-blue-800"
      >
      Add To Cart
      </button>
      <p class="text-right cursor-default">$${o.price.toLocaleString()}</p>
      </div>
      </div>`)})}n();
