//Get elements from shoppingcart.html and give them a name to use in function
let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");
let totalItemsAll = document.getElementById("total-items");

//Function to load the shopping cart.
function loadCart() {

    //If cart is empty show text
    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your cart is empty 🛒</h2>";
    }

    //Creates a product card for each product stored in localestorage from product site
    cart.forEach((element, index) => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        //Remove button besides each product in shopping cart to remove product from shoppingcart
        button.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        })

        //Calculates each products price and gives a total price for all products
        let total = 0;
        cart.forEach(item => {
            total += item.price
        })
        totalPrice.textContent = "Total price: " + total.toFixed(2) + " $";

        //Calculates how many products there are in the cart and displays how many products total
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity || 1;
        })
        totalItemsAll.textContent = "Total items: " + totalItems;

        //Inserts information for each element in product card
        image.src = element.thumbnail;
        title.textContent = element.title;
        price.textContent = element.price + " $";
        button.textContent = "Remove item";

        //Applies a class for CSS styling
        card.classList.add("cart-card");
        image.classList.add("cart-image");
        title.classList.add("cart-title");
        price.classList.add("cart-price");

        //CSS styling for image
        image.style.width = "100%";
        image.style.height = "150px";
        image.style.objectFit = "contain";

        //Appends the product cards to the page and displays them
        card.append(image, title, price, button);
        cartItems.append(card);

    });
}

//Runs load cart function upon entering shoppingcart page
loadCart();