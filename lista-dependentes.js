const cliente ={
    nome:"André",
    idade:45,
    cpf:1236458952,
    email:"pipipopo@gmail.com",
    fones:["5456465465","5665656356","564654652"],
    dependentes: [{
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
    }]
};


cliente.dependentes.push({
    nome:"Sther",
    parentesco:"Filha",
    dataNasc:"14/03/2001"
})

// console.log(cliente)
//--- adicionando mais de 1 dependente ---


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="20/03/2011")
//                acessando a chave do objeto
console.log(filhaMaisNova[0].nome)
