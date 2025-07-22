<!-- DAY-1 -->
 <!-- saketpatnayak.in website resources -->

# javascript

1. Javascript is scripting and programming language
2. JS is multi paradigm(i. object-oriented program.lang
   ii. object based language
   iii. functional programming)
3. JS is client side and server side language
4. JS is compiled and interpreted lang

# JAVA

1. JAVA is programming lang
2. java is oops lang
3. java is server side lang
4. java is compiled and interpreted lang.

# HISTORY OF JAVASCRIPT

Brandon Eich (sda)
ctrl + shift i => open inspect of browser
why we do not write script in head of html

because if we write in Head then first script file will run and UI will slow rest of html code will run slow after script file

#ASYNC AND DEFER

<script async src ="script.js"></script>  :- ye async script file ko side me le jaiga tab tak UI uplod hogi fir jab Script file execute ho jaigi to o bich me UI me aa jaigi.

aur multiple async script file hogi to sara file fluctuate hogi agar execute baar baar hogi to har baar dusri

<script defer src ="main.js"></script> :- DEFER script file ko side me le jaiga tab tak UI sara UI upload ho jaigi fir last me script file jaigi ui me .

ye execute same order me kregi kitne baar bhi kre at last me

<!-- #day-2:--- -->

HOW JS ACTUALLY WORK ?

SCRIPT.JS ---connect---> index.html==run==> Browsers

**#Inside-Browsers:-**
JRE -> ek aaisa environment jaha pe javascript ka code run kar jai .(js runtime environment)

1. webAPI's (search mdn for webapi)
   i. DOM
   II. EVENT
   III. PROMISE (asyc)
   IV. NAVIGATOR
   V. setTimeOut(asyc)
   vi.setInterval(asyc)
   vii.fetch()
2. MICROTASK QUEUE(High priority queue) (store promise)
3. MACROTASK QUEUE (store callback)

4. STORAGE
   I. Local Storage
   ii. Session Storage
   iii. Index DB
   iv. cookies
   v. cache

5. JS ENGINE (c++ code bundle of code )
   I. parser : check syntax
   ii. Abstract Syntax Tree (AST) --> making tree for a line of instruction
   ii. Tokenization: identifying and giving name
   iii. JIT Compiler===optimization=> Interpreter
   <== Deoptimization==
   iv. garbage collector --> after use the stack memory is freed in callstack
   v. heap Memory --> m/m to run the code .
   v. CallStack (main thread) --> m/m passed by heap is collected here in form of stack.

   ||EVENT LOOP

6. Google chrome -------------v8
7. Mozilla firefox------- Spider Monkey
8. Safari ---------- -----Javascript core
9. Ms edge------------------chakra
10. Brave --------------------v8

<!-- day-3 -->

What is token ?

it is the smmallest unit of programming languge.

# Types of Token:---

i. keyword
ii. Indentifier
iii. Operator
iv. literal
v. Punchuator

eg:--
let name = "raj";

let -->keyword, name -->Indentifier, = --> Operator, raj-->literal, ;-->Punchuator.

true/truhy value ---------- false/ faklsy value
-------------------------------- +- 0
----------------------------------0n
----------------------------------null
----------------------------------undefined
--------------------------------empty string()
-----------------------------------Nan
------------------------------------0.0

<!-- logical operator -->

console.log(1 && 2) output = 2 first 1 ko check karega agr true h to dusra check hota h jo 2 h fir o 2 return kar dega . agar first wala false hua to direct false return kar dega

console.log( 3 || 4) output = 3 issme pahle 3 check hoga agr true hua to direct 3 output hoga agar false hua to dusra value check hoga .

const name = prompt("enter mobile number)
ye 2 button create karega ok and cancel agar cancel kareinge to o falsy value(null ) name variable me store kar dega

<!-- logical not(!) -->

const username = prompt("enter name)
agar username nhi aaiya to null value aaiga jo if block true hoga fill block executr hoga .

if(!username){

}

<!-- Conditional Operator -->

oerand-1 ? operand-2 : operand-3

<!-- Opetional chainiung -->

product ? category ? shoes ? redTape

<!-- #Literals -->

Literals are different types of values that is used in writting a program.

# Types of Literals (2 types)

1. Primitive Literals:----
   i. Single values literals
   ii. Cannot change (immutable) harr baar alag alag address ko point karta h .
   Eg:-- let a = 10; -->memory
   a = 100--->new memory
   a= 300 ----> latest memory
   baki memory garbage collector free kar deta h .

# 8 Types of primitive literals

i. number :- -2^53-1 to +2^53-1
ii. bigInt :- +- 9007199254740991
iii. Nan :- const a = "10abc" const b =5 , clg(a-b) output :- NAN
iv. Boolean
v. null
vi. undefined
vii.string

2. Non Primitive Literals
   always written in bracket such as [], {}, ();
3. Multi value literals
4. can change (mutable)

eg:----- const arr =["html","css"]
----------arr[1]= "sql"; same memory me adress pe ja k change kar dete h .

# String

# Types Of String

1. Single Line String:-- Single Quotes ' ' and Double Quotes " "
   const user = 'raj';
   const userInfo = "welcome to JS Lecture";

2. Multi Line Strings :- (` `) backtick
   const user1 = "raj"
   const user2 =`virat 
-------------kohli`
   output:- Virat kohli

${variable} --> called template String

process of using are called String Interpolation

% # Scope in JS

3 Scope

1. Global
2. Script Scope :- when variable are declared without having any bracket it will go in script Scope.
3. Local/ Block Scope :- defined in bracket {}.
   local>>script>>global. when we are logging the variable which are not in local scope then it will search in next scope that is script Scope if there also not found then it will search in global scope and print them.
   .var are global scope .
   .let and const are written without having the bracket the it will be in script scope

% day-6 scope and autoglobal(autoglobals are created in execution phase)

% global execution context
2 things are here

1. Variable Phase:-
   first variable scope are search and assing the memory accoring to type of variable(global, script, local), if variable defined with let and const they will get the memory but empty . but if assing with var will create a memory in global and assign undefined to it.
   if block started then again variable scope will run inside a bloc and allot memory .
   when the execution are completed then the block scope goes to garbage collector.

2. Execution Phase:-
   in execution phase the values are assign to the memory of according to scope.

% ==========================# Variable Shadowing:============
window name -variable :- always have a address of global scope.
this also have global scope
self also have global scope
frames also have global scope
global in node also have global scope .
:-
now this create a confusion having 5 same type of global name
so the solution are creating a variable name with globalThis.

% ===========================HOISTING=================

1. The ability of JS engine to access a variable before its declaration statement is knowns as Hoisting.
2. Variable declared with var,let and const keyword support hoisting.

% #==============================TEMPORAL DEAD ZONE(TDZ)=============================

I. It is the time frame between variable decleration and variable Initialisation . In this time frame we cannot access the variable .
ii. Variable declared with let and const belongs to TEMPORAL DEAD ZONE(TDZ).
