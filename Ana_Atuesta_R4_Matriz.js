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

