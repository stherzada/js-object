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

const sther = new Cliente('Sther', 'pipipopo@gmail.com', '52635464685', 5000)

sther.exibirSaldo()

console.log(sther)