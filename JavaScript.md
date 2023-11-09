# JavaScript

# JavaScript

## Variables

**Variables** are **Containers** for Storing Data. JavaScript Variables can be declared in **4 ways**:

- Automatically
- Using `var`**:** `var` can be **Redeclared** and **Reassigned**.
- Using `let`:
    1. The `let` keyword was introduced in ES6 (2015)
    2. Variables defined with `let` cannot be **Redeclared**
    3. Variables defined with `let` must be **Declared** before use
    4. Variables defined with `let` have **Block Scope**
    5. Variables defined with `let` **can not be redeclared**.
    6. You can not accidentally redeclare a variable declared with `let`.
- Using `const`**:** `const` cannot be **Redeclared** or **Reassigned**.

```jsx
**Example:**
var name = "Farhan"; // A string return type string name
let age = 23; // A number return type storing age
const a = 2; // Constant value. Re-assignment is not allowed such as a=3 is not allowed to use var, let, or const.
```

**When to Use var, let, or const?**

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

**Note:**

- All JavaScript variables must be identified with **unique** names.
- These **unique** names are called **identifiers.**
- **Identifiers** can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

**The general rules for naming variables (unique identifiers) are:**

- Names can contain **letters(a-z, A-Z)**, **digits(0-9)**, **underscores(_)**, and **dollar sign($).**
- Names **must** begin with **a letter.**
- Names can **also begin** with **$** and **_** (but we will not use them in this tutorial).
- Names are **case-sensitive** (y and Y are different variables).
- Reserved words (like **JavaScript keywords**) cannot be used as names.

**Tips:** It's a good programming practice to declare **all variables** at the **beginning of a script**. A variable declared **without a value** will have the value **undefined**.

## Operator

**Arithmetic Operator:**

```jsx
//Arithmetic Operator: plus(+), minus(-), multiplication(*), division(/), remainder(%)
let a,b,c;
a = b + c; //sum
a = b - c; //subtract
a = b * c; //multiplication
a = b / c; //division
a = b % c; //remainder

//square operator: **
a = b ** 2; // a= b^2

//increment(++), decrement(--) operator:
var a = 5;
var c,d;
c = a++; //c=5, a=6
d = ++a; //d=6, a=6
```

**String Operation:**

```jsx
string line1, line2;
line1 = "hello";
line2 = "world";
string newStr = line1+line2; //"helloworld", concatened
36 + "Hello"; -> "36Hello" //number+ string = string
36 + 4; -> 40 //number + number = number
"Hello" + 34 + 4; -> "Hello344" //first arrive string + number + number= string (Concatened)
34 + 4 + "Hello"; -> "38Hello" //first arrive number + number + string= sumOfnumbers+string (concatened of sum of numbers and string)
"76" - "3"; -> 73 //substraction of string but numbers = number
"76" + "3"; -> "763" //addition of string but numbers = string (concatened)
"45" - "Farhan"; -> NaN //NaN= Not A Number, substraction of string but numbers and String = NaN
```

**Comparison, Logical and Conditional Operators:**

```jsx
//Comparison
= // assignment Operator
== // comparison Operator, equal to
//comparison always return true or false. 
== //equal but not checking data type
!= //not equal but not checking data type
=== //equal & also check whether the same data type or not
!== //not equal & also check different data types or not
//example: 
4 == "4" // true , checks 4 == 4 , "4" converted to number from string. But it is not the same. It should gives false.

4 === "4" // false, as === checks value and data types so that, here number and string are not the same. So it is false.
 
//Same logic for !=, !== operators 
<,>=,<= -> //compare operator

//Logical Operator
|| //OR
&& //AND
! //NOT
```

## **Data Types**

**Numbers:**

```jsx
var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers take 64 bits

// + can be used for both addition and concatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25"-"5"
"25"/"5" // result 10
"25"*"5"
"25"%"5"
"25"+"5" //exception

//Infinity
var num = Infinity;
25/0 // will get Infinity

//Hexa Decimal Numbers
var x = 0xBB

x.toString() // Returns number as string

x.toString(16);

var x = 3.1416;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

var x = "123"
parseInt(x);
x = "123.45"
parseFloat(x);

isNaN(x);

//Links
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
```

**Strings:**

```jsx
"Hello World"
'Hello World'
"Hello " World"
"Hello  World"
"Hello n World"
'Hello ' World'
'Hello t World'

//Concatenation
"Hello" + "World"

var x = "Hello World";

//Length of String
x.length; //It is a property

//Indexing
"Hello World"[0]
"Hello World"[3]
x = "Hello World";
x[0]
x[3]

//Immutable
x[1]
x[1] = "5"
x[1]

// return a new string doesn't change x
//These are methods
x.slice(1, 5);
x.slice(-6, -1);
x.substr(3, 2); // 2nd parameter means the length
x.replace("Hello", "World");
x.toUpperCase();
x.toLowerCase();
x.concat("1", "2");
x.trim();

//links
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
```

**Boolean:**

```jsx
10>9
-1>2
"Hello" == "Hello"
var x = "Hello";
var y = Boolean(x);

x = null;
y = Boolean(x);

x = 10 / "H";
Boolean(x);

var myVar;
Boolean(x);

//links
//https://www.w3schools.com/jsref/jsref_obj_boolean.asp
```

**Array:**

```jsx
//Collection of items
countries = ["Bangladesh", "USA", "UK"]

countries[0]
countries[1]

country = countries[0]
country

//Mutable
countries[0] = "Poland"
countries
countries.length;
countries[countries.length] = "Norway"

//Push and Pop
countries.push("China"); // return length
countries.pop() // returns length
countries.push("Japan", "Srilanka");
countries.shift() //returns the shifted
countries.unshift("Germany") // returns length

//Empty array
var numbers;
numbers = []
numbers.push(1)
numbers.push(78)
numbers.push("One")

x = "Bangladesh"
var y = x.split("")
x = "Bangladesh is a country"
y = x.split("")
y = x.split("n")
z = x.split(" ")
x = "Bangladesh, China, Finland"
y = x.split(",")

z.toString()
z.join("/")

x.concat(z, y);

countries.sort()
countries.reverse()

//Links
//https://www.w3schools.com/jsref/jsref_obj_array.asp
```

**Object:**

```jsx
student = {name:"Rahim", age:25, hometown:"Dhaka"}
//access object element
student["name"];
student.name;

student = {}
student["name"] = "Rahim"; //assigning value to object

delete student.name;
```

**Nested Array/Object:**

```jsx
Template Literals(ES6):``

// Template literals (ES6)
// Backtick ``
let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name} His age is ${age} Date of Birth ${dob}`);

let a = 34
let b = 67
console.log(`${a} + ${b} = ${ a + b }`);
```

Object Oriented Programming:

Javascript Classes (ES6):

// Class(ES6)
// Class is a template for creating objects

class Person {
constructor(fname, lname, birthday) {
this.firstname = fname;
this.lastname = lname;
this.dob = birthday;
}

```
calculateAge() {
    let birthday = new Date(this.dob);
    let diff = Date.now() - birthday.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

fullname() {
    console.log(this.firstname, this.lastname);
}

```

}

let person1 = new Person("Fazle", "Rahat", "11-13-1988");
let person2 = new Person("Moinul", "Islam", "02-11-1991");
let person3 = new Person("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());

console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());

Sub-Classes: (Inheritence)

// Sub Class
// Inheritance

class Person { //Base Class
constructor(fname, lname) {
this.firstname = fname;
this.lastname = lname;
}

```
greeting() {
    return `Hello ${this.firstname} ${this.lastname}!`;
}

```

}

class Customer extends Person { //Sub Class
constructor(fname, lname, phone, memberShip) {
super(fname, lname);

```
    this.phone = phone;
    this.memberShip = memberShip;
}

fullname() {
    console.log(this.firstname, this.lastname);
}

```

}

let person1 = new Person("Fazle", "Rahat");
console.log(person1);
console.log(person1.greeting());
console.log(person1.fullname());

let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());

Static Funtion: cannot call from object but can be call by class

// Static Function

class Person {
constructor(fname, lname) {
this.firstname = fname;
this.lastname = lname;
}

```
greeting() {
    console.log(`Hello ${this.firstname} ${this.lastname}!`);
}

static test() {
    console.log("I am staic!");
}

```

}

let person1 = new Person("Simanta", "Paul");

console.log(person1.greeting());
console.log(Person.test());

DOM: Document Object Model
Tree of Elements(Nodes) generated by Browser
Javascript can Manipulate DOM

html code:
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css](https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css)" />
<title>Document</title>
</head>

<body>
<div class="container">
<h3 class='sample-class'>Some Random Contents</h3>
<ol>
<li>C++</li>
<li>Java</li>
<li>Python</li>
<li>PHP</li>
</ol>
<hr>
<ul class='sample-class'>
<li class='sample-class'><a href="[https://www.google.com/](https://www.google.com/)">Google</a></li>
<li><a href="[https://www.facebook.com/](https://www.facebook.com/)">Facebook</a></li>
<li><a href="[https://www.linkedin.com/](https://www.linkedin.com/)">LinkedIn</a></li>
<li><a href="[https://www.twitter.com/](https://www.twitter.com/)">Twitter</a></li>
</ul>
<hr>
<form action="" method="post" class='sample-class'>
<label for="link_name">Link Name</label>
<input type="text" name="link_name">
<label for="url">Link</label>
<input type="url" name="url">
</form>
<hr>
<form>
<label for="name">Full Name</label>
<input name="name" type="text">
</form>
</div>

```
<script src="js/script.js"></script>

```

</body>

</html>

Javascipt code:

let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link){
console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);

DOM Selector (single element):

1. document.getElementById()
2. document.querySelector()

[//document.getElementById](https://document.getelementbyid/)()
let val;

//getting an element
val= document.getElementById('document-title');//those elements which has the id 'document-title'
val= document.getElementById('document-title').id;//getting the id of that element
val= document.getElementById('document-title').class;//getting the class of that element

//changing style

document.getElementById('document-title').style.background = '#333';//changing the background
document.getElementById('document-title').style.color = '#fff';//changing the text color
document.getElementById('document-title').style.padding = '10px';//adding padding to the content
document.getElementById('document-title').style.display = 'none/block';//changing display setting

//changing the content
document.getElementById('document-title').textContent = 'New Title';//changing the text
document.getElementById('document-title').innerText = 'Again New Title';
document.getElementById('document-title').innerHTML = '<i>Again again New Title</i>'; //html code will be executed

val= document.getElementById('document-title');
val.innerText = 'Hello I am Farhan';

[//document.querySelector](https://document.queryselector/)()
val = document.querySelector('#document-title'); //id
val = document.querySelector('.title-class'); //class
val = document.querySelector('h3'); //first <h3> tag will be selected

val = document.querySelector('ol'); //first <ol> tag will be selected

val = document.querySelector('li'); //first <li> tag will be selected

val = document.querySelector('ol li'); //first <li> tag of <ol> tag will be selected
val = document.querySelector('ul li'); //first <li> tag of <ul> tag will be selected

val.style.background = 'red';
val.style.color = 'white';

val =  document.querySelector('li:last-child'); //last <li> tag of first <ol> will be selected cause <ol> arrives earlier than <ul> in the document
document.querySelector('li:nth-child(0').innerText = "Hello"; //child number 1 of first list will be selected
document.querySelector('li:nth-child(1)').innerText = "Hello"; //child number 2 of first list will be selected

document.querySelector('li:nth-child(even)').innerText = "Hello"; //first even child of first list will be selected
document.querySelector('li:nth-child(odd)').innerText = "Hello"; //first odd child of first list will be selected

console.log(val);

DOM Selector (Multiple element):

// Multiselector
// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';
[//console.log](https://console.log/)(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function(item){
[//console.log](https://console.log/)(item);
});

// document.querySelectorAll()
// id -> #
// classname -> .
// tagname -> nothing

list = document.querySelectorAll('ol li');
list.forEach(function(item){
[//console.log](https://console.log/)(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEve = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
item.style.background = 'grey';
item.style.color = 'white';
});

liEve.forEach(function(item){
item.style.background = 'red';
item.style.color = 'white';
});

console.log(list);

DOM Traversing:

// Traversing the DOM
let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

val = list.children;
val = list.children[1];
list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);

Add, Delete elements to DOM:

// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
[olItem.id](http://olitem.id/) = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
[//console.log](https://console.log/)(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', '[https://www.instagram.com](https://www.instagram.com/)');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);

// Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

[//console.log](https://console.log/)(link);

Events of Javascript:
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css](https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css)" />
<title>Document</title>
</head>

<body>
<div class="container">
<button id="sample-btn">Click Me</button>
</div>

```
<script src="js/script.js"></script>

```

</body>

</html>

// Events of JavaScript
// [https://www.w3schools.com/JS/js_events_examples.asp](https://www.w3schools.com/JS/js_events_examples.asp)

// Event Listener

document.getElementById('sample-btn').addEventListener('dblclick', message);

function message() {
console.log("Button Clicked");
}

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css](https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css)" />
<title>Document</title>
</head>

<body>
<div class="container">
<form action="">
<input type="text" id="name">
</form>
<p id="demo">The Input Field is Empty!</p>
</div>

```
<script src="js/script.js"></script>

```

</body>

</html>

// Events of JavaScript
// [https://www.w3schools.com/JS/js_events_examples.asp](https://www.w3schools.com/JS/js_events_examples.asp)

// Event Listener

document.querySelector(".container").addEventListener('mousemove', message);

document.querySelector('.container').style.background = "red";

function message(e) {
let val = e;
val = e.target; // this
val = [e.target.id](http://e.target.id/);

```
val = e.timeStamp;
val = e.type;

val = e.clientY;
val = e.clientX;

val = e.offsetY;
val = e.offsetX;
val = this;

this.style.background = `#${e.offsetX}`;

//console.log(val);
console.log(e.offsetX);
console.log(e.offsetY);
console.log(val);

```

}

// Events of JavaScript
// [https://www.w3schools.com/JS/js_events_examples.asp](https://www.w3schools.com/JS/js_events_examples.asp)

// Event Listener

document.querySelector("#name").addEventListener('focus', test);

document.querySelector("#name").addEventListener('keyup', test2);

function test(e) {
this.style.background = 'pink';
}

function test2(e) {
[//console.log](https://console.log/)(this.value);
document.getElementById("demo").innerText = this.value;
}

Error handling:

console.log("Before Error!");

try {
//test();
[//undefined.test](https://undefined.test/)();
} catch(err) {
[//console.log](https://console.log/)(err);
console.log(err.message);
console.log([err.name](http://err.name/));
} finally {
console.log("I am inside finally!");
}

console.log("After Error!");

// Error Handling

let a = 2;

try {
if(a>15) throw "Too Big";
else if (a<5) throw "Too small";
} catch(err) {
console.log(err);
}

///[https://www.w3schools.com/jsref/jsref_obj_error.asp](https://www.w3schools.com/jsref/jsref_obj_error.asp)

Regular expression:

// Regular Expression
// Pattern Matching Technique
let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);

str = "HelLo World";
str = "Again Hello World";
str = "Hell World";
str = "sdsHellosds World";
str = "Again Hello World Hello";
str = "World";

// exec() - Returns result in an array or null
let result = re.exec(str);

// test() - true/false
result = re.test(str);

// match() - Returns array or null
str = "Again Hello World Hello";

result = str.match(re);

// search() - Returns index of the first match or -1
str = "World";

result = str.search(re);

// replace() - Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi");

console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);

pattern mathing of regular matching:

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

str = "Again hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo worlde";
str = "hello worlde";
str = "hillo";
str = "hilo";
str = "hhfsdhfsuillo";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello";
str = "hello?";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
if(re.test(str)) {
console.log(`'${str}' matches '${re.source}'`);
}
else {
console.log(`'${str}' doesn't match '${re.source}'`);
}
}

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/;
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^+8801[0-9]{9}$/;

str = "2xy3xy7xy8xy";
str = "01788888888";
str = "+8801811888889";

// Shorthand Character Classes
re = /w/; // Word Character - alpha numeric or _
re = /w+/; // One or more
re = /W/; // Non Word Character
re = /W+/; // one or more
re = /d/; // Digit
re = /d+/;
re = /D/; // Non digit
re = /s/; // Match white space
re = /S/; // Match non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/;

str = "fsdfxyzfdsf";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
if(re.test(str)) {
console.log(`'${str}' matches '${re.source}'`);
}
else {
console.log(`'${str}' doesn't match '${re.source}'`);
}
}

Examples:

// Examples
let re;
let str;

// Postal Code
// 4700, 4000
re = /^[0-9]{4}$/;
str = "4000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
re = /^(+)?(88)?01[0-9]{9}$/;
str = "+8801717888888";

// Email Address
// [bohubrihi8.learn@edu.com.bd](mailto:bohubrihi8.learn@edu.com.bd)
re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
str = "[bohubrihi.learn@edu.com.bd](mailto:bohubrihi.learn@edu.com.bd)" ;

console.log(re.test(str));

JSON (JavaScript Object Notation):

Data format for exchanging data between systems running on different technology. Can be used with most of languages like Python, PHP etc. and obviously JavaScript.

Has similarity with Javascript objects. Properties are wrapped with "".

Javascript object: { name: "Farhan", age: 23, hometown: "Dhaka" }

JSON Data: { "name": "Farhan", "age": 23, "hometown": "Dhaka" }

var student = {
name: "Rahim",
age: 26,
hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);

JSON Data Types:
//https://jsonlint.com to verify the json data
//string
//number
//object (JSON Object)
//array
//boolean
//null

//doesn't support undefined, date, funtion in JSON
var person = {
name: "Farhan", //string
age: 23, //number
hometown: "Panchagarh",
married: false, //boolean
dob: 2001-02-04 //date
test_null: null, //null
test_undefined: undefined, //undefined
greet: function() {//function
console.log(`Hello ${this.name}`)
}
}

var person_json = JSON.stringify(person);
console.log(person_json); //{"name":"Farhan","age":23,"hometown":"Panchagarh","married":false,"dob":1995,"test_null":null} output cannot gave the right date as date type is not supported by JSON. also undefined and function is missing

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
"name": "Rahim",
"age": 25,
"hometown": "Dhaka",
"married": false
};

var person2 = {
name: "Karim",
age: 35,
hometown: "Chittagong",
married: true
};

console.log(person2);
console.log(person1);

Fetch JSON DATA from seperate file:

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
var data = this.responseText;
[//console.log](https://console.log/)(data);
jsonData(data);
}
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
[//console.log](https://console.log/)(json_obj);
var js_obj = JSON.parse(json_obj);
[//console.log](https://console.log/)(js_obj);

```
for (x in js_obj.persons) {
    //console.log(x);

    var persons = js_obj.persons;
    // console.log(persons[x]);
    for (y in persons[x]) {
        console.log(persons[x][y]);
    }

}

```

## **Conditions**

```jsx
// Conditions:
// Control flow:
// if
// if-else
// if-elseif-else
// nested if
// switch case

if (true) {
console.log("If statement executed!");
}

if (false) {
console.log("If statement executed!");
}
// use of else
else {
console.log("Else Executed!");
}

var age = prompt();

if ( age >= 50 ) {
console.log("Old!");
} else if ( age < 50 && age >= 30 ) {
console.log("Under 50 but above or equal 30!")
} // 30 <= age < 50
else if (age < 30 && age >= 18 ) {
console.log("Under 30 but above or equal 18");
} else if ( age < 18 && age > 0) {
console.log("Under 18!");
} else {
console.log("Invalid Input!");
}

//Find the largest number
var n1 = prompt("First Number: ");
var n2 = prompt("Second Number: ");
var n3 = prompt("Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2) {
if (n1 >= n3) {
console.log(n1 + " is the largest!");
}
else {
console.log(n3 + " is the largest!");
}
} else {
if (n2 >= n3) {
console.log(n2 + " is the largest!");
}
else {
console.log(n3 + " is the largest!");
}
}

// Switch Case
console.log("Select an option:na. Option 1 nb. Option 2 nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
case "a": //if(choice=="a")
text = "Option 1 Selected!";
break;
case "b":
text = "Option 2 Selected!";
break;
case "c":
text = "Option 3 Selected!";
break;
default: // else
text = "No option is selected!";
break;
}

console.log(text);

Exercise:

var number = prompt("What is your number?");
number = parseInt(number);
var grade;

if ( number <= 100 && number >= 80 ) {
grade = "A+";
} else if ( number < 80 && number >= 70 ) {
grade = "A";
} else if ( number < 70 && number >= 60 ) {
grade = "A-";
} else if ( number < 60 && number >= 50 ) {
grade = "B";
} else if ( number < 50 && number >= 40 ) {
grade = "C";
} else if ( number < 40 && number >= 33 ) {
grade = "D";
} else if ( number < 30 && number >= 0 ) {
grade = "F";
} else {
grade = "Invalid Input!";
}

console.log("Your Grade: " + grade);

console.log("Select an Option: n1. Add n2. Subtractn3. Mulitply n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
	console.log("Invalid Input!");
} else {
	switch (option) {
		case 1:
			result = num1 + num2;
			break;
		case 2:
			result = num1 - num2;
			break;
		case 3:
			result = num1 * num2;
			break;
		case 4:
			result = num1 / num2;
			break;
		default:
			break;
	}
	if (result == null) {
	    console.log("No Result!");
	}
	else {
	    console.log("Result: " + result);
	}
}
```

## **Loop**

### **While loop:**

```jsx
// while loop
// Print 1 to 10
// sum of 1 to 10
var i = 1;
var sum = 0;
var product = 1;
// 1 + 2 + 3 + 4 + 5.....
// 1 * 2 * 3 * 4 * 5....
while (i <= 10) { 
	console.log(i);
	sum = sum + i;
	product = product * i;
	i++;
}
console.log("Out of the loop");
console.log("Result: " + sum);
console.log("Product: " + product);

var i = 1; // initialization
while ( i<=5 ) { 
	//condition
	console.log(i);
	i++; //update
}

console.log("End of while loop!")
console.log("Start of for loop!");
```

### **For Loop:**

```jsx
// for loop
for (var j = 1; j<=5 ; j++) {
	console.log(j); //j= 1, 2, 3, 4, 5
}

for (var k = 5; k >=1; k-- ) {
	console.log(k); //k= 5, 4, 3, 2, 1
}

// break statement

for(var i=1; i<=5; i++ ) {
	if ( i == 3) {
		break; //break the loop when i=3
	}
	console.log(i); //1, 2
}

// continue statement

for (var i =1; i <= 5; i++){
	if(i == 3) {
		continue; //skip the loop operation when i=3
	}
	console.log(i);//1, 2, 4, 5
}

// String and array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let len = food.length;

for(var i = 0; i < len; i++) {
	console.log(`Index : ${i}`);
	console.log(food[i]);
}
```

### **For In / For Of Loop:**

```jsx
// For-in string/array/object
// For-of string/array
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];

//object doesn't have index
let person = {
	name: "Shakib Al Hasan",
	profession: "Cricketer",
	team: "Bangladesh",
	age: 33,
}

// We will get index in For in loop
for( var x in name ) {
	console.log(`index ${x}and item ${ name[x]}` );
}

// We will get items/values in For of loop
for(var x of name ) {
	console.log(x);
}

// We will get indexes
for (var y in food) {
	console.log(`Index: ${y}; and item: ${food[y]}`);
}

// We will get items
for (var y of food) {
	console.log(y);
}

// For-in with objects
for (var x in person) {
	console.log(`Property: ${x}     Value: ${person[x] }`);
}

// For-of won't work for objects
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";
for (var i = 1; i <= n; i++) {
	sum += i ** 2;
	series += (i ** 2).toString();
	if (i == n) { 
		continue; 
	}
	series += " + ";
}
console.log(`${series}= ${sum}`);
```

## **Function**

```jsx
//Describing the function
function myFunction()(
console.log("Hello World!");
}
//calling the function
myFunction();

// Function parameter/argument
function saySomenthing(fname = "Fazle", lname = "Rahat") {
	console.log(`Hello ${ fname } ${ lname }!`);
}

//alert("Hello");
//let val = "Farhan";
let firstname = "Farhan";
let lastname = "Shohag";

saySomenthing(firstname, lastname);

function addNum(a=0, b=0) {
	console.log(a+b);
}

addNum(4,5);
addNum(3.6, 2.3);

// Normal Declaration
function saySomething(name) {
	console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
	console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
console.log("I am " + name3);
}

saySomething("Bohubrihi");
saySomething1("Farhan");
saySomething2("JavaScript");

// Array iteration using forEach
var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
let printEverything = function(item, i, abc){
	console.log(`Index : ${i} and Item ${item}`);
	console.log(abc);
}

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
foods.forEach(printEverything);

// Array iteration using Mapping

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];

function addSomething(item) {
return `${item} is a Food`;
}

let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function(item){
return item*item;
})

console.log(arr_res);
console.log(arr_square);
```

## **Objects Method**

```jsx
// Object Method
let person = {
	firstname: "Fazle",
	lastname: "Rahat",
	dob: "9-10-1995", //number, string, date, array, object
	
	fullname: function() { //Method
	    return `${this.firstname} ${this.lastname}`;
	}
}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());

// Math Object
let val = Math.PI;
val = Math.E;
val = Math.round(23.5);
val = Math.ceil(3.2);
val = Math.floor(3.9);
val = Math.sqrt(81);
val = Math.abs(-56);
val = Math.pow(2, 8);
val = Math.min(2,3,1,0,-8);
val = Math.max(-1,2,4,5);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

// Date Object
let val;
let today = new Date();

val = today;
val = today.toString();

let birthday = new Date('11-2-1995 8:25:00');
birthday = new Date('November 2 1995');
birthday = new Date('11/2/1995');
val = birthday;
val = today.getMonth(); // Start from 0
val = today.getDate();
val = today.getDay(); //start from Monday=1
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
// timestamp -> amount of time past since Jan 1st 1970

//month: 0=January, 1= Feb,.... 11=DEC

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);

console.log(val);
console.log(birthday);
```

## **Global & Local Scope**

```jsx
// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope:` , a, b, c);

function test() {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log(`Functions Scope:` , a, b ,c);
}

test();

console.log(`Global Scope:` , a, b, c);

if (true) {
	var a = 7;
	let b = 8;
	const c = 9;
	console.log(`If Scope:`  , a, b, c);
}

console.log(`Global Scope:` , a, b, c);

for (let a = 0; a <10; a ++) {
	console.log(`Loop:` , a);
}

console.log(`Global Scope:` , a, b, c);
```

## Object Oriented Programming

### Javascript Classes (ES6):

```jsx
// Class(ES6)
// Class is a template for creating objects

class Person {
constructor(fname, lname, birthday) {
this.firstname = fname;
this.lastname = lname;
this.dob = birthday;
}
calculateAge() {
    let birthday = new Date(this.dob);
    let diff = Date.now() - birthday.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

fullname() {
    console.log(this.firstname, this.lastname);
}

}

let person1 = new Person("Fazle", "Rahat", "11-13-1988");
let person2 = new Person("Moinul", "Islam", "02-11-1991");
let person3 = new Person("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());

console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());
```

### Sub-Classes: (Inheritance):

```jsx
// Sub Class
// Inheritance

class Person { //Base Class
constructor(fname, lname) {
this.firstname = fname;
this.lastname = lname;
}

greeting() {
    return `Hello ${this.firstname} ${this.lastname}!`;
}

}

class Customer extends Person { //Sub Class
constructor(fname, lname, phone, memberShip) {
super(fname, lname);

    this.phone = phone;
    this.memberShip = memberShip;
}

fullname() {
    console.log(this.firstname, this.lastname);
}

}

let person1 = new Person("Fazle", "Rahat");
console.log(person1);
console.log(person1.greeting());
console.log(person1.fullname());

let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());
```

### Static Function:

```jsx
// Static Function:  cannot call from object but can be call by class

class Person {
constructor(fname, lname) {
this.firstname = fname;
this.lastname = lname;
}

greeting() {
    console.log(`Hello ${this.firstname} ${this.lastname}!`);
}

static test() {
    console.log("I am staic!");
}

}

let person1 = new Person("Simanta", "Paul");

console.log(person1.greeting());
console.log(Person.test());
```

## DOM

DOM: Document Object Model.
Tree of Elements(Nodes) generated by Browser. JavaScript can Manipulate DOM.

- **Example:**
    - **HTML Code:**
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
            <title>Document</title>
        </head>
        
        <body>
            <div class="container">
                <h3 class='sample-class'>Some Random Contents</h3>
                <ol>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ol>
                <hr>
                <ul class='sample-class'>
                    <li class='sample-class'><a href="https://www.google.com/">Google</a></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com/">Twitter</a></li>
                </ul>
                <hr>
                <form action="" method="post" class='sample-class'>
                    <label for="link_name">Link Name</label>
                    <input type="text" name="link_name">
                    <label for="url">Link</label>
                    <input type="url" name="url">
                </form>
                <hr>
                <form>
                    <label for="name">Full Name</label>
                    <input name="name" type="text">
                </form>
            </div>
        
            <script src="js/script.js"></script>
        </body>
        
        </html>
        ```
        
    - **JavaScript Code:**
        
        ```jsx
        let val;
        val = this;
        val = window;
        val = window.document;
        val = document;
        val = document.all;
        val = document.all[2];
        val = document.all.length;
        val = document.head;
        val = document.body;
        val = document.doctype;
        val = document.domain;
        val = document.URL;
        val = document.characterSet;
        val = document.contentType;
        
        val = document.forms;
        val = document.forms[0];
        val = document.forms[0].method;
        val = document.forms[0].action;
        
        val = document.links;
        val = document.links[0];
        val = document.links[0].href;
        val = document.links[0].className;
        val = document.links[0].classList;
        
        val = document.images;
        
        val = document.scripts;
        val = document.scripts[0];
        val = document.scripts[0].src;
        val = document.scripts[0].getAttribute('src');
        
        links = document.links;
        let linkArr = Array.from(links);
        
        linkArr.forEach(function(link){
            console.log(link.getAttribute('href'));
        });
        
        console.log(links);
        console.log(val);
        ```
        
- **DOM Selector (single element):**
    1. document.getElementById()
    2. document.querySelector()
    
    ```jsx
    //document.getElementById()
    let val;
    
    //getting an element
    val= document.getElementById('document-title');//those elements which has the id 'document-title'
    val= document.getElementById('document-title').id;//getting the id of that element
    val= document.getElementById('document-title').class;//getting the class of that element
    
    //changing style
    
    document.getElementById('document-title').style.background = '#333';//changing the background
    document.getElementById('document-title').style.color = '#fff';//changing the text color
    document.getElementById('document-title').style.padding = '10px';//adding padding to the content
    document.getElementById('document-title').style.display = 'none/block';//changing display setting
    
    //changing the content
    document.getElementById('document-title').textContent = 'New Title';//changing the text
    document.getElementById('document-title').innerText = 'Again New Title';
    document.getElementById('document-title').innerHTML = '<i>Again again New Title</i>'; //html code will be executed
    
    val= document.getElementById('document-title');
    val.innerText = 'Hello I am Farhan';
    
    //document.querySelector()
    val = document.querySelector('#document-title'); //id
    val = document.querySelector('.title-class'); //class
    val = document.querySelector('h3'); //first <h3> tag will be selected
    
    val = document.querySelector('ol'); //first <ol> tag will be selected
    
    val = document.querySelector('li'); //first <li> tag will be selected
    
    val = document.querySelector('ol li'); //first <li> tag of <ol> tag will be selected
    val = document.querySelector('ul li'); //first <li> tag of <ul> tag will be selected
    
    val.style.background = 'red';
    val.style.color = 'white';
    
    val =  document.querySelector('li:last-child'); //last <li> tag of first <ol> will be selected cause <ol> arrives earlier than <ul> in the document
    document.querySelector('li:nth-child(0').innerText = "Hello"; //child number 1 of first list will be selected
    document.querySelector('li:nth-child(1)').innerText = "Hello"; //child number 2 of first list will be selected
    
    document.querySelector('li:nth-child(even)').innerText = "Hello"; //first even child of first list will be selected
    document.querySelector('li:nth-child(odd)').innerText = "Hello"; //first odd child of first list will be selected
    
    console.log(val);
    ```
    
- **DOM Selector (Multiple element):**
    1. document.getElementsByClassName()
    2. document.getElementsByTagName()
    3. document.querySelectorAll()
    
    ```jsx
    // Multiselector 
    // document.getElementsByClassName()
    let list = document.getElementsByClassName('sample-class');
    list[0].style.background = 'red';
    list[0].style.color = 'white';
    list[0].style.padding = '10px';
    list[0].textContent = 'Hello World!';
    //console.log(list[0]);
    
    // document.getElementsByTagName()
    list = document.getElementsByTagName('li');
    list = document.querySelector('ol').getElementsByTagName('li');
    
    let lis = Array.from(list);
    lis.forEach(function(item){
        //console.log(item);
    });
    
    // document.querySelectorAll()
    // id -> #
    // classname -> .
    // tagname -> nothing
    
    list = document.querySelectorAll('ol li');
    list.forEach(function(item){
        //console.log(item);
    });
    
    let liOdd = document.querySelectorAll('li:nth-child(odd)');
    let liEve = document.querySelectorAll('li:nth-child(even)');
    
    liOdd.forEach(function(item){
        item.style.background = 'grey';
        item.style.color = 'white';
    });
    
    liEve.forEach(function(item){
        item.style.background = 'red';
        item.style.color = 'white';
    });
    
    console.log(list);
    ```
    
- **DOM Traversing:**
    
    ```jsx
    // Traversing the DOM
    let val;
    let list = document.querySelector('ul');
    let listItem = document.querySelector('ul li:first-child');
    
    val = list;
    val = listItem;
    
    // Get Child Nodes
    val = list;
    val = list.childNodes;
    val = list.childNodes[0];
    val = list.childNodes[1];
    val = list.childNodes[2];
    val = list.childNodes[1].nodeName;
    val = list.childNodes[0].nodeType;
    
    // 1 Element
    // 2 Attribute
    // 3 Text Node
    // 8 Comment
    // 9 Document Itself
    // 10 Doctype
    val = list.childNodes;
    
    val = list.children;
    val = list.children[1];
    list.children[0].textContent = "Hello";
    val = list.children[1].children[0];
    val = list.children[1].children[0].href;
    
    val = list.firstChild;
    val = list.firstElementChild;
    val = list.lastChild;
    val = list.lastElementChild;
    
    val = list.childElementCount;
    
    val = listItem;
    val = listItem.parentElement;
    val = listItem.parentNode;
    val = listItem.parentElement.parentElement;
    
    val = listItem.nextSibling.nextSibling;
    val = listItem.nextElementSibling;
    val = listItem.nextElementSibling.nextElementSibling;
    
    val = document.querySelector('ul li:last-child');
    val = val.previousSibling;
    val = val.previousElementSibling;
    
    console.log(val);
    ```
    
- **Add and delete elements to DOM:**
    
    ```jsx
    // Adding Element to DOM
    // Create Element
    let olItem = document.createElement('li');
    
    // Add Id and Class
    olItem.className = "a new another-class";
    olItem.id = "new-element";
    
    // Add Attribute
    olItem.setAttribute('title', 'A title to new Element');
    
    olItem.appendChild(document.createTextNode('JavaScript'));
    document.querySelector('ol').appendChild(olItem);
    //console.log(olItem);
    
    let ulItem = document.createElement('li');
    let link = document.createElement('a');
    
    link.appendChild(document.createTextNode('Instagram'));
    link.setAttribute('href', 'https://www.instagram.com');
    
    ulItem.appendChild(link);
    
    document.querySelector('ul').appendChild(ulItem);
    
    console.log(ulItem);
    
    // Replacing Elements
    let newHeading = document.createElement('h1');
    newHeading.appendChild(document.createTextNode('H1 New Heading'));
    newHeading.className = "sample-class";
    
    let oldHeading = document.querySelector('h3');
    
    let parent = document.querySelector('.container');
    //parent = oldHeading.parentElement;
    parent.replaceChild(newHeading, oldHeading);
    
    console.log(newHeading);
    console.log(oldHeading);
    console.log(parent);
    
    // Remove element
    
    let lis = document.querySelectorAll('li');
    let list = document.querySelector('ul');
    
    lis[0].remove();
    list.removeChild(lis[7]);
    
    //
    list.classList.add("test");
    list.classList.add("test-new");
    list.classList.remove("test-new");
    let val = list.hasAttribute('title');
    val = list.hasAttribute("class");
    list.setAttribute("title", "Yes")
    list.removeAttribute("title");
    console.log(list);
    
    //console.log(link);
    ```
    
- **Events of JavaScript:**
    - HTML Code 1:
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
            <title>Document</title>
        </head>
        
        <body>
            <div class="container">
                <button id="sample-btn">Click Me</button>
            </div>
        
            <script src="js/script.js"></script>
        </body>
        
        </html>
        ```
        
    - JavaScript 1:
        
        ```jsx
        // Events of JavaScript
        // https://www.w3schools.com/JS/js_events_examples.asp
        // Event Listener
        document.getElementById('sample-btn').addEventListener('dblclick', message);
        function message() {
            console.log("Button Clicked");
        }
        ```
        
    - HTML Code 2:
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
            <title>Document</title>
        </head>
        
        <body>
            <div class="container">
                <form action="">
                    <input type="text" id="name">
                </form>
                <p id="demo">The Input Field is Empty!</p>
            </div>
        
            <script src="js/script.js"></script>
        </body>
        
        </html>
        ```
        
    - JavaScript 2:
        
        ```jsx
        // Events of JavaScript
        // https://www.w3schools.com/JS/js_events_examples.asp
        
        // Event Listener
        
        document.querySelector(".container").addEventListener('mousemove', message);
        
        document.querySelector('.container').style.background = "red";
        
        function message(e) {
            let val = e;
            val = e.target; // this
            val = e.target.id;
        
            val = e.timeStamp;
            val = e.type;
        
            val = e.clientY;
            val = e.clientX;
        
            val = e.offsetY;
            val = e.offsetX;
            val = this;
        
            this.style.background = `#${e.offsetX}`;
        
            //console.log(val);
            console.log(e.offsetX);
            console.log(e.offsetY);
            console.log(val);
        
        }
        
        // Events of JavaScript
        // https://www.w3schools.com/JS/js_events_examples.asp
        
        // Event Listener
        
        document.querySelector("#name").addEventListener('focus', test);
        
        document.querySelector("#name").addEventListener('keyup', test2);
        
        function test(e) {
            this.style.background = 'pink';
        }
        
        function test2(e) {
            //console.log(this.value);
            document.getElementById("demo").innerText = this.value;
        }
        ```
        

## **Error Handling**

```jsx
console.log("Before Error!");

try {
    //test();
    //undefined.test();
} catch(err) {
    //console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally!");
}

console.log("After Error!");

// Error Handling
let a = 2;
try {
    if(a>15) throw "Too Big";
    else if (a<5) throw "Too small";
} catch(err) {
    console.log(err);
}

///https://www.w3schools.com/jsref/jsref_obj_error.asp
```

## Regular Expression

```jsx
// Regular Expression
// Pattern Matching Technique
let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);

str = "HelLo World";
str = "Again Hello World";
str = "Hell World";
str = "sdsHellosds World";
str = "Again Hello World Hello";
str = "World";

// exec() - Returns result in an array or null
let result = re.exec(str);

// test() - true/false
result = re.test(str);

// match() - Returns array or null
str = "Again Hello World Hello";

result = str.match(re);

// search() - Returns index of the first match or -1
str = "World";

result = str.search(re);

// replace() - Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi");

console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr); 

pattern mathing of regular matching:

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

str = "Again hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo worlde";
str = "hello worlde";
str = "hillo";
str = "hilo";
str = "hhfsdhfsuillo";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello";
str = "hello?";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
} 

let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

// Character Set using Brackets []
re = /h[eai]llo/; // Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/; // Anything except those inside brackets
re = /^[ha]ello/; // Must start with h or a
re = /[A-Z]ello/; // Start with Uper Case
re = /^[A-Z]/; // First Letter must be upper case
re = /^[a-z]/;
re = /[A-Za-z]ello/;
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // Not digit
re = /^[0-9][0-9][0-9]ello/; // three digits
re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// Braces {} - Quantifier
re = /el{2}o/; // Must occur exactly 2 times
re = /el{3}o/; 
re = /hel{2,5}o/; // Range
re = /hel{2,}o/; // At least 2 times

// Parentheses () - Grouping
re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
re = /^([0-9]xy){4}/;

// Bangladeshi Phone Number
// total 11 digits
re = /^01[0-9]{9}$/;
re = /^+8801[0-9]{9}$/;

str = "2xy3xy7xy8xy";
str = "01788888888";
str = "+8801811888889";

// Shorthand Character Classes
re = /w/; // Word Character - alpha numeric or _
re = /w+/; // One or more
re = /W/; // Non Word Character
re = /W+/; // one or more
re = /d/; // Digit
re = /d+/;
re = /D/; // Non digit
re = /s/; // Match white space
re = /S/; // Match non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/;

str = "fsdfxyzfdsf";

console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}

// Examples
let re;
let str;

// Postal Code
// 4700, 4000
re = /^[0-9]{4}$/;
str = "4000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
re = /^(+)?(88)?01[0-9]{9}$/;
str = "+8801717888888";

// Email Address
// bohubrihi8.learn@edu.com.bd
re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
str = "bohubrihi.learn@edu.com.bd" ;

console.log(re.test(str));
```

## JSON

- **Introduction**
    
    JSON = JavaScript Object Notation
    
    - Data format for exchanging data between systems running on different technologies. Can be used with most languages like Python, PHP, etc., and obviously JavaScript.
    - Has a similarity with JavaScript objects. Properties are wrapped with "".
    
    ```jsx
    Javascript object: { name: "Farhan", age: 23, hometown: "Dhaka" }
    
    JSON Data: { "name": "Farhan", "age": 23, "hometown": "Dhaka" }
    
    var student = {
        name: "Rahim",
        age: 26,
        hometown: "Dhaka"
    };
    
    var student_json = JSON.stringify(student);
    
    console.log(student_json);
    
    var student_new = JSON.parse(student_json);
    console.log(student_new); 
    
    JSON Data Types:
    //https://jsonlint.com to verify the json data
    //string
    //number
    //object (JSON Object)
    //array
    //boolean
    //null
    
    //doesn't support undefined, date, funtion in JSON
    var person = {
    	name: "Farhan", //string
    	age: 23, //number
    	hometown: "Panchagarh",
    	married: false, //boolean
    	dob: 2001-02-04 //date
    	test_null: null, //null
    	test_undefined: undefined, //undefined
    	greet: function() {//function
    		console.log(`Hello ${this.name}`)
    	}
    }
    
    var person_json = JSON.stringify(person);
    console.log(person_json); //{"name":"Farhan","age":23,"hometown":"Panchagarh","married":false,"dob":1995,"test_null":null} output cannot give the right date as date type is not supported by JSON. also undefined and function is missing
    
    // JSON.stringify() --> JS object to JSON String
    // JSON.parse() -->  JSON String to JS Object
    
    var person1 = {
        "name": "Rahim",
        "age": 25,
        "hometown": "Dhaka",
        "married": false
    };
    
    var person2 = {
        name: "Karim",
        age: 35,
        hometown: "Chittagong",
        married: true
    };
    
    console.log(person2);
    console.log(person1);
    ```
    
- **Fetch JSON DATA from separate file**
    
    ```jsx
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            //console.log(data);
            jsonData(data);
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
    
    function jsonData(json_obj) {
        //console.log(json_obj);
        var js_obj = JSON.parse(json_obj);
        //console.log(js_obj);
    
        for (x in js_obj.persons) {
            //console.log(x);
    
            var persons = js_obj.persons;
            // console.log(persons[x]);
            for (y in persons[x]) {
                console.log(persons[x][y]);
            }
    
        }
    } 
    =================================
    
     {
        "persons": [
            {
                "name": "Rahim",
                "age": 25,
                "hometown": "Dhaka",
                "married": false
            },
            {
                "name": "Karim",
                "age": 35,
                "hometown": "Chittagong",
                "married": true
            },
            {
                "name": "Ayon",
                "age": 27,
                "hometown": "Chandpur",
                "married": false
            },
            {
                "name": "Rahat",
                "age": 34,
                "hometown": "Chittagong",
                "married": true
            },
            {
                "name": "Rony",
                "age": 26,
                "hometown": "Chittagong",
                "married": false
            }
        ]
    }
    ```
    

## AJAX

AJAX = Asynchronous JavaScript And XML

- **JavaScript 1:**
    
    ```jsx
    //Asynchronous Programming
    //get data without loading the page
    
    // Asynchronous Programming
    // AJAX = Asynchronous JavaScript And XML
    // Get data without loading the page
    
    document.getElementById('get_data').addEventListener('click', loadData);
    
    function loadData() {
        // Create XHR Object (Xml Http Request)
        let xhr = new XMLHttpRequest();
    
        // Open
        xhr.open('GET', 'data.txt', true);
    
        xhr.onprogress = function() {
            console.log(xhr.readyState);
        }
    
        xhr.onload = function () {
            // HTTP statuses
            // 200: "OK"
            // 403: "Forbidden"
            // 404: "Not Found"
            if (this.status === 200) {
                document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
            }
        }
    
        //xhr.onreadystatechange = function () {
        //     // readyState Values
        //     // 0: request not initialized
        //     // 1: server connection established
        //     // 2: request received
        //     // 3: processing request
        //     // 4: request finished and response is ready
        //     //console.log(this.readyState);
        //     if (this.status === 200 && this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // }
    
        xhr.send();
    
        //console.log(xhr);
    }
    ```
    
- **HTML Code 1:**
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
    <title>Document</title>
    </head>
    
    <body>
    <div class="container">
    <h2>Using AJAX to get Data</h2>
    <button id="get_data">Get Data</button>
    <div id="output"></div>
    </div>
    <script src="js/script.js"></script>
    </body>
    
    </html>
    ```
    
- **Data**
    
    I am Simple Data
    
- **JavaScript 2 (Data From External Server):**
    
    ```jsx
    // http://www.icndb.com/api/
    // API
    // RESTful API
    
    document.getElementById('get_data').addEventListener('click', loadJokes);
    
    function loadJokes(e) {
        let number = document.getElementById('numberJokes').value;
        //console.log(number);
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
        xhr.onprogress = function () {
            document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
        }
    
        xhr.onload = function () {
            if (this.status === 200) {
                let data = JSON.parse(this.responseText);
                let jokes = data.value;
                let output = "<ol>";
    
                jokes.forEach(function (item) {
                    //console.log(item.joke);
                    output += `<li>${item.joke}</li>`;
                });
                output += "</ol>";
    
                document.getElementById('output').innerHTML = output;
                //console.log(jokes);
                //console.log(data);
            }
        }
    
        xhr.send();
    }
    ```
    
- **HTML Code 2:**
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <h2>Get Jokes Using AJAX!</h2>
            <input id="numberJokes" type="number">
            <button id="get_data">Get Jokes</button>
            <div id="output"></div>
        </div>
        <script src="js/script.js"></script>
    </body>
    
    </html>
    ```
    

## Fetch API

### Callback Function

- ******************HTML Code******************
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <ul>
                <div id="output"></div>
            </ul>
        </div>
        <script src="js/script.js"></script>
    </body>
    
    </html>
    ```
    
- ******************************JavaScript Code******************************
    
    ```jsx
    // Callback Function 
    
    // setTimeout(function(){
    //     console.log("Hello World!");
    // }, 5000);
    
    // let persons = [
    //     {firstName: "Simanta", lastName: "Paul"},
    //     {firstName: "Fazle", lastName: "Rahat"}
    // ]
    
    // function createPerson(person) {
    //    setTimeout(function() {
    //        persons.push(person);
    //    }, 4000); 
    // }
    
    // function getPerson() {
    //     setTimeout(function(){
    //         let output = '';
    //         persons.forEach(function(person){
    //             output += `<li>${person.firstName} ${person.lastName}</li>`
    //         }); 
    //         document.getElementById('output').innerHTML = output;
    //     }, 1000);
    // }
    
    let persons = [
        {firstName: "Simanta", lastName: "Paul"},
        {firstName: "Fazle", lastName: "Rahat"}
    ]
    
    function createPerson(person, callback) {
       setTimeout(function() {
           persons.push(person);
           callback();
       }, 2000); 
    }
    
    function getPerson() {
        setTimeout(function(){
            let output = '';
            persons.forEach(function(person){
                output += `<li>${person.firstName} ${person.lastName}</li>`
            }); 
            document.getElementById('output').innerHTML = output;
        }, 500);
    }
    
    createPerson({firstName:"Rony", lastName: "Chy"}, getPerson);
    ```
    

### JavaScript Promises

- **JavaScript:**
    
    ```jsx
    // Promises
    // .then
    let persons = [
        { firstName: "Simanta", lastName: "Paul" },
        { firstName: "Fazle", lastName: "Rahat" }
    ]
    
    function createPerson(person) {
        let prom = new Promise(function (resolve, reject) {
            persons.push(person);
            let error = false;
    
            if (!error) {
                resolve();
            }
            else {
                reject('Error!: Something Wrong!');
            }
    
        });
        return prom;
    }
    
    function getPerson() {
        setTimeout(function () {
            let output = '';
            persons.forEach(function (person) {
                output += `<li>${person.firstName} ${person.lastName}</li>`
            });
            document.getElementById('output').innerHTML = output;
        }, 500);
    }
    
    createPerson({ firstName: "Rony", lastName: "Chy" })
        .then(getPerson)
        .catch(function (err) {
            console.log(err);
        });
    ```
    
- **HTML Code:**
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <ul>
                <div id="output"></div>
            </ul>
        </div>
        <script src="js/script.js"></script>
    </body>
    
    </html>
    ```
    

### Fetch API

- ********************HTML Code:********************
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <ul>
                <button id="get_data">Get Data</button>
                <div id="output"></div>
            </ul>
        </div>
        <script src="js/script.js"></script>
    </body>
    
    </html>
    ```
    
- **JavaScript:**
    
    ```jsx
    // Fetch API
    // Fetch API Uses JavaSript Promise
    
    document.getElementById("get_data").addEventListener('click', getData);
    
    // xhr.open('GET', 'http://api.icndb.com/jokes/random/', true);
    
    // Arrow Function
    
    function getData() {
        fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json())
            .then(data => { console.log(data); })
            .catch(err => {console.log(err); })
    }
    ```
    

## JS Projects

- **Project 1: Book List**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/Book List](https://github.com/fms-byte/MERN/tree/main/JavaScript/Book%20List)
    
- **Project 2: GitHub Finder**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/Github Finder](https://github.com/fms-byte/MERN/tree/main/JavaScript/Github%20Finder)
    
    **********Live Demo:********** [https://fms-byte.github.io/handle-finder/](https://fms-byte.github.io/handle-finder/)
    
- **Project 3: Task List**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/Task List](https://github.com/fms-byte/MERN/tree/main/JavaScript/Task%20List)
    

## ES6 Features

- ****************************Var, Let Const****************************
    
    var = Reassign and Redeclaration
    let = Reassign but No Redeclaration
    const = No Reassign and No Redeclaration
    
    ```jsx
    // Global Scope
    var a = 1; 
    let b = 2;
    const c = 3;
    
    console.log(`Global Scope: `, a, b, c); // 1 2 3
    
    function test() {
        var a = 4;
        let b = 5;
        const c = 6;
        console.log(`Functions Scope: `, a, b ,c); // 4 5 6
    }
    
    test();
    
    console.log(`Global Scope: `, a, b, c); // 1 2 3
    
    if (true) {
        var a = 7;
        let b = 8;
        const c = 9;
        console.log(`If Scope: ` , a, b, c); // 7 8 9
    }
    
    console.log(`Global Scope: `, a, b, c); // 7 2 3
    
    for (let a = 0; a <10; a ++) {
        console.log(`Loop: `, a); // 0 1 2 3 4 5 6 7 8 9
    }
    
    console.log(`Global Scope: `, a, b, c); //10 2 3
    ```
    
- **Arrow Function**
    
    ```jsx
    // Normal Declaration
    function saySomething(name) {
        console.log('Hello ' + name);
    }
    
    // Function Expression
    
    let saySomething1 = function(name2) {
        console.log('Hello ' + name2);
    }
    
    // Arrow Function (ES6)
    //Parenthesis can be avoided when there is single parameter
    //Curly braces can be avoided when there is just single statement (not return)
    
    let saySomething2 = (name3) => {
        console.log("I am " + name3);
    }
    
    //Both of them are same
    let getSquare = num => {return num*num;};
    let getSquare = num => num*num;
    
    console.log(getSquare(4)); //Both funtion will give 16
    
    saySomething("Bohubrihi");
    saySomething1("Simanta");
    saySomething2("JavaScript"); 
    
    //Callback Function
    numbers = [1,2,3,4,5,6];
    
    numbers.forEach(function (item) {
    	console.log(item);
    }); //this is a callback function which has no function name
    
    //callback function also can be written like this 
    let printAll = (item) => {
    	console.log(item);
    }
    
    numbers.forEach(printAll); //Note: in the parameter, there is no () while calling the funtion. This is the special property of Callback function
    ```
    
- ******Template Literals******
    
    ```jsx
    // Template literals (ES6)
    // Backtick ``
    let name = "Rahim";
    let age = "38";
    let dob = "21 June, 1983";
    
    console.log(`His name is ${name}
    His age is ${age}
    Date of Birth ${dob}`);
    
    let a = 34
    let b = 67
    console.log(`${a} + ${b} = ${ a + b }`);
    ```
    
- **Array Destructing**
    
    ```jsx
    let fruits = ["Apple", "Grape", "Orange"];
    
    //Older way to access
    
    let fruit1= fruits[0];
    let fruit2= fruits[1];
    
    //Newer (Destructing) way
    
    let [fruit1, fruit2, fruit3] = fruits; //fruit1= Apple, fruit2 = Grape, fruit3 = Orange
    
    let [fruit1, fruit2, fruit3, fruit4] = fruits; //fruit1= Apple, fruit2 = Grape, fruit3 = Orange, fruit4 = undefined
    
    let [fruit1, fruit3] = fruits; //fruit1= Apple, fruit3 = Grape
    
    let [fruit1,, fruit3] = fruits; //fruit1= Apple, fruit3 = Orange [If we want to skip any element, simply will put empty ,, so that the element in the arrayy skipped
    ```
    
- **Swapping Variable**
    
    ```jsx
    //traditional way
    let a =8;
    let b = 20;
    let temp = a;
    a= b;
    b = temp;
    
    //Easier way
    let a,b; //first need to declare variables
    a=8;b=20; //initialization 
    
    [a,b]=[b,a] //swapping a=20, b=8
    
    console.log(`a = ${a} and b = ${b}`);
    ```
    
- ************************************Object Destruction************************************
    
    ```jsx
    //Object Destruction
    
    let person = {
        firstName : "Farhan",
        lastName : "Shohag",
        dob : "04 FEB 2001"
    }
    
    //traditional way to access the value of the object
    // let fname = person.firstName,
    // lname = person.lastName,
    // Dob = person.dob;
    
    //Destructing way (same as array). The diff is we'll use {} instead of []
    //Another diff is, in array We choose variable name our willingl, but here, Variable name should be matched with Object's variable name
    
    // let { firstName , lastName , dob } = person;
    //let { firstName : fname , lastName , dob } = person; // now fname = firstName
    
    // console.log(fname+'\n'+ lname+'\n'+ Dob);
    //console.log(fname+'\n'+ lastName+'\n'+ dob);
    
    //in function
    
    //traditional way
    function display(person){
        let fname = person.firstName,
            lname = person.lastName,
            Dob = person.dob;
            console.log(fname+'\n'+ lname+'\n'+ Dob);
    }
    display(person);
    
    //Destructing way
    function displayDestructing({firstName, lastName, dob}){
        console.log(firstName, lastName, dob);
    }
    displayDestructing(person);
    ```
    
- ******Spread Operator******
    
    ```jsx
    //spread Operator - convert String to Array of charecter
    let str = "Farhan";
    let newStr = [...str];
    
    //console.log(newStr); //[ 'F', 'a', 'r', 'h', 'a', 'n' ]
    
    let fruit1 = ["Apple", "Pine-Apple", "Mango"];
    let fruit2 = ["Orange", "Grape"];
    let newFruit = "Jackfruit";
    
    let newArr = [fruit1,fruit2, newFruit];
    
    //console.log(newArr); 
    // [
    //   [ 'Apple', 'Pine-Apple', 'Mango' ],
    //   [ 'Orange', 'Grape' ],
    //   'Jackfruit'
    // ]
    
    let newArrSpread = [...fruit1,...fruit2, newFruit];
    
    //console.log(newArrSpread);//[ 'Apple', 'Pine-Apple', 'Mango', 'Orange', 'Grape', 'Jackfruit' ]
    
    //Spread on Object (ES8)
    let person = {
        fname: "Farhan",
        lname: "Shohag",
    }
    console.log(person);//{ fname: 'Farhan', lname: 'Shohag' }
    
    // let newPerson = {...person}
    // console.log(newPerson);//{ fname: 'Farhan', lname: 'Shohag' }
    
    //without Spread, Attribute addition
    let newPersonNoSpread = {person , dob: "04-02-2001"}
    console.log(newPerson);//{ person: { fname: 'Farhan', lname: 'Shohag' }, dob: '04-02-2001' }
    
    //with Spread, Attribute addition
    let newPersonSpread = {...person , dob: "04-02-2001"} //Attribute can be added
    console.log(newPerson);//{ fname: 'Farhan', lname: 'Shohag', dob: '04-02-2001' }
    ```
    
- ************Spread Operator with function parameters************
    
    ```jsx
    // Spread Operator ...
    
    let numbers = [23, 1, 0, -1];
    
    //console.log(Math.max(...numbers)); //also Math.min(...numbers)
    
    let person = ["Farhan", "Shohag"]
    
    let test = (fname, lname) => {
        console.log(`Hello ${fname} ${lname}`);
    }
    
    test(person); //Hello Farhan,Shohag undefined
    test(person[0],person[1]); //Hello Farhan Shohag
    test(...person); //Hello Farhan Shohag
    ```
    
- **************************Rest Operator**************************
    
    ```jsx
    // Rest Operator (...) (same as Spread Operator but works differently)
    
    let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
    
    //let [first] = fruits; //apple
    //let [first, second] = fruits //first= apple, second= grape 
    //let [first, ...second] = fruits // first= apple, second= [ 'grape', 'mango', 'jackfruit' ]
    
    let [first, second, ...third] = fruits //apple grape [ 'mango', 'jackfruit' ]
    
    //that means in a array, rest operator(...) means Rest of the elements of the array will be stored in a variable
    
    // console.log(first , second, third);
    // console.log(second);
    // console.log(third);
    
    let person = {
        fname: "Farhan",
        lname: "Shohag",
        dob: "04-02-2001"
    }
    //let {fname, lname} = person //Farhan Shohag
    let {fname, ...lname} = person //Farhan { lname: 'Shohag', dob: '04-02-2001' }
    
    //console.log(fname , lname);
    
    let moreNum = [78,1,2,5,6];
    
    let test =(name, numbers) => {
        console.log(name ,numbers);
    }
    
    test("Farhan", 67); // name= Farhan, Numbers= 67
    test("Farhan", 67,3,4); // name= Farhan, Numbers= 67 (though multiple numbers passed through the parameters, only 1 number will be stored)
    
    let test =(name, ...numbers) => { // Rest at passing Parameters at function declaration
        console.log(name, numbers);
    }
    
    test("Farhan", 67,3,3); //name= Farhan, Numbers = [67,3,3]
    test("Farhan", ...moreNum); // Spread at function call
    ```
    
- ******************ES6 Class******************
    
    ```jsx
    //Before ES6 Class:
    // ES5 Constructor
    function Person(age,name){
    	this.age = age;
    	this.name = name;
    }
    
    Person.prototype.getName = function() {
    	console.log(this.name);
    }
    
    //ES6 class
    //ES6 class is equivalent to ES5's Constructor
    class Person {
    	constructor(age, name) {
    		this.age = age;
    		this.name = name;
    	}
    	
    	getName(){
    		console.log(this.name);
    	}
    }
    
    let person1 = new Person(23, "Farhan");
    
    console.log(person1);
    ```
    
- ******Symbol******
    
    ```jsx
    // Symbols
    // let a = Symbol()
    
    // let person = {
    //     name: "Simanta",
    //     age: 25,
    //     [a]: "Hello World!"
    // }
    
    // console.log(person);
    // console.log(Object.getOwnPropertyNames(person));
    // console.log(Object.getOwnPropertySymbols(person));
    // console.log(Object.keys(person));
    // console.log(JSON.stringify(person));
    
    // for (x in person) {
    //     console.log(x);
    
    // }
    
    let sym1 = Symbol("Hello");
    let sym2 = Symbol("Hello");
    
    console.log(sym1 == sym2);//Not Same. All symbols are unique
    console.log(sym1);
    ```
    
- **Iterator and Generator**
    
    ```jsx
    // Iterator
    let iterable = "Hello";
    iterable = [1,2,3,4,5,5];
    // Symbol.iterator
    let iter = iterable[Symbol.iterator]();
    
    console.log(iter);
    
    console.log(iter.next());
    console.log(iter.next());
    
    console.log("Other Codes...");
    
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    
    // Custom Iterator
    function customIterator(arr) {
        let i = 0;
    
        return {
            next: function() {
                return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
            }
        };
    }
    
    let members = customIterator(names);
    
    console.log(members.next().value);
    console.log(members.next().value);
    console.log(members.next().value);
    console.log("Random codes...");
    console.log(members.next());
    console.log(members.next());
    
    // Generators
    
    function* genFunction() {
        console.log("I am some code");
        yield 1;
        return;
        console.log("I am some code");
        console.log("I am some code");
        console.log("I am some code");
        yield "Rahim";
        yield 4;
        yield "Karim";
        yield "Hello World";
    }
    
    let iter = genFunction();
    
    console.log(iter.next().value);
    console.log(iter.next().value);
    ```
    
- ****************Promises****************
    
    ```jsx
    // Promises
    // Successful -> resolve
    // Failed -> reject
    let prom = new Promise((resolve, reject) => {
        let a;
        setTimeout(() => {
            a = 1 + 3;
            if (a == 2) {
                resolve('Success');
            } else {
                reject('Failed');
            }
        }, 4000);
    })
    // .then .catch
    prom.then((message) => {
        console.log("I am from then " + message);
    }).catch((message) => {
        console.log("I am from catch " + message);
    })
    
    console.log("I am after Promise");
    
    // Example : Image File 
    
    // Promises
    // An alternative to Callback
    
    let applyDiscount = new Promise((resolve, reject) => {
        let discount = false;
        if (discount) {
            resolve('Discount Applied');
        } else {
            reject('Discount Failed!');
        }
    });
    
    applyDiscount
        .then(result => {
            console.log(result);
        })
        .catch(result => {
            console.log(result);
        })
    
    //console.log(applyDiscount);
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    ```
    
- **********************Async Await**********************
    
    ```jsx
    fetch('http://api.icndb.com/jokes/random/5000')
        .then(response => response.json())
        .then(data => { });
    
    // async await
    
    async function getJokes() {
        let response = await fetch('http://api.icndb.com/jokes/random/5000');
        let data = await response.json();
        return data;
    }
    
    getJokes().then(jokes => console.log(jokes));
    ```
    
- ********Sets********
    
    ```jsx
    // Set
    let mySet = new Set([1, 2, 2, 4, 4]);
    
    // Add
    mySet.add("Hello");
    mySet.add(2);
    // Delete
    mySet.delete(4);
    
    // Check
    //console.log(mySet.has(4));
    // Size
    //console.log(mySet.size);
    
    // Iterating Sets
    
    // for (x of mySet.values()) {
    //     console.log(x);
    // }
    
    // let iter = mySet.entries();
    
    // console.log(iter.next());
    
    // console.log(iter.next());
    
    // console.log(iter.next());
    
    // for (let [x] of mySet.entries()) {
    //     console.log(x);
    // }
    
    let iter = [...mySet.values()];
    
    //console.log(iter);
    
    mySet.forEach(value => console.log(value));
    ```
    
- ********Maps********
    
    ```jsx
    // Maps
    let myMap = new Map(
        [
            ['first key', 10],
            ['second key', 'Bohubrihi']
        ]
    );
    
    // Add
    myMap.set('third key', 'Hello Wolrd!');
    
    //console.log(myMap.get('second key'));
    //console.log(myMap.has('key'));
    //console.log(myMap.size);
    
    // Iterate
    
    // for (let x of myMap) {
    //     console.log(x);
    // }
    
    // for (let [x,y] of myMap) {
    //     console.log(x, y);
    
    // }
    
    // for (let x of myMap.keys()) {
    //     console.log(x);
    // }
    
    // for (let x of myMap.values()) {
    //     console.log(x);
    // }
    
    // for (let x of myMap.entries()) {
    //     console.log(x);
    // }
    
    // myMap.forEach((x, y) => {
    //     console.log(x,y);
    
    // })
    //let arr = Array.from(myMap);
    //let arr = Array.from(myMap.keys());
    let arr = Array.from(myMap.values());
    console.log(arr);
    ```
    

## JS Assignments

- **Project 1: Shopping Cart**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/shoppingCart](https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/shoppingCart)
    
    **Live Demo:** [https://fms-byte.github.io/JS-Assignment/shoppingCart/](https://fms-byte.github.io/JS-Assignment/shoppingCart/) 
    
- **Project 2: Expression Validation**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/expressionValidation](https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/expressionValidation)
    
    **Live Demo:** [https://fms-byte.github.io/JS-Assignment/expressionValidation/](https://fms-byte.github.io/JS-Assignment/expressionValidation/)
    
- **Project 3: Number Guesser**
    
    **Source Code:** [https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/numberGuesser](https://github.com/fms-byte/MERN/tree/main/JavaScript/JsExerciseProject/numberGuesser)
    
    **Live Demo:** [https://fms-byte.github.io/JS-Assignment/numberGuesser/](https://fms-byte.github.io/JS-Assignment/numberGuesser/)
    

## JavaScript Library & Framework

### Library and Framework:

1. Reusable codes written by else
2. Solves Common Problems
3. Reduces complexity of manual programming like DOM Manipulation
4. Keeps code DRY (Don't Repeat Yourself)
5. Example: Ember, React, Mercury, Angular, Knockout, Vue, Aurelia, Polymer

### Library:

1. Collection of functionalities
2. Developer is in Control
3. Developer decides when and where to call a library
4. Example: jQuery

### Framework:

1. Abstraction in which software provides generic functionality
2. Framework is in Control
3. Framework tells developer where to put a code
4. Example: Ember, Angular