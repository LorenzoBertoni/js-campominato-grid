// Recupero degli elementi nel DOM
const gridDom = document.getElementById('grid');
const buttonDom = document.getElementById('play');

buttonDom.addEventListener('click', 
    function () {
        for (let i = 1; i <= 100; i++) {
            let square = addSquare();
            square.append(i); //* stampa il numero corrispondente alla posizione della cella
        
            square.addEventListener('click', //* al click dell'elemento creato--->
                function () {
                    this.classList.add('clicked');
                    console.log(i); //* stampa in console il numero corrispondente alla cella cliccata
                }
            );
            
            gridDom.append(square); //* stampo la cella nel mio container all'interno del DOM
        }
        
    }
);


function addSquare() { // funzione per la creazione dinamica delle celle
    const element = document.createElement('div');
    element.classList.add('square');
    return element; //* <div class='square'></div>
}
