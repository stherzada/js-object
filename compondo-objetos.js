const cliente ={
    nome:"André",
    idade:45,
    cpf:1236458952,
    email:"pipipopo@gmail.com",
    fones:["5456465465","5665656356","564654652"]
};

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"

};

console.log(cliente)
cliente.dependentes.nome = "Sara Silva"

console.log(cliente)