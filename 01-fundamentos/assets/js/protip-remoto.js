// function crearPersonas(nombre, apeellido){
//     return{
//         nombre,
//         apeellido
//     }
// }



const crearPersonas =(nombre,apellido) => ( { nombre, apellido})


const persona = crearPersonas('Fernando','Herrera');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad,...arg) => {
    // console.log({arg});
    return arg;
}




const [casado, vivo, nombre,saludo] = argumentos = imprimeArgumentos(10,true,false,'Fernando','Hola');
console.log({casado, vivo, nombre,saludo});


const {apellido: nuevoApellido} = crearPersonas('Fernando','Herrera');
console.log({nuevoApellido});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) =>{

//     console.log('nombre', personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('traje',personaje.trajes);
// }

const imprimePropiedades = ({nombre,codeName,vivo,edad =15,trajes}) =>{
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);