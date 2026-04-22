function validarFormulario() {
    let nome = document.getElementById("Nome").value.trim;
    let Sobrenome = document.getElementById("Sobrenome").value.trim;
    // let Email = document.getElementById("Email").value;
    // let ddd = document.getElementById("ddd").value;
    // let paisnumero = document.getElementById("paisnumero").value;
    // let exemplo = document.getElementById("exemplo").value;
    // let cep = document.getElementById("cep").value;
    // let rua = document.getElementById("rua").value;
    // let numero = document.getElementById("numero").value;
    // let apt = document.getElementById("apt").value;
    // let bairro = document.getElementById("bairro").value;
    // let Cidade = document.getElementById("Cidade").value;
    // let Estado = document.getElementById("Estado").value;

    let quantidadeErros = 0;

    if (nome.length == 0) {
        FormError("Nome")
        quantidadeErros++;
    } else {
        reiniciaBorda("Nome")
    }
    // 

    if (Sobrenome.length == 0) {
        FormError("Sobrenome");
        quantidadeErros++;
    } else {
        reiniciaBorda("Sobrenome");
    }

    let objetoContato = {
        nome: nome,
        sobrenome: Sobrenome

    };
    let cadastrado = cadastrarContato(objetoContato);
    return false;




    // if (Email.length == 0) {
    //     FormError("Email");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("Email");
    // }


    // if (ddd.length == 0) {
    //     FormError("ddd");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("ddd");
    // }

    // if (paisnumero.length == 0) {
    //     FormError("paisnumero");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("paisnumero");
    // }

    // if (exemplo.length == 0) {
    //     FormError("exemplo");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("exemplo");
    // }

    // if (cep.length == 0) {
    //     FormError("cep");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("cep");
    // }

    // if (rua.length == 0) {
    //     FormError("rua");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("rua");
    // }

    // if (numero.length == 0) {
    //     FormError("numero");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("numero");
    // }

    // if (apt.length == 0) {
    //     FormError("apt");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("apt");
    // }

    // if (bairro.length == 0) {
    //     FormError("bairro");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("bairro");
    // }

    // if (Cidade.length == 0) {
    //     FormError("Cidade");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("Cidade");
    // }

    // if (Estado.length == 0) {
    //     FormError("Estado");
    //     quantidadeErros++;
    // } else {
    //     FormSuccess("Estado");
    // }

    // valida erros
    if (quantidadeErros != 0) {

        alert("Existem " + quantidadeErros + " campo(s) obrigatorio(s) nao preenchido(s)");
        quantidadeErros = 0
    }


}
// tem que usar `` crases
// console.log(`Nome: ${Nome} ${Sobrenome} | Email: ${Email} `);

// funcao que pinta a borda do campo que falta preencher
function FormError(fildId) {
    document.getElementById(fildId).style.border = "2px solid red";
}
function FormSuccess(fildId) {
    document.getElementById(fildId).style.border = "none";
}

async function cadastrarContato(objetoContato) {
    console.log(objetoContato);
    // cadastrar api
    let resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {

            "Content-Type": "application/json; charset=UTF-8"
        }

    });


    return false;
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("O campo cep esta incompleto");
        return false;
    }

    try {
        aguardandoCampo();

        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        // console.log(await retorno.json());
        let dados = await retorno.json();
        console.log(dados);

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.uf;


    } catch {
        alert("Erro ao procurar endereco!");
    }
}

function aguardandoCampo() {
    document.getElementById("rua").value = "aguardando. . .";
    document.getElementById("bairro").value = "aguardando. . .";
    document.getElementById("Cidade").value = "aguardando. . .";
    document.getElementById("Estado").value = "aguardando. . .";

}
