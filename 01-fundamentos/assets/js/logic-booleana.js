

const regresaTrue =() =>{
    console.log('Regresa true');
    return true;
}


const regresaFalse =() =>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);// true
console.log(!true);// true
console.log(!false);// true


console.log(!regresaFalse());// true


console.warn('And');// si todo los valores son verdaderos
console.log(true && true);
console.log(true && false);

console.log('========');
console.log(regresaFalse() && regresaTrue()); 
console.log('========');
console.log( regresaTrue() && regresaFalse()); 


console.log('===== && ====');
regresaTrue() && regresaFalse();

console.log(true || false);
console.log(true || false);


console.log(regresaTrue()|| regresaFalse());

console.log('4 condiciones', true && true && true && false  );//false

console.warn('Asignaciones');


const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false  && 'Hola Mundo' && 150;//?
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no falso';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no falso';

console.log({a1,a2,a3,a4,a5});

if(regresaFalse() && regresaTrue() && (true || false || true) ){
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa');
}
