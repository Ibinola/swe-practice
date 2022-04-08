// Creating Arrays from Strings
var sentence = "My name is Michael Ibinola";

var words = sentence.split(" ");
console.log(words)

for (var i = 0; i < words.length; i++) {
    console.log(`Word ${i}: ${words[i]}`)
}

