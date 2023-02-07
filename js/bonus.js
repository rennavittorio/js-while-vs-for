/* BONUS:
SHUFFLE ARRAY 
a partire da una array con dei dati 
creare un algoritmo che vada a mescolare gli elementi al suo interno
*/

//METHOD 1
//mescolare gli elementi di un array vuol dire rendere casuale l'indice ad esso assegnato
    //prendo il primo elemento della lista e lo metto in un indice random di una nuova lista
    //per gli elementi successivi faccio lo stesso, controllando che quell'indice non sia già occupato
        //SE non è occupato è undefined ?

//lista di partenza
let numList = [
    'tizio',
    'caio',
    'sempronio',
    'pippo',
    'pluto',
    'paperino'
];

console.log(numList);





//SENZA ARRAY?
let rndIndexList = [];

while (rndIndexList.length !== numList.length) {
    const rndIndex = Math.floor(Math.random() * numList.length); //genero un num rnd da 0 a lunghezza lista

    let numFinded = false; //controllo se il nuovo num è già presente nella lista
    for (let i = 0; i < rndIndexList.length; i++){
        if (rndIndex === rndIndexList[i]){
            numFinded = true;
            break
        } 

    }

    if (rndIndexList.length === 0 || !numFinded) {
        rndIndexList.push(rndIndex);
    };

}

console.log(rndIndexList);



//creo nuova lista in cui pushiare gli elementi seguendo i nuovi indici rnd
let newRndList = [] 

for (let i = 0; i < numList.length; i++){
    newRndList[rndIndexList[i]] = numList[i]; //all'index rnd, inseriscimi il 1°, 2°...elemento della lista iniziale
}

console.log(newRndList); //EUREKA


//METHOD 2
    //prendo un elemento random della lista e lo metto in una nuova lista
    //per gli elementi successivi faccio lo stesso, controllando che l'elemento non sia stato già preso
        //SE preso, non ri-prendere

