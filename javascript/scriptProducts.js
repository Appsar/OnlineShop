const productsItems = document.getElementById("product-items")
const searchInput = document.getElementById("nav-search");

let allProducts = [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadItems() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((data) => {
            allProducts = data;
            renderProducts(data);
        });
};

function renderProducts(products) {
    productsItems.innerHTML = "";

    products.forEach(element => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        image.src = element.image;
        title.textContent = element.title;
        price.textContent = element.price + " $";
        button.textContent = "Add To Cart";

        button.addEventListener("click", () => {
            cart.push(element);
            saveCart();
            //alert("Added " + element.title + "To Cart.")
            console.log(cart);
        })

        card.classList.add("product-card");
        image.classList.add("product-image");
        title.classList.add("product-title");
        price.classList.add("product-price");
        button.classList.add("product-button");

        image.style.width = "100%";
        image.style.height = "200px";
        image.style.objectFit = "contain";

        card.append(image, title, price, button);
        productsItems.append(card);
    })
}

searchInput.addEventListener("input", (search) => {
    const searchValue = search.target.value.toLowerCase();
    console.log(searchValue);

    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    console.log(filtered);
    renderProducts(filtered);
})

loadItems();

