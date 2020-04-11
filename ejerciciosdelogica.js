// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
function greatestElement(numbers) {
    //Evaluo si la array entrada es vacía
    if (!numbers.length) {
        return null;
    }
    let greatest = 0;
    //para cada elemento evaluo si es más grande que el valor más grande guardado. Si lo es, cambio el valor más encontrado.
    numbers.forEach(element => {
        if (element > greatest) {
            greatest = element;
        }
    });
    return greatest;
}
let numeros = [10, 9, 5, 20, 15];
console.log("el elemento mas grande es: " + greatestElement(numeros));


// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function sumaNum(numbers) {
    if (!numbers.length) {
        return null;
    }
    return numbers.reduce((number, acc) => {
        return acc + number;
    }, 0);
}
console.log("la suma es: " + sumaNum(numeros));


// 3 - Escriba una función que retorne true si una String es un palíndromo

function isPalindrome(frase) {
    //Evaluo si la array entrada es vacía
    if (!frase.length) {
        return null;
    }
    let phraseToLower = frase.toLowerCase();
    let conPhrase = "";
    let revPhrase = "";
    //en minúsculas la frase original
    for (let i = 0; i < phraseToLower.length; i++) {
        if (phraseToLower.charAt(i) != " ") {
            conPhrase = conPhrase.concat(phraseToLower.charAt(i));
        }
    }
    //en minúsculas la frase original al revés
    for (let i = phraseToLower.length - 1; i >= 0; i--) {
        if (phraseToLower.charAt(i) != " ") {
            revPhrase = revPhrase.concat(phraseToLower.charAt(i));
        }
    }
    //comparo
    if (conPhrase === revPhrase) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome("A man a plan a canal Panama"));

// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function combinArrays(arr1, arr2) {
    //Evaluo si las arrays entrada son vacías
    if (!arr1.length || !arr1.length) {
        return null;
    }
    //calculo la longitud mínima de las arrays
    longitudMin = arr1.length <= arr2.length ? arr1.length : arr2.length;
    arrayCombinada = [];
    //Hasta la longitud de la array más corta, combino
    for (let i = 0; i < longitudMin; i++) {
        if (i % 2 === 0) {
            arrayCombinada.push(arr1[i / 2]);
        } else {
            arrayCombinada.push(arr2[Math.floor(i / 2)]);
        }
    }
    //según el caso retorno la array o añado la parte restante de las arrays
    if (longitudMin === arr1.length && longitudMin === arr2.length) {
        return arrayCombinada;
    } else if (longitudMin === arr1.length) {
        return arrayCombinada.concat(arr2.splice(longitudMin, arr2.length - longitudMin));
    } else {
        return arrayCombinada.concat(arr1.splice(longitudMin, arr1.length - longitudMin));
    }
}

arrLt = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
arrNum = [1, 2, 3, 4];
console.log(combinArrays(arrLt, arrNum));

// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci 
// Los primeros números Fibonacci son 1 y 1. 
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function fibonacci100() {
    let fibonnaciHundred = [1, 1];
    //el número siguiente de Fibonnaci es siempre la sua de los dos anteriores

    for (let i = 2; i < 100; i++) {
        fibonnaciHundred.push(fibonnaciHundred[i - 1] + fibonnaciHundred[i - 2]);
    }
    return fibonnaciHundred;
}

//console.log(fibonacci100());

// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línes
// dentro de un cuadro retangular. 
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function rectangularPrint(arrayStrings) {
    //Evaluo si la array entrada es vacía
    if (!arrayStrings.length) {
        return null;
    }
    let maxLength = 0;
    //calculo la longitud de la string mas larga
    for (let i = 0; i < arrayStrings.length; i++) {
        if (arrayStrings[i].length > maxLength) {
            maxLength = arrayStrings[i].length;
        }
    }
    // borderStr son la primera y última string de *. insideStr tiene un * al principio y al fin y una palabra dentro
    let borderStr = ("*");
    let insideStr = ("*");
    //creo todos los * en borderStr y la insideStr con la longitud mas larga +3 porque entre el primer * y la palabra hay un espacio y entre la última letra
    //de la palabra más larga y el * también hay un espacio.
    for (i = 0; i < maxLength + 3; i++) {
        borderStr = borderStr.concat("*");
        if (i < maxLength) {
            insideStr = insideStr.concat(" ");
        } else if (i === maxLength) {
            insideStr = insideStr.concat("*");
        }
    }
    //Imprimo borde superior
    console.log(borderStr);
    //Inserto las palabras en la insideStr e imprimo
    for (let i = 0; i < arrayStrings.length; i++) {
        arrayStrings[i] = insideStr.slice(0, 2) + arrayStrings[i] + insideStr.slice(arrayStrings[i].length, insideStr.length);
        console.log(arrayStrings[i]);
    }
    //Imprimo borde inferior
    console.log(borderStr);
}

rectangularPrint(["Hello", "World", "in", "a", "frame", "and", "strangely", "enough", "it", "works", "!"]);

// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "... --- ..." Asumo / entre palabra y 1 espacio entre letra

function morseTranslator(string) {
    const alphabet = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        "/": " ",
        "-·-·--": "!",
        "·-·-·-": ".",
        "--··--": ","
    };
    //Evaluo si la array entrada es vacía
    if (!string.length) {
        return null;
    }
    //Evaluo si es codigo more la string recibida. Para el código morse evtransformo las 
    //frases en palabras y las palabras en letras a  fin de poder decodificarlas
    if (string.charAt(0) === "-" || string.charAt(0) === "." || string.charAt(0) === "·") {
        //cada palabra se separa con un "/"
        let palabras = string.split("/");
        //cada letra se separa con un espacio
        let letra = palabras.map(palabra => palabra.split(" "));
        //frase es la frase transformada
        let frase = [];
        //Frase
        for (let i = 0; i < letra.length; i++) {
            //letras concatenadas
            for (let j = 0; j < letra[i].length; j++) {
                frase.push(alphabet[letra[i][j]]);
            }
            //si no es el final de la array quiere decir que hemos acabado la palabra y debemos
            //añadir un espacio
            if (i != letra.length - 1) {
                frase.push(" ");
            }
        }
        //uno los elementos de la array para convertirla en una string
        return console.log(frase.join(""));

    } else {
        //De letras a morse 
        //entre palabras hay un espacio de separación
        let palabras = string.split(" ");
        //entre letras no hay ningun espacio, es decir cada letra la separo
        let letra = palabras.map(palabra => palabra.split(""));
        let frase = [];
        for (let i = 0; i < letra.length; i++) {
            //Palabara en morse
            for (let j = 0; j < letra[i].length; j++) {
                //Busco por valor de referencia para encontar la key correspondiente que es el valor morse de la letra
                frase.push(Object.keys(alphabet).find(key => alphabet[key] === letra[i][j]));
                //entre letra y letra en morse pongo un espacio
                frase.push(" ");
            }
            //separación entre palabras es "/"
            if (i != letra.length - 1) {
                frase.push("/");
            }
        }
        //retorno la frase codifcada en morse
        return console.log(frase.join(""));
    }

}

morseTranslator("Ironhack rules ! !");



// 8 - A partir de 2 Strings, escribir un programa que encuentre la sequencia comun de caracteres más grande
// ej: subsequence("Hola soy una String", "Hola soy una otra String")
// debería retornr "Hola soy una "
// ojo que la palabra "String" también es una sequencia comun, bien como "una", "soy", la letra "a"...
// pero hay que retornar la string comun más grande posible

function commonString(str1, str2) {
    //Evaluo si la arrays entradas son vacías
    if (!str1.length || !str2.length) {
        return null;
    }
    //transformo las strings en arrays
    const str1Array = str1.split(" ");
    const str2Array = str2.split(" ");
    //cual de las dos arrays es mas corta
    const masPeque = (str1 - str2 ? str2.length : str1.length);
    //parte común
    let comStr = [];
    //por cada elemento, es decir, palabra de las dos arrays miro si elemento a elemento
    //son iguales y las guardo en la array comuna. Cuando ya no lo sean, salgo del for
    for (let i = 0; i < masPeque; i++) {
        if (str1Array[i] === str2Array[i]) {
            comStr.push(str1Array[i]);
        } else {
            break;
        }
    }
    //devuelvo la array común transformada en string
    return console.log(comStr.join(" "));
}
commonString("Hola soy una String", "Hola soy una otra String");


// 9 - If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

//Cuenta Solo funciona hasta 1000 en inglés
function numberToletters(num) {
    if (!num) {
        return null;
    }
    /* Array of units as words 1 to 19*/
    const units = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4,
        3, 6, 6, 8, 8, 7, 7, 9, 8, 8
    ];

    /* Array of tens as words 0, tens, 20-90 */
    const tens = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];

    /* Array of scales 0, hundred, thousand as words */
    const scales = [0, 7, 8];
    //contador de letras usadas
    let count = 0;
    //de uno al número en entrada calclo el número de letras que respresenta
    //y lo añado al cómputo global
    for (let i = 1; i < num + 1; i++) {
        //valor en número de letras del número ue está siendo evaludo
        let incount = 0;
        //transformo el número en array
        let numStr = i.toString().split("");
        //si el número es del 1 al 19 su valor en índice de tens devuelve ya el número
        //de letras y lo añdo al cómputo interno
        if (numStr.length === 1 || i < 20) {
            incount += units[i];
            //si el número es de 20 a 90 tengo que mirar su decenas y unidades
            //y utilizar el número de las decenas que se encuentra en la posición 1
            //y evaluar con él teens para volver su valor de letras y el posición 2, las unidades, con units.
        } else if (numStr.length === 2 && i >= 20) {
            incount += units[numStr[1]] + tens[numStr[0]];
            //Si estoy en los centenares
        } else if (numStr.length === 3) {
            //el número es el valor de hundred que es scales[1] más el valor en letras de la unidad
            //ej: 300 es hundred + three, es decir scales[1] = 7 + units[numStr[0]], siendo numStr 3,
            //su valor es 5 , incount siendo 12.
            incount += scales[1] + units[numStr[0]];

            //para replicar la lógica de arriba el resto
            //me quedo con la parte de las decenas y unidades
            let resto = numStr.splice(1, 2);
            let j = parseFloat(resto.join(""));
            //añado 3 por "and"
            if (j != 0) {
                incount += 3;
            }
            if (j < 20) {
                incount += units[j];
            } else {
                incount += units[resto[1]] + tens[resto[0]];
            }
        } else if (i === 1000) {
            incount += scales[2];
        }
        count += incount;
    }
    return console.log(count);
}

numberToletters(342);



// 10 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sumaMultiples(num) {
    //Evaluo si la array entrada es vacía
    if (!num) {
        return null;
    }
    let suma = 0;
    //miro y sumo los números que son múltiples de 3 o 5. Los que son múltiples de los dos son evaluados una sola vez.
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }
    return console.log(suma);
}

sumaMultiples(10);