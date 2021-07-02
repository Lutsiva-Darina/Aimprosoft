let button = document.querySelector('.form__button');
button.addEventListener('onclick', function() {
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
})