export class Receita
{
    id: number;
    nome: string;
    valor: number;
    mes: number;
    ano: number;
    tipoReceita: number;
    dataCadastro: Date;
    dataAlteracao: Date;
    idCategoria: number;

    nomePropriedade:string="";
    mensagem:string="";
    notificacoes:[];
}