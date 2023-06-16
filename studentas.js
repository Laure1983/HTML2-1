class Studentas {
    constructor(vardas, pavarde, pazymiai) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.pazymiai = pazymiai;
    }

    gautiVarda() {
        return this.vardas;
    }

    gautiPavarde() {
        return this.pavarde;
    }

    gautiPazymius() {
        return this.pazymiai;
    }

    gautiVidurki() {
        if (this.pazymiai.length === 0) {
            return 0;
        }

        const suma = this.pazymiai.reduce((a, b) => a + b);
        return suma / this.pazymiai.length;
    }
}

let studentai = [];

function pridetiStudenta() {
    const vardas = document.getElementById('vardas').value;
    const pavarde = document.getElementById('pavarde').value;
    const pazymiaiInput = document.getElementById('pazymiai').value;
    const pazymiai = pazymiaiInput.split(' ').map(Number);

    const studentas = new Studentas(vardas, pavarde, pazymiai);
    studentai.push(studentas);

    document.getElementById('vardas').value = '';
    document.getElementById('pavarde').value = '';
    document.getElementById('pazymiai').value = '';

    alert('Studentas pridėtas sėkmingai!');
}

function atvaizduotiStudentus() {
    const studentuSarasas = document.getElementById('studentuSarasas');
    studentuSarasas.innerHTML = '';

    studentai.forEach(studentas => {
        const li = document.createElement('li');
        li.textContent = `Vardas: ${studentas.gautiVarda()}, Pavardė: ${studentas.gautiPavarde()}, Vidurkis: ${studentas.gautiVidurki()}`;
        studentuSarasas.appendChild(li);
    });
}