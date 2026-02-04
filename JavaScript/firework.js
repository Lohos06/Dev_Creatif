const fireworkContainer = document.getElementById('fireworkContainer');

function firework() {
    const firework = document.createElement('span');
    firework.classList.add('firework');
    fireworkContainer.appendChild(firework);

    firework.addEventListener('animationend', () => {  
        explosion(firework); 
        fireworkContainer.removeChild(firework);
    });
}

function explosion(firework) {
    const positions = getPosition(firework);
    console.log(positions[0])
    for (let i=0; i<10; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--xPosition', `${positions[0]}px`);
        particle.style.setProperty('--yPosition', `${positions[1]}px`);
        fireworkContainer.appendChild(particle); 
    }
}

function getPosition(firework) {
    let positions = firework.getBoundingClientRect();
    let xPosition = positions.x;
    let yPosition = positions.y;
    positions = [xPosition, yPosition]
    return positions;
}

firework();