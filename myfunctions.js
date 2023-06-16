function showAlert() {
    window.alert("Veikia isorinis skriptas");
}

function outputToConsole(str) {
    console.debug("outputToConsole got call");
    console.info(str);

}

function skaiciuoti() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let veiksmas = document.getElementById("veiksmas").value;
    let rezultatas;

    let veiksmai = {
        '+': function (a, b) { return a + b; },
        '-': function (a, b) { return a - b; },
        '*': function (a, b) { return a * b; },
        '/': function (a, b) { return a / b; },
        '%': function (a, b) { return a % b; }
    };

    if (veiksmai.hasOwnProperty(veiksmas)) {
        rezultatas = veiksmai[veiksmas](number1, number2);
    } else {
        rezultatas = "Neteisingas veiksmas";
    }

    document.getElementById("rezultatas").textContent = "Rezultatas: " + rezultatas;
}

function keistiSpalva() {
    let kvadratas = document.getElementById("kvadratas");
    let spalvosKodas = generuotiAtsitiktineSpalva();
    kvadratas.style.backgroundColor = spalvosKodas;
}

function generuotiAtsitiktineSpalva() {
    let spalvosKodas = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return spalvosKodas;
}

let laikrodis;

function pradetiLaikrodi() {
    if (laikrodis) {
        clearInterval(laikrodis);
    }
    laikrodis = setInterval(rodytiLaika, 1000);
}

function rodytiLaika() {
    let laikas = new Date();
    let valandos = padarytiDvizenkliu(laikas.getHours());
    let minutes = padarytiDvizenkliu(laikas.getMinutes());
    let sekundes = padarytiDvizenkliu(laikas.getSeconds());
    document.getElementById("laikrodis").textContent = valandos + ":" + minutes + ":" + sekundes;
}

function padarytiDvizenkliu(skaitmuo) {
    if (skaitmuo < 10) {
        return "0" + skaitmuo;
    }
    return skaitmuo;
}

function apverstiTeksta() {
    let tekstas = document.getElementById("tekstas").value;
    let apvertasTekstas = tekstas.split("").reverse().join("");
    document.getElementById("apvertasTekstas").textContent = apvertasTekstas;
}

function generuotiSarasa() {
    let skaicius = parseInt(document.getElementById("skaicius").value);
    let sarasas = document.getElementById("sarasas");
    sarasas.innerHTML = "";
    for (let i = skaicius; i >= 1; i--) {
        let elementas = document.createElement("li");
        elementas.textContent = i;
        sarasas.appendChild(elementas);
    }
}


class Studentas {
    constructor(vardas, pavarde, amzius, pazymys) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.amzius = amzius;
        this.pazymys = pazymys;
    }

    gautiVarda() {
        return this.vardas;
    }

    gautiPavarde() {
        return this.pavarde;
    }

    gautiAmziu() {
        return this.amzius;
    }

    gautiPazymi() {
        return this.pazymys;
    }
}

const studentuSarasas = document.getElementById('studentuSarasas');
const studentai = [];

function pridetiStudenta() {
    const vardas = document.getElementById('vardas').value;
    const pavarde = document.getElementById('pavarde').value;
    const amzius = document.getElementById('amzius').value;
    const pazymys = document.getElementById('pazymys').value;

    const studentas = new Studentas(vardas, pavarde, amzius, pazymys);
    studentai.push(studentas);

    document.getElementById('vardas').value = '';
    document.getElementById('pavarde').value = '';
    document.getElementById('amzius').value = '';
    document.getElementById('pazymys').value = '';
}

function atvaizduotiStudentus() {
    studentuSarasas.innerHTML = '';
    studentai.forEach((studentas) => {
        const li = document.createElement('li');
        li.textContent = `Vardas: ${studentas.gautiVarda()}, Pavardė: ${studentas.gautiPavarde()}, Amžius: ${studentas.gautiAmziu()}, Pažymys: ${studentas.gautiPazymi()}`;
        studentuSarasas.appendChild(li);
    });
}

let targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guessInput = document.getElementById("guess-input");
    let guess = parseInt(guessInput.value);

    if (guess == targetNumber) {
        showMessage("Atspėjote skaičių!");
    } else if (guess < targetNumber) {
        showMessage("Daugiau!");
    } else {
        showMessage("Mažiau!");
    }

    guessInput.value = "";
}

function showMessage(text) {
    let messageElement = document.getElementById("guess-message");
    messageElement.innerText = text;
}


let taskList = document.getElementById("task-list");

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value;

    if (taskText !== "") {
        let taskItem = document.createElement("li");
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}


let infoTable = document.getElementById("info-table");
let infoData = [
    { name: "Jonas", surname: "Jonaitis", age: 25 },
    { name: "Petras", surname: "Petraitis", age: 30 },
    { name: "Ona", surname: "Onaite", age: 28 }
];

for (let i = 0; i < infoData.length; i++) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let surnameCell = document.createElement("td");
    let ageCell = document.createElement("td");
    nameCell.innerText = infoData[i].name;
    surnameCell.innerText = infoData[i].surname;
    ageCell.innerText = infoData[i].age;
    row.appendChild(nameCell);
    row.appendChild(surnameCell);
    row.appendChild(ageCell);
    infoTable.appendChild(row);
}


let filterInput = document.getElementById("filter-input");
let filterList = document.getElementById("filter-list");
let itemList = ["Obuolys", "Bananas", "Citrina", "Avokadas"];

filterInput.addEventListener("input", filterItems);

function filterItems() {
    let filterText = filterInput.value.toLowerCase();
    filterList.innerHTML = "";

    for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i].toLowerCase();
        if (item.includes(filterText)) {
            let itemElement = document.createElement("li");
            itemElement.innerText = itemList[i];
            filterList.appendChild(itemElement);
        }
    }
}

function showSection(sectionId) {
    // Paslėpiame visus puslapio turinio blokus
    var sections = document.querySelectorAll('.container > h2');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Rodykime tik pasirinktą sekciją
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}