// criar um array de 10 numeros
// rodar o map multiplicando o valor de casa item por 2
// exibir o array modificando no final com o console log

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


const dobro = numeros.map(multiplicar)


    function multiplicar(num){
        return num * 2;
    }


console.log(dobro);