var val1, val2;
function refresh(x) {

    var randomNumber1 = Math.floor((Math.random() * 5));
    if (x === 0 ){
        val1 = randomNumber1;
    } else {
        val2 = randomNumber1;
    }
    if (typeof val1 !== 'undefined' && typeof val2 !== 'undefined')
    result(val1, val2);

    var diceImg = ["images/\dice1.png",
        "images/\dice2.png",
        "images/\dice3.png",
        "images/\dice4.png",
        "images/\dice5.png",
        "images/\dice6.png"
        ]

    return (diceImg[randomNumber1]);

}



var player1 = document.getElementById("img1").src = refresh(0);
var player2 = document.getElementById("img2").src = refresh(1);

document.getElementById("img1").setAttribute("type", randomNumber1);
document.getElementById("img2").setAttribute("type", randomNumber1);

function result(x,y) {

    if ( x >y ) {
        document.querySelector("h1").innerHTML = "Player 1 wins 🚩"
    } else if ( x < y ) {
        document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
    } else {
        document.querySelector("h1").innerHTML = "It's a draw 🤦‍♂️"
    }
    
}
