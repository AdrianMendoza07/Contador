let contador = 0

let num = document.querySelector('.initialNum')
let add = document.querySelector('.addButton')
let decrease = document.querySelector('.decreaseButton')
let reset = document.querySelector('.resetButton')

add.addEventListener('click', () => {
    contador++;
    num.textContent = contador;

})

decrease.addEventListener('click', () => {
    contador--;
    num.textContent = contador;

})

reset.addEventListener('click', () => {
    contador = 0;
    num.textContent = contador;

})