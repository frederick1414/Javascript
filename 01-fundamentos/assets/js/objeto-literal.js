let  personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880 , 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinit War'
};

console.log(personaje);
console.log('nombre',personaje.nombre);
console.log('nombre',personaje['nombre']);
console.log('edad',personaje.edad);

console.log('Coors',personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes',3);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length - 1]);

const x = 'vivo';
const pelicula = 'Infinit War';
console.log('vivo', personaje[x]);

console.log('ultima pelicula',personaje.ultima-pelicula);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje = true;

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 10000000000;
personaje.casado = false;
    //ubicacion: 'Malibu, California'
//personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores     = Object.values(personaje);
//console.log({propiedades,values});