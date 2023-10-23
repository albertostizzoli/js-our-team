// creo un array di oggetti che rappresenta i membri del team
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// Stampo le stesse informazioni su DOM sottoforma di stringhe
let container = document.getElementById('container');

// Creo una costante che mi prenda la classe per poter creare le immagini
const photoEl = document.querySelector('.photo');

//Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e stringa della foto
for(let i = 0; i < team.length; i++){
    let member = team[i];
    console.log(`Nome: ${member.name} - Ruolo: ${member.role} - Immagine: ${member.image}`);
    let box = document.createElement('div');
    box.innerText = `Nome: ${member.name} - Ruolo: ${member.role} - Immagine: ${member.image}`;
    container.appendChild(box);
    printImg(team[i]);
}

// Creo una funzione che cambi la stringa di una foto in un'immagine effettiva
function printImg(team){
    const img = document.createElement('div');
    img.classList.add('photo')
    const template = `
    <img src="img/${team.image}" alt="">
    `;
    img.innerHTML = template;
    photoEl.append(img)
}
