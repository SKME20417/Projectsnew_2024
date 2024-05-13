function hello() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = document.getElementById('operators').value;

    if (n3 == "+") {
        document.getElementById("result").value = n1 + n2;
    }

    if (n3 == "-") {
        document.getElementById("result").value = n1 - n2;
    }

    if (n3 == "*") {
        document.getElementById("result").value = n1 * n2;
    }

    if (n3 == "/") {
        document.getElementById("result").value = n1 / n2;
    }

    if (n3 == "**") {
        document.getElementById("result").value = Math.pow(n1, n2);
    }
}