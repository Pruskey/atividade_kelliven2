let dataAtual = ('12:24 02/08/2024');
let dataNascimento = ('1990-08-02');
let diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
let mesAtual = dataAtual.getMonth();
let diaAtual = dataAtual.getDate();
let mesNascimento = dataNascimento.getMonth();
let diaNascimento = dataNascimento.getDate();

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    diferencaAnos--
}