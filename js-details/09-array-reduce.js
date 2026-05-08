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

}];

let totalProdutos = estoque.reduce((total, produto) => {

return total + produto.quantidade;

}, 0);

console.log(`total de albuns em estoque: ${totalProdutos}`);

