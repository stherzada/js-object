function cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    depositar = function(valor){
        this.saldo+=valor
    }
}

const sther = new cliente("Sther", "1465456465", "pipopopo@gmail.com", 100)

console.log(sther)