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