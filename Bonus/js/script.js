//creo l'array di oggetti rappresentante i membri del team
let team = [
    {
        name: "Wayne Barnet",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopex",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

const rowEl = document.querySelector('.row');
console.log(rowEl);



for (let i = 0; i < team.length; i++) {
    printCol(team[i]);

}


function printCol(team) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
    <div class="card text-start">
        <img src="./img/${team.image}" />
        <div class="card-body bg-white p-2">
        <h4>${team.name}</h4>
        <p>${team.role}</p>
        </div>
    </div>
    `;
    col.innerHTML = template;
    rowEl.append(col);

}


const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        image: document.getElementById('image').value,
    }

    console.log(newMember);
    team.push(newMember);
    printCol(newMember);
    reset();
});

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('image').value = '';
}
