const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
        button.textContent = "I Love You ❤️";
    } else {
        message.style.display = "none";
        button.textContent = "Open Your Surprise ✨";
    }
});
