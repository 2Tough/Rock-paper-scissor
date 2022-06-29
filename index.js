// Variables

const hand = document.getElementById("hand")
let rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
let resultEL = document.getElementById("results-container")
let elementsEl = document.getElementById("elementsEl")
const random = document.getElementById("random")



rock.addEventListener('click', function() {
    resultEL.innerHTML = `<img class="showRock" src="/images/rock.png">`
    elementsEl.style.display = 'none'
})




let randomRoll = Math.floor(Math.random()*3)+1
console.log(randomRoll)

