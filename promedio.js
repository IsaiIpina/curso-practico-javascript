// const LISTA1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaLista1 = 0;

// for (let i = 0; i < LISTA1.length; i++) {
    
//     sumaLista1 = sumaLista1 + LISTA1[i];
    
// }

// const promedioLista1 = sumaLista1 / LISTA1.length;

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}