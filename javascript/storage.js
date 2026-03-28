function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}