const greet = (name) => `Hello, ${name}!`;
const farewell = (name) => `Bye, ${name}!`;
console.log(greet("World"));
console.log(farewell("World"));

if (require.main === module) {
    console.log(greet("World"));
    console.log(farewell("World"));
};

if (require.main === module) {
    console.log(greet("World"));
    console.log(farewell("World"));
}
const age = 30;
const name = "John Doe";
function greet() {
    return `Hello, ${name}! You are ${age} years old.`;
}

const email = "john.doe@example.com";
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}