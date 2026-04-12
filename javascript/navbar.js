//Find and toggle nav menu for hamburger menu on mobile version
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

//Function to search for product. Saves to localstorage and redirects to product page
const searchInput = document.getElementById("nav-search")
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = searchInput.value.toLowerCase();

    saveSearch(value);

    window.location.href = "../pages/products.html"

})

//Removes previous searched product
const productlink = document.querySelector('a[href="products.html"]')

productlink.addEventListener("click", () => {
    localStorage.removeItem("search");
})