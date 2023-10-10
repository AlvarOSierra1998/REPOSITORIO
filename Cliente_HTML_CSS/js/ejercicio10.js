/*div1*/
const elementoACambiar1 = document.querySelector('.unoD');
const body = document.body;

elementoACambiar1.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'red';
});

elementoACambiar1.addEventListener('mouseout', () => {
    body.style.backgroundColor = ''; // Vuelve al color de fondo predeterminado del body
});



/*div2*/
const elementoACambiar2 = document.querySelector('.dosD');
const cuerpo2 = document.body;

elementoACambiar2.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'blue';
});

elementoACambiar2.addEventListener('mouseout', () => {
    body.style.backgroundColor = ''; // Vuelve al color de fondo predeterminado del body
});

/*div3*/

const elementoACambiar3 = document.querySelector('.tresD');
const cuerpo3 = document.body;

elementoACambiar3.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'green';
});

elementoACambiar3.addEventListener('mouseout', () => {
    body.style.backgroundColor = ''; // Vuelve al color de fondo predeterminado del body
});
