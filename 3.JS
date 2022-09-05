let array = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray = array.map(function(x) {
    return x / 3; 
});

console.log(newArray);

let newNumbers = array.map(x => x / 3);

console.log(newNumbers);