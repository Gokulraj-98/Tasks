const myJSON = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

console.log("Using for...in loop:");
for (let key in myJSON) {
    console.log(key + ": " + myJSON[key]);
}

console.log("\nUsing for...of loop (not directly applicable to objects):");
for (let value of Object.values(myJSON)) {
    console.log(value);
}

console.log("\nUsing forEach() method (not directly applicable to objects):");
Object.values(myJSON).forEach(value => {
    console.log(value);
});

console.log("\nUsing for loop:");
const keys = Object.keys(myJSON);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ": " + myJSON[key]);
}
