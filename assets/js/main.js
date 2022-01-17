// ---------- Intro lev1_7 ----------

let helloWorld = "Hello World";
const pi = 3.14;
let burjdubai = "828m";
let fullName = "Jan Schmidt";
let eifelTower = "324m";
const camelCase = "CamelCase";
let kursStatus = true;


// ---------- console.log lev1_1 ----------
console.log("---------- console.log lev1_1 ----------");

let a = 12;
let b = a * 3;

console.log(b);

document.write(b);

console.log(document.URL);

console.log("Hello World");
console.log("Anton");
let name = "Anton";
console.log(name);
let age = 28;
console.log(age);
let job = "Trainer";
console.log(job);
let married = true;
console.log(married);
console.log(name + " ist " + age + " Jahre alt und ist verheiratet: " + married);


// ---------- Variablen lev1_5 ----------
console.log("---------- Variablen lev1_5 ----------");

let carName = "BMW";
console.log(carName);
let x = 150;
console.log(x);
let y = 50;
console.log(y);
let z = x + y;
console.log(z);

let firstName, lastName ,age2;
firstName = "John";
lastName = "Doe";
age2 = 35;
console.log(firstName, lastName, age2);


// ---------- Variablen lev1_6 ----------

// var z2 = 34;
// z2 = 67;
// console.log(z2);

// let x2 = 34;
// x2 = 67;
// console.log(x2);

// const y2 = 34;
// y2 = 67;
// console.log(y2);


// ---------- Arithmethic lev1_12 ----------
console.log("---------- Arithmethic lev1_12 ----------");

let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);
score3 += 10;
console.log("Ergebnis: " + score3);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("decrement: " + zahl);


// ---------- Arithmethic lev1_13 ----------
console.log("---------- Arithmethic lev1_13 ----------");

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

//Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Divison
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);


// ---------- document.write lev1_1 ----------

document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day!</p>");
let myText = "Hello again";
document.write(myText);
document.write("<br></br>");
let vorName, nachName;
vorName = "Waldemar";
nachName = "Teichreb";
document.write("Name: " + vorName);
document.write("<br>");
document.write("Nachname: " + nachName);
document.write("<br></br>");


// ---------- string methods lev1_11 ----------
console.log("---------- string methods lev1_11 ----------");

let x3 = "Hello ";
let y3 = "World<br>";
let z3 = x3 + y3;
document.write(z3);

let n = x3 + " " + y3;
document.write(n);
n = x3 + "World";
document.write(n + "<br>");

document.write(x3 + "World");

let meinString = "Ich bin Erster";
meinString = "Ich komme auf Platz zwei";
console.log(meinString);


// ---------- window object lev1_4 ----------
console.log("---------- window object lev1_4 ----------");

window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");

let alter = prompt("Gib mir bitte dein Alter:" );
console.log(alter);

let b2 = 5;
let a2 = b2 * 5 - 3;
alert(a2);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);