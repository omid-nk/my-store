const products = [
  {
    id: 1,
    title: "Laptop Asus VivoBook 14",
    price: 2900,
    cover: "./public/img/products/image01.jpg",
    path: "./laptop1/"
  },
  {
    id: 2,
    title: "Laptop Asus ZenBook 13",
    price: 3200,
    cover: "./public/img/products/image02.jpg",
    path: "./laptop2/"
  },
  {
    id: 3,
    title: "Laptop Asus ROG Strix 15",
    price: 4500,
    cover: "./public/img/products/image03.jpg",
    path: "./laptop3/"
  },
  {
    id: 4,
    title: "Laptop Asus TUF Gaming 16",
    price: 4100,
    cover: "./public/img/products/image04.jpg",
    path: "./laptop4/"
  },
  {
    id: 5,
    title: "Laptop Asus ExpertBook 14",
    price: 3000,
    cover: "./public/img/products/image05.jpg",
    path: "./laptop5/"
  },
  {
    id: 6,
    title: "Laptop Asus ZenBook Flip 14",
    price: 3400,
    cover: "./public/img/products/image06.jpg",
    path: "./laptop6/"
  },
  {
    id: 7,
    title: "Laptop Asus ROG Flow X13",
    price: 4700,
    cover: "./public/img/products/image07.jpg",
    path: "./laptop7/"
  },
  {
    id: 8,
    title: "Laptop Asus TUF Dash 15",
    price: 4200,
    cover: "./public/img/products/image08.jpg",
    path: "./laptop8/"
  },
  {
    id: 9,
    title: "Laptop Asus VivoBook S14",
    price: 3100,
    cover: "./public/img/products/image09.jpg",
    path: "./laptop9/"
  },
  {
    id: 10,
    title: "Laptop Asus ZenBook 14 OLED",
    price: 3600,
    cover: "./public/img/products/image10.jpg",
    path: "./laptop10/"
  },
  {
    id: 11,
    title: "Laptop Asus ROG Zephyrus G14",
    price: 5000,
    cover: "./public/img/products/image11.jpg",
    path: "./laptop11/"
  },
  {
    id: 12,
    title: "Laptop Asus ExpertBook B9",
    price: 3300,
    cover: "./public/img/products/image12.jpg",
    path: "./laptop12/"
  }
]

// add to basket Btn
function addToCart() {
  console.log("click shod")
}
window.addToCart = addToCart

// products add to DOM
const productsElem = document.querySelector("#productsElem")
let page = 1
const productPerPage = 4

function showPageProducts() {
  let startIndex = (page - 1) * productPerPage
  let lastIndex = startIndex + productPerPage

  const showProducts = products.slice(startIndex, lastIndex)
  productsElem.innerHTML = ""
  showProducts.forEach((product) => {
    productsElem.insertAdjacentHTML(
      "afterbegin",
      `<div class="flex flex-col justify-between max-w-72 rounded p-4 shadow-md transition-all bg-white">
      <img src="${product.cover}" alt="" />
      <h3 class="my-4 cursor-default">
      ${product.title}
      </h3>
      <div class="flex items-center justify-between">
      <button
      onclick="addToCart()"
      class="cursor-pointer rounded bg-blue-600 px-2 py-1 text-white transition-all hover:bg-blue-800"
      >
      Add To Cart
      </button>
      <p class="text-right cursor-default">$${product.price.toLocaleString()}</p>
      </div>
      </div>`
    )
  })
}

// generate pagination
const paginationElem = document.querySelector("#paginationElem")
function genPagination() {
  const pageCount = products.length / productPerPage
  for (let i = 0; i < pageCount; i++) {
    paginationElem.insertAdjacentHTML(
      "beforeend",
      `
      <div
      class="${i === 0 ? "active" : ""} cursor-pointer rounded bg-blue-600 px-2 py-0.5 text-white transition-all hover:bg-blue-800"
      onclick="changePageHandler(${i}+1)"
       >
      ${i + 1}
      </div>
      `
    )
  }
}

// changePageHandler
window.changePageHandler = changePageHandler
function changePageHandler(userSelectedPage) {
  page = userSelectedPage
  showPageProducts()
  const paginationBtns = document.querySelectorAll("#paginationElem div")
  paginationBtns.forEach((btn) => btn.classList.remove("active"))
  paginationBtns[userSelectedPage - 1].classList.add("active")
}

showPageProducts()
genPagination()
