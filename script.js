
const random_number1 = Math.floor(Math.random()*6) + 1;
const random_number2 = Math.floor(Math.random()*6) + 1;

let random_image = `images/dice${random_number1}.png`;
let random_image2 = `images/dice${random_number2}.png`;

let dice1 = document.querySelector('.img1').src = random_image;
let dice2 = document.querySelector('.img2').src = random_image2;

if(random_number1 === random_number2){

    document.querySelector('h1').textContent = 'DRAW!';
    document.querySelector('h1').style.fontSize = '5.6rem';
} else if(random_number1 > random_number2){
    document.querySelector('h1').textContent = '🚩 Player 1 wins!';
    document.querySelector('h1').style.fontSize = '5.6rem';
}else if(random_number2 > random_number1) {
    document.querySelector('h1').textContent = '🚩 Player 2 wins!';
    document.querySelector('h1').style.fontSize = '5.6rem';
}





// dice1>dice2 ? heading = '🚩 Player 1 Wins!' : heading= '🚩 Player 2 Wins!'

// if(random_number1 > random_number2){
//     document.querySelector('.')
// }