// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const screen = document.querySelector('.result')
const close = document.querySelector(".btn-close");
const minimize = document.querySelector(".btn-min");
const maximize = document.querySelector(".btn-max");
const calculator = document.querySelector(".calculator");
const icon = document.querySelector(".icon");

document.addEventListener('keydown', (e)=>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})


const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur) {
            case '8':
                screen.textContent= "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e)=>{
    alert('Your calcul contain an error : '+ e.message);
})





// CLOSE window
close.addEventListener('click', (e)=>{
    calculator.classList.add("closed");
    icon.style.transform = 'scale(1)';
    icon.style.transform = 'translate(-50%, -50%)';
})

icon.addEventListener('click', (e)=>{
    calculator.classList.remove("closed");
    icon.style.transform = 'scale(0)';
})


// MINIMIZE window
minimize.addEventListener('click', (e)=>{
    calculator.classList.toggle("minimized");
})

// MAXIMIZE window
maximize.addEventListener('click', (e)=>{
    calculator.classList.toggle("maximized");
})