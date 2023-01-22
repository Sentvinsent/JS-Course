const products = [];
const product = products[0];

//Truthy - values that resolve to true in a boolean context
//Falthy - values that resolve to false in a boolean context
//Falthy  - false, 0, empty string, null, undefined, NaN

if (product !== undefined) {
    console.log('product found')
} else {
    console.log('Product not found')
}