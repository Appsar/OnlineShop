const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = searchInput.value.toLowerCase();

    saveSearch(value);

    window.location.href = "../pages/products.html"

})