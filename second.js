
let cant = document.querySelector('.cont'); // Correctly defined as 'cant'
let love = document.querySelector('i');

cant.addEventListener('dblclick', function () { // Use 'cant' here
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(function(){
        love.style.transform = 'translate(-50%, -50%) scale(0)';
        },3000);
});


