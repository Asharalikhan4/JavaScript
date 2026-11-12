console.log("Shopping Cart Module");

const shippingCost = 10;
export const cart = [];   // export declaration is used to export values from a javascript module. Exported values can then be imported into other porgrams with the import declarations or dynamic import.

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

const totalPrice = 27;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq};

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
}