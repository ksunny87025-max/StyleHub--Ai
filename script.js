// StyleHub Version 3

let wishlist = [];

// =========================
// Add to Cart
// =========================
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to Cart 🛒");
}

// =========================
// Wishlist
// =========================
function addToWishlist(name) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(name);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(name + " added to Wishlist ❤️");
}

// =========================
// Search
// =========================
const searchBox = document.querySelector(".search input");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = searchBox.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(function (product) {

            let text = product.innerText.toLowerCase();

            if (text.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

}

// =========================
// Navigation
// =========================
function openCart() {
    window.location.href = "cart.html";
}

function openWishlist() {
    window.location.href = "wishlist.html";
}

function openProfile() {
    window.location.href = "profile.html";
}
function checkout() {
    alert("Checkout feature coming soon! 💳");
}
function removeFromCart(index){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}
function toggleAI(){

let chat=document.getElementById("ai-chat");

if(chat.style.display==="block"){
chat.style.display="none";
}else{
chat.style.display="block";
}

}

function sendMessage(){

let input=document.getElementById("user-input");

let message=input.value.toLowerCase();

let reply="Sorry, I don't know yet.";

if(message.includes("black jeans")){
reply="Black jeans look great with a White T-shirt, Olive Shirt or Beige Hoodie.";
}

if(message.includes("white shirt")){
reply="A white shirt matches well with black pants, navy jeans or beige chinos.";
}

if(message.includes("dark skin")){
reply="For darker skin tones, try white, olive green, navy blue, maroon and mustard.";
}

document.getElementById("ai-messages").innerHTML +=
"<p><b>You:</b> "+input.value+"</p>";

document.getElementById("ai-messages").innerHTML +=
"<p><b>AI:</b> "+reply+"</p>";

input.value="";
}