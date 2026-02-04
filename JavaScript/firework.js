const fireworkContainer = document.getElementById('fireworkContainer');

// parametrer le nombre de particules et leur eparpillement
const particleNumber = 500;
const dispersion = 200;

const colors = [
  "#FF6B6B", // rouge vif
  "#FFD93D", // jaune vif
  "#6BCB77", // vert vif
  "#4D96FF", // bleu clair
  "#FF6FF3", // rose fluo
  "#FFA36C", // orange clair
  "#00F7FF", // cyan néon
  "#FFEC59", // jaune pastel lumineux
  "#FF3C38", // rouge néon
  "#C084FC", // violet clair
  "#F9F871"  // jaune très clair
];
let color = "#00F7FF";

function firework() {
    let fireworkPosition = window.innerWidth*0.1 + (Math.random() * window.innerWidth * 0.9);
    let fireworkAltitude = -(window.innerHeight*0.2 + (Math.random() * window.innerHeight * 0.5));
    let fireworkColor = getFireworkColor();

    const firework = document.createElement('span');
    firework.classList.add('firework');

    firework.style.setProperty('--fireworkPosition', `${fireworkPosition}px`);
    firework.style.setProperty('--fireworkAltitude', `${fireworkAltitude}px`);

    firework.style.setProperty('--fireworkColor', `${fireworkColor}`);

    fireworkContainer.appendChild(firework);

    firework.addEventListener('animationend', () => {  
        explosion(firework, fireworkColor); 
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

function getFireworkColor() {
    let colorNumber = Math.round(Math.random() * 10);

    if (colors[colorNumber] === undefined) { color = "#D64D31"; } 
    else { color = colors[colorNumber] }

    return color
}

function explosion(firework, fireworkColor) {
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
        particle.style.setProperty('--particuleColor', `${fireworkColor}`);

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

startFirework();

const startFireworkButton = document.getElementById('startFirework');
const stopFireworkButton = document.getElementById('stopFirework');

startFireworkButton.addEventListener('click', function() {startFirework();})
stopFireworkButton.addEventListener('click', function() {stopFirework();})