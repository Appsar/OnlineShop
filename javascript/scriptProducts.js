let productsItems = document.getElementById("product-items")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadItems() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((data) => {
            data.forEach(element => {
                const card = document.createElement("div");
                const image = document.createElement("img");
                const title = document.createElement("p");
                const price = document.createElement("p");
                const button = document.createElement("button");

                button.addEventListener("click", () => {
                    cart.push(element);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    //alert("Added " + element.title + "To Cart.")
                    console.log(cart);
                })

                image.src = element.image;
                title.textContent = element.title;
                price.textContent = element.price + " $";
                button.textContent = "Add To Cart";

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

            });
        });

}

loadItems();

