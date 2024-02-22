const cols = document.querySelectorAll('.col');

document.addEventListener('click', (event) => {
    const dataType = event.target.dataset.type;
    let node = event.target;
    
    if(dataType === 'lock'){
        if(event.target.tagName.toLowerCase() === 'i'){
            node = event.target;
        } else {
            node = event.target.children[0];
        }
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if (dataType === 'copy') {
        copyColorToClick(event.target.textContent);
    }
})

document.addEventListener('keydown', (event) => {
    if(event.code === 'Space'){
        setRandomColors();
    }
})

function copyColorToClick(text){
    return navigator.clipboard.writeText(text);
}

function setRandomColors(){
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock');
        const text = col.querySelector('h2');
        const button = col.querySelector('button');
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