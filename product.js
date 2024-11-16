// product.ts
var calculateTotalPrice = function (products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
};
var products = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
];
var totalPrice = calculateTotalPrice(products);
console.log("The total price of all products is: ".concat(totalPrice));
// task2
// Function to check if a string is a valid email address
var isValidEmail = function (email) {
    // Regular expression to match a basic email structure
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Test the email against the regular expression and return the result
    return emailPattern.test(email);
};
// Example 
var email1 = "user@example.com";
var email2 = "invalid-email.com";
console.log("".concat(email1, " is valid: ").concat(isValidEmail(email1))); // true
console.log("".concat(email2, " is valid: ").concat(isValidEmail(email2))); // false
