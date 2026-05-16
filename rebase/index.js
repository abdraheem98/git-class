const cart = require('./cart');
const user = require('./user');

function checkout() {
    const total = cart.calculateTotal();
    const userInfo = user.getUserInfo();
    console.log(`Checking out for ${userInfo.name} with total amount: $${total}`);
}

module.exports = {
    checkout
}; 



