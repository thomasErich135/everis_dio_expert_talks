// declaração da variavel

//tipo boolean ( pode ser verdadeiro ou falso )
var ingredientes = true;
//tipo numerico ( pode ser numeros inteiros ou com casa decimal)
var tempoDeForno = 5;
//tipo texto
var receita = 'simples'; 

if (ingredientes) {
    console.log('Ingredientes Ok');
    console.log('Iniciar o preparo');
    console.log('Colocar no forno e aguardar ' + tempoDeForno + ' minutos');
    console.log('Lasanha ' + receita +' Pronta');
} else {
    console.log('Esta faltando ingredientes, favor ir ao mercado para comprar:');
}