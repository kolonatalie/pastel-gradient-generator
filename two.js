const hexPastel = [7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexLightPastel = ['D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let pastelHexColor = '#';
    let lightHexColor = '#';
    
    for(let i = 0; i < 6; i++){
        pastelHexColor += hexPastel[getRandomHex(hexPastel.length)];
        lightHexColor += hexLightPastel[getRandomHex(hexLightPastel.length)];
    }

    color.textContent = `${pastelHexColor} • ${lightHexColor}`;
    document.body.style.backgroundImage = `linear-gradient(to bottom right, ${pastelHexColor}, ${lightHexColor})`;
});

function getRandomHex(arrLength) {
    return Math.floor(Math.random() * arrLength);
};