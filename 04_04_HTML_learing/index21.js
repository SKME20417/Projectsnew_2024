var c = document.querySelector('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;

console.log(c);

var c1 = c.getContext('2d');

var x = 200;
var y = 200;
var vy = 10;
var vx = 10;
var radius = 60;

function animate() {
    requestAnimationFrame(animate);
    c1.clearRect(0, 0, innerWidth, innerHeight);
    c1.beginPath();
    c1.arc(x, 200, radius, Math.PI * 2, false);
    c1.strokeStyle = 'yellow';
    c1.stroke();


    if (x + radius > innerWidth || x - radius < 0) {
        vx = -vx;
    }
    x += vx;

}

animate();