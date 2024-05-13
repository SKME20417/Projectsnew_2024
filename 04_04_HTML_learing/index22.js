var c = document.querySelector('canvas');

c.width = window.innerWidth;
c.height = window.innerHeight;

var c1 = c.getContext('2d');

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var vx = (Math.random() - 0.80) * 50;
var vy = (Math.random() - 0.5) * 50;
var radius = 30;


function hello() {
    requestAnimationFrame(hello);
    c1.clearRect(0, 0, innerWidth, innerHeight);
    c1.beginPath();
    c1.arc(x, y, radius, 0, Math.PI * 2, false);
    c1.strokeStyle = "yellow";
    c1.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        vx = -vx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        vy = -vy;
    }
    x += vx;
    y += vy;
}

hello();