
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newArray = array.filter (function(item){
    if(typeof item == 'number'){
        return item;
    }
})
console.log(newArray);

let newNumbers = array.filter( x => typeof x === 'number');

console.log(newNumbers);