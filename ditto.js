console.log("ditto.js is working!");

class ditto {
    constructor(positionYDitto, positionXDitto, speedDitto) {
            this.positionXDitto = 0,
            this.positionYDitto = 0,
            this.speedDitto = 0,
            this.element = document.querySelector(".ditto"),
            this.gameboard = document.querySelector(".gameBoard")
    }
    moveUp() {
        return this.positionYDitto
    }
    moveDown() {
        return this.positionYDitto
    }
    moveLeft() {
        return this.positionXDitto
    }
    moveRight() {
        return this.positionXDitto
    }
}