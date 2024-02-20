const cols = document.querySelectorAll('.col');

// function generateColor(){
//     const hexCodes = '1234567890ABCDEF';
//     color = '';
//     for (let i = 0; i < 6; i++){
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//     }
//     return '#' + color;
// }

document.addEventListener('click', (event) => {
    const dataType = event.target.dataset.type;
    if(dataType === 'lock'){
        if(event.target.tagName.toLowerCase() === 'i'){
            node = event.target;
        } else {
            node = event.target.children[0];
        }
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    }
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'Space'){
        setRandomColors();
    }
})

function setRandomColors(){
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock');
        const text = col.querySelector('h2');
        const button = col.querySelector('button');
        // const color = generateColor();
        const color = chroma.random();
        if(isLocked){
            return
        }
        text.textContent = color;
        col.style.backgroundColor = color;
        setColorText(text, color);
        setColorText(button, color);
    })
}

function setColorText(text, color){
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColors();