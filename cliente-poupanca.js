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

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const sther = new ClientePoupanca("Sther", "425565452121", "pipipopopo@gmail.com",100,200)


console.log(sther)
// essa instancia só existe no ClientePoupança, n ira existir no cliente.
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

/// chamar a instancia de cliente poupança e incrementou um valor na depositarpoup
sther.depositarPoup(500)

console.log(sther.saldoPoup)