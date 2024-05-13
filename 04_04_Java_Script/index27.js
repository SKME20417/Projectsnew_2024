document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const content = document.getElementById("content");
    const btn = document.getElementById('mybtn');

    let nightMode = false;

    btn.addEventListener("click", function () {
        nightMode = !nightMode;
        if (nightMode) {
            body.classList.add("night-mode");
            content.style.color = "#ffffff";
        } else {
            body.classList.remove("night-mode");
            content.style.color = "#000000";
        }
    })
});

