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
    for (let i = 0; i < fastFoodArray.length; i++) {
        const fastFood = fastFoodArray[i];
        const positionFastFood = fastFood.element.getBoundingClientRect();

        if (
            dittoPosition.x < positionFastFood.x + positionFastFood.width &&
            dittoPosition.x + dittoPosition.width > positionFastFood.x &&
            dittoPosition.y < positionFastFood.y + positionFastFood.height &&
            dittoPosition.y + dittoPosition.height > positionFastFood.y
        ) {
            speedDitto--;
            dittoHealth--;
            fastFoodPassed = fastFoodArray.length
            fastFoodArray.splice(i, 1); // Remove the fast food from the array
            fastFood.element.remove() // Remove from the screen the fastFood
            console.log(fastFoodArray);
            console.log(dittoHealth);
            console.log(fastFoodArray.length);
            ditto.style.width = ditto.clientWidth + 5 + "px"; // increase Ditto with
            ditto.style.height = ditto.clientHeight + 5 + "px"; // increase Ditto Height
        }

}
}