let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment(){
    count = count + 1;
    countEl.innerText = count;
}

function decrement(){
    count = count - 1;
    countEl.innerText = count;
}