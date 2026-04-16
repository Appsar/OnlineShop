//Find and toggle nav menu for hamburger menu on mobile version
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

//Listens to click on hamburger menu in mobile version to toggle it
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

//Function to search for product. Saves to localstorage and redirects to product page
const searchInput = document.getElementById("nav-search")
const searchBtn = document.getElementById("search-btn");

//Listens if searchbar button has been pressed and if so saves the value inside the searchbar to localstorage
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = searchInput.value.toLowerCase();

    saveSearch(value);

    //Redirects to product page
    window.location.href = "../pages/products.html"

})

//Removes previous searched product by removing it from localstorage "search"
const productlink = document.querySelector('a[href="products.html"]')

productlink.addEventListener("click", () => {
    localStorage.removeItem("search");
})