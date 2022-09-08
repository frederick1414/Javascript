const dia =0;
let haraActal = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia ===6){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// if (haraActal >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje= 'Esta cerrad, hoy abrimos a las' ,{haraActal} ;
// }


horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje= ( haraActal >= horaApertura) ? 'Esrados abiertos':
console.log({horaApertura});
