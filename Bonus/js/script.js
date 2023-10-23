//creo l'array di oggetti rappresentante i membri del team
let team = [
    {
        name: "Wayne Barnett",
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

let rowCards = document.getElementById('row-card');

for(let i = 0; i <team.length; i++){
    let member = team[i];
    let col = document.createElement('div');
    col.classList.add('col-4');
    rowCards.append(col);

    col.innerHTML = `
    <div class="card text-start">
    <img class="card-img-top" src="./img/${member.image}"/>
        <div class="card-body bg-white text-center p-2">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
        </div>
    </div>
    `;

}