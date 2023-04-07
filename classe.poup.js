class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.salado +=valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}


class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)

        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}


const sther = new ClientePoupanca("Sther", "33278893@gmail.com", "5654564", 100, 330)

console.log(sther)

sther.depositar(110)
sther.depositarPoup(4398430)

console.log(sther)