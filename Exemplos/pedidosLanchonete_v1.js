var lancheEscolhido = null;
var querCombo = false;
var pagarDinheiro = false;

// função para mostrar o menu
function menu() {
    console.log("Bem vindo a lanchonete G, nosso menu:");
    console.log("1 - BiGLanche - R$ 10 (lanche) R$ 14 (combo)");
    console.log("2 - FranGLanche - R$ 9 (lanche) R$ 13 (combo)");
    console.log("3 - VeGLanche - R$ 11 (lanche) R$ 16 (combo com suco de beterraba, e chips de aipim)");
}
// função para fazer pedido
function pedidosLanchoneteSimples(lanche, combo, pagamentoDinheiro) {
    var lancheCarrinho = null;
    var comboCarrinho = 'lanche';
    var pagamentoCarrinho = 'cartão';
    var totalCarrinho = 0;
    //seletor do lanche
    switch (lanche) {
        case 1:
            lancheCarrinho = "BiGLanche";
            break;
        case 2:
            lancheCarrinho = "FranGLanche";
            break;
        case 3:
            lancheCarrinho = "VeGLanche";
            break;
        default:
            break;
    }
    if(combo) {
        comboCarrinho = 'combo';
    }
    if(pagamentoDinheiro) {
        pagamentoCarrinho = 'dinheiro';
    }

    if(lancheCarrinho){
        totalCarrinho = calcularTotalPedido(lanche,combo);
        console.log('Seu pedido foi um: ' + lancheCarrinho +', Tipo: ' + comboCarrinho + ', total: ' + totalCarrinho + ', pagamento: ' + pagamentoCarrinho);
    }
    else {
        console.log('Algo deu errado com seu pedido verifique o lanche selecionado')
    }
}
// função para mostrar propaganda
function propagandaTempo(tempo) {
    for (let index = 0; index < tempo; index++) {
        if(index === 0){
            console.log('Seu pedido esta sendo preparado');
        } else if(index > 0 && index < tempo) {
            console.log('Obrigado pela preferencia seu pedido ficara pronto logo, aguarde mais um pouco');
        } else {
            console.log('Seu pedido esta pronto');
        }
    }
}
// função para calcular o total do pedido
function calcularTotalPedido(lanche,combo) {
    propagandaTempo(3);
    var valorComboNormal = 4;
    var valorComboVegano = 5;
    var valorTotal = 0;
    switch (lanche) {
        case 1:
            valorTotal = 10;
            if(combo){
                valorTotal =  valorTotal + valorComboNormal;
            }
            break;
        case 2:
            valorTotal = 9;
            if(combo){
                valorTotal =  valorTotal + valorComboNormal;
            }
            break;
        case 3:
            valorTotal = 11;
            if(combo){
                valorTotal =  valorTotal + valorComboVegano;
            }
            break;
        default:
            break;
    }
    return valorTotal;
}

// executa programa
menu();
lancheEscolhido = 1;
console.log('Opção de lanche: ' + lancheEscolhido);
querCombo = true;
if(querCombo) {
    console.log('Com combo');
}
else {
    console.log('Sem combo');
}
pagarDinheiro = true
if(pagarDinheiro) {
    console.log('Em dinheiro');
}
else {
    console.log('Em cartão');
}
console.log('Opção de pagamento: ' + tipoPagamento);
pedidosLanchoneteSimples(lancheEscolhido,querCombo,pagarDinheiro);

