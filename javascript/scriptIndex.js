//Find flex item and where to put in product slide
let containers = document.querySelectorAll(".flex-item");
const hotrightnow = document.getElementById("wearityourway")
const prevBtn = document.querySelector(".previous-btn")
const nextBtn = document.querySelector(".next-btn")
let currentIndex = 0;

//Create new elements for the product carasouel on startpage
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

//Function to fetch 20 products from api and display in a carasouel slide on startpage
function loadSlide(index) {
    fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong...");
            } return response.json();
        })
        .then((data) => {
            containers.forEach((container, i) => {
                container.querySelector("img").src = data.products[index + i].thumbnail
                container.querySelector(".product-title").textContent = data.products[index + i].title;
                container.querySelector(".product-price").textContent = data.products[index + i].price + " $";
            });
        })
        .catch(error => {
            console.log(error)
            containers.forEach((container, i) => {
                container.style.display = "none"
                prevBtn.style.display = "none"
                nextBtn.style.display = "none"
            })
            const errorMsg = document.createElement("h1");
            errorMsg.textContent = error.message;
            errorMsg.classList.add("errorMsg")
            hotrightnow.append(errorMsg)
        })
}

loadSlide(0);

//Checks if button is pressed and shows next 4 products of the 20 in slide
document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 4) % 20;
    loadSlide(currentIndex)
})

//Check if button is pressed and shows previous 4 products of the 20 in slide
document.querySelector(".previous-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 4 + 20) % 20;
    loadSlide(currentIndex)
})