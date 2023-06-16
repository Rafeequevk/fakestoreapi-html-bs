const cards = document.getElementById("cards");

async function displayProducts() {
  const products = await fetch("https://fakestoreapi.com/products?limit=6");
  const productsData = await products.json();

  const pData = productsData.map((product) => {
    return `

<article
            class="col-lg-2 col-md-4 border ms-3 mt-4 rounded-4"
            style="width: 290px"
          >

          <div class = "" > 
            <img
              class="card-img-top p-3"
              src="${product.image}"
              alt=""
            />
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center ">
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

async function addProducts() {
  const pName = document.getElementById("pname").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;
  const ImgLink = document.getElementById("imglink").value;
  const status = document.getElementById("status");

  const data = {
    title: pName,
    price: price,
    description: desc,
    image: ImgLink,
    category: category,
  };

  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  var datas = await response.json();
  console.log(datas);
  console.log(response.ok);
  if (response.ok) {
    status.classList.add("d-block");
    status.classList.remove("d-none");

    status.innerHTML = "Product Addes Succesfully...!";
  } else {
    status.classList.add("text-danger");
    status.classList.remove("text-success");
    status.innerText = "";
  }
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", addProducts);
