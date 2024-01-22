console.log("Shopping Cart Module");

const shippingCost = 10;
export const cart = [];

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