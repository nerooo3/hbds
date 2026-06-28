const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    message.style.display = "block";

    if (music) {
        music.play();
    }

    button.innerHTML = "💖 I Love You Soma 💖";
});

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -30;

    const animation = setInterval(() => {

        y += 3;

        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(animation);
            heart.remove();
        }

    }, 20);
}

setInterval(createHeart, 400);
