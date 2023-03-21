
let blackjack = false
let alive = true
let player = {
     name: "Baji",
     money: 100 
}

document.getElementById("name-el").textContent += " " + player.name
document.getElementById("draw-btn").style.visibility = "hidden";
document.getElementById("money-el").textContent += " " + player.money + "$";

function play() {
    reset()
    for (let i = 0; i < 2; i++) {
        card1 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        cards[i] = card1
    }
        getCardText();
        getSum();
        checkSum();
    }

    function checkMoney(){
        if (player.money < 50) {
            let messageEl = document.getElementById("message-el")
            messageEl.textContent = "Sorry You don't Have enough money, minimum 50$ :<"
        } 
        else {
            play()
        }
    }

function draw() {

        let i = cards.length;
        console.log(i)
        card1 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        cards[i] = card1
    
    getCardText();
    getSum();
    checkSum()
}

function getCardText() {
    let cardEl = document.getElementById("card-el")
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        
        cardEl.textContent +=" " + cards[i] 
    }
}

function getSum() {
    let sumEl = document.getElementById("sum-el")
    sum = 0
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    sumEl.textContent = "Sum:" + sum
}

function checkSum() {
    if (sum === 21) {
        message = "Congratulations you have blackjack!!!"
        blackjack = true
    }
    else if (sum < 21) {
        message = "would you like to draw another card?"
    }
    else if (sum > 21) {
        message = "you have lost we are sorry :<"
        alive = false
    }

    if (alive == true && blackjack == false) {
        document.getElementById("draw-btn").style.visibility = "visible";
        document.getElementById("start-btn").style.visibility = "hidden";
    }
    if (blackjack === true) {
        player.money += 200
        let moneyEl = document.getElementById("money-el")
        moneyEl.textContent = "Money:" + " " + player.money +"$"
        document.getElementById("draw-btn").style.visibility = "hidden";
        let btnTextEl = document.getElementById("start-btn")
        let btnText = "new game"
        btnTextEl.innerText = btnText
        document.getElementById("start-btn").style.visibility = "visible";
    }
    else if (alive == false) {
        document.getElementById("draw-btn").style.visibility = "hidden";
        let btnTextEl = document.getElementById("start-btn")
        let btnText = "new game"
        btnTextEl.innerText = btnText
        document.getElementById("start-btn").style.visibility = "visible";

    }
    let messageEl = document.getElementById("message-el")
    messageEl.textContent = message
}

function reset() {
    sum = 0;
     cards = []
     let card1 = 0
let message = ""
     player.money -= 50
     let moneyEl = document.getElementById("money-el")
     moneyEl.textContent = "Money:" + " " + player.money + "$"
    let cardMessage = document.getElementById("card-el")
    cardMessage.textContent = "Cards:"
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = "Sum: "
    blackjack = false
    alive = true
    message = ""
}