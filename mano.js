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


const filterInput = document.getElementById("filter-input");
const filterList = document.getElementById("filter-list");
const itemList = ["Obuolys", "Bananas", "Citrina", "Avokadas"];

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

