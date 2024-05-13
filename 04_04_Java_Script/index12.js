// var x = [10, 'kumar', null, 45.36, true];

//document.write('my array is : ' + x);

// document.write("<ol>");

// for (var i = 0; i < x.length; i++) {
//     document.write("<li>" + x[i] + "</li>");
// }

// document.write("</ol>");

// var s = new Array(5);

// s[0] = 50;
// s[1] = false;
// s[2] = 'python';


// document.write("<ul>");

// for (var i = 0; i <= s.length; i++) {
//     document.write("<li>" + s[i] + "</li>");
// }

// document.write("</ul>");

// var w = new Array(4);

// for (var i = 0; i < 5; i++) {
//     w[i] = prompt("Enter your value : ");
// }

// for (let a = 0; a < w.length; a++) {
//     document.write(w[a] + "<br>");
// }

var empdata = [['navneet', 23, 'sales', 48000],
['arjun', 22, 'tech', 50000],
['rajesh', 25, 'HR', 55000],
['pooja', 30, 'Analytics', 20000],
['kiriti', 45, 'marketing', 60000]]

//document.write("<br>" + empdata + "<br>");

//document.write(empdata[2][2]);


// for (var i = 0; i < empdata.length; i++) {
//     for (var j = 0; j < empdata[i].length; j++) {
//         document.write(" " + empdata[i][j] + "<br>");

//     }
//     document.write("<br>");
// }


// document.write("<table border = '5' cellspacing = '0'>")

// for (var i = 0; i < empdata.length; i++) {
//     document.write("<tr>");
//     for (var j = 0; j < empdata[i].length; j++) {
//         document.write("<td>" + empdata[i][j] + "</td>");
//     }
//     document.write("</tr>");
// }

// document.write("</table>")


var emp = ['sanjay', 31, 'male', 90000, 'tech'];

document.write(emp);
document.write("<br>");

emp[0] = "krishna";

document.write(emp + "<br>");

delete emp[1]

document.write(emp);

document.write("<br>");

document.write(emp[1]);

document.write("<br>");

var studentdata = ['rocky', 'sanjay', 'pooja', 'zoom', 'abhi', 'banka', 'cotta', 'enmpa'];

document.write(studentdata + "<br>");

studentdata.sort();

document.write(studentdata + "<br>");

document.write(studentdata + "<br>");

studentdata.reverse();

document.write(studentdata + "<br>");

studentdata.pop();

document.write(studentdata + "<br>");

studentdata.pop();

document.write(studentdata + "<br>");

studentdata.push('yamini');

document.write(studentdata + "<br>");

studentdata.shift();

document.write(studentdata + "<br>");

studentdata.shift();

document.write(studentdata + "<br>");

studentdata.unshift('muskann');

document.write(studentdata + "<br>");



