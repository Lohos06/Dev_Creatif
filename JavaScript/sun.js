const night = document.getElementById('night');
const AuroraAndHespera = document.getElementById('AuroraAndHespera');
const day = document.getElementById('day');

const sun = document.getElementById('sun');
const startDayButton = document.getElementById('startDay');
const endDayButton = document.getElementById('endDay');

function nightAdd() {
    night.classList.add('skyChange');
}
function AuroraAndHesperaAdd() {
    AuroraAndHespera.classList.add('skyChange');
}
function dayAdd() {
    day.classList.add('skyChange');
}

// fonction qui demarre la journée
startDayButton.addEventListener('click', function() {
    sun.classList.remove('Hespera');
    sun.classList.add('Aurora');

    nightAdd()
    setTimeout(AuroraAndHesperaAdd, 4000);
    setTimeout(dayAdd, 6000);
})

// fonction qui met fin a la journée
endDayButton.addEventListener('click', function() {
    night.classList.remove('skyChange');
    AuroraAndHespera.classList.remove('skyChange');
    day.classList.remove('skyChange');
    sun.classList.add('Hespera');
    sun.classList.remove('Aurora');
})