const snowContainer = document.getElementById('snowContent');

// le son de la neige, ne marche pas pour l'instant
// const snowFallingSound = new Audio('/assets/sounds/snowFalling.mp3');
// snowFallingSound.play();

let xPosition = 0;

// creer un flocons de neige
function snowFlake(xPosition) {
    const flake = document.createElement('span');
    flake.classList.add('snowFlake');
    flake.style.setProperty('--xPosition', `${xPosition}px`);
    snowContainer.appendChild(flake);

    flake.addEventListener('animationend', () => {
        snowContainer.removeChild(flake);
    });
}

let snowInterval = null

// fonction pour commencer la neige en faisant des flocons a intervalles regulieres
function startSnow() {
    snowInterval = setInterval(() => {
        xPosition = Math.random() * window.innerWidth;
        snowFlake(xPosition);
    }, 1);
}

// fonction pour arreter la neige
function stopSnow() {
    clearInterval(snowInterval);
}

startSnow();

const startSnowButton = document.getElementById('startSnow');
const stopSnowButton = document.getElementById('stopSnow');

startSnowButton.addEventListener('click', function() {
    startSnow();
})

stopSnowButton.addEventListener('click', function() {
    stopSnow();
})