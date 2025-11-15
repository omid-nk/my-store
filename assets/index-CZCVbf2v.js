(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const p=[{id:1,title:"Laptop Asus VivoBook 14",price:2900,cover:"./public/img/products/image01.jpg",path:"./laptop1/"},{id:2,title:"Laptop Asus ZenBook 13",price:3200,cover:"./public/img/products/image02.jpg",path:"./laptop2/"},{id:3,title:"Laptop Asus ROG Strix 15",price:4500,cover:"./public/img/products/image03.jpg",path:"./laptop3/"},{id:4,title:"Laptop Asus TUF Gaming 16",price:4100,cover:"./public/img/products/image04.jpg",path:"./laptop4/"},{id:5,title:"Laptop Asus ExpertBook 14",price:3e3,cover:"./public/img/products/image05.jpg",path:"./laptop5/"},{id:6,title:"Laptop Asus ZenBook Flip 14",price:3400,cover:"./public/img/products/image06.jpg",path:"./laptop6/"},{id:7,title:"Laptop Asus ROG Flow X13",price:4700,cover:"./public/img/products/image07.jpg",path:"./laptop7/"},{id:8,title:"Laptop Asus TUF Dash 15",price:4200,cover:"./public/img/products/image08.jpg",path:"./laptop8/"},{id:9,title:"Laptop Asus VivoBook S14",price:3100,cover:"./public/img/products/image09.jpg",path:"./laptop9/"},{id:10,title:"Laptop Asus ZenBook 14 OLED",price:3600,cover:"./public/img/products/image10.jpg",path:"./laptop10/"},{id:11,title:"Laptop Asus ROG Zephyrus G14",price:5e3,cover:"./public/img/products/image11.jpg",path:"./laptop11/"},{id:12,title:"Laptop Asus ExpertBook B9",price:3300,cover:"./public/img/products/image12.jpg",path:"./laptop12/"}],d=document.querySelector("#productsElem");let f=1;const a=4;function h(){let e=(f-1)*a,t=e+a;const r=p.slice(e,t);d.innerHTML="",r.forEach(o=>{d.insertAdjacentHTML("afterbegin",`<div class="flex flex-col justify-between max-w-72 rounded p-4 shadow-md transition-all bg-white">
      <img src="${o.cover}" alt="" />
      <h3 class="my-4 cursor-default">
      ${o.title}
      </h3>
      <div class="flex items-center justify-between">
      <button
      onclick="addToCart(${o.id},event)"
      class="cursor-pointer rounded bg-blue-600 px-2 py-1 text-white transition-all hover:bg-blue-800"
      >
      Add To Cart
      </button>
      <p class="text-right cursor-default font-bold">$${o.price.toLocaleString()}</p>
      </div>
      </div>`)})}const L=document.querySelector("#paginationElem");function y(){const e=p.length/a;for(let t=0;t<e;t++)L.insertAdjacentHTML("beforeend",`
      <div
      class="${t===0?"active":""} cursor-pointer rounded bg-blue-600 px-2 py-0.5 text-white transition-all hover:bg-blue-800"
      onclick="changePageHandler(${t}+1)"
       >
      ${t+1}
      </div>
      `)}window.changePageHandler=x;function x(e){f=e,h();const t=document.querySelectorAll("#paginationElem div");t.forEach(r=>r.classList.remove("active")),t[e-1].classList.add("active")}h();y();const E=document.querySelector("#basketBtn"),k=document.querySelector("#basketContainer");E.addEventListener("click",()=>{k.classList.toggle("hidden")});const c=[];function w(e,t){if(!c.some(o=>o.id===e)){const o=p.find(i=>i.id===e);c.push(o),b()}}window.addToCart=w;const u=document.querySelector("#basketUserElem");function b(){u.innerHTML="",c.forEach(e=>{u.insertAdjacentHTML("beforeend",`
      <div
      class="flex items-center justify-between gap-2 border-b border-gray-200 p-2"
      >
      <div class="w-16">
      <img src="${e.cover}" alt="" />
      </div>
      <div class="">
      <h3 class="text-sm">${e.title}</h3>
      <p class="text-sm">$${e.price}</p>
      </div>
      <div class="flex items-center gap-1 text-white">
      <button onclick="deleteProductFromBasket(${e.id},event)" class="cursor-pointer px-1 text-red-700">X</button>
      </div>
      </div>
      `),l(),v()})}const g=document.querySelector("#isntEmpty"),m=document.querySelector("#isEmpty");function l(){c.length>0?(m.classList.add("hidden"),g.classList.remove("hidden")):(m.classList.remove("hidden"),g.classList.add("hidden"))}l();function B(e){const t=c.findIndex(r=>r.id===e);t!==-1&&c.splice(t,1),b(),l(),v()}window.deleteProductFromBasket=B;const j=document.querySelector("#totalPriceElem");function v(){let e=0;c.forEach(t=>{e+=t.price}),j.innerHTML="$"+e.toLocaleString()}
