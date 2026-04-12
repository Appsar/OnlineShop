//Get where to create and input the product-items created from api fetch
const productsItems = document.getElementById("product-items")

let allProducts = [];


//Function to fetch products from api and then a function to render them out
function loadItems() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((data) => {
            allProducts = data.products;
            searchedProducts()
        });
};


function searchedProducts() {
    const savedSearch = localStorage.getItem("search");

    if (!savedSearch) {
        renderProducts(allProducts)
        return;
    }

    searchInput.value = savedSearch;

    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(savedSearch.toLowerCase())
    );

    renderProducts(filtered)

}

//Function to create each element using DOM and then rendering them out
function renderProducts(products) {
    productsItems.innerHTML = "";

    //Which elements to create for each product
    products.forEach(element => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        //Content inside each element
        image.src = element.thumbnail;
        title.textContent = element.title;
        price.textContent = element.price + " $";
        button.textContent = "Add To Cart";

        //Eventlistener for adding item to cart which saves them also in localstorage on browser
        button.addEventListener("click", () => {
            cart.push(element);
            saveCart(cart);
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

//Listens to the search bar and filters out products from the input
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

