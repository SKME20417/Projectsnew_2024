// function fun1() {
//     document.write("Hello Function " + "<br>");
// }

// fun1();

// fun1();

// fun1();

// fun1();


// fun1();

// function sum() {
//     document.write("it will give some addition...");
// }

// sum();


// function sum(a, b) {
//     var z = a + b;
//     document.write("The sum is : " + z + "<br>");
// }

// sum(5, 9);
// sum(8, 10);
// sum(14, 10);


// function show(name, city) {
//     document.write("your name is : " + name + "<br>");
//     document.write("Your city is : " + city + "<br>");
// }

// show('kapil', 'south');
// show('arjun', 'north');
// show('anurag', 'east');


// function shownew(name, city) {
//     return name + " " + city
// }

// var s = shownew('kirti', 'Kanpur');

// document.write(s + "<br>");

// document.write("you name and city are : " + shownew('bhushita', 'hariyana') + "<br>");


// var x = "Kumar";

// function unknown() {
//     var z = "sanjay";
//     document.write(z + "<br>");
//     document.write(x + "<br>");
// }

//document.write(x + "<br>");

//document.write(z + "<br>");

//unknown();

//document.write(z + "<br>");

// function show1() {
//     var name1 = prompt("Enter your name : ");
//     document.write(name + "<br>");
// }

// //show1();

// document.write(name1 + "<br>");



// function sum() {
//     input1 = prompt("Enter your 1st number : ");
//     input2 = prompt("Enter your 2nd number : ");

//     n1 = parseFloat(input1);
//     n2 = parseFloat(input2);

//     var r = n1 + n2;
//     document.write('the result is ' + r + "<br>");
// }

// sum();

function sum(x, y) {
    var z = x + y;
    return z
}

function subs(x, y) {
    var z = x - y;
    return z
}

function mul(x, y) {
    var z = x * y;
    return z
}

function div(x, y) {
    var z = x / y;
    return z
}

var s = sum(9, 4);
document.write("The sum is " + s + "<br>");


var e = subs(9, 4);
document.write("The diffeerence is " + e + "<br>");

let mu = mul(9, 4);
document.write("The multiplication is : " + mu);

let di = div(9, 4);
document.write("<br>");
document.write("The quotient is : " + di);

