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




function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
oferecerSeguro(cliente)
//includes é um método de array em javascript, ele verifica o array que esta sendo trabalhado ele inclui determinado dado