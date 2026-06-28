const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");

button.addEventListener("click", () => {
    message.style.display = "block";

    if (music) {
        music.play().catch(() => {
            console.log("Music couldn't start.");
        });
    }

    button.innerHTML = "💖 I Love You Soma 💖";
});
