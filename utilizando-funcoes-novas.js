const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
   }
   
   pessoa.imprimeNome() //Ana

   function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
   }

   const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com

   function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
   }

   

   function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }


   //call() Esse método permite que uma função seja chamada com parâmetros e valor de this específicos. Vamos ver um exemplo:
   imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com


const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]



//O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:
imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com


const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar
   console.log(personagemGenerico())
   //a personagem é undefined

   //O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:
   const personagemDefinido = personagemGenerico.bind(personagem)
    console.log(personagemDefinido())
    //a personagem é Princesa Leia