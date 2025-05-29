
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
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
        document.getElementById(`compare_preco_${i}`).innerText = `R$ ${carArr[i].preco.toLocaleString('pt-BR')}`;
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src='${carArr[i].image}' width='100'>`;
        
    }
}




