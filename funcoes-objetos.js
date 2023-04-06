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
    },

    {
        nome:"Sther",
        parentesco:"Filha",
        dataNasc:"14/03/2001"
    }
],
    saldo:100,

    depositar:function(valor)
    {
        //esta instancia
        this.saldo += valor;
    }
};

console.log(cliente.saldo);
cliente.depositar(500);
console.log(cliente.saldo)

