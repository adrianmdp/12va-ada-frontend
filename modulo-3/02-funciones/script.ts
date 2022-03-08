function nombreFuncion2(param1: string, param2: boolean, param3: number = 10) {
  // Lo que pasa acá no nos importa
}

nombreFuncion2("Hola", true, 4);

nombreFuncion2("Hola", true);

// nombreFuncion2("Hola");  ERROR



const sumar3numeros = (a: number, b: number, c: number) => {

  return a + b + c;

}


const saldo = 5000;
const intereses = +400;
const impuestos = -500;

sumar3numeros(saldo, intereses, impuestos); // Lo único que importa es el orden

const juan = 30;
const ana = 42;
const maria = 20;

sumar3numeros(juan, ana, maria);




const miFuncion = (a: number, b: string, c:number, d: boolean) => {

  // código

}

const number1 = 20;
const number2 = 30;
const boolean1 = false;
const string1 = "Hola Mundo";

// miFuncion(a, b, c , d);
miFuncion(number1, string1, number2 , boolean1);
miFuncion(number2, string1, number1 , boolean1);
// miFuncion(a, d , a, c);


















sumar3numeros(34, 22, 100)