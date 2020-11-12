var lancheEscolhido = null;
var querCombo = null;
var tipoPagamento = null;

// função para mostrar o menu
function menu() {
    console.log("Bem vindo a lanchonete G, nosso menu:");
    console.log("1 - BiGLanche - R$ 10 (lanche) R$ 14 (combo)");
    console.log("2 - FranGLanche - R$ 9 (lanche) R$ 13 (combo)");
    console.log("3 - VeGLanche - R$ 11 (lanche) R$ 16 (combo com suco de beterraba, e chips de aipim)");
}
// função para fazer pedido
function pedidosLanchoneteSimples(lanche, combo, pagamento) {
    var lancheCarrinho = null;
    var comboCarrinho = null;
    var pagamentoCarrinho = null;
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
    if(combo === 'S') {
        comboCarrinho = 'combo';
    } else if (combo === 'N') {
        comboCarrinho = 'lanche';
    }

    if(pagamento === 'D') {
        pagamentoCarrinho = 'dinheiro';
    } else if (pagamento === 'C') {
        pagamentoCarrinho = 'cartão';
    }
    if(lancheCarrinho && comboCarrinho && pagamentoCarrinho){
        totalCarrinho = calcularTotalPedido(lanche,combo);
        console.log('Seu pedido foi um: ' + lancheCarrinho +', Tipo: ' + comboCarrinho + ', total: ' + totalCarrinho + ', pagamento: ' + pagamentoCarrinho);
    }
}
// função para calcular o total do pedido
function calcularTotalPedido(lanche,combo) {
    if(lanche === 1 && combo === 'S') {
        return 14;
    } else if(lanche === 1 && combo === 'N') {
        return 10;
    } else if(lanche === 2 && combo === 'S') {
        return 13;
    } else if(lanche === 2 && combo === 'N') {
        return 9;
    } else if(lanche === 3 && combo === 'S') {
        return 16;
    } else if(lanche === 3 && combo === 'N') {
        return 11;
    }
}
menu();
lancheEscolhido = 1;
querCombo = 'S';
tipoPagamento = 'D'
pedidosLanchoneteSimples(lancheEscolhido,querCombo,tipoPagamento);

