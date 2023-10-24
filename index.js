// GameBoard dimensions
const gameBoardWidth = document.querySelector(".game-board").clientWidth;
const gameBoardHeight = document.querySelector(".game-board").clientHeight;
const gameBoardElement = document.querySelector(".game-board");

// getting info Ditto
const ditto = document.querySelector(".ditto");
const dittoWidth = ditto.clientWidth;
const dittoHeight = ditto.clientHeight;

// INIT THE GAME 
class game {
    constructor(dittoHealth, fastFoodPassed, gameIsOver) {
        this.dittoHealth = 10,
        this.fastFoodPassed = 0,
        this.gameOver = false           
}
newGame() {
    return this.dittoHealth, this.fastFoodPassed
}
gameIsOver(){
    return this.gameIsOver = true
}
}

// init Ditto in the GAME
let positionYDitto = 300;
let positionXDitto = 50;
let speedDitto = 40;
let dittoHealth = 10;
// how many fastFood passed outside the gameBoard 
let fastFoodPassed = 0;


// init the enemies (Fast Food)

const fastFoodItem1 = new FastFoodItem1(".fast-food-1", 3, "down", "right");
const fastFoodItem2 = new FastFoodItem2(".fast-food-2", 5, "down", "right");
const fastFoodItem3 = new FastFoodItem3(".fast-food-3", 7, "down", "right");



// controlling movement Ditto inside the GameBoard
function moveDitto(event) {
    if (event.key === "ArrowUp") {
        if (positionYDitto - speedDitto >= 0) {
            positionYDitto -= speedDitto;
        }
    } else if (event.key === "ArrowDown") {
        if (positionYDitto + dittoHeight + speedDitto <= gameBoardHeight) {
            positionYDitto += speedDitto;
        }
    } else if (event.key === "ArrowLeft") {
        if (positionXDitto - speedDitto >= 0) {
            positionXDitto -= speedDitto;
        }
    } else if (event.key === "ArrowRight") {
        if (positionXDitto + dittoWidth + speedDitto <= gameBoardWidth) {
            positionXDitto += speedDitto;
        }
    }
    ditto.style.top = `${positionYDitto}px`;
    ditto.style.left = `${positionXDitto}px`;

    //check if ditto is eating
    dittoIsEating();
}

// detecting Ditto movement
document.addEventListener("keydown", moveDitto);

function dittoIsEating() {
    // checking if DITTO is EATING FAST FOOD!
    // if Ditto is eating : 
    // 1- remove the FastFood Element from the GameBoard
    // 2 - substract -1 dittoHealth
    // 3 - increase the size of Ditto 10 px
    // 4 - decrease the sppedDito - 5

    // getting position of Ditto & fastFood
    
    const dittoPosition = ditto.getBoundingClientRect();
    const positionFastFood1 = fastFood1.getBoundingClientRect();
    const positionFastFood2 = fastFood2.getBoundingClientRect();
    const positionFastFood3 = fastFood3.getBoundingClientRect();

    // Ditto is eating fastFood1
    if (
        dittoPosition.x < positionFastFood1.x + positionFastFood1.width &&
        dittoPosition.x + dittoPosition.width > positionFastFood1.x &&
        dittoPosition.y < positionFastFood1.y + positionFastFood1.height &&
        dittoPosition.y + dittoPosition.height > positionFastFood1.y
    ) {
        speedDitto--
        dittoHealth--
        speedFastFood1++
        //ditto.style.width = (parseInt(ditto.style.width) + 10) + "px";
        //ditto.style.height = (parseInt(ditto.style.height) + 10) + "px";
        console.log('Ditto is Eating FastFood1');
        console.log(speedDitto);
        console.log(dittoHealth);
        console.log(speedFastFood1);
    }

    // Ditto is eating fastFood2
    else if (
        dittoPosition.x < positionFastFood2.x + positionFastFood2.width &&
        dittoPosition.x + dittoPosition.width > positionFastFood2.x &&
        dittoPosition.y < positionFastFood2.y + positionFastFood2.height &&
        dittoPosition.y + dittoPosition.height > positionFastFood2.y
    ) {
        speedDitto--
        dittoHealth--
        speedFastFood2++
        console.log('Ditto is Eating FastFood2');
    }

    // Ditto is eating fastFood3
    else if (
        dittoPosition.x < positionFastFood3.x + positionFastFood3.width &&
        dittoPosition.x + dittoPosition.width > positionFastFood3.x &&
        dittoPosition.y < positionFastFood3.y + positionFastFood3.height &&
        dittoPosition.y + dittoPosition.height > positionFastFood3.y
    ) {
        speedDitto--
        dittoHealth--
        speedFastFood3++
        console.log('Ditto is Eating FastFood3');
    }

}

function movingFastFood(){
    const dittoPosition = ditto.getBoundingClientRect();
    const positionFastFood1 = fastFood1.getBoundingClientRect();
    const positionFastFood2 = fastFood2.getBoundingClientRect();
    const positionFastFood3 = fastFood3.getBoundingClientRect();

// moving FastFood1 







}




function gameOver() {
    console.log("GAME OVER");
}
