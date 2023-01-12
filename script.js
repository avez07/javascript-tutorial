console.log("hello world");

//variables
 let Name = "ansari avez";
 //define the variables and asign the values to it 
 console.log(Name)
 alert(Name);

 // define the variables hello and assign the value as avez
 let hello = "avez";
 console.log(hello);

 let message ;
 message = "hello";
 message ="world";

 console.log(message);

 //Declear two variables : admin and name.
 //Asign the value "john " to name .
 //Copy the value from name to admin
 //Show the value in alert (must output "john")
  let admin;
  let name;
  name = "john";
  admin = name;
//   alert(admin);

// constants

const birthday = "29.11.2002";
//birthday = "25.05.1999"
console.log(birthday);

//Dat types in js 
//1. number
let n= 123;
let nf=12.3444;
console.log(n ,nf);

//2. bigint 
let bigint = 1234567890n;
console.log(bigint)

// 3. string

let str = "hellow";
let str2 = 'single quotes are ok to';
let pharse = `can embed another ${str2}`;
console.log(pharse);
alert(`the result is ${1 + 2}`);

//4. boolean 
let isgreater = 4<1;
alert(isgreater);

// 5. null
//it's just a special valur which represent " notting ",  "empty" or "value unkoun".
let age = null;
console.log(age);

//6.undefine 
let data;
console.log(data);

//7. object for more complex data structure .
//8.symbol for unique idenfication .

//basic operaters
//addition
let apple = "2";
let orange = "3";
alert(apple + orange);

//1. arithmatic operaters 
a1 = 20;
a2 =  30;
a3 = a1 +a2;
console.log(a3);

let n1 = 2;
n1 +=5; //now n = 7 (same aas n = n + 5 )
n1 *= 2; // now n = 14 (because loc 82 declare the n = 7 so n = n*2)
console.log( n1 );

let x = 1;
x = -x;
alert( x ); // unaru negatie was applied

let z= 1, y=3;
alert(y - z);

//devision 8 / 3
alert(8 % 3);

//exponentional 2² 
alert(2 ** 2); //2² = 4
alert( 2 ** 3 );// 2³ = 8
alert(2 ** 4);// 2⁴ = 16

//'1' is string that is why the ansawer is 12 or 21
console.log('1' + 2);
console.log(2 + '1');
console.log(2 + 2 + '1');

//3.string operators
let s = "my" + "string";
console.log(s);

//.incremental and decement apertors
//++x pe incremental .... incremental x by 1 then return x
//x++ post-increment ... return x than increment by 1 
// --x pre-decrement ...drement x by 1 then return x
// x-- post-decrement ... return x than decrement by 1

let a;
a = 10; 
console.log(++a);//11
console.log(a);//11

let g;
g = 12
console.log(g++)//12
console.log(g);//13

let b;
b = 15;
console.log(--b);//14
console.log(b);//14

let v = 24;
console.log(v--);//24
console.log(v);//23

//5.logical operators
//&& logical AND : true if both the operands/ boolean value are , else evalutate to false 
// || logical OR : true if either of the operand/boolean value is true. evalute to false if both are false 
// ! logical not :  true if the operand is false and vice-versa.


// AND &&
const c = true , d = false;
e = 2;
console.log(c && d); //false
console.log( c && c); // true 
console.log((e < 1) && (e > 1)); //false

// ||or 
const q = true , f = false
console.log(q || f); // true
console.log(f || f); // false 

//! NOT
const j = true , k = false;
console.log(!j); // false
console.log(!k); //true






