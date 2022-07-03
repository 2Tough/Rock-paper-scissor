// Variables
const hand = document.getElementById("hand")

let resultsContainer = document.getElementById("results-container")
let elementsEl = document.getElementById("elementsEl")
const random = document.getElementById("random")
let rivalHand = document.getElementById('rival')
let winnerEl = document.getElementById("winnerEl")
let rocky = document.getElementById("rock")
let papy = document.getElementById("paper")
let scissy = document.getElementById("scissor")


const rock = {
    element: "rock",
    image: "images/rock.png"
}

const paper = {
        element: "paper",
    image: "images/paper.jpg"
}

const scissor = {
        element: "scissor",
    image: "images/scissor.webp"
}

function renderElement(data) {

document.getElementById("resetEl").style.display = 'none'   
document.getElementById(data.element).innerHTML = `<div>
                            <div class="${data.element}-img hand" class="resultElements">
                             </div>
                            </div>`
                            
document.getElementById(data.element).addEventListener('click', function() {
    if (data.element === "rock") {
        document.getElementById("paper").style.display = 'none'
        document.getElementById("scissor").style.display = 'none'
        rollOfHand(data.element)

       document.getElementById('resetEl').textContent = 'Play again'       

        renderElement(rock)
        document.getElementById("resetEl").style.display = 'block'
        
        
              document.getElementById('resetEl').addEventListener('click', function renderReset() {
                  
        document.getElementById("paper").style.display = 'block'
        document.getElementById("scissor").style.display = 'block'
        document.getElementById("resetEl").style.display = 'none'
        document.getElementById("rival").style.display = 'none'
        winnerEl.style.display = 'none'
        })
        
    } else if (data.element === "paper") {
        document.getElementById("rock").style.display = 'none'
        document.getElementById("scissor").style.display = 'none'
        rollOfHand(data.element)

        document.getElementById('resetEl').textContent = 'Play again'       
        
        renderElement(paper)
        document.getElementById("resetEl").style.display = 'block'

                document.getElementById('resetEl').addEventListener('click', function renderReset() {
        document.getElementById("rock").style.display = 'block'
        document.getElementById("scissor").style.display = 'block'
        document.getElementById("resetEl").style.display = 'none'
        document.getElementById("rival").style.display = 'none'
        winnerEl.style.display = 'none'
        })
        
        
    } else if (data.element === "scissor") {
        document.getElementById("rock").style.display = 'none'
        document.getElementById("paper").style.display = 'none'
        rollOfHand(data.element)
        
        document.getElementById('resetEl').textContent = 'Play again'       

        renderElement(scissor)
        document.getElementById("resetEl").style.display = 'block'

                document.getElementById('resetEl').addEventListener('click', function renderReset() {
        document.getElementById("rock").style.display = 'block'
        document.getElementById("paper").style.display = 'block'
        document.getElementById("resetEl").style.display = 'none'
        document.getElementById("rival").style.display = 'none'
        winnerEl.style.display = 'none'
        })
        
    }
})

}

renderElement(rock)
renderElement(paper)
renderElement(scissor)

function rollOfHand(element) {
    let randomRoll = Math.floor(Math.random()*3)+1
    
    if(randomRoll === 1 ) {
          winnerEl.style.display = 'block'
          document.getElementById("rival").style.display = 'block'
          rivalHand.innerHTML = `<div class="rivalElements"><div id="vsEl">VS</div>
          <div class="rock-img hand" class="resultElements">
                             </div></div>`
                             
          if (element === 'rock') {
             winnerEl.innerHTML = 'Draw' 
          } else if (element === 'paper') {
              winnerEl.innerHTML = 'You win' 
          } else if (element === 'scissor') {
             winnerEl.innerHTML = 'You lose' 
          }
                             
                             
    } else if (randomRoll === 2 ) {
        
       
        winnerEl.style.display = 'block'
        document.getElementById("rival").style.display = 'block'
         rivalHand.innerHTML = `<div class="rivalElements"><div id="vsEl">VS</div>
          <div class="paper-img hand" class="resultElements">
                             </div>`
                             
           if (element === 'paper') {
             winnerEl.innerHTML = 'Draw' 
          } else if (element === 'rock') {
              winnerEl.innerHTML = 'You lose' 
          }  else if (element === 'scissor') {
             winnerEl.innerHTML = 'You win' 
          }
                             
    } else {
      
         winnerEl.style.display = 'block'
        document.getElementById("rival").style.display = 'block'
         rivalHand.innerHTML = `<div class="rivalElements"><div id="vsEl">VS</div>
          <div class="scissor-img hand" class="resultElements">
                             </div>`
        
             if (element === 'scissor') {
             winnerEl.innerHTML = 'Draw' 
          } else if (element === 'rock') {
              winnerEl.innerHTML = 'You win' 
          } else if (element === 'paper') {
             winnerEl.innerHTML = 'You lose' 
          }
        
    }
}


random.addEventListener('click', function() {
    let randomRoll = Math.floor(Math.random()*3)
    let randomRoll2 = Math.floor(Math.random()*3)
      
    
    let randomArray = [
            
            [
            "rock",
            "images/rock.png"],
            [
            "paper",
            "images/paper.jpg"],
            [
            "scissor",
            "images/scissor.webp"
            ]
             ]
    
document.getElementById("rock").style.display = 'none'  
document.getElementById("paper").style.display = 'none' 
document.getElementById("scissor").style.display = 'none' 


 
document.getElementById(`${randomArray[randomRoll][0]}`).style.display = 'block'   
        rivalHand.innerHTML = `<div class="rivalElements"><div id="vsEl">VS</div>
                                 <div class="${randomArray[randomRoll2][0]}-img hand" class="resultElements">
                                 </div></div>`
document.getElementById("resetEl").style.display = 'block'   



document.getElementById('resetEl').addEventListener('click', function renderReset() {
        

console.log('test')

    
  
        })
document.getElementById('resetEl').textContent = 'Play again'  

if (randomRoll === randomRoll2) {
    winnerEl.innerHTML = 'Draw' 
    
} else if (randomRoll === 0 && randomRoll2 === 2) {
    winnerEl.innerHTML = 'You win' 
} else if (randomRoll === 0 && randomRoll2 === 1) {
    winnerEl.innerHTML = 'You lose'


} else if (randomRoll === 1 && randomRoll2 === 0) {
    winnerEl.innerHTML = 'You win' 
} else if (randomRoll === 1 && randomRoll2 === 2) {
    winnerEl.innerHTML = 'You lose' 


} else if (randomRoll === 2 && randomRoll2 === 1) {
    winnerEl.innerHTML = 'You win'
} else if (randomRoll === 2 && randomRoll2 === 0) {
    winnerEl.innerHTML = 'You lose'
} else { 
     winnerEl.innerHTML = 'You win'
 }

 
})

