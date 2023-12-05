const numeros = [4, 3, 5];
const nome = ["Jão", "Tilto", "Miguel"];
const tudo = [3, "Igor", 4===5];

// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.

// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

const numerosCopia = numeros.slice();
const nomeCopia = nome.slice();
const tudoCopia = tudo.slice();


// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Crie uma função que recebe o primeiro array como parâmetro e adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para imprimir o original e a cópia.

function adicionaItem(array){
    array.unshift(10);
    console.log(array);

}
console.log(numeros);
adicionaItem(numerosCopia);

// b) Crie uma função que recebe o segundo array por parâmetro e remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.

function removeItem(array){
    array.pop();
    console.log(array);
}

console.log(nome);
removeItem(nomeCopia);

// c) Crie uma função que recebe por parâmetro o terceiro array e remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.

function removeSegItem(array){
    array.splice(1, 1);
    console.log(array);

}

console.log(tudo);
removeSegItem(tudoCopia);