// L’utente sceglie pari o dispari e inserisce un numero
//  da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// (usando una funzione)
// Dichiariamo chi ha vinto.


let pariDispariUtente=prompt("scegli 'p' per pari e 'd' per dispari");

while (pariDispariUtente != "p" && pariDispariUtente != "d"){
    if (pariDispariUtente != "p" && pariDispariUtente != "d"){
        pariDispariUtente = prompt("per favore, scegli 'p' per pari e 'd' per dispari");
    }
}

let numero = parseInt(prompt("scegli un numero da 1 a 5"));

while (numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5) {
    if (numero != 1 && numero != 2 && numero != 3 && numero != 4 && numero != 5) {
        numero = prompt("per favore, scegli un numero da 1 a 5");
    }
}


let sum=numero+generaRandom(4);
let risultato=pariDispari(sum);

if(risultato==pariDispariUtente){
    alert(`Hai vinto! La somma è: ${sum}`);
}else{
    alert(`Hai perso! La somma è: ${sum}`);
}





function pariDispari(n){
    if(n%2==0){
        return "p";
    }else{
        return "d";
    }
}



function generaRandom(max) {
    return Math.floor((Math.random() * max) + 1);
}


