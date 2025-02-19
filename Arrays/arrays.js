let paises = [];

paises.push('chile', 'peru', 'colombia', 'argentina', 'ecuador');
console.log(paises);

let primerPais = paises.shift();
console.log(primerPais);
console.log(paises);

paises.unshift('brasil', 'bolivia');
console.log(paises);

let longitud = paises.length;
console.log(longitud);

let eliminado = paises.splice(2, 1);
console.log(eliminado);
console.log(paises);