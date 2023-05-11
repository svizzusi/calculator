let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let evaluate = document.querySelector('.evaluate');
let button = document.querySelectorAll('.btn');

document.addEventListener('DOMContentLoaded', function() {
    button.forEach(function(button) {
        button.addEventListener('click', function() {
            result.value += button.value;
        });
    });
    reset.addEventListener('click', function () {
        result.value = '';
    });
    evaluate.addEventListener('click', function () {
        result.value = eval(result.value);
    });
});