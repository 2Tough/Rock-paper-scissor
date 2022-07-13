// Scores

let scoreHuman = document.getElementById('scoreHuman')
let scorePc = document.getElementById("scorePc")

// Counter
let humanScore = 0
let computerScore = 0


// Buttons
const resetEl = document.getElementById('resetEl')


// Elements
const elementsContainer = document.getElementById('elementsEl')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
let firstEl = document.getElementById('firstEl')
let secondEl = document.getElementById('secondEl')

const start = document.getElementById('start')

const hero = document.getElementById('hero')



    renderGame()


function renderGame() {
resetEl.style.display = 'none'

rock.addEventListener('click', function() {
    playerSelection('rock')
    randomize('rock')
})

paper.addEventListener('click', function() {
    playerSelection('paper')
    randomize('paper')
})

scissor.addEventListener('click', function() {
    playerSelection('scissor')
    randomize('scissor')
})}

let secondElement = ''

function playerSelection(firstElement) {
    firstEl.innerHTML = `<div>${firstElement}</div>`
    document.getElementById("vs").innerHTML =`<div>vs</div>`
}

function randomize(element) {
    let randomRoll = Math.floor(Math.random()*3)+1
   
      if (randomRoll === 1) {
        secondElement = 'rock'
        
    } else if(randomRoll === 2) {
        secondElement = 'paper'
    } else if (randomRoll === 3){
        secondElement = 'scissor'
    }
    secondEl.innerHTML = `<div>${secondElement}</div>`
   
message(element,secondElement)
}

let messages = document.getElementById('messageEl')
let scoreEl = document.getElementById('scoreEl')
let count = 0
let countArray = []
let secondCount = 0
let secondCountArray = []




function message(element,secondElement) {
    // For rock
    if(element === 'rock' && secondElement === 'rock') {
        messages.innerHTML = `<div class="draw">Draw</div>`
        
    } else if(element === 'rock' && secondElement === 'paper') {
        messages.innerHTML = `<div class="friendship">You lose, paper beats rock!</div>`
        secondCount += 1
        scorePc.textContent = `Computer score: ${secondCount}`
        
    } else if(element === 'rock' && secondElement === 'scissor') {
        messages.innerHTML = `<div class="revenge">You win, rock beats scissor!</div>`
        count += 1
        scoreHuman.textContent = `Your score: ${count}`
    }
    
    // For paper
      else if (element === 'paper' && secondElement === 'rock') {
        messages.innerHTML = `<div class="friendship">You win, paper beats rock!</div>`
        count += 1
        scoreHuman.textContent = `Your score: ${count}`
        
      } else if (element === 'paper' && secondElement === 'paper') {
        messages.innerHTML = `<div class="draw">Draw</div>`
        
      } else if (element === 'paper' && secondElement === 'scissor') {
        messages.innerHTML = `<div class="murder">You lose, scissor beats paper!</div>`
        secondCount += 1
        scorePc.textContent = `Computer score: ${secondCount}` 
      }
      
      // For scissor
      
        else if (element === 'scissor' && secondElement === 'scissor') {
        messages.innerHTML = `<div class="draw">Draw</div>`
       
        } else if (element === 'scissor' && secondElement === 'paper') {
        messages.innerHTML = `<div class="murder">You win, scissor beats paper!</div>`
        count += 1
        scoreHuman.textContent = `Your score: ${count}`
        
        } else if (element === 'scissor' && secondElement === 'rock') {
        messages.innerHTML = `<div class="revenge">You lose, rock beats scissor!</div>`
        secondCount += 1
        scorePc.textContent = `Computer score: ${secondCount}`
        } 
      
      
    arrayFunction()
    }
let round = 0
let roundTwo = 0

function arrayFunction() {
    if (count === 5){
        
        messages.innerHTML = `You won this round!`
        win()
        resetEl.style.display = 'block'
        count = 0
        round +=1
        scoreHuman.textContent = `Your score: ${count} Round: ${round}`
        secondCount = 0
        scorePc.textContent = `Computer score: ${secondCount}`
    } else if (secondCount === 5){
        
        messages.innerHTML = `You lost this round!`
        lose()
        resetEl.style.display = 'block'
        count = 0
        secondCount = 0
        roundTwo +=1
        scorePc.textContent = `Computer score: ${secondCount} Round: ${roundTwo}`
        scoreHuman.textContent = `Your score: ${count} `
    }
    
    }

resetEl.addEventListener('click', function(){
window.location.reload()      
})

function win() {
let winBeat = new Audio('/sounds/Fatality.mp3');
winBeat.play()
}

function lose() {
 let loseBeat = new Audio('/sounds/waah.mp3');
loseBeat.play()   
}

