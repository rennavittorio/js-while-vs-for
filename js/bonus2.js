/* BONUS:
SHUFFLE ARRAY 
a partire da una array con dei dati 
creare un algoritmo che vada a mescolare gli elementi al suo interno
*/

//lista di partenza
let nameList = [
    'tizio',
    'caio',
    'sempronio',
    'pippo',
    'pluto',
    'paperino',
    'osanna',
    'nell',
    'alto',
    'dei',
    'cieli'
];

console.log('start list: ', nameList);


//prendere un elemento rnd dalla lista e posizionarlo alla fine della lista, cancellandolo subito dopo
for (let i = 0; i < nameList.length; i++){
    const rndIndex = Math.floor(Math.random() * nameList.length); //genero un num rnd da 0 a lunghezza lista
    nameList.push(nameList[rndIndex]); //prendo un elemento rnd e lo pusho alla fine
    nameList.splice(rndIndex, 1); //elimino l'elemento dalla posizione pescata

}

// console.log(rndIndex);
console.log('end rnd list', nameList);

//metodo di controllo per vedere se effettivamente sono differenti
let startList = [
    'tizio',
    'caio',
    'sempronio',
    'pippo',
    'pluto',
    'paperino',
    'osanna',
    'nell',
    'alto',
    'dei',
    'cieli'
];

let checkLists = false
let counter = 0;

for (let i = 0; i < startList.length; i++){

    if (startList[i] === nameList[1]){
        counter++
    }

}

if(counter === startList.length){
    checkLists = true;
    console.log(checkLists, 'le due liste sono uguali');
} else {
    console.log(checkLists, 'le due liste sono diverse');

}
