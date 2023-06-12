const cards = document.getElementById("cards");

async function displayProducts() {
  const products = await fetch("https://fakestoreapi.com/products?limit=6");
  const productsData = await products.json();

  const pData = productsData.map((product) => {
    return `

<article
            class="col border w-20 ms-5 mt-4 rounded-4"
            style="width: 17%"
          >

          <div class = "" > 
            <img
              class="card-img-top p-3"
              src="${product.image}"
              alt=""
            />
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="my-1">${product.title}</h5>
              <h5 class="my-1">$${product.price}</h5>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <p class="my-1 text-bg-secondary px-4 py-1 rounded-pill">
                ${product.category}
              </p>
              <span class="my-1">${product.rating.rate}</span>
            </div>

            <p class="my-2">${product.description}
            </p>
          </article>

`;
  });

  cards.innerHTML = pData.join("");
}

displayProducts();

function addProducts(e) {
  e.preventDefault();
  const Pname = document.getElementById("pname").value;
  console.log(Pname);
  console.log("avbagsvagK", Pname);
}
