let containers = document.querySelectorAll(".flex-item");
let currentIndex = 0;

containers.forEach((container) => {
    const img = document.createElement("img");
    img.style.objectFit = "contain";
    img.style.width = "100%";
    img.style.height = "85%";

    const title = document.createElement("p");
    title.classList.add("product-title");
    title.style.fontSize = "2rem";
    title.style.color = "white";
    title.style.marginBottom = "1rem"

    const price = document.createElement("p");
    price.classList.add("product-price");
    price.style.fontSize = "2rem";
    price.style.color = "white";

    container.append(img, title, price);
});

function loadSlide(index) {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((data) => {
            containers.forEach((container, i) => {
                container.querySelector("img").src = data.products[index + i].thumbnail
                container.querySelector(".product-title").textContent = data.products[index + i].title;
                container.querySelector(".product-price").textContent = data.products[index + i].price + " $";
            });
        });
}

loadSlide(0);

document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 4) % 20;
    loadSlide(currentIndex)
})

document.querySelector(".previous-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 4 + 20) % 20;
    loadSlide(currentIndex)
})