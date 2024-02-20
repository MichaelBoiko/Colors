const cols = document.querySelectorAll('.col');

function generateColor(){
    const hexCodes = '1234567890ABCDEF';
    color = '';
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#' + color;
}

function setRandomColors(){
    cols.forEach(col => {
        col.style.backgroundColor = generateColor();
    })
}

setRandomColors();