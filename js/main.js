let resetBtn = document.querySelector('.reset');
let result = document.querySelector('.result');
let evaluateBtn = document.querySelector('.evaluate')
let button = document.querySelectorAll('.btn');

document.addEventListener('DOMContentLoaded', function() {
    button.forEach(function(button) {
        button.addEventListener('click', function () {
            result.value += button.value;
        })
    });
    resetBtn.addEventListener('click', function () {
        result.value = '';
    });
    evaluateBtn.addEventListener('click', function () {
        result.value = eval(result.value);
    });
}) 