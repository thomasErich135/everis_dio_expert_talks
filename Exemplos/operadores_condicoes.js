//Operadores lógicos
// Uso de 0 e 1 para facilitar a visualização

// operador && ( E / AND )
// 1 && 1 = true
console.log(true && true);
// 1 && 0 = false
console.log(true && false);
// 0 && 0 = false
console.log(false && false);

//operador || ( OU / OR )
// 1 || 1 = true
console.log(true || true);
// 1 || 0 = true
console.log(true || false);
// 0 || 0 = false
console.log(false || false);

// Operador ! ( NEGAÇÃO / NOT )
// !0 = true
console.log(!false);
// !1 = true
console.log(!true);

//Operadores matemáticos

//Condicionais retornam 
//verdadeiro ou falso
// 1 > 0 = true
console.log( 1 > 0 );
// 1 < 0 = false
console.log( 1 < 0 );
// 1 == 0 = false
console.log( 1 == 0 );
// 1 != 0 = true
console.log( 1 != 0 );

//calculos aritmeticos simples
// 1 + 0 = 1
console.log( 1 + 0 );
// 2 - 1 = 1
console.log( 2 - 1 );
// 2 * 2 = 4
console.log( 2 * 2 );
// 9 / 3 = 3
console.log( 9 / 3 );

//Condições

// if (se isso então faça isso)
if( 1 > 0 ){
    console.log("1 > 0 = true");
}

if( "teste" == "teste" ){
    console.log("teste é igual a teste");
}

// teste trocar os valores da condicao para - false, false - true, true e descubra o que acontece!
if(false){
    console.log("if ok");
} else if (true) {
    console.log("else if ok");
} else {
    console.log("else ok");
}

// switch case (faça isso caso o valor seja X)
switch ("55") {
    case 1:
        console.log("teste igual a 1");
        break;
    case 55:
        console.log("teste igual a 55");
        break;
    default:
        console.log("teste veio para o valor padrão");
        break;
}
