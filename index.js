function determinarAreaAlocacao(numeroPessoas, fumante, animaisEstimacao) {
    if (fumante || animaisEstimacao) {
        return 'área externa';
    } else if (numeroPessoas >= 5) {
        return '1º andar';
    } else {
        return 'térreo';
    }
}


const numeroPessoas = 4; 
const fumante = false; 
const animaisEstimacao = false; 
const areaAlocacao = determinarAreaAlocacao(numeroPessoas, fumante, animaisEstimacao);
console.log(`O grupo de ${numeroPessoas} pessoa(s) será alocado na ${areaAlocacao}.`);
