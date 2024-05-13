// let student = {
//     empname: "Navneet",
//     empid: 101,
//     emplname: "arjun",
//     salary: 60000,
//     skills: ["HTML", "CSS", "Python", "JavaScript", "Bootstrap"],
//     dept: "sales",
//     address: {
//         city: "Nagpur",
//         State: "Maharashatra",
//         country: "India",
//         pincode: 440000,
//         street: {
//             streetanme: "noida",
//             snumber: 4500
//         }
//     }
// }

// document.write(student.address.street.streetanme);

// document.write(student.skills[3]);

//document.write(student.address.State.length);

// document.write(student.address.city1?.length);


//delete student.empname;

//document.write(student.empname);

// delete document.address;

// document.write(document.address?);



// for (var s in student) {
//     document.write(s + " : " + student[s] + "<br>");
// }

// for (var s in student) {
//     document.write(s + " : " + student[s] + "<br>");
// }



// let x = 10;


// var y = function test(p, q) {
//     var r = p + q;
//     return r;
// }

// let u = y;
// var l = u(6, 19);
// document.write("The sum is : " + l);


// let b = function () {
//     document.write("Hello world i am a python developer!..." + "<br>");
//     return 100;
// }

// // b();

// document.write(b());


// let c = () => {
//     document.write("I am a machine learning engineer..." + "<br>");
//     return 600;
// }

// //c();
// document.write(c());


// let t = function (user) {
//     document.write("Hello Good evening " + user + "<br>");
//     return 6500;
// }

// // t("sanjay");

// document.write(t('arjun'));

// var g = (name) => {
//     document.write("my name is : " + name + "<br>");
//     return 7800;
// }

// //g("puneet");

// document.write(g('kamal'));


// var p = (m, n) => m + n;

// let b = p(8, 3);
// document.write("The sum is : " + b + "<br>");

// var u = (a, b) => a * b;

// let d = u(4, 6);
// document.write("The product is : " + d + "<br>");


// var student = {
//     sname: "Rakesh",
//     age: 18,
//     gender: "male",
//     skills: ['html', 'css', 'js', 'python'],
//     study: function () {
//         document.write("I am studying full stack engineering...");
//     },
//     work: function (p) {
//         document.write("I am working at : " + p + "<br>");
//     },
//     hobby: "codings"
// }

//document.write(student.age + "<br>");
//document.write(student['gender'] + "<br>");

// for (var i in student) {
//     document.write(i + " : " + student[i] + "<br>");
// }


// var o = student.hobby;
// document.write(o + "<br>");

// document.write("<br>");
// document.write("<br>");

// student.work('Utter Pradesh');
// student.study();


var employee = {
    ename: 'rajesh',
    age: 30,
    gender: 'male',
    hobby: function () {
        var x = 15;
        document.write(x + "<br>");
        document.write("My name is : " + this.ename + "<br>");
        document.write("My age is : " + this.age + "<br>");
        document.write("My gender is : " + this.gender + "<br>");
    }
}

employee.hobby();



