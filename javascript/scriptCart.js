let cart = getCart();
console.log(cart);

let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");
let totalItemsAll = document.getElementById("total-items");

function loadCart() {
    cart.forEach((element, index) => {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        button.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        })

        let total = 0;
        cart.forEach(item => {
            total += item.price
        })
        totalPrice.textContent = "Total price: " + total.toFixed(2) + " $";

        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity || 1;
        })
        totalItemsAll.textContent = "Total items: " + totalItems;

        image.src = element.thumbnail;
        title.textContent = element.title;
        price.textContent = element.price + " $";
        button.textContent = "Remove item";

        card.classList.add("cart-card");
        image.classList.add("cart-image");
        title.classList.add("cart-title");
        price.classList.add("cart-price");

        image.style.width = "100%";
        image.style.height = "150px";
        image.style.objectFit = "contain";


        console.log(totalItems);
        card.append(image, title, price, button);
        cartItems.append(card);

    });
}

loadCart();