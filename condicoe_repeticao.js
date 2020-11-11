// declaração da variavel
var molhoDeTomate = true;
var massaDeLasanha = true;
var queijoMussarela = true;

if (molhoDeTomate && massaDeLasanha && queijoMussarela) {
    console.log('Ingredientes Ok'),
    console.log('Iniciar o preparo')

    console.log('Colocar no forno')
    var tempoDeForno = 0; 
    while(tempoDeForno <= 30) {  // 30 minutos
      
        console.log('Aguardar: ', tempoDeForno, ' minuto(s)')
        tempoDeForno = tempoDeForno + 1;
    }

    console.log('Lasanha Pronta')

} else {
    console.log('Esta faltando ingredientes, favor ir ao mercado para comprar:')
    if(!molhoDeTomate) {
        console.log('Molho de tomate')
    }
    if(!massaDeLasanha) {
        console.log('Massa de lasanha')
    }
    if(!queijoMussarela) {
        console.log('Queijo mussarela')
    }
}