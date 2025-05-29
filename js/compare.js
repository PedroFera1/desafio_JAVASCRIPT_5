
// car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturasolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, car) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === car) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "Você precisa definir uma classe Car";
    }

    if (el.checked) {
        if (carArr.length < 2) {
            carArr.push(carClass);
        } else {
            el.checked = false;
            alert("Você só pode comparar dois veículos!");
        }
    } else {
        let index = GetCarArrPosition(carArr, carClass);
        if (index !== -1) {
            carArr.splice(index, 1); // Remove corretamente o carro do array
        }
    }
}


function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    if (carArr.length < 2) return; // Garante que só atualiza se houver 2 carros

    for (let i = 0; i < carArr.length; i++) {
        document.getElementById(`compare_modelo_${i}`).innerText = carArr[i].nome;
        document.getElementById(`compare_preco_${i}`).innerText = `R$ ${carArr[i].preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src='${carArr[i].image}' width='100'>`;
        document.getElementById(`compare_roda_${i}`).innerText = `${carArr[i].roda}`; // Não precisa de toLocaleString para string/número simples
        document.getElementById(`compare_motor_${i}`).innerText = `${carArr[i].motor}`; // Não precisa de toLocaleString para número simples
        document.getElementById(`compare_potencia_${i}`).innerText = `${carArr[i].potencia}`; // Não precisa de toLocaleString para número simples
        document.getElementById(`compare_alturasolo_${i}`).innerText = `${carArr[i].alturasolo}`; // Não precisa de toLocaleString para número simples
        document.getElementById(`compare_alturacacamba_${i}`).innerText = `${carArr[i].alturaCacamba}`;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = `${carArr[i].alturaVeiculo}`;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = `${carArr[i].capacidadeCarga}`;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = `${carArr[i].volumeCacamba}`;
    }
}




