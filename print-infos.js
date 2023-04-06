const cliente = {
    nome:"Sther",
    idade:22,
    cpf:"45656456432524",
    email:"pipipopo@gmail.com"
};


console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.` )
//             mostra os três primeiros "algarismos"
console.log(cliente.cpf.substring(0,3))