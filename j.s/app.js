'use strict'

function Product(name, src) {

    this.proName = name;
    this.sorcePro = src;
    this.shown = 0;
    this.vote = 0;
    Product.all.push(this)


}

Product.all = [];
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');
console.log(Product.all)

function randomPics() {
    return Math.floor(Math.random() * Product.all.length);


}
randomPics();

let leftPicElement = document.getElementById('left-side')
let midPicElement = document.getElementById('mid-side')
let rightPicElement = document.getElementById('right-side')

let leftSide;
let midSide;
let rightSide;



function render() {

    leftSide = randomPics();
    midSide = randomPics();
    rightSide = randomPics();

    while (leftSide === midSide || leftSide === rightSide || midSide === rightSide) {

        leftSide = randomPics()
        rightSide = randomPics();
    }
    leftPicElement.src = Product.all[leftSide].sorcePro;
    Product.all[leftSide].shown++

    midPicElement.src = Product.all[midSide].sorcePro;
    Product.all[midSide].shown++

    rightPicElement.src = Product.all[rightSide].sorcePro;
    Product.all[rightSide].shown++



}
render();

let tries = 0;
let maxTries = 26;


let parent = document.getElementById('displayPics')
parent.addEventListener('click', toDo)
// console.log(parent.addEventListener)

function toDo(event) {

    tries++
    

    if (tries < maxTries) {

        if (event.target.id === 'left-side') {
            Product.all[leftSide].vote++
            console.log(event.target.id)


            // console.log(Product.all[leftSide])
        }

        else if (event.target.id === 'mid-side') {

            Product.all[midSide].vote++

        }

        else if (event.target.id === 'right-side') {
            Product.all[rightSide].vote++

        }
        else {

            alert(`please choose from images`)
            
        }
        render();

    }
    else {
        parent.removeEventListener('click', toDo);
        let button = document.getElementById('showResult')
        button.addEventListener('click', showResults)
        console.log(button)
        function showResults() {

            let listed = document.getElementById('listed')
            for (let i = 0; i < Product.all.length; i++) {

                let list = document.createElement('li')
                listed.appendChild(list)
                list.textContent = `${Product.all[i].proName} had ${Product.all[i].vote} votes , and was seen ${Product.all[i].shown} times`
                console.log(Product.all[i].shown)
            }

        }




    }

}