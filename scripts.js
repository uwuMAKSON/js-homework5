let example1 = document.querySelector("#example1");
example1.style.backgroundColor = 'aqua';
example1.style.color = 'purple';
example1.style.fontSize = '20px';
example1.style.border = '2px solid red'
example1.style.padding = '10px 7px';
example1.style.marginBottom = '10px';
example1.style.borderRadius = '50px';

let example2 = document.querySelector("#example2");
example2.style.backgroundColor = 'aqua';
example2.style.color = 'purple';
example2.style.fontSize = '20px';
example2.style.border = '2px solid green'
example2.style.padding = '10px 7px';
example2.style.marginBottom = '10px';
example2.style.borderRadius = '50px';

let example3 = document.querySelector("#example3");
example3.style.backgroundColor = 'aqua';
example3.style.color = 'purple';
example3.style.fontSize = '20px';
example3.style.border = '2px solid blue'
example3.style.padding = '10px 7px';
example3.style.marginBottom = '10px';
example3.style.borderRadius = '50px';

let example4 = document.querySelector("#example4");
example4.style.backgroundColor = 'aqua';
example4.style.fontSize = '20px';
example4.style.border = '2px solid black'
example4.style.height = '50px';
example4.style.width = '50px';
example4.style.marginBottom = '10px';
example4.style.borderRadius = '50px';

let example5 = document.querySelector("#example5");
example5.style.backgroundColor = 'aqua';
example5.style.fontSize = '20px';
example5.style.border = '2px solid black'
example5.style.height = '50px';
example5.style.width = '50px';
example5.style.marginBottom = '10px';
example5.style.borderRadius = '50px';

example1.addEventListener('click', function(event){
    let r = Math.random() * 255;
    let g = Math.random() * 150;
    let b = Math.random() * 100;
    h1.style.color ="rgb(" + r +"," + g +"," + b +")";
    });

let h1 = document.querySelector('h1');
let fontSize = 30;
fontSize++;


example2.addEventListener('click', function () {
    h1.style.fontSize = fontSize + "px"
    fontSize++
    })

example3.addEventListener('click', function () {
    h1.style.fontSize = fontSize + "px"
    fontSize--

})
example4.addEventListener('click', function () {
    let number = h1.innerText;
    number++;
    h1.innerText = number;
})

example5.addEventListener('click', function () {
    let number = h1.innerText;
    number--;
    h1.innerText = number;
})
