// Recupero degli elementi nel DOM
const gridDom = document.getElementById('grid');
const buttonDom = document.getElementById('play');
const difficultyDom = document.getElementById('difficulty');

buttonDom.addEventListener('click', 
    function () {
        if (difficultyDom.value == 'easy') { //? Condizione per il cambio della difficoltà

            for (let i = 1; i <= 100; i++) {
                let square = addSquare();
                square.append(i); //* stampa il numero corrispondente alla posizione della cella
            
                square.addEventListener('click', //* al click dell'elemento creato--->
                    function () {
                        this.classList.add('clicked'); //*--> aggiunge la classe per cambiare colore
                        console.log(i); //*---> stampa in console il numero corrispondente alla cella
                    }
                );
                
                gridDom.append(square); //* stampo la cella nel mio container all'interno del DOM
            }
        } else if (difficultyDom.value == 'normal') {  //? Condizione per il cambio della difficoltà
            for (let i = 1; i <= 81; i++) {
                let square = addNormalDiffSquare();
                square.append(i); //* stampa il numero corrispondente alla posizione della cella
            
                square.addEventListener('click', //* al click dell'elemento creato--->
                    function () {
                        this.classList.add('clicked');
                        console.log(i); //* stampa in console il numero corrispondente alla cella
                    }
                );
                
                gridDom.append(square); //* stampo la cella nel mio container all'interno del DOM
            }
        } else if (difficultyDom.value == 'hard') { //? Condizione per il cambio della difficoltà
            for (let i = 1; i <= 49; i++) {
                let square = addHardDiffSquare();
                square.append(i); //* stampa il numero corrispondente alla posizione della cella
            
                square.addEventListener('click', //* al click dell'elemento creato--->
                    function () {
                        this.classList.add('clicked');
                        console.log(i); //* stampa in console il numero corrispondente alla cella
                    }
                );
                
                gridDom.append(square); //* stampo la cella nel mio container all'interno del DOM
            }
        }
        
    } 
);





// Funzioni invocate nel programma--->
function addSquare() { // funzione per la creazione dinamica delle celle
    const element = document.createElement('div');
    element.classList.add('square');
    return element; //* <div class='square'></div>
}

function addNormalDiffSquare () {
    const element = document.createElement('div');
    element.classList.add('normal-difficulty-square');
    return element; //* <div class='normal-difficulty-square'></div>
}

function addHardDiffSquare () {
    const element = document.createElement('div');
    element.classList.add('hard-difficulty-square');
    return element; //* <div class='hard-difficulty-square'></div>
}
