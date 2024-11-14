// do jogo

class Grupo {
    constructor(nomeAnimal, numero, dezenas){
        this.nomeAnimal = nomeAnimal;
        this.numero = numero;
        this.dezenas = dezenas;
    }

    descricao(){
        console.log(`O grupo do ${nomeAnimal} é o ${this.numero} com as seguintes dezenas ${this.dezenas}`)
    }
}

const grupos = [
    new Grupo ("Avestruz", 1, [1, 2, 3, 4]), 
    new Grupo ("Águia", 2, [5, 6, 7, 8]), 
    new Grupo ("Burro", 3, [9, 10, 11, 12]), 
    new Grupo ("Borboleta", 4, [13, 14, 15, 16]), 
    new Grupo ("Cachorro", 5, [17, 18, 19, 20]), 
    new Grupo ("Cabra", 6, [21, 22, 23, 24]), 
    new Grupo ("Carneiro", 7, [25, 26, 27, 28]), 
    new Grupo ("Camelo", 8, [29, 30, 31, 32]), 
    new Grupo ("Cobra", 9, [33, 34, 35, 36]), 
    new Grupo ("Coelho", 10, [37, 38, 39, 40]),
    new Grupo ("Cavalo", 11, [41, 42, 43, 44]),
    new Grupo ("Elefante", 12, [45, 46, 47, 48]),
    new Grupo ("Galo", 13, [49, 50, 51, 52]),
    new Grupo ("Gato", 14, [53, 54, 55, 56]),
    new Grupo ("Jacaré", 15, [57, 58, 59, 60]),
    new Grupo ("Leão", 16, [61, 62, 63, 64]),
    new Grupo ("Macaco", 17, [65, 66, 67, 68]),
    new Grupo ("Proco", 18, [69, 70, 71, 72]),
    new Grupo ("Pavão", 19, [73, 74, 75, 76]),
    new Grupo ("Peru", 20, [77, 78, 79, 80]),
    new Grupo ("Touro", 21, [81, 82, 83, 84]),
    new Grupo ("Tigre", 22, [85, 86, 87, 88]),
    new Grupo ("Urso", 23, [89, 90, 91, 92]),
    new Grupo ("Veado", 24, [93, 94, 95, 96]),
    new Grupo ("Vaca", 25, [97, 98, 99, 0]),
]

// do apostador



// da aposta