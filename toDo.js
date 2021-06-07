/*aplicação que consiste em listas e tarefas.
Uma lista terá um identificador, um nome e um array de tarefas
Uma tarefa consiste em um identificador, uma descrição e um atributo para tarefa feita ou não
*/


// let lista = {

//     "id": "lista-0",
//     "nome": "Lista",
//     "tarefas": [],
//     "numTarefas": 0
// }

// let tarefa = {
//     "id": "tarefa-0",
//     "descricao": "Comprar leite",
//     "completa": false
// }


// Importando módulos
var express = require("express");
var bodyParser = require("body-parser");
var ListaDAO = require("./ListaDAO");
const { listas } = require("./ListaDAO");

var app = express();
app.use(express.json());
//app.use(bodyParser.json());


//Rotas por funcionalidades

    
    //Cria nova Lista
    //GET http://localhost:8080/lista{"nome": "Compras"}
app.post("/lista", function(request, response){

    //Pega o nome da propriedade body do request
    var nome = request.body.nome;
    
    var result = ListaDAO.criarLista(nome);

    response.status(200);
    response.json(result);
    response.end();
});

    //Renomear Lista
    //PUT http://localhost:8080/lista/lista-0{"nome": "Supermercado"}
app.put("/lista/:id_lista", function(request, response){

    var novoNome = request.body.nome;
    
    var idLista = request.params.id_lista;

    var result = ListaDAO.renomearLista(idLista, novoNome);

    response.status(200);
    response.json(result);
    response.end();

});

    //Apagar Lista
    //DELETE http://localhost:8080/lista/lista-0
app.delete("/lista/:id_lista", function(request, response){

    var idLista = request.params.id_lista;

    var result = ListaDAO.apagarLista(idLista);

    response.status(200);
    response.json(result);
    response.end();
});

    //Listar Listas
    //GET http://localhost:8080/lista
app.get("/lista/", function(request, response){

    response.status(200);
    response.json(ListaDAO.getListas());
    response.end();

});


    //Criar nova tarefa
    //POST http://localhost:8080/lista/lista-0{"descricao": "Leite"}
app.post("/lista/:id_lista", function(request, response){

    var idLista = request.params.id_lista;
    
    var descricaoTarefa = request.body.descricao;

    var result = ListaDAO.novaTarefa(descricaoTarefa, idLista);

    response.status(200);
    response.json(result);
    response.end();
});


    //Alternar tarefa completo ou não
    //PUT http://localhost:8080/lista/lista-0/tarefa/tarefa-0
app.put("/lista/:id_lista/tarefa/:id_tarefa", function(request, response){

    var idLista = request.params.id_lista;
    var idTarefa = request.params.id_tarefa;

    var result = ListaDAO.alternaTarefa(idLista, idTarefa);
    
    response.status(200);
    response.json(result);
    response.end();

});


    //Apagar tarefa da lista
    //DELETE http://localhost:8080/lista/lista-0/tarefa/tarefa-1
app.delete("/lista/:id_lista/tarefa/:id_tarefa", function(request, response){

    var idLista = request.params.id_lista;
    var idTarefa = request.params.id_tarefa;

    var result = ListaDAO.apagarTarefa(idLista, idTarefa);

    response.status(200);
    response.json(result);
    response.end();

});


    //Listar tarefa de uma lista
    //GET http://localhost:8080/lista/lista-0/tarefa
app.get("/lista/:id_lista/tarefa", function(request, response){

    var idLista = request.params.id_lista;
    
    response.status(200);
    response.json(ListaDAO.getTarefas(idLista));
    response.end();
});


app.listen(8080);


