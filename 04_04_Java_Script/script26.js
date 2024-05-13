// Function to switch between day and night
function switchDayNight() {
    var body = document.body;
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
    } else {
        body.classList.remove('day');
        body.classList.add('night');
    }
}

// Event listener for button click to switch between day and night
document.getElementById('switchButton').addEventListener('click', switchDayNight);
