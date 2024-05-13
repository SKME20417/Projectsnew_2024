var c = document.querySelector('canvas');
console.log(c);

c.width = window.innerWidth;
c.height = window.innerHeight;

var c1 = c.getContext('2d');
c1.fillStyle = "yellow";
c1.fillRect(100, 100, 150, 100);
c1.fillStyle = "red";
c1.fillRect(200, 10, 100, 100);
c1.fillStyle = "green";
c1.fillRect(300, 300, 100, 100);
c1.fillStyle = "blue";
c1.fillRect(400, 150, 100, 100);


c1.beginPath();

c1.moveTo(50, 300);
c1.lineTo(300, 100);
c1.lineTo(400, 300);
c1.lineTo(500, 600);
c1.strokeStyle = "red";
c1.stroke();

c1.beginPath();

c1.arc(300, 300, 30, Math.PI * 2, false);
c1.strokeStyle = "yellow";
c1.stroke();

c1.beginPath();
c1.arc(500, 500, 60, Math.PI * 2, false);
c1.strokeStyle = "yellow";
c1.stroke();