// declaração da variavel
var valorDoSaque = 0;
var saldoEmConta = 100;

// inicio do if
if (valorDoSaque > 0) {
    if (valorDoSaque <= saldoEmConta) {
        console.log('saque permitido');
    } else {
        console.log('saque não permitido, saldo em conta insuficiente');
    }
} else {
    console.log('favor informar um valor para saque maior que 0')
}

// oque acontece se mudar valorDoSaque para 50?
// oque acontece se mudar valorDoSaque para 100?
// oque acontece se mudar valorDoSaque para 200?

// podemos escrever a lógica acima de outra maneira

// declaração da variavel
var valorDoSaque = 0;
var saldoEmConta = 100;

if (valorDoSaque === 0) {
    console.log('favor informar um valor para saque maior que 0')
} else if (valorDoSaque <= saldoEmConta) {
    console.log('saque permitido');
} else {
    console.log('saque não permitido, saldo em conta insuficiente');
}

// utilizando operador switch

// declaração da variavel
var valorDoSaque = 0;
var saldoEmConta = 100;

switch (true) {
    case (valorDoSaque == 0):
        console.log('favor informar um valor para saque maior que 0')
        break;
    case (valorDoSaque <= saldoEmConta):
        console.log('saque permitido');
        break;
    default:
        console.log('saque não permitido, saldo em conta insuficiente');
        break;
}