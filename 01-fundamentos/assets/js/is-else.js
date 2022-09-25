

let a = 5;

if (a > 10){
    console.log('A es mayor de 10');
}
else {
    console.log('es menor que dies')
}

// console.log('Fin de programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); //0: domingo1: lunes, 2: martes......

console.log({dia});

if (dia===0){

// if (5 === '4'){
//     console.log('Domingo');
// } else{
//     console.log('No es domingo');
// }

}else if(dia ===2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo...');
}

// sin usar if else, o shwitc, unicamente objetos

dia =6; 
const diasLetra = {
        
    0:()=>'domingo - 0',
    1:()=>'lunes - 1',
    2:()=>'martes - 2',
    3:()=>'mientras - 3',
    4:()=>'jueves - 4',
    5:()=>'viernes - 5',
    6:()=>'sabado - 6',


}


const diasLetr2 = ['domingo ', 'lunes', 'martes ',  'mientras', 'jueves', 'viernes', 'sabado'];


// dia de la semana

console.log(diasLetra[dia] || 'Dia no definida');