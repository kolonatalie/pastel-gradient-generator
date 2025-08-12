const hexDarkPastel = [4, 5, 6, 7];
const hexPastel = [8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexLightPastel = ['D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let darkHexColor = '#';
    let pastelHexColor = '#';
    let lightHexColor = '#';
    
    for(let i = 0; i < 6; i++){
        darkHexColor += hexDarkPastel[getRandomHex(hexDarkPastel.length)];
        pastelHexColor += hexPastel[getRandomHex(hexPastel.length)];
        lightHexColor += hexLightPastel[getRandomHex(hexLightPastel.length)];
    }

    color.textContent = `${darkHexColor} • ${pastelHexColor} • ${lightHexColor}`;
    document.body.style.backgroundImage = `linear-gradient(127deg, ${darkHexColor}, transparent 70%),
  linear-gradient(217deg, ${pastelHexColor}, transparent 70%),
  linear-gradient(336deg, ${lightHexColor}, transparent 75%)`;
});

function getRandomHex(arrLength) {
    return Math.floor(Math.random() * arrLength);
};