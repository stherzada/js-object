const cliente ={
    nome:"André",
    idade:45,
    cpf:1236458952,
    email:"pipipopo@gmail.com"
};

console.log(cliente);
cliente.fone = "9925557777";

console.log(cliente);

// cliente.fone = "66558454564";
cliente['fone'] = "2456454552";

console.log(cliente);