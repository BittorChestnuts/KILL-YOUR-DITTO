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
    dittoIsEating();
}

// detecting Ditto movement
document.addEventListener("keydown", moveDitto);

// Check the COLLISIONS
function dittoIsEating() {
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
        ditto.style.width = ditto.clientWidth + 5 + "px";
        ditto.style.height = ditto.clientHeight + 5 + "px";
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
        ditto.style.width = ditto.clientWidth + 5 + "px";
        ditto.style.height = ditto.clientHeight + 5 + "px";
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
        ditto.style.width = ditto.clientWidth + 5 + "px";
        ditto.style.height = ditto.clientHeight + 5 + "px";
        console.log('Ditto is Eating FastFood3');
    }

}