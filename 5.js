let languages = ["html", "css", "javascript", "python", "php"];

let newArray = languages.filter(function(item) {
    return item.length > 3
})

console.log(newArray);