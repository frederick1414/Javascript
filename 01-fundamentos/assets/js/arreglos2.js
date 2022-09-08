let juegos = ['Zelda','Mario','Metroid','Chorno'];
console.log('Large:', juegos.lenght);

let primero = juegos[2-2];
let ultimo = juegos[juegos.lenght =-1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento,indice,arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.push('Fire Emblen');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

let pos = 1;

console.log({juegos});
let juegoBorrados = juegos.splice(pos, 2);
console.log({juegoBorrados, juegos})

let metroIndex = juegos.indexOf('metroid');
console.log({metroIndex});


