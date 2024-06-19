// Define an array to store items in the cart
let shoppingCart = [];

// Function to add items to the cart
function addToCart(itemName, price) {
    let item = {
        name: itemName,
        price: price
    };
    shoppingCart.push(item);
    console.log(`${itemName} added to cart.`);
}

// Function to calculate total price of items in the cart
function calculateTotal() {
    let total = 0;
    for (let item of shoppingCart) {
        total += item.price;
    }
    return total;
}

// Example usage:
addToCart("T-shirt", 25.99);
addToCart("Jeans", 49.99);
addToCart("Shoes", 79.99);

console.log("Items in the cart:");
console.log(shoppingCart);

console.log("Total price:");
console.log(calculateTotal());
