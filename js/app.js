// console.log('les go')

/* DESCRIZIONE:
Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt.
Se il numero è dispari, lo salviamo in una lista.
Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari.
Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta. */

//creo lista per contenere numeri utenti
let userNumList = [];

//creo ciclo, fino a lista = 10 item, in cui:
    //chiedere ad utente un numero
    //controllare se dispari
    //inserire in lista

do {

    let userNumInput = parseInt(prompt('insert an odd number'));
    if (userNumInput % 2 !== 0 && !isNaN(userNumInput)){
        //per i num negativi inseriti dall'user serve usare il controllo !== perché
        //il modulo restituisce num negativi
        userNumList.push(userNumInput);
    }

} while (userNumList.length !== 10);

console.log('lista finale', userNumList);

//li stampo in console uno alla volta
for (let i = 0; i < userNumList.length; i++){
    console.log('num utente alla posizione', userNumList[i]);
}












/* BONUS:
SHUFFLE ARRAY 
a partire da una array con dei dati 
creare un algoritmo che vada a mescolare gli elementi al suo interno
*/