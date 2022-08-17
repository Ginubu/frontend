let message: string = 'Cacatua';
console.log(message);

function hola(arg : any): string{

    let message: string=  (arg as string).toString() + ' JAJAJA';

    return message; 
} 

console.log( hola('ñandu'));