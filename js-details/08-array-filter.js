const numeros = ["5", "10", "14"]

const encontrado = numeros.filter((n) => {
return n == 10;

});

// console.log(encontrado);

const estoque = [{

    descricao : "golden hour pt4 album",
    cor : "azul e branco",
    perfil : "z",
    quantidade : 120

},
{

    descricao : "golden hour pt4 album",
    cor : "branco e azul",
    perfil : "a",
    quantidade : 110

},
{

    descricao : "golden hour pt4 album",
    cor : "azul claro com azul escuro",
    perfil : "t",
    quantidade : 98

}
];


const pocaalbum = estoque.filter((produto) => {
return produto.cor == "azul claro com azul escuro";
});
console.log("pocaalbum  em estoque:");
console.log(pocaalbum);
console.log();

estoque.forEach((produto) => {

    console.log(`${produto.cor}: ${produto.quantidade} unidade(s)`);

});

// exec: exibir os textos