// declaração da variavel
var molhoDeTomate = true;
var carneMoida = true;
var massaDeLasanha = true;
var queijoMussarela = true;
var tempoDeForno = 5;
var receita = 'bolonhesa'; 

if (molhoDeTomate && massaDeLasanha && queijoMussarela && carneMoida ) {
    console.log('Ingredientes Ok');
    console.log('Iniciar o preparo');
    console.log('Colocar no forno e aguardar ' + tempoDeForno + ' minutos');
    // forma usando while (repita enquanto a condição for verdadeira)
    // while(tempoDeForno != 0) {
    //     console.log('Aguardar: ', tempoDeForno, ' minuto(s)');
    //     tempoDeForno = tempoDeForno - 1;
    // }
    // forma alternativa usando for (repita até chegar ao X)
    for (let index = 1; index <= tempoDeForno; index++) {
        console.log('Aguardando: ', index, ' minuto(s)');
    }
    console.log('Lasanha ' + receita +' pronta');
} else {
    console.log('Esta faltando ingredientes, favor ir ao mercado para comprar:');
}
