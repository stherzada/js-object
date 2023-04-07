const clientes = [
    {
        nome:"Sthefany",
        cpf:"554654653556",
        dependentes:[
            {
                nome:"Diego",
                parentesco:"irmão",
                dataNasc:"18/10/2008"
            },
            {
                nome:"Maria",
                parentesco:"mãe",
                dataNasc:"16/03/1990"
            }
        ],
    },
    {
       nome:"Bruna",
       cpf:"454564655646",
       dependentes:[
        {
            nome:"Bruno",
            parentesco:"irmão",
            dataNasc:"03/12/2008"
        }
       ], 
    }
]

// separar informações do ARRAY
const listaDependentes = [... clientes[0].dependentes,...clientes[1].dependentes]


console.table(listaDependentes)