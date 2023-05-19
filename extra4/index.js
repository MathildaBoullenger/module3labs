function randNPM() {
    const names = require("all-the-package-names");
    value = Math.random() * names.length;
    indexValue = Math.floor(value);
    return names[indexValue];
}

console.log(randNPM());