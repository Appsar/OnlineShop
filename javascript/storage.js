function getCart() {
    const data = localStorage.getItem("cart");

    if (!data || data === "undefined") return [];

    return JSON.parse(data);
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

let cart = getCart();

function saveSearch(value) {
    localStorage.setItem("search", value)
}
