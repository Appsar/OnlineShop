// Retrieves the cart from localStorage
function getCart() {
    // Get stored cart data (as a string)
    const data = localStorage.getItem("cart");

    // If nothing is stored or it's invalid, return an empty array
    if (!data || data === "undefined") return [];

    // Convert JSON string back into a JavaScript array
    return JSON.parse(data);
}

// Saves the cart array into localStorage
function saveCart(cart) {
    // Convert array into string before storing
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Initialize cart variable with stored data
let cart = getCart();

// Saves the search input value into localStorage
function saveSearch(value) {
    // Store search value in loaclstorage
    localStorage.setItem("search", value);
}