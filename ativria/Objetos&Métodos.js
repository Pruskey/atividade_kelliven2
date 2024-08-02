let aluno = {
    nome: 'Roblox',
    idade: 20200,
    curso: 'Engenharia',
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}.`);
    }
};
aluno.apresentacao();