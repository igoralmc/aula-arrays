const numeros = [4, 3, 5];

const nome = ["Jão", "Tilto", "Miguel"];

const tudo = [3, "Igor", 4===5];


// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

// a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).

function arrays(arr1, arr2, arr3){
    console.log(arr1.length)
    console.log(arr2.length)
    console.log(arr3.length)
}
arrays(numeros, nome, tudo);
// b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

function arrays1(numeros, nome, tudo){
    console.log(numeros[0])
    console.log(nome[1])
    console.log(tudo[2])
    
    console.log(numeros.includes(3))
    console.log(tudo.includes(5))
}

arrays1(numeros, nome, tudo);

// c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.