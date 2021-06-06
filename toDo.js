/*aplicação que consiste em listas e tarefas.
Uma lista terá um identificador, um nome e um array de tarefas
Uma tarefa consiste em um identificador, uma descrição e um atributo para tarefa feita ou não

Funcionalidades Implementadas

Funcionalidade          Método          Rota

Criar nova lista        Post            /lista
Renomear lista          Put             /lista/:id_lista 
Apagar lista            Delete          /lista/:id_lista
Listar listas           Get             /lista
Criar nova tarefa       Post            /lista/:id_lista
Alternar tarefa feita   Put             /lista/:id_lista/tarefa/:id_tarefa
Apagar tarefa           Delete          /lista/:id_lista/tarefa/:id_tarefa
Listar tarefas          Get             /lista/:id_lista/tarefa
*/






let lista = {

    "id": "lista-0",
    "nome": "Lista",
    "tarefas": [],
    "numTarefas": 0
}

let tarefa = {
    "id": "tarefa-0",
    "descricao": "Comprar leite",
    "completa": false
}