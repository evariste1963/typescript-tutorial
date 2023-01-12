var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
inputs.forEach(function (input) { return console.log(input); });
