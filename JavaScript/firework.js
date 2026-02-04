const fireworkContainer = document.getElementById('fireworkContainer');

// parametrer le nombre de particules et leur eparpillement
const particleNumber = 500;
const dispersion = 200;

function firework() {
    fireworkPosition = window.innerWidth*0.1 + (Math.random() * window.innerWidth * 0.9);
    fireworkAltitude = -(window.innerHeight*0.2 + (Math.random() * window.innerHeight * 0.5));

    const firework = document.createElement('span');
    firework.classList.add('firework');

    firework.style.setProperty('--fireworkPosition', `${fireworkPosition}px`);
    firework.style.setProperty('--fireworkAltitude', `${fireworkAltitude}px`);

    fireworkContainer.appendChild(firework);

    firework.addEventListener('animationend', () => {  
        explosion(firework); 
        fireworkContainer.removeChild(firework);
    });
}

function getPosition(firework) {
    let positions = firework.getBoundingClientRect();
    let xPosition = positions.x;
    let yPosition = positions.y;
    positions = [xPosition, yPosition]
    return positions;
}

function explosion(firework) {
    const positions = getPosition(firework);
    for (let i=0; i<particleNumber; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * dispersion;

        const particle = document.createElement('span');
        particle.classList.add('particle');

        particle.style.setProperty('--xPosition', `${positions[0]}px`);
        particle.style.setProperty('--yPosition', `${positions[1]}px`);
        particle.style.setProperty('--xDirection', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--yDirection', `${Math.sin(angle) * distance}px`);

        fireworkContainer.appendChild(particle);

        particle.addEventListener('animationend', () => {  
            fireworkContainer.removeChild(particle);
        });
    }
}

let fireworkInterval = null

// fonction pour commencer le feu d'artifice
function startFirework() {
    clearInterval(fireworkInterval);
    fireworkInterval = setInterval(() => {firework();}, 2000);
}

// fonction pour arreter le feu d'artifice
function stopFirework() {
    clearInterval(fireworkInterval);
}

const startFireworkButton = document.getElementById('startFirework');
const stopFireworkButton = document.getElementById('stopFirework');

startFireworkButton.addEventListener('click', function() {startFirework();})
stopFireworkButton.addEventListener('click', function() {stopFirework();})