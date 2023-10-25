console.log("ditto.js is working!");

// controlling movement Ditto inside the GameBoard
function moveDitto(event) {
    if (event.key === "ArrowUp") {
        if (positionYDitto >= 0) {
            positionYDitto -= speedDitto;
        }
    } else if (event.key === "ArrowDown") {
        if (positionYDitto + dittoHeight <= gameBoardHeight) {
            positionYDitto += speedDitto;
        }
    } else if (event.key === "ArrowLeft") {
        if (positionXDitto >= 0) {
            positionXDitto -= speedDitto;
        }
    } else if (event.key === "ArrowRight") {
        if (positionXDitto + dittoWidth <= gameBoardWidth) {
            positionXDitto += speedDitto;
        }
    }
    ditto.style.top = `${positionYDitto}px`;
    ditto.style.left = `${positionXDitto}px`;
    //check if ditto is eating
    //dittoIsEating();
}

// detecting Ditto movement
document.addEventListener("keydown", moveDitto);




// Check the COLLISIONS
function dittoIsEating() {
    const dittoPosition = ditto.getBoundingClientRect();
    document.querySelector(".dittoLife").textContent = `Ditto Health: ${dittoHealth}`
    document.querySelector(".score").textContent = `Your SCORE: ${fastFoodPassed}`
    document.querySelector(".dittoName").textContent = `Your name : ${chooseYourName}`
    for (let i = 0; i < fastFoodArray.length; i++) {
        const fastFood = fastFoodArray[i];
        const positionFastFood = fastFood.element.getBoundingClientRect();

        if ( // ditto is EATING!
            dittoPosition.x < positionFastFood.x + positionFastFood.width &&
            dittoPosition.x + dittoPosition.width > positionFastFood.x &&
            dittoPosition.y < positionFastFood.y + positionFastFood.height &&
            dittoPosition.y + dittoPosition.height > positionFastFood.y
        ) {
            speedDitto--;
            dittoHealth--;
            fastFoodArray.splice(i, 1); // Remove the fast food from the array
            fastFood.element.remove() // Remove from the screen the fastFood
            ditto.style.width = ditto.clientWidth + 5 + "px"; // increase Ditto width
            ditto.style.height = ditto.clientHeight + 5 + "px"; // increase Ditto Height
        }
}
}

