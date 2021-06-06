//DAO -> Data Acess Object

function ListaDAO(){

    var listas = {};

    this.listas = {};

    this.criarLista = function(nome){
        //Gera ID
        var novoID = "lista " + Object.keys(this.listas).length;

        //Cria objeto da lista
        var novaLista = {
            id: novoID,
            nome:nome,
            tarefas: [],
            numTarefas: 0
        };
    
        //Adiciona nova lista ao objeto listas
        this.listas[novoID] = novaLista;

        return{
            success: true,
            message: "Lista \'" + nome + "\' criada"
        };
    };

    this.renomearLista = function(listaID, novoNome){

        //Verifica existencia da lista
        if(this.listas.hasOwnProperty(listaID)){

            //troca o nome antigo pelo novo
            this.listas[listaID].nome = novoNome;
            console.log();
            return{
                success: true,
                message: "Lista renomeada para \'" + novoNome + "\'."
            };
        } else{
            return{
                success: false,
                message: "Lista não pôde ser encontrada"
            };
        }
    };

    this.apagarLista = function(listaID){
          
        //Verifica existencia da lista
        if(this.listas.hasOwnProperty(listaID)){
            
            var nomeLista = this.listas[listaID].nome;

            //exclui a lista
            delete this.listas[listaID];
            return{
                success: true,
                message: "Lista \'" + novoLista + "\' apagada com sucesso"
            };
        
        } else{
            return{
                success: false,
                message: "Lista não pôde ser encontrada"
            };
        }  
    };

    this.getLista = function(){

        return this.listas;
    
    };

    this.novaTarefa = function(descricao, listaID){

        //Cria identificado da tarefa
        var idTarefa = "tarefa" + this.listas[listaID].numTarefas;

        //Cria objeto da tarefa
        var tarefa  = {
            id: idTarefa,
            descricao: descricao,
            completa: false
        };
    
        //Adiciona na lista de tarefas
        this.listas[listaID].tarefa.push(tarefa);
        this.listas[listaID].numTarefas += 1;
    
        return{
            success: true,
            message: "Tarefa adicionada na lista" + this.listas[listaID.nome]
        };
    };

    this.alternaTarefa = {};

    this.apagarTarefa = {};

    this.getTarefa = {};

}

module.exports = new ListaDAO();