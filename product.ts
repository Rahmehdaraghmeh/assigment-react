
// product.ts

/*
 * This TypeScript file defines a Product interface and includes a function to calculate
 * the total price of all products in an array.
 * The code also provides an example usage of the function.
 *
 * To run this code, you need to:
 * 1. Install TypeScript: 
 *    npm install -g typescript
 * 2. Compile TypeScript to JavaScript:
 *    Run the command `tsc product.ts` in your terminal. This */
interface Product {
    name: string;
    price: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
};

const products: Product[] = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
];

const totalPrice = calculateTotalPrice(products);
console.log(`The total price of all products is: ${totalPrice}`);
// task2
// Function to check if a string is a valid email address
const isValidEmail = (email: string): boolean => {
    // Regular expression to match a basic email structure
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regular expression and return the result
    return emailPattern.test(email);
};

// Example 
const email1 = "user@example.com";
const email2 = "invalid-email.com";

console.log(`${email1} is valid: ${isValidEmail(email1)}`); // true
console.log(`${email2} is valid: ${isValidEmail(email2)}`); // false
