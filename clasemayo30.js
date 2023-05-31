// MÉTODOS EN ARRAYS 

const arreglo = [1,2,3];
arreglo.push(99);
console.log(arreglo);

const lastElement = arreglo.pop();
console.log(lastElement);
console.log(arreglo);

const array1 = [1,2];
const array2 = [3,4];

const newArray = array2.concat(array1);
console.log(newArray);
console.log(array1);
console.log(array2);

const miArray = [1,2,3,4];
const joinedString  = miArray.join('_');
console.log(joinedString);

const array3 = [3,9,5,4,3];
const slicedArray = array3.slice(1,4);
console.log(slicedArray);
console.log(array3);

const primerIndice = array3.indexOf(3);
console.log(primerIndice);

const ultimoIndice = array3.lastIndexOf(3);
console.log(ultimoIndice);

const array4 = [1,2,3];
array4.forEach(e => {
    console.log(e**2);
});
console.log(array4);

const array5 = [0,1,2,3];
const mappedArray = array5.map(elem => elem*2);
console.log(array5);
console.log(mappedArray);

const array6 = [0,1,2,3,4,5,6,7,8,9,5,6,2,3];
const arrayFiltrado = array6.filter(element => element>2);
console.log(array6);
console.log(arrayFiltrado);

console.log(array6.reverse());
console.log(array6);

console.log(array6.shift());
console.log(array6);

const array7 = array6.splice(1,4);
console.log(array7);
console.log(array6);

delete(array6[1]);
console.log(array6);

const array8 = [1,4,40,10,8,7,90,124];
console.log(array8.sort((a,b)=>a-b));
console.log(array8);

let ciudades2 = ["Zaragoza", "madrid", "Barcelona" , "valencia" , "Ávila"];
console.log(ciudades2.sort((a,b) => a.localeCompare(b)));

let ciudades = ["Zaragoza", "madrid", "Barcelona" , "valencia" , "Ávila"];
console.log(ciudades.sort ((a, b) =>
  a.toLowerCase() > b.toLowerCase() ? 1 :
  a.toLowerCase() < b.toLowerCase() ? -1:
  0
));
console.log (ciudades);

let a,  b, c, loQueQueda;
[a,b] = [10,20];
console.log(a);

console.log(b);

[a,b,c,...loQueQueda] = [10,20,30,40,50];
console.log(a);
console.log(b);
console.log(c);
console.log(loQueQueda);

var m=[];
    m[0]=[(Math.ceil(Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100))];
    m[1]=[(Math.ceil(Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100))];
    m[2]=[(Math.ceil(Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100))];
    m[3]=[(Math.ceil(Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100))];
    m[4]=[(Math.ceil(Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100)),Math.ceil((Math.random()*100))];

console.log(m);

var nuevo = m.flat();
console.log(nuevo);
nuevo.sort(function(a,b){return a - b;});
console.log(nuevo);

var m1 = nuevo.slice(0,4);
var m2 = nuevo.slice(4,8);
m2.reverse();
var m3 = nuevo.slice(8,12);
var m4 = nuevo.slice(12,16);
m4.reverse();
var m5 = nuevo.slice(16,20);

let final = [m1,m2,m3,m4,m5];

console.log(final);










