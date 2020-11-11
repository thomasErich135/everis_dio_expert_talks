// declaração de variaveis
var valorInvestimento = 100; //
var mesesDeInvestimento = 12; // 1 ano > 12 meses
var taxaDeJurosAoMes = 0.05; //5% ao mes

// operador for
for(let i = 1; i <= mesesDeInvestimento; i++) {
    valorInvestimento = valorInvestimento + (valorInvestimento * 0.05);
    console.log('mes: ', i, ' valor corrigido R$: ', valorInvestimento.toFixed(2));
}

// oque acontece se mudar mesesDeInvestimento para 24?
// oque acontece se mudar taxaDeJurosAoMes para 10% ao mes?

// operador while
var valorInvestimento = 100; 
var mesesDeInvestimento = 0; 
var taxaDeJurosAoMes = 0.05; //5% ao mes

while(valorInvestimento < 500)
{   
    mesesDeInvestimento = mesesDeInvestimento + 1;
    valorInvestimento = valorInvestimento + (valorInvestimento * 0.05);
    console.log('mes: ', mesesDeInvestimento, ' valor corrigido R$: ', valorInvestimento.toFixed(2));
}