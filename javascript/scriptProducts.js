//Get where to create and input the product-items created from api fetch
const productsItems = document.getElementById("product-items")

//Stores fetched data globally for entire script
let allProducts = [];


//Function to fetch products from api and then a function to render them out
function loadItems() {
    //Fetches all products from api
    fetch('https://dummyjson.com/products')
        .then(response => {
            //Checks if api works if not catch error
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            return response.json()
        })
        //If api works render all the products out.
        .then((data) => {
            allProducts = data.products;
            searchedProducts()
        })
        //Catches api error and handles it with a error message on screen
        .catch(error => {
            console.log(error)
            const errorMsg = document.createElement("h1");
            errorMsg.textContent = error.message;
            errorMsg.style.color = "red"
            productsItems.append(errorMsg)
        })
};

//Listens to the search bar and filters out products from the input. searchInput is defined in navbar.js
searchInput.addEventListener("input", (search) => {
    //Checks value in searchbar
    const searchValue = search.target.value.toLowerCase();

    //Compare search and product title and filters out the ones that match
    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    //Renders all products that matched
    renderProducts(filtered);
})

//Function to search for products from all parts of the site
function searchedProducts() {
    //Gets value from localestorage that was saved from searching in nav-bar-search
    const savedSearch = localStorage.getItem("search");

    //Checks if there is anything searched otherwise render products normally
    if (!savedSearch) {
        renderProducts(allProducts)
        return;
    }

    //Search input is the same as stored value
    searchInput.value = savedSearch;

    //Compare search and product title and filters out the ones that match
    const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(savedSearch.toLowerCase())
    );

    //Renders all products that matched
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

        //CSS class for styling
        card.classList.add("product-card");
        image.classList.add("product-image");
        title.classList.add("product-title");
        price.classList.add("product-price");
        button.classList.add("product-button");

        //CSS style for image
        image.style.width = "100%";
        image.style.height = "200px";
        image.style.objectFit = "contain";

        //Displays products cards on screen
        card.append(image, title, price, button);
        productsItems.append(card);
    })
}

//Runs the function when product page starts
loadItems();

