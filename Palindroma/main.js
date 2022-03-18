// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola=prompt("Dammi una parola");
let reverse;
let p="Parola palindroma";
let n="Parola non palindroma";



function palindroma(x,y,a,b){
    y = x.split("").reverse().join("");

    if(y==x){
        return a;
    }else{
        return b;
    }

}

alert(palindroma(parola,reverse,p,n));


