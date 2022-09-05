let fruits = ["orange", "banana", "pear"];
console.log(fruits.length);

fruits.push("apple", "pineapple");
console.log(fruits);

fruits.unshift("wattermelon");
console.log(fruits.length);

fruits.splice(3, 0, "mango");

fruits.shift();

fruits.pop();

console.log(fruits.length);
console.log(fruits);