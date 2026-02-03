const rainContainer = document.getElementById('rainContent');
const dropSound = new Audio('/assets/sounds/waterDrop.mp3');

let xPosition = 0;

//jouer le son de la goutte d'eau mais pour l'instant non
function playDropSound() {
    const soundClone = dropSound.cloneNode();
    soundClone.play();
}

// creer une goute d'eau
function waterDrop(xPosition) {
    const drop = document.createElement('span');
    drop.classList.add('waterDrop');
    drop.style.setProperty('--xPosition', `${xPosition}px`);
    rainContainer.appendChild(drop);

    drop.addEventListener('animationend', () => {
        rainContainer.removeChild(drop);
        // if (Math.random() < 0.2) {
        //     playDropSound();
        // }
    });
}

let rainInterval = null

// fonction pour commencer la pluie en faisant des gouttes d'eau a intervalles regulieres
function startRain() {
    rainInterval = setInterval(() => {
        xPosition = Math.random() * window.innerWidth;
        waterDrop(xPosition);
    }, 50);
}

// fonction pour arreter la pluie
function stopRain() {
    clearInterval(rainInterval);
}

startRain();

const startRainButton = document.getElementById('startRain');
const stopRainButton = document.getElementById('stopRain');

startRainButton.addEventListener('click', function() {
    startRain();
})

stopRainButton.addEventListener('click', function() {
    stopRain();
})





