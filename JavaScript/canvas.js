const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;
const canvasWidth = Math.floor(canvas.clientWidth * dpr);
const canvasHeight = Math.floor(canvas.clientHeight * dpr);
canvas.width = canvasWidth;
canvas.height = canvasHeight;

squareSize = canvasHeight/2

// // carré
// context.fillStyle = "blue"
// context.fillRect(
//     canvasWidth/2 - squareSize/2, 
//     canvasHeight/2 - squareSize/2, 
//     squareSize, 
//     squareSize
// )

// // rond
// context.fillStyle = "lime"
// context.beginPath()
// context.arc(
//     canvasWidth/2,
//     canvasHeight/2, 
//     squareSize/2,
//     0, 
//     Math.PI * 2)
// context.fill();


// // carré tracé
// context.strokeStyle = "red"
// context.beginPath()
// context.moveTo(
//     canvasWidth/2 - squareSize/2, 
//     canvasHeight/2 - squareSize/2
// )

// context.lineTo(
//     canvasWidth/2 - squareSize/2 + squareSize,
//     canvasWidth/2 - squareSize/2)
// context.lineTo(
//     canvasWidth/2 - squareSize/2 + squareSize, 
//     canvasWidth/2 - squareSize/2 + squareSize)
// context.lineTo(
//     canvasWidth/2 - squareSize/2, 
//     canvasWidth/2 - squareSize/2 + squareSize)
// context.lineTo(
//     canvasWidth/2 - squareSize/2, 
//     canvasWidth/2 - squareSize/2)

// context.stroke();

// // échequier
// Subdivision = 13;
// squareSize = canvas.width/Subdivision
// let positionX = 0;
// let positionY = 0;
// let alternator = 1

// context.fillStyle = "black"

// for (let stepY = 0; stepY < Subdivision; stepY++) {
//     for (let stepX = 0; stepX < Subdivision/2; stepX++) {
//         console.log(positionY, positionX, alternator);

//         context.fillRect(
//         positionX,
//         positionY,
//         squareSize,
//         squareSize
//         )
//         positionX = positionX + squareSize*2;
//     }

//     if (alternator == 0) {
//         positionX = 0;
//         alternator = 1;
//     } else {
//         positionX = squareSize;
//         alternator = 0;
//     }

//     positionY = positionY + squareSize;
// }

// // carre anime
// let x = 0

// function drawSquare(x, y, squareSize) {
//     context.fillStyle = "blue"
//     context.fillRect(
//         x, 
//         y, 
//         squareSize, 
//         squareSize
//     )

// }

// function loop() {
//     context.fillStyle = "white";
//     context.fillRect(0,0,canvasWidth,canvasHeight);
//     drawSquare(x, 100, 100);
    
//     if (x + squareSize/2 != canvasWidth) {
//         x++;
//     } else {
//         x = 0;
//     }
//     requestAnimationFrame(loop)
// }

// loop()