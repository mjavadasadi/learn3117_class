let shopingList = [];

function displayShopingList() {
  let shopingListDiv = document.getElementById("ShopingList");

  shopingListDiv.innerHTML = "";
  shopingList.forEach((product, index) => {
    let productDiv = document.createElement("div");
    productDiv.className='product'
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>تعداد:${product.quantity}</p>
        <p>قیمت:${product.price}</p>
        <button onclick='removeProduct(${index})' >حذف</button>
        `;
    shopingListDiv.appendChild(productDiv);
  });
}

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    let product = {
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
    };

    shopingList.push(product);
    displayShopingList();
    calculateCost();
  });

function removeProduct(index) {
  shopingList.splice(index, 1);
  displayShopingList();
  calculateCost();
}

function calculateCost() {
  let totalCost = shopingList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  document.getElementById("totalCost").innerText=`مجموع قیمت : ${totalCost}`;
}
