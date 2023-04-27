export default class Tarefa {
    constructor(decricao, dataTermino, prioridade, status) {
        this.descricao = decricao;
        this.dataTermino = dataTermino;
        this.prioridade = prioridade;
        this.status = status;
    }
}