# SAVE YOUR DITTO

## Game Description

In the game of "Save Your Ditto" your mission is to assist Ditto, a friendly Pokemon who's been indulging in fruits excessively at his home. 
As a result, his height and size have skyrocketed, posing a potential threat to his health. 
The doctor has sounded the alarm, warning that there might soon be no room left for Ditto in his own home, and his obesity could lead to dire consequences.

Your task is to help Ditto by preventing the relentless onslaught of fruits from all directions within his house. 
The goal is to extend his lifespan by avoiding these fruits. 

Can you guide Ditto to a healthier future by fending off this fruity invasion?

### My project Idea





#### Backlog








# tips

How to move the div:
the position of this element, has to be reset to ABSOLUTE.
And the container has to be RELATIVE.
If the container is not relative, the position is going to be related to the BODY or main element.


Create a Game Loop
Game loop needs to be there only if we want to make things move withoout the user interactin (in most of classes)

let = gameLoopID;
let frameCount = 0

function gameLoop (){
    //update the game state
    we add here all the functions like checkforCollisions, check if gameIsOver
    // render game 
    if (!gameIsOver)
    gameLoopID = requestAnimationFrame (gameLoop)

}

if you want certain actions to happen after a few seconds / frames, it's good to add a framecount.


