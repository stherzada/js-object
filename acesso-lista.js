const cliente ={
    nome:"André",
    idade:45,
    cpf:1236458952,
    email:"pipipopo@gmail.com"
};



const chaves = ["nome", "idade", "cpf", "email"];

//seria a mesma coisa que eu tivesse usando um const chave = "nome", essa [], serve pra pegar a informação sem precisar informar manualmente.

console.log(cliente[chaves[0]]); //mostra apenas uma informação

chaves.forEach(info=>console.log(cliente[info]));
// mostra TODAS informações

console.log(cliente["nome"]);

//no javascript quando colocamos uma informação nos [] que nãio existe, ele não dará erro e sim mostrará no terminal a palavra undefined.